import Toast from 'react-bootstrap/Toast';
import classes from "./MyToasts.module.css"

export default function MyToasts({ showToats, toggleShow,  text , bg }) {
    return (
        <Toast delay={3000} autohide onClose={toggleShow} show={showToats} bg={bg} className={classes.displayToats}>
            <Toast.Header>
                <strong className="me-auto">Уведомление</strong>
            </Toast.Header>
            <Toast.Body>{text}</Toast.Body>
        </Toast>
    )
}
