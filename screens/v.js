import React, {Component} from 'react';
import {View} from 'react-native';
import viewstyle from './View';
import Svg, {ClipPath, Defs, Text as SvgText} from 'react-native-svg';
import {Bitmap} from './components/Bitmap/Bitmap'
export default class v extends Component{
render(){
return(
<View style={{width:"100%",height:"100%",position:'relative',backgroundColor:'#ffffffff'}}>
<Bitmap id = "A5EDA6C6-CA37-4306-944C-6583543F3D01"/>
<Bitmap id = "1DFE2499-0996-4E3A-93A0-278E7DA9BD79"/>
<Bitmap id = "8AB19BA9-6FBC-45A4-A33C-81E0BE34AE43"/>
<Bitmap id = "6869123B-E5C4-48C2-B73F-B346ED51ACC7"/>
<Bitmap id = "BC2EE31F-893A-474E-9A6D-DFCAACE441A7"/>
<Bitmap id = "40BD924F-3137-479C-8F69-9292AB4C95FC"/>
<Bitmap id = "BD41EB14-B847-4A7F-99EF-3F742919F475"/>
<Bitmap id = "8AEE739B-9C88-4A5A-BAB0-AFF08F54EC87"/>
</View>
);
}
}