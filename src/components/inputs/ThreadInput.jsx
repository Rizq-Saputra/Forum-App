import { IoSend } from 'react-icons/io5';
import { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

export default function TalkInput({ addThread }) {
    const [title, onTitleChange, setTitle] = useInput('');
    const [category, onCategoryChange, setCategory] = useInput('');
    const [body, setBody] = useState('');

    function onInputBody(e) {
        setBody(e.target.value);
    }
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        addThread({ title, body, category });
        setTitle('');
        setCategory('');
        setBody('');
    }

    return (
        <div className='fixed bottom-0 pb-5 left-0 text-center w-full bg-white p-2'>
            <form onSubmit={onSubmitHandler} className='flex items-center justify-center space-x-4 lg:pe-24'>
                <div className='flex flex-col gap-2 lg:w-2/5'>
                    <input
                        type='text'
                        placeholder='Title'
                        value={title}
                        onChange={onTitleChange}
                        className='p-2 rounded-md border-2 border-gray-300 focus:outline-none shadow-md focus:border-black transition-colors duration-300'
                    />
                    <input
                        type='text'
                        placeholder='Category (Optional)'
                        value={category}
                        onChange={onCategoryChange}
                        className='p-2 rounded-md border-2 border-gray-300 focus:outline-none shadow-md focus:border-black transition-colors duration-300'
                    />
                    <textarea
                        type='text'
                        placeholder='What are you thinking?'
                        value={body}
                        onChange={onInputBody}
                        className='h-[85px] p-2 rounded-md resize-none border-2 border-gray-300 focus:outline-none shadow-md focus:border-black transition-colors duration-300'
                    />
                </div>
                <button
                    type='submit'
                    className='flex items-center gap-2 px-[15px] py-[11px] bg-black text-white rounded-md hover:opacity-80 transition-colors duration-300'
                >
                    <IoSend />
                    <span className='hidden sm:inline'>Send</span>
                </button>
            </form>
        </div>
    );
}

TalkInput.propTypes = {
    addThread: PropTypes.func.isRequired,
};
