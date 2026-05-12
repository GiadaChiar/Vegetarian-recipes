// Pop to show messages


type PopUpProps = {
    alert: string;
    message: string;

}

export default function PopUp({alert, message}:PopUpProps) {
    return (
        <>
        <div className="custom-popup">
            <div className="popup-box">
                    <h4>{alert}</h4>
                    <p>{message}</p>
            </div>
        </div>
        </>
    );
}