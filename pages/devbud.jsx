import React from 'react';
import Image from 'next/image';
import devbudImg from '../public/assets/projects/devbud_page.png';
import Link from 'next/link';

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
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p className='text-xl font-semibold tracking-widest uppercase text-[rgb(52,93,167)] mb-4'>
            Project Overview
          </p>
          {/* <h2>Overview</h2> */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            explicabo necessitatibus, ut sapiente a fugiat provident veniam
            quos, fugit ratione, et sint. Enim aspernatur inventore aliquid
            assumenda sequi. Deserunt, ex? Why did you do that project? What did
            you learn? What obstacles did you overcome? What did you enjoy?
          </p>
          <Link href='https://devbud.williamzhan.com/' target='_blank'>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </Link>
          <Link href='#' target='_blank'>
            <button className='px-8 py-2 mt-4 '>Code</button>
          </Link>
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
                      src='/../public/assets/skills/react.png'
                      width='30'
                      height='30'
                      alt='react'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>React</h3>
                  </div>
                </div>
              </div>

              <div className='p-4 shadow-md rounded-xl hover:scale-105 ease-in duration-300 m-2'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image
                      src='/../public/assets/skills/mongo.png'
                      width='30'
                      height='30'
                      alt='mongo'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Mongo</h3>
                  </div>
                </div>
              </div>

              <div className='p-4 shadow-md rounded-xl hover:scale-105 ease-in duration-300 m-2'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image
                      src='/../public/assets/skills/node.png'
                      width='30'
                      height='30'
                      alt='node'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Node</h3>
                  </div>
                </div>
              </div>

              <div className='p-4 shadow-md rounded-xl hover:scale-105 ease-in duration-300 m-2'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image
                      src='/../public/assets/skills/aws.png'
                      width='30'
                      height='30'
                      alt='aws'
                    />
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
                      src='/../public/assets/skills/tailwind.png'
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
