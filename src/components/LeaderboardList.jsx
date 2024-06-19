import PropTypes from 'prop-types';

function LeaderboardList({ user, score, index }) {
    return (
        <div className='py-3 px-5 border-2 items-center border-black gap-4 flex justify-between content-center rounded-md hover:bg-[#FFF6DF] transition-all ease-in-out duration-500 cursor-pointer'>
            <h1 className='font-bold my-auto text-xl lg:text-3xl w-8 text-center'>{index}</h1>
            <img
                className='w-8 h-8 lg:w-12 lg:h-12 rounded-full object-cover'
                src={user.avatar}
                alt={user.name}
            />
            <div className='text-left w-11/12 my-auto'>
                <h2 className='font-bold text-lg lg:text-xl'>{user.name}</h2>
            </div>
            <div className='flex-col'>
                <p className='font-bold text-sm lg:text-base'>Skor</p>
                <p className='font-bold text-sm lg:text-base'>{score}</p>
            </div>
        </div>
    );
}

LeaderboardList.propTypes = {
    user: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    score: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
};

export default LeaderboardList;
