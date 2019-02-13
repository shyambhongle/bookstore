import React,{Component} from 'react';
import classes from './section.css';
import {connect} from 'react-redux';
import {homeProducts} from './../../action/productAction';
import Slider from "react-slick";
import {Link} from 'react-router-dom';

import Products from './../../components/products/products';


class Section extends Component {



componentDidMount(){
this.props.homeProducts();
}




  render(){
    var settings = {
     dots: true,
     autoplay:true
   };
    return(
      <div className={classes.SectionWrapper}>
      <div className={classes.Banner}>
      <div className="container">
        <Slider {...settings}>
          <div className={[classes.Banner,classes.Box1].join(' ')} >
          </div>
          <div className={[classes.Banner,classes.Box2].join(' ')} >
          </div>
          <div className={[classes.Banner,classes.Box3].join(' ')} >
          </div>
          <div className={[classes.Banner,classes.Box4].join(' ')} >
          </div>
        </Slider>
      </div>
      </div>

      <div className={classes.AwardWinnig}>
      <div className={classes.TagName}>Award Wining</div>
      <Products product={this.props.products}/>
      </div>

      <div className={classes.Limited}>
      <div className={classes.TagName}>Limited Edition</div>

      </div>

      <div className={classes.Featured}>
      <div className={classes.TagName}>Featured Author</div>
      </div>
      <div className={classes.BackTop}>Back To Top</div>

      </div>
    );
  }
}

const mapStateToProps=state=>({
  products:state.product,
  cartItems:state.cart
});

export default connect(mapStateToProps,{homeProducts})(Section);
