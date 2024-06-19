import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncUnsetAuthUser } from './states/authUser/action';
import { asyncPreloadProcess } from './states/isPreload/action';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ThreadsPage from './pages/ThreadsPage';
import LeaderboardPage from './pages/LeaderboardPage';
import DetailPage from './pages/DetailPage';
import Sidebar from './components/Sidebar';
import Loading from './components/Loading';

function App() {
    const authUser = useSelector((state) => state.authUser);
    const isPreload = useSelector((state) => state.isPreload);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncPreloadProcess());
    }, [dispatch]);

    const onsignOut = () => {
        dispatch(asyncUnsetAuthUser());
    };

    if (isPreload) {
        return <Loading />;
    }

    if (authUser === null) {
        return (
            <>
                <main>
                    <Routes>
                        <Route path='/*' element={<LoginPage />} />
                        <Route path='/register' element={<RegisterPage />} />
                    </Routes>
                </main>
            </>
        );
    }

    return (
        <div className='app-container'>
            <Loading />
            <header>
                <Sidebar authUser={authUser} signOut={onsignOut} />
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/threads' element={<ThreadsPage />} />
                    <Route path='/leaderboard' element={<LeaderboardPage />} />
                    <Route path='/threads/:threadId' element={<DetailPage />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
