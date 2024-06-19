import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiMessageSquare, FiLogOut } from 'react-icons/fi';
import { MdOutlineLeaderboard } from "react-icons/md";

function Sidebar({ authUser, signOut }) {
  const location = useLocation();
  const { id, name, avatar } = authUser;

  return (
    <div className='fixed h-screen w-16 md:w-64 flex flex-col items-center'>
      <nav className="Sidebar h-screen">
        <div className='mb-[30px]'>
          <div className='size-8 md:w-32 md:h-32 mt-10 mb-2 mx-auto items-center flex'>
            <img className='mx-auto' src={avatar} alt={id} title={name} />
          </div>
          <h1 className='text-2xl font-bold text-center text-black hidden md:block'>{name}</h1>
        </div>
        <ul className="p-4">
          <li className="mb-2 flex items-center justify-center md:justify-start">
            <Link
              to="/"
              className={`flex flex-col md:flex-row items-center py-2 px-4 ${location.pathname === '/' ? 'bg-black text-white' : 'hover:bg-black hover:text-white'} w-full rounded-md`}
            >
              <FiHome className="my-auto" />
              <span className="hidden md:inline ml-2">Forum</span>
            </Link>
          </li>
          <li className="mb-2 flex items-center justify-center md:justify-start">
            <Link
              to="/threads"
              className={`flex flex-col md:flex-row items-center py-2 px-4 ${location.pathname === '/threads' || location.pathname.startsWith('/threads/thread-') ? 'bg-black text-white' : 'hover:bg-black hover:text-white'} w-full rounded-md`}
            >
              <FiMessageSquare className="my-auto" />
              <span className="hidden md:inline ml-2">Threads</span>
            </Link>
          </li>
          <li className="mb-2 flex items-center justify-center md:justify-start">
            <Link
              to="/leaderboard"
              className={`flex flex-col md:flex-row items-center py-2 px-4 ${location.pathname === '/leaderboard' ? 'bg-black text-white' : 'hover:bg-black hover:text-white'} w-full rounded-md`}
            >
              <MdOutlineLeaderboard className="my-auto" />
              <span className="hidden md:inline ml-2">Leaderboard</span>
            </Link>
          </li>
          <li className="mb-2 flex items-center justify-center md:justify-start">
            <button
              onClick={signOut}
              className={`flex flex-col md:flex-row items-center py-2 px-4 hover:bg-black hover:text-white w-full rounded-md`}
            >
              <FiLogOut className="my-auto" />
              <span className="hidden md:inline ml-2">Logout</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const authUserShape = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Sidebar.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Sidebar;
