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
            <button className='px-8 py-2 mt-4 mr-8 mb-4'>Demo</button>
          </Link>
          <Link
            href='https://github.com/williamzhanshum/devbud_mern_app-willzhan'
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
          <div className='relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-400 rounded-xl p-4 group bg-slate-700'>
            <Link href='https://vimeo.com/793111024' target='_blank'>
              <img
                className='opacity-20 hover:opacity-100'
                src='https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/fed70e09-be3f-4037-9508-52acbc50745d.gif?ClientID=vimeo-core-prod&Date=1674764300&Signature=e89a56dc834b5b367cbd149d2862670bab9d88a2'
                width='750px'
              />
            </Link>

            <div className='flex-col group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <div>
                <Link href='https://vimeo.com/793111024'>
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
            DEVBUD. is a full-stack application built with React, MongoDB,
            Firebase, TailwindCSS, and Augora's WebRTC. This is a social
            networking app for software developers with a collaborative code
            space. In this app, aspiring developers can network with experienced
            developers to improve their coding skills. The collaborative code
            space has live group chat messaging, live group video calls, screen
            sharing, and a collaborative code editor that supports JavaScript,
            Python, and Java.
          </p>

          <p className='mt-4 text-lg'>
            When I started my coding journey, I was fortunate to have friends
            who are software developers to support my learning. Any time I had
            questions or encountered challenges, I could easily message my
            friends for help. I realized, however, that most people don't have
            access to a community of experienced developers for support. My
            motivation for this project is to provide aspiring developers with
            access to those with experience for mentoring.
          </p>
          <p className='mt-4 text-lg'>
            Check out the video demo to see how you can use DEVBUD. For more
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
