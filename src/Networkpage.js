import React, { Component } from 'react'
import { Faq } from './Faq'
import {Newpost} from "./newpost";
import {Dashboard} from "./dashboard";

class Networkpage extends Component {
    //the default will appear when there is no data to show
    static defaultProps = {
        faqs: [
            { "topic":"no topic", "question": "no question", "answer": "no answer"}
        ]
    }
    render() {
        const { faqs } = this.props
        return (
            <div className="flexContainer">
                <div className="sidebar"><Newpost /></div>
                <div className="center">
                    {faqs.map(
                        (faq, i) => <Faq
                            key={i}
                            topic={faq.topic}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    )}
                </div>
                <div className="sidebar"><Dashboard /></div>
            </div>
        )
    }
}
export default Networkpage