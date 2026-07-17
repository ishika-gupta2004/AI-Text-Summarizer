import { useState } from "react";
import InputBox from "./InputBox";
import SummaryBox from "./SummaryBox";

const TextSummarizer = () => {

    const [summary, setSummary] = useState("");

    return (

        <div>

            <InputBox setSummary={setSummary} />

            <SummaryBox summary={summary} />

        </div>

    );

};

export default TextSummarizer;