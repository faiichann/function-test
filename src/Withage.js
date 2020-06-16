import React,{Component} from 'react';

const Withage = (Wrapp) =>{
     class HOC extends Component{
        render(){
            return(
                <div id="hoc-component"><Wrapp {...this.props} age={35} /></div>
            );
        }
    }
    return HOC;
}

export default Withage;