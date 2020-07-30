import React, { Component } from "react";
import Slider from "react-slick";
import SliderContent from './SliderContent'

export default function SimpleSlider ({books}) {


    console.log("books", books);

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
        <Slider {...settings}>
        {books.map((book) => (
            <SliderContent key={book.id || book._id} {...book} />
        ))}
        </Slider>
      </div>
    );

}