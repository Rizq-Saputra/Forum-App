import { IoSend } from "react-icons/io5";
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

export default function CommentInput({ addComment }) {
  const [comment, onCommentChange, setComment] = useInput('');

  const onCommentSubmit = (event) => {
    event.preventDefault();
    addComment(comment);
    setComment('');
  };

  return (
    <div className='fixed bottom-0 pb-5 left-0 text-center w-full bg-white p-2'>
      <div className="flex items-center justify-center lg:space-x-4 space-x-2 lg:ps-36 lg:px-20 pt-4">
          <textarea 
              type='text' 
              placeholder='Write Your Reply Here...' 
              value={comment}
              onChange={onCommentChange}
              className="w-3/5 h-[85px] p-2 rounded-md resize-none border-2 border-gray-300 focus:outline-none shadow-md focus:border-black transition-colors duration-300"
          />
          <button 
              type='submit' 
              onClick={onCommentSubmit}
              className="flex items-center gap-2 px-[15px] py-[11px] bg-black text-white rounded-md hover:opacity-80 transition-colors duration-300"
          >
            <IoSend /><span className="hidden sm:inline">Send</span>
          </button>
      </div>
    </div>
  )
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};
