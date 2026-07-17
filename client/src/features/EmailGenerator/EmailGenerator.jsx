import { useState } from "react";
import axios from "axios";

const EmailGenerator = () => {

    const [recipient, setRecipient] = useState("");
    const [reason, setReason] = useState("");
    const [tone, setTone] = useState("Professional");

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {

        try {

            setLoading(true);

            const response = await axios.post(
                "http://localhost:5000/api/ai/email",
                {
                    recipient,
                    reason,
                    tone,
                }
            );

            setEmail(response.data.email);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="email-generator">

            <h2>AI Email Generator</h2>

            <input
                type="text"
                placeholder="Recipient (Manager, HR...)"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
            />

            <br /><br />

            <textarea
                placeholder="Reason..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
            />

            <br /><br />

            <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
            >

                <option>Professional</option>
                <option>Friendly</option>
                <option>Formal</option>

            </select>

            <br /><br />

            <button onClick={handleGenerate}>

                {loading ? "Generating..." : "Generate Email"}

            </button>

            <br /><br />
            <div className="output-box">
                <label>Generated Email</label>

                <textarea
                    rows="10"
                    value={email}
                    readOnly
                />
            </div>

        </div>

    );

};

export default EmailGenerator;