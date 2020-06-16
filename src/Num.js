import React from 'react';
import Withage from './Withage';
import styled from 'styled-components';

export const Input = styled.input`
    height:50px;
    border-radius:10px;
    border-color: sandybrown;
    padding:5px;
    background-color: whitesmoke;
    box-shadow:gray;
    font-size:30px;
    color:rosybrown;
`;
export const P = styled.p`
font-size:40px;
color:rosybrown;

`;
export const Num = props =>(
    <div>
        <P>People who:{props.age} type something...</P>
        <Input style={{ width:"50%",label:"input"}}></Input>
    </div>
);
export default Withage(Num);