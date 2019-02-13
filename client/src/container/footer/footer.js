import React,{Component} from 'react';
import classes from './footer.css';



class Footer extends Component {

  render(){
    return(
      <div className={classes.Footer}>
      <div className={classes.FooterDetails}>
      <div className={classes.Know}>
      <span>Get to Know Us</span>
      <div>About Us</div>
      <div>Careers</div>
      <div>Contact Us</div>
      </div>
      <div className={classes.Help}><span>Let Us Help You</span>
      <div>Your Account</div>
      <div>Returns Centre</div>
      </div>
      <div className={classes.Connect}><span>Connect with Us</span>
      <div>Facebook</div>
      <div>Instagram</div>
      <div>Twitter</div>
      </div>
      </div>

      </div>
    );
  }


}







export default Footer;
