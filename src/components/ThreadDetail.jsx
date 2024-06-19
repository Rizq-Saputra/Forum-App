import PropTypes from 'prop-types';
import { postedAt } from '../utils';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import VoteButton from '../components/VoteButton';

export default function ThreadDetail({
    id,
    title,
    body,
    owner,
    category,
    createdAt,
    upVotesBy,
    downVotesBy,
    upVotedetailThread,
    downVotedetailThread,
    neutralizeVotedetailThread,
    authUser,
}) {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <section className='flex flex-col justify-center w-full'>
            <div className='mb-4'>
                <button
                    onClick={handleGoBack}
                    className='bg-white hover:bg-[#FFF6DF] hover:duration-500 hover:ease-in-out  gap-2 font-bold py-2 px-4 rounded inline-flex items-center'
                >
                <FaArrowLeft />Back
                </button>
            </div>
            <div className='shadow-custom-2 flex gap-2 lg:gap-5 lg:p-4 p-2 rounded-md'>
                <img
                    className='hidden sm:block w-9 h-9 lg:w-12 lg:h-12 rounded-full object-cover'
                    src={owner.avatar}
                    alt={owner.name}
                />
                <div className='content'>
                    <p className='font-semibold text-sm sm:text-base'>
                        {owner.name}
                    </p>
                    <small className='text-slate-500'>
                        {postedAt(createdAt)}
                    </small>
                    <h1>{title}</h1>
                    <article className='mt-4'>
                        <p className='text-slate-500 text-sm sm:text-base'>
                            {category}
                        </p>
                        <div dangerouslySetInnerHTML={{ __html: body }} />
                    </article>
                    <div className='mt-4 flex gap-4'>
                        <VoteButton
                            id={id}
                            authUser={authUser}
                            upVote={upVotedetailThread}
                            downVote={downVotedetailThread}
                            neutralizeVote={neutralizeVotedetailThread}
                            upVotesBy={upVotesBy}
                            downVotesBy={downVotesBy}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

ThreadDetail.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    owner: PropTypes.object.isRequired,
    category: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    upVotesBy: PropTypes.array.isRequired,
    downVotesBy: PropTypes.array.isRequired,
    upVotedetailThread: PropTypes.func.isRequired,
    downVotedetailThread: PropTypes.func.isRequired,
    neutralizeVotedetailThread: PropTypes.func.isRequired,
    authUser: PropTypes.string.isRequired,
};
