import PropTypes from 'prop-types';

export default function Tags({ categories, filter, setFilter }) {
    return (
        <div className='p-5 shadow-custom-1 rounded-md'>
            <p className='text-center mb-2 font-bold'>Tags</p>
            <div className='flex gap-2 overflow-x-auto lg:flex-col flex-nowrap'>
                {Array.from(categories).map((category) => {
                    const isActive = category === filter;
                    return (
                        <button
                            key={category}
                            className={`flex-shrink-0 align-middle py-1 px-8 rounded-md border-2 text-sm text-nowrap transition-all ease-in-out duration-500 cursor-pointer ${
                                isActive ? 'bg-[#FFF6DF] border-black' : 'border-slate-300 hover:bg-[#FFF6DF]'
                            }`}
                            onClick={() => setFilter(isActive ? '' : category)}
                        >
                            {`# ${category}`}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

Tags.propTypes = {
    categories: PropTypes.instanceOf(Set).isRequired,
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
};
