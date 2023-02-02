import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import profilePic from '../public/assets/profile-pic-2.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[rgb(52,93,167)]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600 text-lg'>
            I’m a curious and driven software engineer who enjoys collaborating
            with others to develop user-friendly, accessible applications. As a
            Chinese-American who was born and raised in Honduras, I work with
            others fluently in English, Spanish, and Chinese Cantonese.
          </p>
          <p className='py-2 text-gray-600 text-lg'>
            My previous experience in mechanical engineering and real estate
            resulted in a happy combination of resourcefulness with strong
            problem-solving, communication, and time management skills that I
            bring to every project.
          </p>
          <p className='py-2 text-gray-600 text-lg'>
            When I’m not coding, you can find me cooking, running with my
            Siberian Husky, or cheering on FC Barcelona. I find joy in cooking
            and sharing meals with my friends and family.
          </p>
          <Link href='/#projects' scroll={false}>
            <p className='py-2 text-[rgb(52,93,167)] underline cursor-pointer animate-pulse duration-300 text-lg font-semibold'>
              Check out my projects!
            </p>
          </Link>
        </div>
        <div className='w-[80%] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 '>
          <Image
            src={profilePic}
            width='300'
            height='550'
            alt='profile-pic'
            className='rounded-xl'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
