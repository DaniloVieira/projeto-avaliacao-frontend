import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';

import { FilterFormStl, GridLayout, FormGroup } from '../../../styles.js';

class FilterForm extends Component {

    state = {
        
    }

    inputChangeHandler(updatedControls){
        this.setState({controls: updatedControls});
    }

    render(){    
        return(
            <FilterFormStl> 
                <form>
                    <GridLayout colNum={2} rowNum={3}>
                        <FormGroup>
                            <label>Project</label>
                            <select>
                                <option/>
                                <option value={1}>X-PTO</option>
                                <option value={2}>A-ZYZ</option>
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <label>Contributor</label>
                            <select>
                                <option/>
                                <option value={1}>Danilo Aguiar</option>
                                <option value={2}>Valentina Thiesen</option>
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <label>Client Name</label>
                            <input />
                        </FormGroup>
                        <FormGroup>
                            <label>Client Name</label>
                            <input />
                        </FormGroup>
                        <FormGroup>
                            <label>Start date</label>
                            <div style={{display:'flex', columnGap: '5px'}}>
                                <input type={'date'}/>
                                <input type={'date'}/>
                            </div>                            
                        </FormGroup>
                    </GridLayout>
                    <GridLayout colNum={2} rowNum={1}>
                        <div>
                            <Button type={'primary'}>SUBMIT</Button>
                        </div>
                    </GridLayout>
                </form>
            </FilterFormStl>            
        )
    }
}

export default FilterForm;