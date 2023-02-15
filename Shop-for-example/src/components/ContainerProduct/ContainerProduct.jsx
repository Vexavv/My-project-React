import Card from "../CardProduct/CardProduct";
import "./ContainerProduct.scss";
import PropTypes from 'prop-types';
import Button from "../Button/Button";
import Modal from "../Modal/Modal"
import {fetchAsyncProduct} from "../../store/productSlice";
import {useSelector, useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import Loader from "../Loader/Loader"
import Error from "../Error/Error"
import {closeModal, changeModuleList, changeModule} from "../../store/cardSlice";
import {addToCart} from "../../store/cartSlice";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import {alpha, styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import ToggleButtons from "../ToggleButtons/ToggleButtons";

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

function ContainerProduct() {

    const dispatch = useDispatch()
    const product = useSelector(state => state.product.product)
    const status = useSelector(state => state.product.status)
    const activeModal = useSelector(state => state.card.activeModal)
    const module = useSelector(state => state.card.module)

    const handlerCloseModal = () => {
        dispatch(closeModal())
    }
    const handlerCart = () => {
        dispatch(addToCart())
        dispatch(closeModal())
    }
    //-------------------------------search-------------------------
    const [value, setValue] = useState('')
    const filterProduct = product.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase())
    })
//--------------------------------------------
// --------------- change list-----------------
    const handlerChangeModule = () => {
        dispatch(changeModule())
    }
    const handlerChangeModuleList = () => {
        dispatch(changeModuleList())
    }

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
                           </div>}/>
                    <h1 className="Container-title">Our product</h1>
                    <div className='Search'>
                        <Search >
                            <SearchIconWrapper>
                                <SearchIcon/>
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{'aria-label': 'search'}}
                                onChange={(e) => {
                                    setValue(e.target.value)
                                }}/>
                        </Search>
                        <ToggleButtons changeModuleList={handlerChangeModuleList} changeModule={handlerChangeModule}/>
                    </div>
                    <ul className={module ? "Container-list" : 'Container-module'}>
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