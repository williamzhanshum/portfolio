import React from 'react';
import Image from 'next/image';
import beyondReImg from '../public/assets/projects/beyondRE_page.png';
import Link from 'next/link';
import flask from '../public/assets/skills/flask.png';
import sql from '../public/assets/skills/sql.png';
import google from '../public/assets/skills/google.png';
import python from '../public/assets/skills/python.png';

const Property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1 object-cover h-[100vh]'
          src={beyondReImg}
          alt='beyondRE'
          fill
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Beyond Real Estate</h2>
          <h3>Property Management App</h3>
          <Link href='/' target='_blank'>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </Link>
          <Link
            href='https://github.com/williamzhanshum/beyond_re_app'
            target='_blank'
          >
            <button className='px-8 py-2 mt-4 '>See the Code</button>
          </Link>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4 max-w-[900px]'>
          <p className='text-3xl font-semibold tracking-widest uppercase text-[rgb(52,93,167)] mb-4'>
            Project Overview
          </p>
          <p className='mt-4 font-bold text-[rgb(52,93,167)]'>
            Curious for more? Click SEE THE CODE!
          </p>
          <p className='mt-4'>
            Beyond Real Estate is a full-stack property management application
            built on Python, Flask, SQL, Bootstrap and Google Map API. The
            intention behind this project was to create a "one-stop shop"
            software application than can help owners, property managers and/or
            real estate professionals to organize all the properties and tenants
            under their care.
          </p>
          <p className='mt-4'>
            The idea for this project came from my experience as a real estate
            agent, when clients would ask me to help assist them with managing
            their properties. At that time, I did not know of any software that
            I could recommend to my clients. As I learned more about different
            coding languages, frameworks and as my coding skills improved; I
            thought this would be a great opportunity to combine and showcase my
            skills as a software devloper and former real estate agent.
          </p>

          {/* <Link href='/' target='_blank'>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </Link>
          <Link
            href='https://github.com/williamzhanshum/beyond_re_app'
            target='_blank'
          >
            <button className='px-8 py-2 mt-4 '>Code</button>
          </Link> */}
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center text-lg font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              {/* One tech skill  */}
              <div className='p-4 shadow-md rounded-xl hover:scale-105 ease-in duration-300 m-2'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={python} width='30' height='30' alt='python' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Python</h3>
                  </div>
                </div>
              </div>

              <div className='p-4 shadow-md rounded-xl hover:scale-105 ease-in duration-300 m-2'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={flask} width='30' height='30' alt='flask' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Flask</h3>
                  </div>
                </div>
              </div>

              <div className='p-4 shadow-md rounded-xl hover:scale-105 ease-in duration-300 m-2'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={sql} width='30' height='30' alt='sql' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>SQL</h3>
                  </div>
                </div>
              </div>

              <div className='p-4 shadow-md rounded-xl hover:scale-105 ease-in duration-300 m-2'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={google} width='30' height='30' alt='google' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Google API</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Property;
