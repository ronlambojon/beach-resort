import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import { RoomContext } from '../Context'; 

import StyledHero from '../components/StyledHero/StyledHero';

import defaultBcg from '../images/room-1.jpeg';

class SingleRoom extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);

    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    }
  }

  static contextType = RoomContext;
  // componentDidMount() {

  // }

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    
    if (!room) {
      return <div className='error'>
                <h3>No such room could be found...</h3>
                <Link to='/rooms' className='btn-primary'>Back to rooms</Link>
             </div>
    }

    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;

    const [ mainImg, ...defaultImg ] = images;

    return (
      <div>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to='/rooms' className='btn-primary'>Back to Rooms</Link>
          </Banner>
        </StyledHero>
        <section className='single-room'>
          <div className='single-room-images'>
            {defaultImg.map((item, i) => {
               return <img key={i} src={item} alt={name}/>
            })}
          </div>
          <div className='single-room-info'>
            <article className='desc'>
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className='info'>
              <h3>Info</h3>
              <h6>price: ${price}</h6>
              <h6>size: {size} SQFT</h6>
              <h6>
                max capacity : {
                  capacity > 1 ? `${capacity} people` : `${capacity} person`
                }
              </h6>
              <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
              <h6>{breakfast && 'free breakfast included'}</h6>
            </article>
          </div>
        </section>
        <section className='room-extras'>
          <h6>extras</h6>
          <ul className='extras'>
            {
              extras.map((item, i) => {
                return <li key={i}>- {item}</li>
              })
            }
          </ul>
        </section>
      </div>
    );
  }
}

export default SingleRoom;