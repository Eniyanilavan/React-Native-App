import React, { Component } from 'react';
import style from './css';
import images from "./images"


export class Bitmap extends Component{
    render(){
        var {Image} = require('react-native');
        return(
            <Image style = {style[this.props.id]}
                source = {{uri:images[this.props.id]}}
            />
        )
    }
}
