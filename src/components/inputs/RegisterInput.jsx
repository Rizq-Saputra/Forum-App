import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="flex mt-2 flex-col">
      <input className='p-2 mb-2 border border-gray-300 rounded-md' type="text" value={name} onChange={onNameChange} placeholder="Username" />
      <input className='p-2 mb-2 border border-gray-300 rounded-md' type="email" value={email} onChange={onEmailChange} placeholder="Email" />
      <input className='p-2 mb-2 border border-gray-300 rounded-md' type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
      <button className='bg-black p-2 text-white rounded-md hover:opacity-80' type='button' onClick={() => register({ name, email, password })}>Sign Up</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
