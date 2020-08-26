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
      data: [],
      textSearch: "",
      editUserStatus: false,
      userEditObject: {}
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
    localStorage.setItem("userData",JSON.stringify(items));
  }
  editUser = (user) => {
    
    this.setState({
      userEditObject: user
    })
  }
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }
  getUserEditInfo = (info) => {
    this.state.data.forEach((value) => {
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    });
    localStorage.setItem("userData",JSON.stringify(this.state.data));
  }
  deleteButtonApp = (idUser) => {
    const result = this.state.data.filter(i => i.id !== idUser);
    this.setState({
      data:result
    })
    // Delete in localStorage
    localStorage.setItem("userData",JSON.stringify(result));
  }
  //Khi render thi se chay willmout trc 
  componentWillMount(){
    if(localStorage.getItem("userData") === null){
      localStorage.setItem("userData",JSON.stringify(DataUser));
    }
    else{
      var temp = JSON.parse(localStorage.getItem("userData"));
      this.setState({
        data: temp
      })
    }
  }
  render() {
    localStorage.setItem("userData", JSON.stringify(this.state.data));
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
              <Search
              getUserEditInfo = {(info) => this.getUserEditInfo(info)}
                userEditObject={this.state.userEditObject}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                editUserStatus={this.state.editUserStatus}
                isShow={this.state.isShowButton}
                onClickButton={() => this.onClickShow()}
                getTextSearch={(textSearch) => this.getTextSearch(textSearch)} />
              <Table
              deleteButtonApp = {(idUser) => this.deleteButtonApp(idUser)}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                data={results}
                editUser={(user) => this.editUser(user)} />
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
