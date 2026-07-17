const SummaryBox = ({ summary }) => {

    return (

        <div className="summary-box">

            <h2>AI Summary</h2>

            <p>

                {summary || "Your AI generated summary will appear here..."}

            </p>

        </div>

    )

}

export default SummaryBox;