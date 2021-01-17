import styled, { css } from 'styled-components';



export const ButtonStld = styled.button`   
    
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid darkgray;
    border-radius: 3px;
    background:  white;
    color: darkgray;
    cursor: pointer;

    ${props =>
        props.type==='primary' &&
        css`
            color: white;
            background: #369ff5;
            border: 2px solid #369ff5;
        `
    };

    ${props =>
        props.type==='danger' &&
        css`
            color: white;
            background: #fc4744;
            border: 2px solid #fc4744;
            
        `
    };
`;

export const InputElement = styled.input`
    outline: none;
    border: 1px solid #ccc;
    background-color: white;
    margin: 6px 0 6px 0;
    padding: 6px 10px;
    display: block;
    width: 100%;
    box-sizing: border-box;
`;

export const InputStl = styled(InputElement)`
    // width: 100%;
    //padding: 10px;
    //margin: 0px;
    //box-sizing: border-box;
`;

export const FormGroup = styled.div`

    margin-top: 8px;

    input, select, textarea{
        outline: none;
        border: 1px solid #ccc;
        background-color: white;
        //margin: 6px 0 6px 0;
        
        padding: 6px 10px;
        display: block;
        width: 100%;
        -moz-box-sizing: content-box;
        -webkit-box-sizing:content-box;
        box-sizing: border-box;
        height: 30px;
        /* font-family: inherit; 
        font-size: inherit; */
    }

    label{
        font-weight: bold;
        display: block;
    }


    ${props =>
            (props.position != null && props.position.gColStart != null && props.position.gColEnd != null && props.position.gRowStart != null && props.position.gRowEnd != null)
             &&
                css`
                    grid-column-start: ${props.position.gColStart};
                    grid-column-end: ${props.position.gColEnd};
                    grid-row-start: ${props.position.gRowStart};
                    grid-row-end: ${props.position.gRowEnd};
                `
    }
`;

export const LabelStl = styled.label`
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
`;

export const AuthDiv = styled.div`
    margin: 20px auto;
    width: 15%;
    text-align: center;
    box-shadow: 0 2px 3px #ccc;
    border: 1px solid #eee;
    padding: 10px;
    box-sizing: border-box;
    background-color: white;
`;

export const Content = styled.main `
    margin-top: 72px;
    margin-bottom: 12px;
    height: 800px;
    background-color: #e6e6f5;
`;

export const Title = styled.h1`
    color: #f00;
    font-size: ${props => `${props.fontSize}px`};
    span {
        font-size: 12px;
    }
`;

export const TitleSmall = styled(Title)`
    font-style:italic
`;

export const AdminBoardStl = styled.div`
    margin: 20px;
    height: 500px;
    border: 1px solid lightgrey;
    box-shadow: 0 2px 3px #ccc;
    background-color: white;
    display: grid;
        grid-template-columns: 5% 1fr  5%;
        grid-template-rows: 5% 1fr 2fr 5%;
        grid-template-areas: 
            'top       top         top
            upper-left filter-form upper-right
            down-left  result-list down-right
            bottom     bottom       bottom';
    
`;

export const FilterFormStl = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
`;

export const ResultListStl = styled.div`
    grid-column-start: 3;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
`;

export const GridLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.colNum || '1'}, 1fr);
    grid-template-rows: repeat(${props => props.rowNum || '1'}, 2fr) ;
    column-gap: 5px;
    row-gap: 5px;
`;

export const PagedListStl = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr, 3fr, 1fr
`;

