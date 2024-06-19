import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import asyncPopulateUsersAndThreads from '../states/shared/action';
import {
    asyncAddThread,
    asyncUpVoteThread,
    asyncDownVoteThread,
    asyncNeutralizeVoteThread,
} from '../states/threads/action';
import ThreadList from '../components/ThreadList';
import ThreadInput from '../components/inputs/ThreadInput';
import Tags from '../components/Tags';

function ThreadsPage() {
    const [filter, setFilter] = useState('');
    const threads = useSelector((state) => state.threads);
    const users = useSelector((state) => state.users);
    const authUser = useSelector((state) => state.authUser);

    const dispatch = useDispatch();

    const categories = new Set(threads.map((thread) => thread.category));

    useEffect(() => {
        dispatch(asyncPopulateUsersAndThreads());
    }, [dispatch]);

    const onAddThread = ({ title, body, category }) => {
        dispatch(asyncAddThread({ title, body, category }));
    };

    const onUpVote = (id) => {
        dispatch(asyncUpVoteThread(id));
    };

    const onDownVote = (id) => {
        dispatch(asyncDownVoteThread(id));
    };

    const onNeutralizeVote = (id) => {
        dispatch(asyncNeutralizeVoteThread(id));
    };

    const threadsList = threads.map((thread) => ({
        ...thread,
        user: users.find((user) => user.id === thread.ownerId),
        authUser: authUser.id,
    }));

    return (
        <div className='lg:container font-inter'>
            <div className='flex gap-2 flex-col lg:flex-row lg:ps-64 pt-20 p-10 lg:p-20 mb-48 ms-7 lg:ms-[70px]'>
                <div className='order-2 lg:order-1 flex-grow'>
                    <ThreadList
                        threads={
                            filter
                                ? threadsList.filter(
                                    (thread) => thread.category === filter
                                )
                                : threadsList
                        }
                        upVote={onUpVote}
                        downVote={onDownVote}
                        neutralizeVote={onNeutralizeVote}
                    />
                </div>
                <div className='order-1 lg:order-2 mb-4 lg:mb-0'>
                    <Tags
                        categories={categories}
                        filter={filter}
                        setFilter={setFilter}
                    />
                </div>
            </div>
            <ThreadInput addThread={onAddThread} />
        </div>
    );
}

export default ThreadsPage;
