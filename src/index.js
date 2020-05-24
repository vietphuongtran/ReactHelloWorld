import React, {Component} from 'react'
import {render} from 'react-dom'
import './index.css'
import Networkpage from './Networkpage'

//Component:
//1. Discussion
//2. 2 Side bars
let faqList = [
    {"question": "How to write a perfect C.V", "answer": "Research, research, research"},
    {"question": "How to get HR contact", "answer": "Company's website and directory" }
]

render (
    <Networkpage faqs={faqList} />,
    document.getElementById('root')
)
