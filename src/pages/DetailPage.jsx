import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ThreadDetail from '../components/ThreadDetail';
import {
    asyncReceivedetailThread,
    asyncUpVotedetailThread,
    asyncDownVotedetailThread,
    asyncNeutralizeVotedetailThread,
    asyncAddComment,
    asyncUpVoteComment,
    asyncDownVoteComment,
    asyncNeutralizeVoteComment,
} from '../states/detailThread/action';
import CommentInput from '../components/inputs/CommentInput';
import ThreadCommentList from '../components/ThreadCommentList';

export default function DetailPage() {
    const detailThread = useSelector((state) => state.detailThread);
    const authUser = useSelector((state) => state.authUser);
    const { threadId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncReceivedetailThread(threadId));
    }, [threadId, dispatch]);

    const onUpVotedetailThread = () => {
        dispatch(asyncUpVotedetailThread());
    };

    const onDownVotedetailThread = () => {
        dispatch(asyncDownVotedetailThread());
    };

    const onNeutralizeVotedetailThread = () => {
        dispatch(asyncNeutralizeVotedetailThread());
    };

    const onCommentSubmit = (content) => {
        dispatch(asyncAddComment({ content }));
    };

    const onUpVoteComment = (id) => {
        dispatch(asyncUpVoteComment(id));
    };

    const onDownVoteCommment = (id) => {
        dispatch(asyncDownVoteComment(id));
    };

    const onNeutralizeVoteComment = (id) => {
        dispatch(asyncNeutralizeVoteComment(id));
    };

    if (!detailThread) {
        return null;
    }

    return (
        <div className='container font-inter'>
            <div className='lg:ps-64 pt-20 pb-36 ms-[70px] max-w-7xl flex flex-col pe-10'>
                <ThreadDetail
                    {...detailThread}
                    authUser={authUser.id}
                    upVotedetailThread={onUpVotedetailThread}
                    downVotedetailThread={onDownVotedetailThread}
                    neutralizeVotedetailThread={onNeutralizeVotedetailThread}
                />
                <ThreadCommentList
                    comments={detailThread.comments}
                    authUser={authUser.id}
                    upVoteComment={onUpVoteComment}
                    downVoteComment={onDownVoteCommment}
                    neutralizeVoteComment={onNeutralizeVoteComment}
                />
            </div>
            <CommentInput addComment={onCommentSubmit} />
        </div>
    );
}
