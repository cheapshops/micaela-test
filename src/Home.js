import React from "react";
import { connect } from "react-redux";
import "./App.css";
import "./styles/index.scss";
import img1 from "./images/roundel-copy-cat.png"

import * as actions from "./redux/actions";

class Home extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount(){
    this.props.getCategoryRequest();
  }

  render() {
    console.log( this.props.category )
    const{category} = this.props
    return (
      <div id="category">
          <div className="title">{category.title}</div>
          <div className="description">{category.description}</div>
          {
           category.lists && category.lists.map(item => {
               return (
               <div className="item">
                   <div className="item-title">{item.title}</div>
                   {
                       item.items && item.items.map(subItem => {
                            return (
                                <div className="sub-item">
                                    <img src={img1}></img>
                                    <div className="subitem-title">{subItem.title}</div>
                                </div>
                            )
                       })
                   }
                   <div className="clear"></div>
                </div>
               )
           })   
          }
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  category: state.category.categoryList.data || {},
});

const mapDispatchToProps = (dispatch) => ({
  getCategoryRequest: (data) => dispatch(actions.getCategoryRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);