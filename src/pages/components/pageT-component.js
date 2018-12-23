import React,{Component} from 'react';
import {  Link } from "react-router-dom";
import scaleDown from '../../utils/animations/scaleDown';
import scaleUp from '../../utils/animations/scaleUp';
import moveFromRight from '../../utils/animations/moveFromRight';
import moveToRight from '../../utils/animations/moveToRight';
import moveFromLeft from '../../utils/animations/moveFromLeft';
import fadeOut from '../../utils/animations/fadeOut';
class PageTComponent extends Component{
    constructor(props){
        super(props); 
        this.state = {
            transtion: 'move-from-right',
        };
        this.switchPage=this.switchPage.bind(this);
    }
    shouldComponentUpdate(){
        this.switchPage();
        return true;
    }
    switchPage(){
            setTimeout(() => {
                console.log('this.state.transtion= '+ this.state.transtion);
                switch(this.state.transtion){
                    case 'scale-up':
                        moveToRight();
                        scaleUp();
                        break;
                    case 'move-from-right':
                        scaleDown();
                        moveFromRight();
                        break;
                    case 'scale-down-from-left':
                        scaleDown();
                        moveFromLeft();
                        break;
                    case 'fade-from-right':
                        fadeOut();
                        moveFromRight();
                        break;
                    case 'fade-from-left':
                        fadeOut();
                        moveFromLeft();
                        break;
                    default:
                        break;
                }
            }, 100);
    }
    render(){
        return(
            <section id="page-transition-section-container">
                <ul className="nav">
                    <li>
                        <Link to="/scale-up" data-transition="scale-up" onClick={()=>{
                                this.setState({
                                    transtion:'scale-up'
                                })
                        }}>scale-up</Link>
                    </li>
                    <li>
                        <Link to="/move-from-right" 
                            data-transition="move-from-right" onClick={()=>{
                                this.setState({
                                    transtion:'move-from-right'
                                })
                        }}>move-from-right</Link>
                    </li>
                    <li>
                        <Link to="/scale-down-from-left" 
                            data-transition="scale-down-from-left" onClick={()=>{
                                this.setState({
                                    transtion:'scale-down-from-left'
                                })
                        }}>scale-down-from-left</Link>
                    </li>
                    <li>
                        <Link to="/fade-from-right" 
                            data-transition="fade-from-right" onClick={()=>{
                                this.setState({
                                    transtion:'fade-from-right'
                                })
                        }}>fade-from-right</Link>
                    </li>
                    <li>
                        <Link to="/fade-from-left" 
                            data-transition="fade-from-left" onClick={()=>{
                                this.setState({
                                    transtion:'fade-from-left'
                                })
                        }}>fade-from-left</Link>
                    </li>
                    
                </ul>
                <div className="pt-page pt-page--one is-current js-page">{/* <h1 className="pt-page-title">Page transitions with GSAP</h1>*/}</div>
                <div className="pt-page pt-page--two js-page"></div>
            </section>
        );
    }
}
export default PageTComponent;