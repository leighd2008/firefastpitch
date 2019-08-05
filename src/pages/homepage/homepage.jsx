import React from 'react';

import Welcome from '../../components/welcome/welcome'
import Teams from '../../components/all_teams/all_teams'

import './homepage.scss';

const HomePage = () => (
  <div className='homepage'>
    <Welcome />
    <Teams />
  </div>

);

export default HomePage;