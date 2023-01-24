import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET'S BUILD TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hello, I'm <span className='text-[rgb(52,93,167)]'>William</span>
          </h1>
          <h1 className='py-4 text-gray-700'>A Full-Stack Developer</h1>
          {/* <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
            quibusdam, aliquam totam debitis eligendi quis ex vel magni cum
            obcaecati dolor qui, iusto laborum inventore necessitatibus
            asperiores itaque quisquam, illo dolores rerum autem sequi omnis
            maiores ea. Unde officia quis voluptatibus sequi suscipit enim
            delectus! Temporibus officia repellat aperiam nihil.
          </p> */}
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <Link
              href='https://www.linkedin.com/in/william-zhan/'
              target='_blank'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gray-100'>
                <FaLinkedinIn size={20} />
              </div>
            </Link>
            <Link href='https://github.com/williamzhanshum' target='_blank'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gray-100'>
                <FaGithub size={20} />
              </div>
            </Link>
            <Link href='mailto:williamzhan123@gmail.com'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gray-100'>
                <AiOutlineMail size={20} />
              </div>
            </Link>
            <Link href='/resume.pdf' target='_blank'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gray-100'>
                <BsFillPersonLinesFill size={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
