import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';

import { AuthDiv, GridLayout, FormGroup } from '../../styles.js';

class Auth extends Component {
    

    render(){
        return (
            <AuthDiv>
                <form>
                    <GridLayout colNum={1} rowNum={2}>
                        <FormGroup>
                            <input placeholder={'username'}/>              
                        </FormGroup>
                        <FormGroup>
                            <input type={'password'} placeholder={'password'}/>              
                        </FormGroup>
                    </GridLayout>                    
                        <Button type={'primary'}>SUBMIT</Button>                    
                </form>
            </AuthDiv>
        )
    }
}
export default Auth;