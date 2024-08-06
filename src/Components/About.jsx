import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>Aspiring candidate with a solid foundation in software development, showcasing proficiency in key programming languages and frameworks. Eager to contribute to innovative projects and collaborate effectively within team  environments. Committed to continuous growth and adapting to evolving technologies for
impactful contributions in dynamic work settings.</p>
            <br />
            <p className='text-xl'>Completed 11 month internship from "Nokia Solutions and Network" where I have Developed novel UI features with React and JavaScript, implemented Behavior-Driven Development with Cypress to ensure bug-free code, and actively engaged in code reviews and debugging to deliver high-quality software and successful product launches, boosting user engagement and satisfaction.</p>
        </div>
    </div>
  )
}

export default About