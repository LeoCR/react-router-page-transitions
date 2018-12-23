import React from 'react';
import {TweenMax} from "gsap";
class DynamicLayout extends  React.Component{
  componentWillMount(){
    setTimeout(() => {
      TweenMax.fromTo(document.querySelector('.page-title'), 1, {x:0,opacity:0}, {x:100,opacity:1});
      TweenMax.fromTo(document.querySelector('.page-content'), 1, {x:0,opacity:0}, {x:100,opacity:1});
    }, 700);
  }
  shouldComponentUpdate(){
    this.setAnimations();
    return true;
  }
  setAnimations=()=>{
    TweenMax.set(document.querySelector('.page-title'), {opacity:0});
    TweenMax.set(document.querySelector('.page-content'), {opacity:0});
    setTimeout(() => {
        TweenMax.fromTo(document.querySelector('.page-title'), 1, {x:0,opacity:0}, {x:100,opacity:1});
        TweenMax.fromTo(document.querySelector('.page-content'), 1, {x:0,opacity:0}, {x:100,opacity:1});
      }, 700);
  }
  componentDidMount(){
    this.setAnimations();
  }
  render(){
    return(
      <div className="page-content">
        <h2 className="page-title">{this.props.title}</h2>
        <p className="page-content">{this.props.content}</p>
      </div>
    );
  }
} 
export default DynamicLayout;