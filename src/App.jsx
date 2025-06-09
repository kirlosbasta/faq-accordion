import React from 'react';
import Accordion from './components/Accordion';

function App() {
  return (
    <div className='bg-purple-100 h-screen flex justify-center items-center'>
      <div className='absolute top-0 w-full z-0'>
        <picture>
          <source
            media='(min-width: 500px)'
            srcSet='./images/background-pattern-desktop.svg'
          />
          <img
            src='./images/background-pattern-mobile.svg'
            alt='Illustration'
            className=' w-full'
          />
        </picture>
      </div>
      <main className='bg-white rounded-md w-9/10 max-w-md z-1 p-5'>
        <img
          src='./images/icon-star.svg'
          alt='star'
          width={20}
          className='inline-block align-baseline'
        />
        <h1 className='inline-block font-bold text-2xl ml-5 mb-5'>FAQs</h1>
        <Accordion
          title={'What is Frontend Mentor, and how will it help me?'}
          text={
            "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
          }
        />
        <hr className='text-purple-100 my-5' />

        <Accordion
          title={'Is Frontend Mentor free?'}
          text={
            'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.'
          }
        />

        <hr className='text-purple-100 my-5' />

        <Accordion
          title={'Can I use Frontend Mentor projects in my portfolio?'}
          text={
            "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
          }
        />
        <hr className='text-purple-100 my-5' />

        <Accordion
          title={
            "How can I get help if I'm stuck on a Frontend Mentor challenge?"
          }
          text={
            "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
          }
        />
      </main>
    </div>
  );
}

export default App;
