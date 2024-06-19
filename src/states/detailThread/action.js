import api from '../../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

const ActionType = {
    RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
    ADD_COMMENT: 'ADD_COMMENT',
    UP_VOTE_THREAD_DETAIL: 'UP_VOTE_THREAD_DETAIL',
    DOWN_VOTE_THREAD_DETAIL: 'DOWN_VOTE_THREAD_DETAIL',
    NEUTRALIZE_VOTE_THREAD_DETAIL: 'NEUTRALIZE_VOTE_THREAD_DETAIL',
    UP_VOTE_COMMENT: 'UP_VOTE_COMMENT',
    DOWN_VOTE_COMMENT: 'DOWN_VOTE_COMMENT',
    NEUTRALIZE_VOTE_COMMENT: 'NEUTRALIZE_VOTE_COMMENT',
};

function receivedetailThreadActionCreator(detailThread) {
    return {
        type: ActionType.RECEIVE_THREAD_DETAIL,
        payload: {
            detailThread,
        },
    };
}

function addCommentActionCreator(comment) {
    return {
        type: ActionType.ADD_COMMENT,
        payload: {
            comment,
        },
    };
}

function upVotedetailThreadActionCreator(userId) {
    return {
        type: ActionType.UP_VOTE_THREAD_DETAIL,
        payload: {
            userId,
        },
    };
}

function downVotedetailThreadActionCreator(userId) {
    return {
        type: ActionType.DOWN_VOTE_THREAD_DETAIL,
        payload: {
            userId,
        },
    };
}

function neutralizeVotedetailThreadActionCreator(userId) {
    return {
        type: ActionType.NEUTRALIZE_VOTE_THREAD_DETAIL,
        payload: {
            userId,
        },
    };
}

function upVoteCommentActionCreator(commentId, userId) {
    return {
        type: ActionType.UP_VOTE_COMMENT,
        payload: {
            commentId,
            userId,
        },
    };
}

function downVoteCommentActionCreator(commentId, userId) {
    return {
        type: ActionType.DOWN_VOTE_COMMENT,
        payload: {
            commentId,
            userId,
        },
    };
}

function neutralizeVoteCommentActionCreator(commentId, userId) {
    return {
        type: ActionType.NEUTRALIZE_VOTE_COMMENT,
        payload: {
            commentId,
            userId,
        },
    };
}

function asyncReceivedetailThread(threadId) {
    return async (dispatch) => {
        dispatch(showLoading());

        try {
            const detailThread = await api.getdetailThread(threadId);
            dispatch(receivedetailThreadActionCreator(detailThread));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
}

function asyncAddComment({ content }) {
    return async (dispatch, getState) => {
        dispatch(showLoading());
        const { detailThread } = getState();

        try {
            const comment = await api.addComment({
                id: detailThread.id,
                content,
            });
            dispatch(addCommentActionCreator(comment));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
}

function asyncUpVotedetailThread() {
    return async (dispatch, getState) => {
        const { detailThread, authUser } = getState();
        dispatch(upVotedetailThreadActionCreator(authUser.id));

        try {
            await api.upVote(detailThread.id);
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncDownVotedetailThread() {
    return async (dispatch, getState) => {
        const { detailThread, authUser } = getState();
        dispatch(downVotedetailThreadActionCreator(authUser.id));

        try {
            await api.downVote(detailThread.id);
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncNeutralizeVotedetailThread() {
    return async (dispatch, getState) => {
        const { detailThread, authUser } = getState();
        dispatch(neutralizeVotedetailThreadActionCreator(authUser.id));

        try {
            await api.neutralizeVote(detailThread.id);
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncUpVoteComment(commentId) {
    return async (dispatch, getState) => {
        const { authUser, detailThread } = getState();
        dispatch(upVoteCommentActionCreator(commentId, authUser.id));

        try {
            await api.upVoteComment(detailThread.id, commentId);
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncDownVoteComment(commentId) {
    return async (dispatch, getState) => {
        const { authUser, detailThread } = getState();
        dispatch(downVoteCommentActionCreator(commentId, authUser.id));

        try {
            await api.downVoteComment(detailThread.id, commentId);
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncNeutralizeVoteComment(commentId) {
    return async (dispatch, getState) => {
        const { authUser, detailThread } = getState();
        dispatch(neutralizeVoteCommentActionCreator(commentId, authUser.id));

        try {
            await api.neutralVoteComment(detailThread.id, commentId);
        } catch (error) {
            alert(error.message);
        }
    };
}

export {
    ActionType,
    asyncReceivedetailThread,
    asyncUpVotedetailThread,
    asyncDownVotedetailThread,
    asyncNeutralizeVotedetailThread,
    asyncAddComment,
    asyncUpVoteComment,
    asyncDownVoteComment,
    asyncNeutralizeVoteComment,
};
