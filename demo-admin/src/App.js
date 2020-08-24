import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import Table from './Components/Table/Table';
import AddUser from './Components/AddUser/AddUser';
import DataUser from './Components/Data.json';
import { v1 as uuidv1 } from 'uuid';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowButton: true,
      data: DataUser,
      textSearch: ""
    }
    this.getNewUserData = this.getNewUserData.bind(this);
  }
  getTextSearch = (textSearch) => {
    this.setState({
      textSearch: textSearch
    })
  }
  onClickShow = () => {
    this.setState({
      isShowButton: !this.state.isShowButton
    })
  }
  getNewUserData = (item) => {
    var items = this.state.data;
    item.id = uuidv1();
    items.push(item);
    this.setState({
      data: items
    })
  }
  render() {
    const { textSearch } = this.state;
    var results = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(textSearch) !== -1) {
        results.push(item);
      }
    })
    return (
      <div>
        <Header />
        <div className="search">
          <div className="container">
            <div className="row">
              <Search isShow={this.state.isShowButton} onClickButton={() => this.onClickShow()} getTextSearch={(textSearch) => this.getTextSearch(textSearch)} />
              <Table data={results} />
              <AddUser isShow={this.state.isShowButton} add={(item) => this.getNewUserData(item)} />
            </div>
          </div>
          {/* End container */}
        </div>

      </div>
    );
  }
}

export default App;
