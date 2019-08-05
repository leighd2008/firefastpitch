import React from 'react';
import { withRouter } from 'react-router-dom';

import './team.scss'

const Team = ({ title, imageUrl, history, linkUrl, match }) => (
  <div 
    className='team'
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div 
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
    </div>
  </div>
)

export default withRouter(Team);