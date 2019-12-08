import React,{ Component } from 'react';
import {Input} from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";
import {ButtonAsClass} from "../Button/Button";

const CN= 'custom-form';
export class Form extends Component{
    onInputChange = (inputValue) => {
        this.setState({
            inputValue
        });
    };
    onCheck = (e)=> {
        const { isChecked } = this.state;

        this.setState({
            isChecked: !isChecked
        });


    };
    isValid =() =>{
        const {isChecked , inputValue} = this.state;
        return inputValue.length && isChecked;
    };
    onFormSubmit = () => {
        const {showSuccess} = this.state;

        this.setState({
            showSuccess: !showSuccess
        })
    };

    constructor(props){
        super(props);
        this.state = ({
            isChecked: false,
            inputValue: '',
        });

    }

    render() {
        const { inputValue,isChecked } =this.state;
        const {onFormSubmit} = this.props;

        return (
          <form>
              <div>Login Form</div>
              <div className={`${CN}`}>Enter your Name</div>

              <Input
                  className={`${CN}__input`}
                  value={ inputValue }
                  onChange={ this.onInputChange }
              />

              <Checkbox
                  onChange={this.onCheck}
                  className={`${CN}__checkbox`}
                  isChecked={isChecked}
              label="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
              />

              <ButtonAsClass
              label="click me"
              className={`${CN}__btn`}
              onClick={onFormSubmit}
              disabled={!this.isValid()}
              />
          </form>
        );
    }
}
