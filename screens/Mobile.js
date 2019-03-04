import React, {Component} from 'react';
import {View} from 'react-native';
import viewstyle from './View';
import Svg, {ClipPath, Defs, Text as SvgText} from 'react-native-svg';
import {Rectangle} from './components/Rectangle/Rectangle'
import {Pen} from './components/Pen/Pen'
import {TextField} from './components/TextField/TextField'
export default class Mobile extends Component{
render(){
return(
<View style={{width:"100%",height:"100%",position:'relative'}}>
<Rectangle id = "E5763AB6-C34A-4CB9-B0EF-6207C7F4CBB3"/>
</View>
);
}
}