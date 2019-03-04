import React, {Component} from 'react';
import {View} from 'react-native';
import viewstyle from './View';
import Svg, {ClipPath, Defs, Text as SvgText} from 'react-native-svg';
import {Rectangle} from './components/Rectangle/Rectangle'
import {Oval} from './components/Oval/Oval'
import {TextField} from './components/TextField/TextField'
export default class Recieve_Money extends Component{
render(){
return(
<View style={{width:"100%",height:"100%",position:'relative',backgroundColor:'#f1ebfbff'}}>
<View style = {viewstyle["FC9CE9CE-EA9E-48EE-95EA-48817AD48868"]} id = "FC9CE9CE-EA9E-48EE-95EA-48817AD48868">
<View style = {viewstyle["A15C201F-0E4A-46D5-BE46-45086ED4A469"]} id = "A15C201F-0E4A-46D5-BE46-45086ED4A469">
<View style = {viewstyle["8104B1A2-20F4-4EA4-B72F-979EC9D8894F"]} id = "8104B1A2-20F4-4EA4-B72F-979EC9D8894F">
<Rectangle id = "015E92CC-AF35-4ADC-ADB3-48C0EC2073A7"/>
</View>
</View>
</View>
<Oval id = "5F5D5699-AA85-422C-A7C0-D2773D77A3DE"/>
<Oval id = "D5B9D9E3-20C7-41FF-921B-0845A2E5EFC0"/>
<Oval id = "0100ECFA-1F8D-4090-A6F2-C13496FE0A02"/>
<Oval id = "3359C047-4D57-41DE-96E5-399E781B6A40"/>
<Oval id = "2CF1F9D6-219F-48B1-A2F3-BA48CB67B576"/>
<Oval id = "2C4351CB-B8CF-4A6B-9844-9AB81E8EDE7A"/>
<TextField text = "Recieve
Money" id = "F9F1FF13-0CBB-40CD-A015-3FC9DA5338E3"/>
<TextField text = "Searching for Nearby Devices.." id = "6FBE9411-94C7-4680-902B-293B6F8AEEF5"/>
</View>
);
}
}