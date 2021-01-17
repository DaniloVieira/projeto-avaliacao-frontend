import React, { Component } from 'react';
import FilterForm from './FilterForm/FilterForm'
import ProjectList from './projectsList/ProjectsList'

import { AdminBoardStl } from '../../styles.js'

class AdminBoard extends Component {

    render(){
        return(
            <AdminBoardStl>                
                <FilterForm/>
                <ProjectList/>
            </AdminBoardStl>
            
        )
    }
}

export default AdminBoard;