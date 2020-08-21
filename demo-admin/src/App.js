import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import Table from './Components/Table/Table';
import AddUser from './Components/AddUser/AddUser';
import DataUser from './Components/Data.json';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowButton: true,
      data: DataUser
    }
  }
  onClickShow = () => {
    this.setState({
      isShowButton: !this.state.isShowButton
    })
  }
  render() {
    return (
      <div>
        <Header />
        <div className="search">
          <div className="container">
            <div className="row">
              <Search isShow={this.state.isShowButton} onClickButton={() => this.onClickShow()} />
              <Table data={this.state.data}/>
              <AddUser isShow={this.state.isShowButton}/>
            </div>
          </div>
          {/* End container */}
        </div>

      </div>
    );
  }
}

export default App;
