import React from 'react';
import {TweenMax} from "gsap";
class HomeLayout extends  React.Component{
  componentWillMount(){
    setTimeout(() => {
      TweenMax.fromTo(document.querySelector('.page-title'), 1, {x:0,opacity:0}, {x:100,opacity:1});
      TweenMax.fromTo(document.querySelector('.page-content'), 1, {x:0,opacity:0}, {x:100,opacity:1});
    }, 700);
  }
  componentDidMount(){
    TweenMax.set(document.querySelector('.page-title'), {opacity:0});
    TweenMax.set(document.querySelector('.page-content'), {opacity:0});
  }
  render(){
    return(
      <div className="page-content">
        <h2 className="page-title">Home</h2>
        <p className="page-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
      </div>
    );
  }
} 
export default HomeLayout;