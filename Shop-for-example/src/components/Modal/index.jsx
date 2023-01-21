import "./index.scss"
import PropTypes from 'prop-types';

function Modal({active, header, text, action, closeModal}) {
    return (
        <div className={active ? "Modal active" : "Modal"} onClick={closeModal}>
            <div className="Modal-content" onClick={e => e.stopPropagation()}>
                <div className="Modal-header">
                    <h2 className="Modal-header__title">{header}</h2>
                    <span className="Modal-header__close" onClick={closeModal}>&times;</span>
                </div>
                <div className="Modal-main">
                    <p className="Modal-main__text"> {text}</p>
                </div>
                <div className="Modal-footer">
                    {action}
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    active: PropTypes.bool,
    action: PropTypes.element,
    header: PropTypes.string,
    text: PropTypes.string,
    closeModal: PropTypes.func
};

Modal.defaultProps = {
    className: '',

};
export default Modal;