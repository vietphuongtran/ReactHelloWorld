import React, { Component } from 'react'
import { Faq } from './Faq'

class Networkpage extends Component {
    //the default will appear when there is no data to show
    static defaultProps = {
        faqs: [
            { "question": "no question", "answer": "no answer"}
        ]
    }
    render() {
        const { faqs } = this.props
        return (
            <div>
                {faqs.map(
                    (faq, i) => <Faq
                        key={i}
                        question={faq.question}
                        answer={faq.answer}
                    />
                )}
            </div>
        )
    }
}
export default Networkpage