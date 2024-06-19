import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    login({ email, password });
  }

  return (
    <form className="flex mt-2 flex-col" onSubmit={onSubmitHandler}>
      <input className='p-2 mb-2 border border-gray-300 rounded-md' type="email" value={email} onChange={onEmailChange} placeholder="email" />
      <input className='p-2 mb-2 border border-gray-300 rounded-md' type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
      <button className='bg-black p-2 text-white rounded-md hover:opacity-80' type='submit'>Sign in</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
