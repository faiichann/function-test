import React from 'react';
import Withage from './Withage';
import styled from 'styled-components';

export const H1 = styled.h1`
color: salmon;
font-size:35px;
text-shadow: pink;
`;

 export const Show = props =>(
    <div>
        <H1>HOC I am {props.age} year old.</H1>
    </div>
);

// const WrappCompopnent = Age(Show);



export default Withage(Show);




