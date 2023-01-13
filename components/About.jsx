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
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            pariatur voluptatem magni est, aspernatur, a iste placeat maxime
            laborum cumque dolorum consequuntur temporibus ratione. Distinctio,
            deleniti vel. Eum ea doloribus unde ipsa minima impedit, assumenda,
            asperiores sit delectus animi neque officiis id. Rerum soluta
            placeat at vel, tempore ex sunt molestias accusantium ea dolorem
            tempora repudiandae cumque harum animi laudantium aspernatur iste
            deserunt, non culpa architecto adipisci iusto. Alias laudantium
            earum perferendis, quaerat iusto commodi corporis quam? Quae
            perspiciatis voluptate eius, alias recusandae praesentium
            necessitatibus culpa! Tempora quis atque aperiam. Cumque provident
            corrupti molestias ut illum vitae adipisci obcaecati nam?
          </p>
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            fugit mollitia repudiandae earum dolores, nobis tempore magnam
            consequuntur totam animi quam labore rerum! Harum veritatis
            reprehenderit tempore natus? Iusto, voluptatibus! Quae odit minima
            sapiente, repellat blanditiis, impedit ab rerum corporis vel debitis
            enim modi veniam molestiae qui unde aut molestias!
          </p>
          <Link href='/#projects' scroll={false}>
            <p className='py-2 text-[rgb(52,93,167)] underline cursor-pointer animate-pulse duration-300 text-lg'>
              Check out some of my projects!
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
