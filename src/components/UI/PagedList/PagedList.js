import React from 'react';

import { PagedListStl } from '../../../styles.js'

const PagesList = (props) => {

    const header = props.header.map(ah =>{
        return (
            <h3 style={{width: '100%'}}>{ah}</h3>
        );
    });

    const data = props.data.map( d => {
        const columns = [];
        for(let key in d){
            columns.push( ( <div style={{width: '100%'}}>{d[key]}</div>));
        }
        return (
            <li style={{display: 'flex'}}>
                {columns}
            </li>
        )
    });

    return (
        <PagedListStl>
            <div style={{display: 'flex', columnGap: '5px', borderBottom: '5px solid red'}}>
                        {/* <h3>PROJETO</h3> <h3>INICIO</h3>  <h3>TOTAL HORAS</h3>  <h3>CONCLUSÃO</h3> */}
                    {header}
            </div>
            <div>
                <ul style={{margin: '0px', padding: '0px', minHeight: '300px'}}>
                    {data}
                    {/* <li style={{display: 'flex'}}>
                        <div>XPTO</div> <div>01/01/2019</div>  <div>750h</div>  <div>30/01/2021</div>
                    </li>
                    <li style={{display: 'flex'}}>
                        <div>XYZ</div> <div>01/01/2018</div>  <div>9000h</div>  <div>30/10/2020</div>  
                    </li> */}
                </ul>                
            </div>
            <div style={{display: 'flex', columnGap: '5px', borderTop: '5px solid red'}}>
               <button>button</button>
            </div>
        </PagedListStl>
    )

}

export default PagesList;