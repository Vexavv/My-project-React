import React from 'react';
import ContainerProduct from "../../components/ContainerProduct";
import PropTypes from 'prop-types';


function OurProduct({
                        cards,
                        addToCart,
                        getCard,
                        showModal,
                        closeModal,
                        activeModal,
                        addToFavorites,
                        removeFromFavorites,
                        showButton
                    }) {

    return (
        <div>
            <ContainerProduct showButton={showButton} removeFromFavorites={removeFromFavorites}
                              addToFavorites={addToFavorites} cards={cards} addToCart={addToCart} getCard={getCard}
                              showModal={showModal} closeModal={closeModal} activeModal={activeModal}/>
        </div>

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