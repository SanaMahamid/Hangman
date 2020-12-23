import Letter from "./Letter";
import React, { Component } from 'react';

export default class Solution extends Component {
    render(){
        let US = ["_ ", "_ ", "_ " ,"_ "]
        return (<div>
            {US.map(us => (<span>{us}</span>))}
            <div>
            <em>Your ideal mood when coding</em>
            </div>
        </div>)
    }
}