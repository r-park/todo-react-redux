import React from 'react';
import Slider from 'react-slick';

import './about-carousel.css';
import Img from 'react-image';

class AboutCarousel extends React.Component {
  render() {
    const humans = [{
      name:'גל ברכה',
      img:'http://placekitten.com/550/350?image=4'
    },{
      name:'מתן זוהר',
      img:'http://placekitten.com/550/350?image=8'
    },{
      name:'יונתן רוסאק',
      img:'http://placekitten.com/550/350?image=9'
    },{
      name:'דניאל ברוקס',
      img:'http://placekitten.com/550/350?image=10'
    },{
      name:'אור גרנות',
      img:'http://placekitten.com/550/350?image=15'
    },,{
      name:'רקפת בר סלע',
      img:'http://placekitten.com/550/350?image=11'
    },{
      name:'יערה מסיקה',
      img:'http://placekitten.com/550/350?image=12'
    },{
      name:'הילה זני',
      img:'http://placekitten.com/550/350?image=13'
    },{
      name:'רותם בונדר',
      img:'http://placekitten.com/550/350?image=14'
    }
    ]

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      centerMode: false,
      pauseOnHover: true,
      rtl: true //TODO: On english revert
    };
    return (
      <div className='about-carousel'>
        <Slider {...settings}>
        { 
          humans.map(person => {
            return (
            <div key={person.name}><h3 className='person-name'>{person.name}</h3>
            <Img src={person.img} /></div>)
          })
          }
        </Slider>
      </div>
    );
  }
}

export default AboutCarousel;