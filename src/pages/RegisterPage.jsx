import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';
import RegisterInput from '../components/inputs/RegisterInput';

function RegisterPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onRegister = ({name, email, password}) => {
        dispatch(asyncRegisterUser({ name, email, password }));
        navigate('/');
    };

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='max-w-md px-4 py-8 bg-white'>
                <h1 className='text-2xl font-semibold mb-4 text-center'>
                    Create an account
                </h1>
                <p className='text-gray-600 mb-4 text-center'>
                    Enter your email to sign up for this app
                </p>
                <RegisterInput register={onRegister} />
                <p className='mt-5 text-center text-slate-500'>
                    Already have account ?{' '}
                    <span className='text-black font-semibold underline'>
                        <Link to='/'> Login</Link>
                    </span>
                </p>
            </div>
        </div>
    );
}

export default RegisterPage;
