import React, {Component} from 'react';
import {View} from 'react-native';
import viewstyle from './View';
import Svg, {ClipPath, Defs, Text as SvgText} from 'react-native-svg';
import {Rectangle} from './components/Rectangle/Rectangle'
import {TextField} from './components/TextField/TextField'
export default class Thank_you extends Component{
render(){
return(
<View style={{width:"100%",height:"100%",position:'relative'}}>
<Rectangle id = "546BE558-CFA9-4F86-B462-970552268632"/>
<View style = {viewstyle["2F394D9A-8F9A-4E5F-A998-4E7B367A12D1"]} id = "2F394D9A-8F9A-4E5F-A998-4E7B367A12D1">
<TextField text = "Hey Thanks for downloading!" id = "898BEFC7-E25D-4A57-A3EA-4FF7D394C6FB"/>
<TextField text = "Do leave a tweet tagging me. Your tweet is a motivation to do more of these! :)" id = "B69A0169-ED35-47FE-90D5-0C8C95943B8B"/>
<TextField text = "@saiashwinshekar" id = "88B9773B-0406-4558-8B30-13D03AA1E44D"/>
<TextField text = "Twitter" id = "930B4628-2B57-4501-8911-9F1BDCEA4CB3"/>
</View>
</View>
);
}
}