import { SlLike, SlDislike } from 'react-icons/sl';
import PropTypes from 'prop-types';

function VoteButton({
    id,
    authUser,
    upVote,
    downVote,
    neutralizeVote,
    upVotesBy,
    downVotesBy,
}) {
    const isUpvoted = upVotesBy.includes(authUser);
    const isDownVoted = downVotesBy.includes(authUser);
    
    
    function onDownVoteClick() {
        downVote(id);
    }
    
    function onUpVoteClick() {
        upVote(id);
    }

    function onNeutralizeVoteClick() {
        neutralizeVote(id);
    }

    return (
        <>
            {isUpvoted ? (
                <button
                    onClick={onNeutralizeVoteClick}
                    className='flex items-center gap-2 text-sm sm:text-base'
                >
                    <SlLike className='text-green-500' /> {upVotesBy.length}
                </button>
            ) : (
                <button
                    onClick={onUpVoteClick}
                    className='flex items-center gap-2 text-sm sm:text-base'
                >
                    <SlLike /> {upVotesBy.length}
                </button>
            )}
            {isDownVoted ? (
                <button
                    onClick={onNeutralizeVoteClick}
                    className='flex items-center gap-2 text-sm sm:text-base'
                >
                    <SlDislike className='text-red-500' /> {downVotesBy.length}
                </button>
            ) : (
                <button
                    onClick={onDownVoteClick}
                    className='flex items-center gap-2 text-sm sm:text-base'
                >
                    <SlDislike /> {downVotesBy.length}
                </button>
            )}
        </>
    );
}

VoteButton.propTypes = {
    id: PropTypes.string.isRequired,
    upVote: PropTypes.func.isRequired,
    downVote: PropTypes.func.isRequired,
    neutralizeVote: PropTypes.func.isRequired,
    upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    authUser: PropTypes.string.isRequired,
};

export default VoteButton;
