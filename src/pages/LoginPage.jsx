import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';
import LoginInput from '../components/inputs/LoginInput';

function LoginPage() {
    const dispatch = useDispatch();

    const onLogin = ({email, password}) => {
        dispatch(asyncSetAuthUser({ email, password }));
    };

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='max-w-md px-4 py-8 bg-white'>
                <h1 className='text-2xl font-semibold mb-4 text-center'>
                    Login
                </h1>
                <p className='text-gray-600 mb-4 text-center'>
                    Enter your email to sign up for this app
                </p>
                <LoginInput login={onLogin} />
                <p className='mt-5 text-center text-slate-500'>
                    Dont have account ?{' '}
                    <span className='text-black font-semibold underline'>
                    <Link to='/register'>Create an account</Link>
                    </span>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
