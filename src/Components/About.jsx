import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae id nostrum maxime enim atque eum iure sunt laborum harum ullam, asperiores molestiae repudiandae, odio obcaecati alias sint laboriosam culpa, dolore sit fugit quasi a. Illo nesciunt facere unde architecto laudantium inventore quam. Fugit nisi vel in veniam! Quasi, natus beatae!</p>
            <br />
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio culpa in officia aliquid excepturi consequatur quo non eum totam. Deserunt beatae unde corporis quaerat blanditiis quidem doloribus nulla dolorem ea accusantium repudiandae cupiditate aut id veniam incidunt eaque iste nihil cum, consectetur recusandae quod, quo distinctio quasi sint. Debitis, ipsa.</p>
        </div>
    </div>
  )
}

export default About