import { AiOutlineComment } from 'react-icons/ai';
import ThreadCommentItem from './ThreadCommentItem';
import PropTypes from 'prop-types';

export default function ThreadCommentList({
    comments,
    authUser,
    upVoteComment,
    downVoteComment,
    neutralizeVoteComment,
}) {
    if (comments.length === 0) {
        return (
            <div className='mt-5 flex flex-col items-center'>
                <AiOutlineComment className=' text-black text-9xl' />
                <p className='text-black text-lg'>Belum ada komentar</p>
            </div>
        );
    }
    return (
        <section className=''>
            <h1 className='font-bold mt-4 mb-2'>Comment ({comments.length})</h1>
            {comments.map((comment) => (
                <ThreadCommentItem
                    key={comment.id}
                    {...comment}
                    authUser={authUser}
                    upVote={upVoteComment}
                    downVote={downVoteComment}
                    neutralizeVote={neutralizeVoteComment}
                />
            ))}
        </section>
    );
}

ThreadCommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    authUser: PropTypes.string.isRequired,
    upVoteComment: PropTypes.func.isRequired,
    downVoteComment: PropTypes.func.isRequired,
    neutralizeVoteComment: PropTypes.func.isRequired,
};