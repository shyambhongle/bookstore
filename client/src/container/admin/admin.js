import React from 'react';
import Header from './header/header';
import Section from './section/section'

const Admin =(props)=>{
  console.log(props.history);
  return (
    <div>
      <Header/>
      <Section/>
    </div>
  );
}



export default Admin;
