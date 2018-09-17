import React, { Component } from 'react';
import { RightArrow, LeftArrow, Slide } from '../../components';
import './carousel.css';

export default class Slider extends Component {
  constructor() {
    super();

    this.state = {
      images: [
        'Houghton-2017-Carolina-Faruolo-Fanatic-12010119-copy.jpg',
        'Houghton-2017-Carolina-Faruolo-Fanatic-12010500-copy.jpg',
        'Houghton-2017-Carolina-Faruolo-Fanatic-14012448-copy.jpg',
        'Houghton-2017-Carolina-Faruolo-Fanatic-14012605-copy.jpg'
      ],
      currentIndex: 0,
      translateValue: 0
    };

    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.slideWidth = this.slideWidth.bind(this)
  }

  prevSlide() {}

  nextSlide() {

    if (this.state.currentIndex = this.state.images.length - 1) {
       this.setState({
         currentIndex: 0,
         translateValue: 0
       })
    }



    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue = + -(this.slideWidth())
    }));
  }

  slideWidth() {
    return document.querySelector('.slide').clientWidth
  }

  render() {
    return (
      <div
        className="slider"
        style={{
          transform: `translateX(${this.state.translateValue}px)`,
          transition: 'transform ease-out 0.45s'
        }}
      >
        {this.state.images.map((image, index) => (
          <Slide key={index} image={image} />
        ))}

        <LeftArrow prevSlide={this.prevSlide} />
        <RightArrow nextSlide={this.nextSlide} />
      </div>
    );
  }
}
