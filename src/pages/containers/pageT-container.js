import React,{Component} from 'react';
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import PageTComponent from '../components/pageT-component'; 
import HomeLayout from '../components/home';
import DynamicLayout from '../components/dynamicLayout';

class PageTContainer extends Component{
    render(){
        return(
                <Router>
                    <div className="pt">
                            <PageTComponent /> 
                            <Switch location={window.location}> 
                                <Route exact path="/" render={() => <HomeLayout/> } />
                                <Route exact path="/react-router-page-transitions/" render={() => <HomeLayout/> } />
                                <Route exact path="/scale-down-from-left" render={() => <DynamicLayout title="scale-down-from-left" content="Lorem Ipsum is simply dummy text of the printing and typesetting"/> } />
                                <Route exact path="/move-from-right" render={() => <DynamicLayout title="move-from-right" content="Lorem Ipsum is simply dummy text of the printing and typesetting"/> } /> 
                                <Route exact path="/scale-up" render={() => <DynamicLayout title="scale-up" content="Lorem Ipsum is simply dummy text of the printing and typesetting"/> } />
                                <Route exact path="/fade-from-right" render={() => <DynamicLayout title="fade-from-right" content="Lorem Ipsum is simply dummy text of the printing and typesetting"/> } />
                                <Route exact path="/fade-from-left" render={() => <DynamicLayout title="fade-from-left" content="Lorem Ipsum is simply dummy text of the printing and typesetting"/> } />
                                
                            </Switch> 
                    </div>
                </Router>
        );
    }
}
export default PageTContainer;
