import React from 'react';
import Data from './Data';
import axios from 'axios';

class DataContainer extends React.Component {
 
  componentDidMount(){
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(response =>{
      console.log(response.data.photos)
      
    })
  }

  render(){
    return (
      <Data />
    )
  }
 
}

export default DataContainer;