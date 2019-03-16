import React, { Component } from "react";
import ".";
import * as actionCreators from "../../store/actions";
import "antd/dist/antd.css";
import {connect} from "react-redux";
import Icon from "antd/lib/icon"

import { List, Avatar } from 'antd';


class App extends Component {

  componentDidMount(){
    this.props.dispatch(actionCreators.getSoupDataFromAPI())
    {console.log(this.props)}
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <div>
          {this.props.loading ? <Icon type="loading" />: 
        <ul>
          {this.props.products.map((data)=>{
            return (
              <List key={data.id}>
               <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src="http://lorempixel.com/400/200/food/" />}
                    title={<a href="##">{data.title}</a>}
                    description={data.description}
                  />
                </List.Item>
              
              </List>
            )
              
            
          })}
        </ul>
        }
        </div>
      </div>
    );
  }
} 


const mapStateToProps=(state)=>{
  return {
    products:state.products,
    isLoading:state.isLoading
  }
 
}

export default connect(mapStateToProps)(App);
