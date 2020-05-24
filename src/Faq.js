import React, { Component } from 'react'

export const Faq = ({ question = "undefined", answer = "undefined"}) => {
    return (
        <section>
            <h2>{question}</h2>
            <div>{answer}</div>
        </section>
    )
}