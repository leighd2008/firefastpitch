import React from 'react';

import Team from '../team/team';
import './all_teams.scss'


class Teams extends React.Component {
  constructor() {
    super();

    this.state = {
      teams : [{
        title: 'Fire 14U',
        imageUrl: 'https://images.unsplash.com/photo-1507245991864-a005497bdab8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        id: 1,
        linkUrl: 'Fire_14U'
      },
      {
        title: 'Fire 12U',
        imageUrl: 'https://images.unsplash.com/photo-1553270040-8e90b62a94f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        id: 2,
        linkUrl: 'Fire_12U'
      },
      {
        title: 'Fire 10U',
        imageUrl: 'https://images.unsplash.com/photo-1508802551395-fbecf2af43b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        id: 3,
        linkUrl: 'Fire_10U'
      },
      {
        title: 'Fire 8U',
        imageUrl: 'https://images.unsplash.com/photo-1535480436112-07697fcbcbea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        id: 4,
        linkUrl: 'Fire_8U'
      }]
    }
  }

  render() {
    return(
      <div className='team-menu'>
        {this.state.teams.map(({ id, ...otherTeamProps}) => (
            <Team key={id} {...otherTeamProps} />
          ))}
      </div>
    )
  }
}

export default Teams;