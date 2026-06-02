import styles from "./Modal.module.scss";
import PropTypes from 'prop-types';


const Modal = (props) => {
    const {children, closeModal} = props;
    return (
        <div className={styles["modal-overlay"]}>
            <div className={styles["modal-window"]}>
                <button onClick={closeModal}>X</button>
                <div className={styles["modal-content"]}    >
                    {children}
                </div>
            </div>
        </div>
    );
};


Modal.propTypes = {
children: PropTypes.any,
};


export default Modal;
