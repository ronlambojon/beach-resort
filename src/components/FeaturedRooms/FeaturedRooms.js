import React from 'react';

import Title from '../Title/Title';
import { RoomContext } from '../../Context';
import Loading from '../Loading/Loading';
import Room from '../Room/Room';

class FeaturedRooms extends React.Component {
  static contextType = RoomContext;

  render() {
    let { featuredRooms: rooms, loading } = this.context;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room}/>
    });

    return (
      <section className='featured-rooms'>
        <Title title='Featured Rooms'/>
        <div className='featured-rooms-center'>
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );  
  }
}

export default FeaturedRooms;