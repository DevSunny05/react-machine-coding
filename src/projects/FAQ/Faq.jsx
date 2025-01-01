import React from 'react'
import FaqBox from './FaqBox'

const Faq = () => {
    const faqs=[
        {
          "ques": "What is React?",
          "ans": "React is a JavaScript library for building user interfaces, developed and maintained by Facebook."
        },
        {
          "ques": "What is Vite?",
          "ans": "Vite is a modern frontend build tool that provides a fast development environment for web applications."
        },
        {
          "ques": "What is a React component?",
          "ans": "A React component is a reusable piece of UI logic that can accept inputs (props) and return React elements describing what to render."
        },
        {
          "ques": "What is JSX?",
          "ans": "JSX is a syntax extension for JavaScript that looks similar to HTML and is used in React to describe UI elements."
        },
        {
          "ques": "What is the purpose of useState in React?",
          "ans": "The useState hook is used to add state management to functional components in React."
        }
      ]
      
  return (
    <div className='app'>
        <h1>FAQ questions and Answers</h1>
        <div>
            {
                faqs.map((faq,index)=>(
                   <FaqBox faq={faq} index={index} />
                ))
            }
        </div>
    </div>
  )
}

export default Faq