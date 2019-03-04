import React, {Component} from 'react';
import {View} from 'react-native';
import viewstyle from './View';
import Svg, {ClipPath, Defs, Text as SvgText} from 'react-native-svg';
import {Rectangle} from './components/Rectangle/Rectangle'
import {TextField} from './components/TextField/TextField'
export default class About_Me extends Component{
render(){
return(
<View style={{width:"100%",height:"100%",position:'relative',backgroundColor:'#f1ebfbff'}}>
<View style = {viewstyle["594A7579-92E7-460A-B36A-A9E27C5AF73D"]} id = "594A7579-92E7-460A-B36A-A9E27C5AF73D">
<View style = {viewstyle["2E3BD28F-CF9B-43EC-92BB-F9944392F93C"]} id = "2E3BD28F-CF9B-43EC-92BB-F9944392F93C">
<Rectangle id = "CDAA7D1E-346B-4632-A8BA-8D717DCEE082"/>
</View>
<TextField text = "Hi,
I am Akshay Salekar,
a Product Designer at Media.net. " id = "81C12470-7753-4D8A-8033-91BD9DE39F5C"/>
<TextField text = "I like to make UI Kits and Design Systems and I give them for FREE!" id = "28523B99-8A9B-4316-A32D-1D8B5866CE71"/>
<TextField text = "Do connect with me on" id = "42CF7863-F0E2-462E-96C1-DE0CE95D5FE5"/>
<TextField text = "Dribbble - https://dribbble.com/akshaysalekar" id = "07CA73CE-7E9D-422A-A399-EF1AFE02B312"/>
<TextField text = "Behance - https://www.behance.net/akshaysalekar" id = "90613B01-E44C-4C50-BFE7-D9318B2CA5AE"/>
</View>
</View>
);
}
}