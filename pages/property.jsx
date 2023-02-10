import React from 'react';
import Image from 'next/image';
import beyondReImg from '../public/assets/projects/beyondRE_page.png';
import Link from 'next/link';
import flask from '../public/assets/skills/flask.png';
import sql from '../public/assets/skills/sql.png';
import google from '../public/assets/skills/google.png';
import python from '../public/assets/skills/python.png';

const property = () => {
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
            <button className='px-8 py-2 mt-4 mr-8 mb-4'>Demo</button>
          </Link>
          <Link
            href='https://github.com/williamzhanshum/beyond_re_app'
            target='_blank'
          >
            <button className='px-8 py-2 mt-4 mb-4'>Code</button>
          </Link>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4 max-w-[900px]'>
          <p className='text-3xl font-semibold tracking-widest uppercase text-[rgb(52,93,167)] mb-4'>
            Project Overview
          </p>

          {/* Video Player  */}
          <div className='relative flex items-center justify-center h-auto w-full p-4 group mb-4 shadow-lg rounded-xl bg-slate-700'>
            <Link href='https://vimeo.com/762841409' target='_blank'>
              <img
                className='opacity-30 hover:opacity-100'
                src='https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/ea307459-4e25-4769-8e3a-46c1ec8e54d1.gif?ClientID=vimeo-core-prod&Date=1674693400&Signature=c5fa66438fe83849dcb1440539bd83e58da5b9d2'
                width='750px'
              />
            </Link>

            <div className='flex-col group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <div>
                <Link href='https://vimeo.com/762841409' target='_blank'>
                  <p className='text-center p-3 rounded-lg bg-amber-500 text-white font-bold cursor-pointer shadow-lg shadow-gray-400'>
                    WATCH VIDEO
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <p className='mt-4 font-bold text-[rgb(52,93,167)] text-lg'>
            See the solution by clicking on CODE!
          </p>
          <p className='mt-4 text-lg'>
            Beyond Real Estate is a full-stack property management application
            built on Python, Flask, SQL, Bootstrap and Google Map API. The
            intention behind this project was to create a "one-stop shop"
            software application that can help owners, property managers and/or
            real estate professionals to organize all the properties and tenants
            under their care.
          </p>
          <p className='mt-4 text-lg'>
            The idea for this project came from my experience as a real estate
            agent, when clients would ask me to help assist them with managing
            their properties. At that time, there were none available to my
            knowledge. After improving my coding skills and learning different
            coding languages and frameworks, I combined my skills as a software
            developer and former real estate agent to create this project.
          </p>
          <p className='mt-4 text-lg'>
            Check out the video demo to see how you can use the Beyond Real
            Estate app. For more detail on the code check out the GitHub
            repository!
          </p>
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

export default property;
