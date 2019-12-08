import React, { Component } from 'react';
import { people } from '../../constants/people';
import { ButtonAsClass as Button } from '../Button/Button';
import { Header } from '../Header/Header';
import { Footer } from "../Footer/Footer";
import Checkbox from '../Checkbox/Checkbox';
import { Input } from '../Input/Input';
import {Form} from "../Form/Form";
import {Switch} from "../Switch/Switch";
import './App.css';

const CN = 'App';

function renderPeopleList() {
  return people.map(person => {
    const { firstName, lastName, avatar, address = 'New York' } = person;

    return (
      <li className="list-item" key={`${firstName} ${lastName}`}>
        <div>{firstName}</div>
        <div>{lastName}</div>
        <img
          src={avatar}
          className="avatar"
          alt={`avatar for ${firstName} ${lastName}`}
        />
        <div>{address}</div>
      </li>
    );
  });
}

class AppTheReal extends Component {
  constructor() {
    super();

    this.greeting = 'Hello, world!';

    this.state = {
      // isChecked: false,
      // inputValue: '',
        display:false,
        isDarkTheme: false,
        showSuccess:false
    };

    // this.onApplyBtnClick = this.onApplyBtnClick.bind(this);
    // this.onCheck = this.onCheck.bind(this);
  }
  //



  // renderActionsBlock() {
  //   return (
  //     <div className="actions-block">
  //       <Button
  //         label="Cancel"
  //         className={`${CN}__cancel ${CN}__btn--error`}
  //         onClick={this.onApplyBtnClick}
  //       />
  //
  //       {/*<Button*/}
  //       {/*  label="Apply"*/}
  //       {/*  className={`${CN}__apply`}*/}
  //       {/*  onClick={this.onApplyBtnClick}*/}
  //       {/*/>*/}
  //     </div>
  //   );
  // }
    toggleHandler=()=>{
        const currentStatus=this.state.display;
    };
  onApplyBtnClick=()=> {
    const {isDarkTheme,currentStatus,display} = this.state;
    this.setState({

        display:!display,
        currentStatus:!currentStatus,
        isDarkTheme: !isDarkTheme

    });
  };

  onFormSubmit= () =>{
      const {showSuccess}=this.setState;

      this.setState({
          showSuccess: true
      })
  };
    renderActionsBlock() {
        return (
            <div className="actions-block">
                <Button
                    label="Cancel"
                    className={`${CN}__btn ${CN}__btn--error`}
                    onClick={this.onApplyBtnClick}
                />

                <Button
                    label="Apply"
                    className={`${CN}__btn`}
                    onClick={this.onApplyBtnClick}
                />
            </div>
        );
    }
  render() {
    const { isChecked, inputValue, isDarkTheme,showSuccess,display} = this.state;
    const { onSubmit} = this.state;
    const greetingElement = (<div className="class-12">{this.greeting}</div>);
    const darkThemeClass = isDarkTheme ? `${CN}__dark` : '';
    console.log('App render');

    const isDisplay1 = display ? `${CN}__green` : `${CN}__red`;
    const isDisplay2 = display ? `${CN}__red` : `${CN}__green`;
    return (

      <div className={`${CN} ${darkThemeClass} `}>
          <Header
          className="App-header"
          showLogo={true}
          >
          <div>this is children of header</div>
          </Header>

          <Form onFormSubmit={this.onFormSubmit}/>

          {showSuccess && <div>All good!</div>}

        {/*  <Footer className="App-footer">*/}
        {/*  </Footer>*/}


          {this.renderActionsBlock()}
          <Button
              label="ON/OFF"
              className={`${CN} ${isDisplay1}`}
              onClick={this.onApplyBtnClick}
          />

          {/*<Button*/}
          {/*    label="OFF"*/}
          {/*    className={`${CN} ${isDisplay2}`}*/}
          {/*    onClick={this.onApplyBtnClick}*/}
          {/*/>*/}
      </div>

    );
  }
}

export default AppTheReal;
