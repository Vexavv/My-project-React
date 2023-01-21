import React from 'react';
import Button from "../../components/Button";
import "./index.scss"
import Modal from "../../components/Modal";
import PropTypes from 'prop-types';
import {RiDeleteBin2Line} from "react-icons/ri";
import {useDispatch, useSelector,} from "react-redux";
import {openModal, closeModal} from "../../store/cardSlice";
import {getElement, removeFromCart} from "../../store/cartSlice";
import {Link} from "react-router-dom";

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart)
    const activeModal = useSelector(state => state.card.activeModal)
    const handlerCloseModal = () => {
        dispatch(closeModal())
    }

    return (
        <div className="Cart">
            {!cart.length && <h1>Your cart is empty</h1>}
            <ul className="Cart-list">
                {cart.map((item) => {
                    return <li className="Cart-item" key={item.article}>
                        <div className="Card">
                            <p className="Card-name">{item.name}</p>
                            <img className="Card-avatar" src={item.img}/>
                            <p className="Card-info"> Price: {item.price} $</p>
                            <p className="Card-info"> Article: {item.article}</p>
                            <p className="Card-info"> Color: {item.color}</p>
                            <Modal active={activeModal}
                                   closeModal={handlerCloseModal}
                                   header="Delete"
                                   text="Delete from cart?"
                                   action={<div><Button onClick={() => {
                                       dispatch(removeFromCart(item.article))
                                       dispatch(closeModal())
                                   }}
                                                        btnClass="btn1"
                                                        text="YES"/>
                                       <Button btnClass="btn1"
                                               text="Cancel"
                                               onClick={handlerCloseModal}/>
                                   </div>}/>
                        </div>
                        <RiDeleteBin2Line className="Cart-icon" onClick={() => {
                            dispatch(getElement(item))
                            dispatch(openModal())
                        }}/>
                    </li>
                })}
            </ul>
            {cart.length > 0 && <Link to="/buy"><Button btnClass="Buy-button" text="Buy a Product"/></Link>}

        </div>
    );
}

Cart.propTypes = {
    closeModal: PropTypes.func,
    showModal: PropTypes.func,
    activeModal: PropTypes.bool,
    cart: PropTypes.array,
    deleteCard: PropTypes.func,
};

Cart.defaultProps = {
    className: '',
};


export default Cart;