import "./Header.scss"
import PrimarySearchAppBar from "../PrimarySearchAppBar/PrimarySearchAppBar";

function Header() {
    return (
            <div className="Header">
                <PrimarySearchAppBar/>
            </div>
    )
}



Header.defaultProps = {
    className: '',
};
export default Header;