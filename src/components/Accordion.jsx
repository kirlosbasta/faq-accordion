import { useState } from 'react';

function Accordion({ title, text }) {
  const [isShown, setIsShown] = useState(false);

  function handleClick() {
    setIsShown(!isShown);
  }

  return (
    <article>
      <div className='flex justify-between items-center mb-4'>
        <h2
          role='button'
          className='font-semibold text-md flex-5/6 hover:cursor-pointer hover:text-purple-500'
          onClick={handleClick}
        >
          {title}
        </h2>
        <button
          type='button'
          onClick={handleClick}
          className='cursor-pointer w-10 h-10 rounded-full flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-purple-600'
        >
          {isShown ? (
            <img
              src='./images/icon-minus.svg'
              alt='minus'
              className='w-6 h-6'
            />
          ) : (
            <img src='./images/icon-plus.svg' alt='plus' className='w-6 h-6' />
          )}
        </button>
      </div>
      {isShown && <p className='text-purple-600'>{text}</p>}
    </article>
  );
}

export default Accordion;
