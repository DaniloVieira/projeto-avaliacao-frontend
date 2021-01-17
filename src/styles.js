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
    padding: 6px 10px;
    display: block;
    width: 100%;
    box-sizing: border-box;
`;

export const InputStl = styled(InputElement)`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
`;

export const Label = styled.label`
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
    grid-template-columns: 5%  auto  5%;
    grid-template-rows: 5% 25% auto 5%;
`;