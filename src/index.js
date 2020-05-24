import React, {Component} from 'react'
import {render} from 'react-dom'
import './index.css'
import Networkpage from './Networkpage'

//Component:
//1. Discussion
//2. 2 Side bars
let faqList = [
    {"topic": "Resume and CV related question", "question": "How to write a perfect C.V", "answer": "Research, research, research"},
    {"topic": "General Inquires", "question": "How to get HR contact", "answer": "Company's website and directory" },
    {"topic": "Coding Test kit", "question": "Who has the Shopify coding test? Please share. Thank you", "answer": "You can download in in my Github" }
]

render (
    <div>
        <h1>Experience Sharing Page</h1>
        <Networkpage faqs={faqList} />
    </div>,
    document.getElementById('root')
)
