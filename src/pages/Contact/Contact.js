
import "./Contact.scss"

const Contact = ({state , VContact}) => {
    return (
        <div ref={VContact} className={`contact ${state===5?"open" : "close"}`}>
            <h3><span>c</span>ontact Me</h3>
            
            

        </div>
    );
}

export default Contact;
