import { useState } from "react";
import API from "../services/api";

const InputBox = ({ setSummary }) => {

    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSummarize = async () => {

        if (!text.trim()) {
            alert("Please enter some text.");
            return;
        }

        try {

            setLoading(true);
            const response = await API.post("/ai/summarize", {
                text,
            });

            setSummary(response.data.summary);

        } catch (error) {

            console.log(error);
            // alert("Something went wrong.");

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="input-box">

            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste your text here..."
            />

            <p>{text.length} Characters</p>

            <button
                onClick={handleSummarize}
                disabled={loading}
            >

                {loading ? "Generating..." : "✨ Summarize"}

            </button>

        </div>
    );
};

export default InputBox;