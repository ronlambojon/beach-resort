import React from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

import Title from '../Title/Title';

class Services extends React.Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free Cocktails',
        info: 'Sint adipisicing ut deserunt voluptate pariatur cupidatat voluptate dolore labore reprehenderit do et adipisicing sint. Tempor eu aliqua reprehenderit anim enim ipsum cupidatat dolor ex consequat minim do quis esse. Pariatur commodo laboris sunt consectetur magna laborum.'
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info: 'Sint adipisicing ut deserunt voluptate pariatur cupidatat voluptate dolore labore reprehenderit do et adipisicing sint. Tempor eu aliqua reprehenderit anim enim ipsum cupidatat dolor ex consequat minim do quis esse. Pariatur commodo laboris sunt consectetur magna laborum.'
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info: 'Sint adipisicing ut deserunt voluptate pariatur cupidatat voluptate dolore labore reprehenderit do et adipisicing sint. Tempor eu aliqua reprehenderit anim enim ipsum cupidatat dolor ex consequat minim do quis esse. Pariatur commodo laboris sunt consectetur magna laborum.'
      },
      {
        icon: <FaBeer />,
        title: 'Strongest Beer',
        info: 'Sint adipisicing ut deserunt voluptate pariatur cupidatat voluptate dolore labore reprehenderit do et adipisicing sint. Tempor eu aliqua reprehenderit anim enim ipsum cupidatat dolor ex consequat minim do quis esse. Pariatur commodo laboris sunt consectetur magna laborum.'
      }
    ]
  };

  render() {
    const { services } = this.state;

    return (
      <div>
        <section className='services'>
          <Title title='services'/>
          <div className='services-center'>
           {
             services.map((service, i) => (
              <article key={i} className='service'>
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
             )) 
           }
          </div>
        </section>
      </div>
    );
  }
}

export default Services;