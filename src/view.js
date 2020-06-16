import React, { Component } from 'react';
import * as R from 'ramda';
// import {Icon,ProgressBar} from '@appman/seles';

export const add = R.add(2)
const dec = R.subtract(R.__, 10)
const de = R.subtract(5)
const dec1 = R.subtract(10, R.__)
const double = x => x * 51
const arr = []

console.log(R.isEmpty(arr))

class View extends Component {
  render() {
    return (
      <div>
        {/* <Icon type="add" color="salmon" />  
    <ProgressBar percent={20} /> */}
        <h1>Hello:{this.props.username}</h1>
        <h1>Ramda add : {add(10)}</h1>
        <h1>Ramda subtract*2 : {dec(dec(100))}</h1>
        <h1>Ramda subtract*1 : {de(20)}</h1>
        <h1>Ramda subtract : {dec1(100)}</h1>
        <h1>Ramda MAP : {R.join(' | ', R.map(double, [23, 45, 2, 1]))}</h1>


      </div>
    )
  }
}

export default View;