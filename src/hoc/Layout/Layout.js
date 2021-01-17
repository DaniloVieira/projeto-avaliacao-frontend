import React, {Component} from 'react';
import { Content } from '../../styles.js';
import Aux from '../_Aux/_Aux';

class Layout extends Component{
    
    render(){
        return (
            <Aux>                
                <Content>
                    This the layout!
                    {this.props.children}
                </Content>
            </Aux>
        );
    }
}

export default Layout;