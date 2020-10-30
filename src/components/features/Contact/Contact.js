import React from 'react';
import {VisibleContact} from '../../../utils/VisibleContact';

class Contact extends React.Component {

  pickTime(){
    const actualDate = new Date();
    const actualHour = actualDate.getUTCHours();
    return actualHour;
  }

  render(){
    const actualHour = this.pickTime();
    
    return (
      VisibleContact(actualHour)
    );
  }
}
  
export default Contact;