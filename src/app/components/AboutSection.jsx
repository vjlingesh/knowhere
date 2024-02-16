'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2'>
        <li>Node.js</li>
        <li>Java</li>
        <li>Ruby</li>
        <li>Python</li>
        <li>Kotlin</li>
        <li>JavScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>AWS Services</li>
        <li>Docker and Kubernetes</li>
        <li>Git</li>
      </ul>
    )
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className='list-disc pl-2'>
        <li>Bachelors in CS, Amrita Vishwa Vidyapeetham</li>
        <li>Masters of CS, University of Virginia</li>
      </ul>
    )
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className='list-disc pl-2'>
        <li>AWS Cloud Practitioner</li>
        <li>AWS Solutions Architect - Associate</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState('skills')
  const [isPending, startTransition] = useTransition()
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }
  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image
          src='/images/about-image-vijay.jpg'
          width={500}
          height={500}
          alt='about-img'
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            Results-oriented software developer with a solid background in
            full-stack application implementation, cloud technology solutions,
            and software engineering best practices. Possessing 5 years of
            experience in the field, including 2 years as a cloud automation
            engineer with Oracle and 3 years as a full-stack developer with
            Amazon. Proven ability to design scalable software solutions using
            cloud technologies, ensuring efficient and reliable performance.
            Adept at working with Java, Ruby, and TypeScript, and experienced in
            applying industry-standard best practices for software release and
            project lifecycle management.
          </p>
          <div className='flex flex-row mt-8'>
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              {' '}
              Education{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
            >
              {' '}
              Certifications{' '}
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
