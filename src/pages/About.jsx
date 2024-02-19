import React from 'react';
import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiC,
  SiCsharp,
  SiMysql,
} from 'react-icons/si';

const About = () => {
  return (
    <div className='text-right'>
      <h1
        className='text-5xl xl:text-9xl theme-transition'
        style={{ paddingBottom: '7%' }}
      >
        ABOUT ME
      </h1>

      <p
        className='text-xs xl:text-base theme-transition'
        style={{ paddingBottom: '7%' }}
      >
        I am a 22 y.o recent computer science graduate who studied at the
        University of Auckland. Based in Auckland, New Zealand, I am a
        full-stack developer with a passion for web development and software
        engineering. Fluent in Japanese and English, I am a rapid learner and
        thrive in collaborative environments, actively seeking opportunities to
        expand my skill set.
      </p>

      <div>
        <h1 className='text-2xl xl:text-4xl pb-2 theme-transition'>
          TECHNOLOGY
        </h1>
        <div id='container' className='flex justify-end gap-2 xl:gap-5'>
          <a href='https://www.python.org' target='_blank' rel='noreferrer'>
            <SiPython className='icon-sm' />
          </a>
          <a
            href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
            target='_blank'
            rel='noreferrer'
          >
            <SiJavascript className='icon-sm' />
          </a>
          <a
            href='https://learn.microsoft.com/en-us/cpp/c-language/'
            target='_blank'
            rel='noreferrer'
          >
            <SiC className='icon-sm' />
          </a>
          <a
            href='https://learn.microsoft.com/en-us/dotnet/csharp/'
            target='_blank'
            rel='noreferrer'
          >
            <SiCsharp className='icon-sm' />
          </a>
          <a href='https://reactjs.org/'>
            <SiReact className='icon-sm' />
          </a>
          <a href='https://www.mysql.com/' target='_blank' rel='noreferrer'>
            <SiMysql className='icon-sm' />
          </a>
          <a
            href='https://developer.mozilla.org/en-US/docs/Web/HTML'
            target='_blank'
            rel='noreferrer'
          >
            <SiHtml5 className='icon-sm' />
          </a>
          <a
            href='https://developer.mozilla.org/en-US/docs/Web/CSS'
            target='_blank'
            rel='noreferrer'
          >
            <SiCss3 className='icon-sm' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
