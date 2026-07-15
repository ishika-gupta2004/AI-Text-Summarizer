import InputBox from "../components/InputBox";
import SummaryBox from "../components/SummaryBox";
import { useState } from "react";

const Home = () => {
   const [summary, setSummary] = useState("");

    return (
        <div className="container">

            <h1>AI Text Summarizer</h1>

            <InputBox setSummary={setSummary} />

            <SummaryBox summary={summary} />

        </div>
    );
};

export default Home;