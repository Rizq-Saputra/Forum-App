import PropTypes from 'prop-types';
import { postedAt } from '../utils';
import VoteButton from './VoteButton';

function ThreadCommentItem({
    id,
    owner,
    createdAt,
    content,
    authUser,
    upVote,
    upVotesBy,
    downVote,
    downVotesBy,
    neutralizeVote,
}) {
    
    return (
        <section className='lg:p-4 p-2 flex gap-2 lg:gap-5'>
        <img
                className='lg:size-12 size-8 rounded-full object-cover'
                src={owner.avatar}
                alt={`${owner.name}'s avatar`}
        />
        <div>
            <div>
                <p className='font-semibold text-sm sm:text-base'>
                    {owner.name}
                </p>
                <small className='text-slate-500'>
                    {postedAt(createdAt)}
                </small>
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }} >
            </div>
            <div className='mt-4 flex gap-4'>
            <VoteButton
                id={id}
                authUser={authUser}
                upVote={upVote}
                downVote={downVote}
                neutralizeVote={neutralizeVote}
                upVotesBy={upVotesBy}
                downVotesBy={downVotesBy}
            />
            </div>
        </div>
    </section>
    );
}

ThreadCommentItem.propTypes = {
    id: PropTypes.string.isRequired,
    owner: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
    }).isRequired,
    createdAt: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    authUser: PropTypes.string.isRequired,
    upVote: PropTypes.func.isRequired,
    upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    downVote: PropTypes.func.isRequired,
    downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    neutralizeVote: PropTypes.func.isRequired,
};

export default ThreadCommentItem;