import PropTypes from 'prop-types';
import "./Button.scss"

function Button({btnClass, onClick, text, type, disabled}) {
    return (
        <button  type={type} className={btnClass} onClick={onClick} disabled={disabled}>{text} </button>
    )
}

Button.propTypes = {
    btnClass: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string,
    type: PropTypes.string,

};

Button.defaultProps = {
    className: '',
    type: 'button',
};
export default Button;