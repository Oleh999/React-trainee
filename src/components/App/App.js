import React, {Component} from 'react';
import {ButtonAsClass as Button} from '../Button/Button';
import {Header} from '../Header/Header';
import {Footer} from "../Footer/Footer";
import {Form} from "../Form/Form";
import './App.css';

const CN = 'App';

class AppTheReal extends Component {
    constructor() {
        super();

        this.state = {
            display: false,
            isDarkTheme: false,
            showSuccess: false
        };
    }

    onApplyBtnClick = () => {
        const {isDarkTheme, currentStatus, display} = this.state;
        this.setState({

            display: true,
            currentStatus: !currentStatus,
            isDarkTheme: true

        });
    };
    onApplyBtn2Click = () => {
        const {isDarkTheme, currentStatus, display} = this.state;
        this.setState({

            display: false,
            currentStatus: !currentStatus,
            isDarkTheme: false

        });
    };

    onFormSubmit = () => {
        const {showSuccess} = this.setState;

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
        const {isDarkTheme, showSuccess, display} = this.state;
        const darkThemeClass = isDarkTheme ? `${CN}__dark` : '';
        const isDisplay1 = display ? `${CN}__green` : `${CN}__red`;
        const isDisplay2 = display ? `${CN}__red` : `${CN}__green`;
        const data=isDarkTheme ?  'Dark':'Light';
        const color=isDarkTheme ?  `${CN}__changeColor`:'';
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


                <Button
                    label="ON"
                    className={`${CN} ${isDisplay1}`}
                    onClick={this.onApplyBtnClick}
                />

                <Button
                    label="OFF"
                    className={`${CN} ${isDisplay2}`}
                    onClick={this.onApplyBtn2Click}
                />
                <div className={`${CN} ${color}`}>
                     {data}
                </div>

                <Footer className="App-footer">
                </Footer>
            </div>

        );
    }
}

export default AppTheReal;
