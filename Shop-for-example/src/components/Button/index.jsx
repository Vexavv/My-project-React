import PropTypes from 'prop-types';
import "./index.scss"

function Button({btnClass, onClick, text, type}) {
    return (
        <button  type={type} className={btnClass} onClick={onClick}>{text} </button>
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