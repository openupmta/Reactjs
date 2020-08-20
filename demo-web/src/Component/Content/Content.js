import React, { Component } from 'react';
import className from 'classnames';
import { ButtonToggle, ButtonGroup,Row } from "reactstrap";
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true
    }
    this.onClickEdit = this.onClickEdit.bind(this); 
    this.onClickSave = this.onClickSave.bind(this);
    // this.renderButton = this.renderButton.bind(this);
    // this.renderFrom = this.renderFrom.bind(this);
  }
  onClickEdit(){
    this.setState(
      {
        status: false
      }
    )
  }
  onClickSave(){
    this.setState(
      {
        status: true
      }
    )
    console.log(this.intermediaries.value);
  }
  renderFrom = () => {
    return (
      <Row>
        <ButtonGroup>
          <input defaultValue={this.props.title} type="text" className="form-control" name="title" ref={(input) =>{this.intermediaries = input}}/>
          <ButtonToggle color="danger" onClick={this.onClickSave}>Save</ButtonToggle>
        </ButtonGroup>
      </Row>
    )
  }
  renderButton = () => {
    return (
      <Row>
        <ButtonGroup>
          <ButtonToggle color="primary" onClick={this.onClickEdit} >Edit</ButtonToggle>
          <ButtonToggle color="warning">Remove</ButtonToggle>
        </ButtonGroup>
      </Row>
    )
  }
  display = () =>{
    if(this.state.status) {
      return this.renderButton();
    }
    else{
      return this.renderFrom();
    }
  }
  render() {
    const { show } = this.props;
    return (
      <div>
        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className={className("col-lg-6", { "order-lg-2": show }, { "order-lg-1": !show })}>
                <div className="p-5">
                  <img className="img-fluid rounded-circle" src={this.props.image} alt="" />
                </div>
              </div>
              <div className={className("col-lg-6", { "order-lg-2": !show }, { "order-lg-1": show })}>
                <div className="p-5">
                  <h2 className="display-4">{this.props.title}</h2>
                  <p> {this.props.children}</p>
                </div>
                {this.display()}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Content;