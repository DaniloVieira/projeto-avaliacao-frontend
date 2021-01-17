import React, { Component } from 'react';
import PagedList from '../../../components/UI/PagedList/PagedList';

import { ResultListStl } from '../../../styles.js';

class ProjectsList extends Component {

    state = {
        header:['PROEJECT', 'START DATE', 'END DATE', 'TOTAL HOURS'],
        data:[
            {
                project:'XPTO',
                startDate: '01/01/2019',
                endDate: '30/01/2021',
                totalHours: 750
            }
        ]
    }

    render(){
       return( 
           <ResultListStl>
               <PagedList header={this.state.header} data={this.state.data}/>
                {/* <div style={{display: 'flex', columnGap: '5px', borderBottom: '5px solid red'}}>
                    <h3>PROJETO</h3> <h3>INICIO</h3>  <h3>TOTAL HORAS</h3>  <h3>CONCLUSÃO</h3>
                </div>
                <ul style={{margin: '0px', padding: '0px'}}>
                    <li style={{display: 'flex'}}>
                        <div>XPTO</div> <div>01/01/2019</div>  <div>750h</div>  <div>30/01/2021</div>
                    </li>
                    <li style={{display: 'flex'}}>
                       <div>XYZ</div> <div>01/01/2018</div>  <div>9000h</div>  <div>30/10/2020</div>  
                    </li>
                </ul>                */}
           </ResultListStl>
        )
    }
}

export default ProjectsList;
