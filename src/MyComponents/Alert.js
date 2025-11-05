
export default function Alert(props) {
    return (
        <div style={{height: "80px"}}>
            {props.alertMsg && <div className="alert alert-primary" role="alert">
                {props.alertMsg}
            </div>}
        </div>
    )
}
