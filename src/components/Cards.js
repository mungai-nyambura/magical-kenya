import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/amboseli.jpg'
              text='Explore the Amboseli National Park with Mount Kilimanjaro in the distance'
              label='Amboseli'
              path='/services'
            />
            <CardItem
              src='images/kenya-Maasai-mara.jpg'
              text='Go on a magical safari in Maasai Mara National Reserve'
              label='Maasai Mara'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/david-sheldrick-wildlife-trust-elephant-nursery.jpg'
              text='Who can resist a baby elephant? Get a chance to mingle with impossibly cute baby pachyderms and feel good about supporting an important conservation organization at the same time at the David Sheldrick Wildlife Trust.'
              label='David Sheldrick Wildlife Trust'
              path='/services'
            />
            <CardItem
              src='images/kenya-malindi.jpg'
              text='Get to walk in the sandy beaches of Malindi and swim in the Indian Ocean waters.'
              label='Malindi'
              path='/products'
            />
            <CardItem
              src='images/Chalbi-Desert.jpg'
              text='Ride through the Chalbi Desert on a guided camel tour'
              label='Chalbi Desert'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
