import React from  'react';
import classes from './categories.css';
import {connect} from 'react-redux';
import {categoryAction} from './../../../action/searchAction';
import {withRouter} from 'react-router-dom';

const Categories=(props)=>{
  
    return(
      <div className={classes.Wrapper}>
      <div className={classes.Container}>
      <span onClick={(e)=>{props.categoryAction(e,props.history)}}>Art</span>
      <span onClick={(e)=>{props.categoryAction(e,props.history)}}>Acadmeics</span>
      <span onClick={(e)=>{props.categoryAction(e,props.history)}}>Biography</span>
      <span onClick={(e)=>{props.categoryAction(e,props.history)}}>Business</span>
      <span onClick={(e)=>{props.categoryAction(e,props.history)}}>Children</span>
      <span onClick={(e)=>{props.categoryAction(e,props.history)}}>Cookery</span>
      <span onClick={(e)=>{props.categoryAction(e,props.history)}}>Drama</span>
      </div>
      <div className={classes.Container}>
      <span onClick={(e)=>{props.categoryAction(e,props.history)}}></span>
      <span onClick={(e)=>{props.categoryAction(e,props.history)}}>Environment</span>
      <span onClick={(e)=>{props.categoryAction(e,props.history)}}>Fiction</span>
      <span onClick={(e)=>{props.categoryAction(e,props.history)}}>History</span>
      <span onClick={(e)=>{props.categoryAction(e,props.history)}}>Language</span>
      <span onClick={(e)=>{props.categoryAction(e,props.history)}}>Lifestyle</span>
      <span onClick={(e)=>{props.categoryAction(e,props.history)}}>Literature</span>
      </div>
      <div className={classes.Container}>
      <span onClick={(e)=>{props.categoryAction(e,props.history)}}>Medicine</span>
      <span onClick={(e)=>{props.categoryAction(e,props.history)}}>Music</span>
      <span onClick={(e)=>{props.categoryAction(e,props.history)}}>Photography</span>
      <span onClick={(e)=>{props.categoryAction(e,props.history)}}>Politics</span>
      <span onClick={(e)=>{props.categoryAction(e,props.history)}}>Personal Development</span>
      <span onClick={(e)=>{props.categoryAction(e,props.history)}}>Sports</span>
      <span onClick={(e)=>{props.categoryAction(e,props.history)}}>Technology</span>
      <span onClick={(e)=>{props.categoryAction(e,props.history)}}>Travel</span>
     </div>
      </div>
    );
}


export default connect(null,{categoryAction})(withRouter(Categories));
