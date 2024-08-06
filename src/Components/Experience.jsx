import React from 'react'
import bootstrap from '../assets/bootstrap.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import html from '../assets/html.png'
import java from '../assets/java.png'
import javascript from '../assets/javascript.png'
import mysql from '../assets/mysql.png'
import node from '../assets/node.png'
import postman from '../assets/postman.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'

const Experience = () => {
    const tech=[
        {
            id:1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id:2,
            src: bootstrap,
            title: "Bootstrap",
            style: "shadow-purple-500"
        },
        {
            id:3,
            src: css,
            title: "CSS",
            style: "shadow-blue-500"
        },
        {
            id:4,
            src: github,
            title: "Github",
            style: "shadow-gray-400"
        },
        {
            id:5,
            src: java,
            title: "JAVA",
            style: "shadow-red-500"
        },
        {
            id:6,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500"
        },
        {
            id:7,
            src: mysql,
            title: "Mysql",
            style: "shadow-white"
        },
        {
            id:8,
            src: node,
            title: "Node",
            style: "shadow-green-500"
        },
        {
            id:9,
            src: postman,
            title: "Postman",
            style: "shadow-orange-500"
        },
        {
            id:10,
            src: react,
            title: "React",
            style: "shadow-blue-600"
        },
        {
            id:11,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400"
        }
    ]
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full '>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6 '>Theses are the technologies that I have worked on</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {tech.map(({id, src, title, style})=>{
                    return <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg' + " " + style}>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
                })}
                
            </div>
        </div>
    </div>
  )
}

export default Experience