import React, {useState} from 'react';
import Button from "../../components/Button/Button";
import "./Cart.scss"
import Modal from "../../components/Modal/Modal";
import PropTypes from 'prop-types';
import {RiDeleteBin2Line} from "react-icons/ri";
import {useDispatch, useSelector,} from "react-redux";
import {openModal, closeModal} from "../../store/cardSlice";
import {getElement, removeFromCart, incrementQuantity, decrementQuantity} from "../../store/cartSlice";
import {Link} from "react-router-dom";
import {FaMinusSquare, FaPlusSquare} from "react-icons/fa";


function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart)
    const activeModal = useSelector(state => state.card.activeModal)
    const handlerCloseModal = () => {
        dispatch(closeModal())
    }
    //---------Total price-----------------------
    let summa = 0
    cart.forEach(el => {
        summa += Number.parseFloat((el.price * el.qnt))
    })
    //-------------Total cart quantity------------
    const cartTotalQnt = cart.reduce((acc, data) => acc + +(data.qnt), 0);

    return (
        <div className="Cart">
            {!cart.length && <h1>Your cart is empty</h1>}
            <ul className="Cart-list">
                {cart.map((item) => {
                        return <li className="Cart-item" key={item.article}>
                            <div className="Cart-card">
                                <p className="Cart-card_name">{item.name}</p>
                                <img className="Cart-card_avatar" src={item.img}/>

                            </div>
                            <div className="Counter">
                                <FaMinusSquare className="Counter-icon" onClick={() => {
                                    dispatch(decrementQuantity(item))
                                }}/>
                                <span className='Counter-text'>{item.qnt}</span>
                                <FaPlusSquare className="Counter-icon" onClick={() => {
                                    dispatch(incrementQuantity(item))
                                }}/>
                            </div>
                            <span className='Counter-text'>To pay: {(item.price * item.qnt).toFixed(0)} $</span>

                            <RiDeleteBin2Line className="Cart-icon" onClick={() => {
                                dispatch(getElement(item))
                                dispatch(openModal())
                            }}/>


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
                        </li>
                    }
                )}
            </ul>
            {
                cart.length > 0 && <div className='Cart-pay'>
                    <p className='Cart-total'>Total quantity: {cartTotalQnt}</p>
                    <p className='Cart-total'>Total pay: {new Intl.NumberFormat().format(summa)} $</p>
                    <Link to="/buy">
                        <Button btnClass="Buy-button" text="Buy a Product"/>
                    </Link>
                </div>
            }
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