
export default function About(props) {

    let darkStyle = {
        backgroundColor: "#34406e",
        color: "#fff"
    };
    let lightStyle = {
        backgroundColor: "white",
        color: "Black"
    }

    return (
        <>
        <h1 className="mb-4">About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={props.mode==="dark"?darkStyle:lightStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyse your text</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={props.mode==="dark"?darkStyle:lightStyle}>
                        TextUtils gives you a way to analyze your text quickly and efficiently. You can Convert your text from lowercase to uppercase, uppercase to lowercase, remove extra spaces from your text and can also copy your manipulated text.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={props.mode==="dark"?darkStyle:lightStyle}>
                        <strong>Free to use</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={props.mode==="dark"?darkStyle:lightStyle}>
                        TextUtils is a free character counter tool that provides instant charcter count and word count statistics for a given text.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={props.mode==="dark"?darkStyle:lightStyle}>
                        <strong>Browser Compatible</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={props.mode==="dark"?darkStyle:lightStyle}>
                        This word counter app works in any browser such as Chrome, Firefox, Safari, Internet Explorer, Opera, etc.
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
