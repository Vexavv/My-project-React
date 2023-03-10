import React from 'react';
import ContainerProduct from "../../components/ContainerProduct/ContainerProduct";
import PropTypes from 'prop-types';


function OurProduct() {

    return (
        <>
            <ContainerProduct />
        </>

    );
}

OurProduct.propTypes = {
    cards: PropTypes.array,
    addToCart: PropTypes.func,
    getCard: PropTypes.func,
    closeModal: PropTypes.func,
    showModal: PropTypes.func,
    activeModal: PropTypes.bool,
    addToFavorites: PropTypes.func,
    removeFromFavorites: PropTypes.func,
    showButton: PropTypes.bool,
};

OurProduct.defaultProps = {
    className: '',
};
export default OurProduct;