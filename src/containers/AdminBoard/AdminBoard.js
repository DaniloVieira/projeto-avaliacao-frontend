import React, { Component } from 'react';

import { AdminBoardStl } from '../../styles.js'

class AdminBoard extends Component {

    render(){
        return(
            <AdminBoardStl>
                Admin board
                <div>filtro</div>
                <div>lista</div>
            </AdminBoardStl>
        )
    }
}

export default AdminBoard;