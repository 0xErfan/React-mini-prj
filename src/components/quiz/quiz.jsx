import React from "react";

class Quiz extends React.Component {

    constructor() {
        super()

        this.state = {
            score: 0,
            questionNum: 0,
            show: false,
            questions: [
                { id: 0, title: "4 * 4 + 1", items: [4, 17, 16, 1], answer: 17 },
                { id: 1, title: "42 / 42 * 2", items: [1, 2, 1 / 2, 2], answer: 1 / 2 },
                { id: 2, title: "The IPhone was created by witch compan?", items: ["Intel", "Apple", "Amazon", "Microsoft"], answer: "Apple" }
            ],
        }

        this.getAnswer = this.getAnswer.bind(this)
        this.reset = this.reset.bind(this)
    }


    getAnswer(e) {

        const { questions, questionNum } = this.state
        const CurrentQuestion = questions[questionNum]


        this.setState({ show: true })

        setTimeout(() => {
            e.target.innerHTML == CurrentQuestion.answer && this.setState(preveState => ({ score: preveState.score + 1 }))
            this.setState(preveState => ({
                questionNum: preveState.questionNum + 1,
                show: false,
            }))
        }, 500);
    }

    reset() {
        this.setState({ questionNum: 0, score: 0 })
    }

    render() {

        return (
            <section className="flex items-center justify-center w-full h-[400px] bg-gray-400">
                <Questions {...this.state.questions} />
            </section>
        )
    }
}

class Questions extends Quiz {

    render() {

        const { questions, questionNum, show, score } = this.state
        const CurrentQuestion = questions[questionNum]

        return (
            <div className="flex p-4 justify-center ch:basis-1/2 max-w-[500px] w-full text-white/80 bg-black/40 rounded-xl shadow-white shadow-regular">
                {
                    questionNum < questions.length ? (
                        <>
                            <div className="text-2xl">{CurrentQuestion.title}</div>
                            <ul className={`flex flex-col w-full gap-3 ch:w-full ch:text-xl ch:cursor-pointer ch:border-2  ch:duration-100 ch:transition-all  ch:rounded-xl ch:p-2`}>
                                {
                                    CurrentQuestion.items.map((item, index) => {
                                        return <li onClick={e => this.getAnswer(e)} className={`${show ? (item == CurrentQuestion.answer ? "border-green-500" : "border-red-500") : "border-sky-600"} `} key={index}>{item}</li>
                                    })
                                }
                            </ul>
                        </>
                    ) : <div className="flex size-full text-xl text-center">You scored {score} out of {questions.length} <button className="border border-white/80 inline-block px-2 rounded-md" onClick={this.reset}>Reset</button></div>
                }
            </div>
        )
    }
}

export default Quiz;