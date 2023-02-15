import React from 'react';
import './SliderAbout.scss'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import CarouselItem from "./CarouselItem";

const team = [
    {
        id: 1,
        img: "./img/img-about/Person1.png",
        name: "Name"
    },
    {
        id: 2,
        img: "./img/img-about/Person2.png",
        name: "Name"
    },
    {
        id: 3,
        img: "./img/img-about/Person1.png",
        name: "Name"
    },
    {
        id: 4,
        img: "./img/img-about/Person3.png",
        name: "Name"
    },
    {
        id: 5,
        img: "./img/img-about/Person2.png",
        name: "Name"
    },
    {
        id: 6,
        img: "./img/img-about/Person1.png",
        name: "Name"
    },
    {
        id: 7,
        img: "./img/img-about/Person3.png",
        name: "Name"
    },
    {
        id: 8,
        img: "./img/img-about/Person2.png",
        name: "Name"
    },
    {
        id: 9,
        img: "./img/img-about/Person1.png",
        name: "Name"
    },
    {
        id: 10,
        img: "./img/img-about/Person3.png",
        name: "Name"
    },
]
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 5,
        slidesToSlide: 3
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3,
        slidesToSlide: 3
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1
    }
};

function SliderAbout(props) {

    return (
        <Carousel responsive={responsive} swipeable={true} showDots={true} rewind={true} autoPlay={true}
                  autoPlaySpeed={3000}
                  keyBoardControl={true}
                  customTransition={'transform 1000ms ease-in-out'}
                  transitionDuration={1000}
        >
            {team.map((item,) => <CarouselItem key={item.id} item={item}/>)}
        </Carousel>
    );
}

export default SliderAbout;