import Card from "../CardProduct";
import "./index.scss";
import PropTypes from 'prop-types';
import Button from "../Button";
import Modal from "../Modal"
import {fetchAsyncProduct} from "../../store/productSlice";
import {useSelector, useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import Loader from "../Loader"
import Error from "../Error"
import {closeModal} from "../../store/cardSlice";
import {addToCart} from "../../store/cartSlice";

function ContainerProduct() {

    const dispatch = useDispatch()
    const product = useSelector(state => state.product.product)
    const status = useSelector(state => state.product.status)
    const activeModal = useSelector(state => state.card.activeModal)

    const handlerCloseModal = () => {
        dispatch(closeModal())
    }
    const handlerCart = () => {
        dispatch(addToCart())
        dispatch(closeModal())
    }
    //-------------------------------поиск-------------------------
    const [value, setValue] = useState('')
    const filterProduct = product.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase())
    })
//--------------------------------------------

    useEffect(() => {
        dispatch(fetchAsyncProduct())
    }, [dispatch])

    switch (status) {
        case 'loading':
            return <Loader/>;
        case 'loaded':
            return (
                <div className="Container">
                    <Modal active={activeModal}
                           closeModal={handlerCloseModal}
                           header="Adding an item to the cart"
                           text="Do yuo want add this product to cart?"
                           action={<div><Button
                               btnClass="btn1"
                               text="YES" onClick={handlerCart}/>
                               <Button btnClass="btn1"
                                       text="Cancel"
                                       onClick={handlerCloseModal}
                               />
                           </div>}
                    />
                    <h1 className="Container-title">Our product</h1>
                     {/*необходимо стилизировать инпут или взять из библиотеки*/}
                    <input onChange={(e) => {
                        setValue(e.target.value)
                    }}/>
                    <ul className="Container-list">
                        {filterProduct.map(item => {
                            return <Card key={item.article} item={item} {...item} />
                        })}
                    </ul>
                </div>
            );
        default:
            return <Error error={status}/>
    }
}


ContainerProduct.defaultProps = {
    className: '',
};
export default ContainerProduct;