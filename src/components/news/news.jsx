import React from "react";

class News extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            news: [2, 5, 7, 7, 5, 7]
        }
    }

    render() {
        return (
            <section className="flex items-center justify-center w-full h-[300px] bg-gray-400">
                <nav className="flex p-8 items-center gap-6 bg-gray-800 w-full h-24">
                    <p className="text-xl text-white/40 text-center">Llibanogs</p>
                    {
                        this.state.news.length ? (
                            <div className=" bg-orange-600 px-2 py-1 rounded-2xl relative">News
                                <div className="news">{this.state.news.length}</div>
                            </div>
                        ) : null
                    }
                </nav>
            </section>
        )
    }
}

export default News;