import React from 'react';
import Image from 'next/image';
import forkifyImg from '../public/assets/projects/forkify_page.png';
import Link from 'next/link';
import css from '../public/assets/skills/css.png';
import javascript from '../public/assets/skills/javascript.png';
import html from '../public/assets/skills/html.png';

const forkify = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1 object-cover h-[100vh]'
          src={forkifyImg}
          alt='forkify'
          fill
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Forkify</h2>
          <h3>Recipe Finder and Maker App</h3>
          <Link href='https://forkify-william.netlify.app/' target='_blank'>
            <button className='px-8 py-2 mt-4 mr-8 mb-4'>Demo</button>
          </Link>
          <Link
            href='https://github.com/williamzhanshum/forkify-app'
            target='_blank'
          >
            <button className='px-8 py-2 mt-4 mb-4'>See the Code</button>
          </Link>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p className='text-3xl font-semibold tracking-widest uppercase text-[rgb(52,93,167)] mb-4'>
            Project Overview
          </p>

          <div className='relative flex items-center justify-center h-auto w-[80%] p-4 group mb-4 shadow-lg rounded-xl'>
            <Link href='https://vimeo.com/792437146/25a32a4ab1' target='_blank'>
              <img
                className='opacity-30 hover:opacity-100'
                src='https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/73060fd8-cf88-470b-a9b7-a3b4e5d92778.gif?ClientID=vimeo-core-prod&Date=1674611009&Signature=1ab8b47fa6d76fb1dbb252d6919c707b64e3a77b'
                width='900px'
              />
            </Link>

            <div className='flex-col group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <div>
                <Link
                  href='https://vimeo.com/792437146/25a32a4ab1'
                  target='_blank'
                >
                  <p className='text-center p-3 rounded-lg bg-red-400 text-gray-700 font-bold text-lg cursor-pointer shadow-xl'>
                    WATCH VIDEO
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <p className='mt-4 mb-4 font-bold text-[rgb(52,93,167)]'>
            For more details about the code and features click on the CODE
            button!
          </p>
          <p>
            Forkify is a font-end application built on Javascript, CSS, HTML,
            and the Forkify API. The Forkify API is used to fetch all of the
            recipes that are searched for in the search bar. Users are able to
            search for recipes, create their own recipes and even bookmark their
            favorite recipes. There is no back-end to this application, however,
            all the information is stored in the local storage. Even if users
            were to refresh the page all the recipes they bookmarked will still
            be saved. Another useful feature is being able to change the number
            of servings. Any time the number of servings is changed, the
            ingredient quantities will change accordingly.
          </p>
          <p className='mt-4'>
            Check out the video demo to see how you can use Forkify. For more
            detail on the code check out the GitHub repository!
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
                    <Image
                      src={javascript}
                      width='30'
                      height='30'
                      alt='javascript'
                    />
                  </div>
                  <div className='hidden md:flex flex-col items-center justify-center text-sm'>
                    <h3>JavaScript</h3>
                  </div>
                </div>
              </div>

              <div className='p-4 shadow-md rounded-xl hover:scale-105 ease-in duration-300 m-2'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={html} width='30' height='30' alt='html' />
                  </div>
                  <div className='hidden md:flex flex-col items-center justify-center'>
                    <h3>HTML</h3>
                  </div>
                </div>
              </div>

              <div className='p-4 shadow-md rounded-xl hover:scale-105 ease-in duration-300 m-2'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={css} width='30' height='30' alt='css' />
                  </div>
                  <div className='hidden md:flex flex-col items-center justify-center'>
                    <h3>CSS</h3>
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

export default forkify;
