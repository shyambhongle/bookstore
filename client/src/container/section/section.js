import React,{Component} from 'react';
import classes from './section.css';
import {connect} from 'react-redux';
import {homeProducts} from './../../action/productAction';
import Slider from "react-slick";
import banner1 from './../../assets/banner1.jpg';
import banner2 from './../../assets/banner2.jpg';
import banner3 from './../../assets/banner3.jpg';
import banner4 from './../../assets/banner4.jpg';


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
          <img src={banner1} style={{width:'100%',height:"100%"}} alt="banner"/>
          </div>
          <div className={[classes.Banner,classes.Box2].join(' ')} >
          <img src={banner2} style={{width:'100%',height:"100%"}} alt="banner"/>
          </div>
          <div className={[classes.Banner,classes.Box3].join(' ')} >
          <img src={banner3} style={{width:'100%',height:"100%"}} alt="banner"/>
          </div>
          <div className={[classes.Banner,classes.Box4].join(' ')} >
          <img src={banner4} style={{width:'100%',height:"100%"}} alt="banner"/>
          </div>
        </Slider>
      </div>
      </div>

      <div className={classes.AwardWinnig}>
      <div className={classes.TagName}>Award Wining</div>
      <Products product={this.props.products.featured}/>
      </div>

      <div className={classes.Limited}>
      <div className={classes.TagName}>Limited Edition</div>
      <Products product={this.props.products.limited}/>
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
