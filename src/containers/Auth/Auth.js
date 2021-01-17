import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import { AuthDiv } from '../../styles.js';
import Button from '../../components/UI/Button/Button'

class Auth extends Component {
    state = {
        controls:{
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Adress'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignup: true
    };    

    render(){

        const formElementsArray = [];
        for (let key in this.state.controls){
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElementsArray.map(formEl => (
            <Input
                key={formEl.id}
                elementType={formEl.config.elementType} 
                elementConfig={formEl.config.elementConfig} 
                value={formEl.config.value} 
                invalid={!formEl.config.valid}
                shouldValidate={formEl.config.validation} 
                touched={formEl.config.touched}
                change={(event) => this.inputChangeHandler(event, formEl.id)}/>
        ));

        return (
            <AuthDiv>
                <form>
                    {form}
                    <Button type={'primary'}>SUBMIT</Button>
                </form>
            </AuthDiv>
        )
    }
}
export default Auth;