import "./index.scss"
import Counter from "../Counter";
import PropTypes from 'prop-types';
import Menu from "../Menu";

function Header() {
    return (
        <div className="Header">
            <Menu/>
            <Counter/>
        </div>
    )
}



Header.defaultProps = {
    className: '',
};
export default Header;