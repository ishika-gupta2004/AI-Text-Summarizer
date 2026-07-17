import { useState } from "react";
import TextSummarizer from "../features/TextSummarizer/TextSummarizer";
import SummaryBox from "../features/TextSummarizer/SummaryBox";
import EmailGenerator from "../features/EmailGenerator/EmailGenerator";

const Home = () => {

    const [activeTool, setActiveTool] = useState("summarizer");

    const tools = [
        {
            id: "summarizer",
            name: "AI Text Summarizer",
        },
        {
            id: "email",
            name: "AI Email Generator",
        },
        {
            id: "grammar",
            name: "Grammar Checker",
        },
        {
            id: "resume",
            name: "Resume Reviewer",
        },
        {
            id: "blog",
            name: "Blog Generator",
        },
        {
            id: "code",
            name: "Code Reviewer",
        },
    ];

    return (
        <div className="home">

            <h1>🤖 AI Integration Playground</h1>

            <p>Learn AI Integration with MERN Stack</p>

            <div className="tools">

                {
                    tools.map((tool) => (

                        <button
                            key={tool.id}
                            onClick={() => setActiveTool(tool.id)}
                        >

                            {tool.name}

                        </button>

                    ))
                }

            </div>

            <div className="tool-container">

                {
                    activeTool === "summarizer" &&
                    <TextSummarizer />
                }

                {
                    activeTool === "email" &&
                    
                    <EmailGenerator/>
                }

            </div>

        </div>
    );
};

export default Home;