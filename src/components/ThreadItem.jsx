import { FiMessageSquare } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../utils';
import PropTypes from 'prop-types';
import VoteButton from './VoteButton';

function ThreadItem({
    id,
    title,
    body,
    category,
    createdAt,
    user,
    authUser,
    upVote,
    downVote,
    neutralizeVote,
    upVotesBy,
    downVotesBy,
    totalComments,
}) {
    const navigate = useNavigate();

    const onThreadClick = () => {
        navigate(`/threads/${id}`);
    };

    function onThreadPress(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            navigate(`/threads/${id}`);
        }
    }

    return (
        <div
            tabIndex={0}
            className='p-4 hover:bg-[#FFF6DF] rounded-md shadow-custom-2 lg:min-w-11 transition-all ease-in-out duration-500'
        >
            <div className='flex gap-5'>
                <img
                    className='size-12 rounded-full object-cover hidden sm:block'
                    src={user.avatar}
                    alt={user.name}
                />
                <div className='text-left'>
                    <p className='font-semibold text-sm sm:text-base'>
                        {user.name}
                    </p>
                    <small className='text-slate-500 text-xs sm:text-sm'>
                        {postedAt(createdAt)}
                    </small>
                    <h1
                        role='button'
                        onClick={onThreadClick}
                        onKeyDown={onThreadPress}
                        className='font-bold text-lg sm:text-xl'
                    >
                        {title}
                    </h1>
                    <article className='mt-4'>
                        <p className='text-slate-500 text-sm sm:text-base'>
                            <span className='p-1 rounded-md border-2'># {category}</span>
                        </p>
                        <div dangerouslySetInnerHTML={{ __html: body }} />
                    </article>
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
                        <button
                        onClick={onThreadClick}
                        onKeyDown={onThreadPress} 
                        className='flex items-center gap-2 text-sm sm:text-base'>
                            <FiMessageSquare /> {totalComments}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const ThreadItemShape = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

ThreadItem.propTypes = {
    ...ThreadItemShape,
    upVote: PropTypes.func.isRequired,
    downVote: PropTypes.func.isRequired,
    neutralizeVote: PropTypes.func.isRequired,
    upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    totalComments: PropTypes.number.isRequired,
};

export { ThreadItemShape };

export default ThreadItem;
