import { Link } from 'react-router-dom';

function ForumContent() {
    return (
        <div className='lg:ps-0 ps-8'>
            <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[64px]'>
                Forum Apps
            </h1>
            <p className='text-slate-400 text-lg sm:text-xl md:text-2xl'>
                Click The Button to start Discussion
            </p>
            <div>
                <button className='bg-black text-white py-2 px-4 mt-4 rounded-md hover:opacity-80'>
                    <Link to='/threads'>Start Discussion</Link>
                </button>
            </div>
        </div>
    );
}

export default ForumContent;
