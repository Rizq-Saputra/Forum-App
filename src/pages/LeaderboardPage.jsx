import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import LeaderboardList from '../components/LeaderboardList';
import { asyncPopulateLeaderboards } from '../states/leaderboard/action';

function LeaderboardPage() {
    const dispatch = useDispatch();
    const leaderboards = useSelector((state) => state.leaderboards);

    useEffect(() => {
        dispatch(asyncPopulateLeaderboards());
    }, [dispatch]);

    return (
        <div className='container font-inter'>
            <div className='px-4 pt-10 ms-14 lg:ps-64 lg:ms-56 lg:pt-20 lg:px-60 flex text-center flex-col justify-center align-middle'>
                <h1 className='font-bold mt-6 mb-4 text-2xl lg:text-3xl'>
                    Leaderboard
                </h1>
                <div className='top_leaderboard flex flex-col gap-y-4 mb-5'>
                    {leaderboards.map(({ user, score }, index) => (
                        <LeaderboardList
                            key={user.id}
                            user={user}
                            score={score}
                            index={index + 1}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LeaderboardPage;
