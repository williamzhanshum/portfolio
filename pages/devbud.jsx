import React from 'react';
import Image from 'next/image';
import devbudImg from '../public/assets/projects/devbud_page.png';
import Link from 'next/link';
import react from '../public/assets/skills/react.png';
import mongo from '../public/assets/skills/mongo.png';
import node from '../public/assets/skills/node.png';
import aws from '../public/assets/skills/aws.png';
import tailwind from '../public/assets/skills/tailwind.png';

const devbud = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1 object-cover h-[100vh]'
          src={devbudImg}
          alt='devbud'
          fill
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>DEVBUD.</h2>
          <h3>Social Media + Study Room App</h3>

          <Link href='https://devbud.williamzhan.com/' target='_blank'>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </Link>
          <Link
            href='https://github.com/williamzhanshum/devbud_mern_app-willzhan'
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
          <div className='mb-8'>
            <img
              src='https://user-images.githubusercontent.com/99300376/213829176-39182bfa-d13f-4d48-8be9-73be2b27789b.gif'
              width=''
            />
          </div>
          <p className='mt-4 font-bold text-[rgb(52,93,167)]'>
            For more details about the code and features click on the CODE
            button!
          </p>
          <p className='mt-4'>
            DEVBUD. is a full-stack application built with React, MongoDB,
            Firebase, TailwindCSS, and WebRTC. This is a social networking app
            for software developers that also has a collaborative code space. In
            this app, aspiring developers are able to network with experienced
            developers to improve their coding skills. The collaborative code
            space has live group chat messaging, live group video calls, screen
            sharing, and a collaborative code editor that supports JavaScript,
            Python, and Java. Check it out!
          </p>

          <p className='mt-4'>
            When I started my coding journey I was fortunate enough to have
            friends who were software developers that could help me learn how to
            code. Any time I had questions or was stuck with a problem I could
            easily message my friends and get help. I realized, however, that
            most people don't have access to a community of experienced
            developers they as for help. This is where the inspiration for this
            project came from, I wanted to make it easier for aspiring
            developers to have access to experienced developers to mentor them.
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
                    <Image src={react} width='30' height='30' alt='react' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>React</h3>
                  </div>
                </div>
              </div>

              <div className='p-4 shadow-md rounded-xl hover:scale-105 ease-in duration-300 m-2'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={mongo} width='30' height='30' alt='mongo' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Mongo</h3>
                  </div>
                </div>
              </div>

              <div className='p-4 shadow-md rounded-xl hover:scale-105 ease-in duration-300 m-2'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={node} width='30' height='30' alt='node' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Node</h3>
                  </div>
                </div>
              </div>

              <div className='p-4 shadow-md rounded-xl hover:scale-105 ease-in duration-300 m-2'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={aws} width='30' height='30' alt='aws' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>AWS</h3>
                  </div>
                </div>
              </div>

              <div className='p-4 shadow-md rounded-xl hover:scale-105 ease-in duration-300 m-2'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image
                      src={tailwind}
                      width='30'
                      height='30'
                      alt='tailwind'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Tailwind</h3>
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

export default devbud;
