import React,{Component} from 'react';

const Withage = (Wrapp) =>{
    class HOC extends Component{
        render(){
            return(
                <Wrapp {...this.props} age={35} />
            );
        }
    }
    return HOC;
}

export default Withage;