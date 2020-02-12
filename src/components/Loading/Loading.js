import React from 'react';

import loadingGif from '../../images/gif/loading-arrow.gif';

const Loading = () => (
  <div className='loading'>
    <h4>room data loading...</h4>
    <img src={loadingGif} alt='Room List Loading'/>
  </div>
);

export default Loading;