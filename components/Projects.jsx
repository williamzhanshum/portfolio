import React from 'react';
import devbudImg from '../public/assets/projects/devbud_page.png';
import beyondReImg from '../public/assets/projects/beyondRE_page.png';
import forkifyImg from '../public/assets/projects/forkify_page.png';
import maptyImg from '../public/assets/projects/mapty-page.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[rgb(52,93,167)]'>
          Projects
        </p>
        <h2 className='py-4'> What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='DEVBUD.'
            description='Social Media + Study Room'
            backgroundImg={devbudImg}
            projectUrl='/Devbud'
            demoUrl='https://devbud.williamzhan.com'
          />
          <ProjectItem
            title='Beyond Real Estate'
            description='Property Management App'
            backgroundImg={beyondReImg}
            projectUrl='/Property'
            demoUrl='/'
          />
          <ProjectItem
            title='Forkify App'
            description='Recipe Finder and Maker'
            backgroundImg={forkifyImg}
            projectUrl='/Forkify'
            demoUrl='https://forkify-william.netlify.app/'
          />
          <ProjectItem
            title='Mapty'
            description='Exercise Logging App'
            backgroundImg={maptyImg}
            projectUrl='/Mapty'
            demoUrl='https://mapty-william.netlify.app/'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
