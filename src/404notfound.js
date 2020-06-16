import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  /**ส่งprops เชคว่าเป็น primary หรือไม่ให้แสดงผล ถ้าไม่ :  */
  background: ${props => props.primary ? "palevioletred" : "white"}; 
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor:pointer;
 
`

// const Button2 =  styled(Button)`
//   &:hover{
//     background-color: #000;
//     color:#fff;
//   }

// `

class NotFoundPage extends Component{
    state={
        Redirect:false
      }
    render(){
        if (this.state.Redirect){
            return <Redirect to='/'/>
          }
        return(
            <>
            <h1>404 Page Not Found</h1>
            <Button  onClick={()=>this.setState({Redirect:true})}>Home</Button>
            </>
        )
    }
}

export default NotFoundPage