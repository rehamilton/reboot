import React, { Component } from "react";
import Slider from "react-slick";
import SliderContent from './SliderContent'

export default function SimpleSlider ({books, readBooks}) {

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    var readBookIds = readBooks.map(b => b.bookId);

    return (
      <div>
        <Slider {...settings}>
        {books.map((book) => (
            <SliderContent key={book.id || book._id} {...book} read = {readBookIds.includes(book._id)} />
        ))}
        </Slider>
      </div>
    );

}