import React from 'react';
import {Paper} from "@mui/material";

function CarouselItem(props) {
    return (
        <Paper style={{ background: "inherit"}}>
            <img src={props.item.img} alt={props.item.name} />
            <p style={{color: "white", paddingBottom: "15px"}}>{props.item.name}</p>
        </Paper>
    )
}

export default CarouselItem;