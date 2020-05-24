import React, { Component } from 'react'

export const Faq = ({ topic ="", question = "undefined", answer = "undefined"}) => {
    return (
        <section className="mainContent">
            <h2>{topic}</h2>
            <div>Q: {question}</div>
            <div>A: {answer}</div>
        </section>
    )
}