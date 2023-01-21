import PropTypes from "prop-types";



function Error({error}) {

    return (
        <h1>ERROR:{error}</h1>
    );
}
Error.propTypes = {
     error: PropTypes.string,
};

export default Error;