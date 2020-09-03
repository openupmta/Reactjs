import React, { Component } from 'react';
import './App.css';
import Nav from './Component/Nav';
import NodeList from './Component/NodeList';
import NodeForm from './Component/NodeForm';
import EditForm from './Component/EditForm';
import { connect } from 'react-redux';



class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <NodeList />
            {this.props.isShow ?  <NodeForm />: <EditForm/>}
          </div>
        </div>
      </div >
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isShow: state.isShowForm
  };
}

export default connect(mapStateToProps)(App)
