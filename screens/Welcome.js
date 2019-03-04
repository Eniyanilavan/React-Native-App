import React, {Component} from 'react';
import {View} from 'react-native';
import viewstyle from './View';
import Svg, {ClipPath, Defs, Text as SvgText} from 'react-native-svg';
import {Rectangle} from './components/Rectangle/Rectangle'
import {Oval} from './components/Oval/Oval'
import {Pen} from './components/Pen/Pen'
export default class Welcome extends Component{
render(){
return(
<View style={{width:"100%",height:"100%",position:'relative',backgroundColor:'#f1ebfbff'}}>
<View style = {viewstyle["6B462A70-6C8E-4970-921C-786DFE529EF2"]} id = "6B462A70-6C8E-4970-921C-786DFE529EF2">
<Rectangle id = "B49D35E0-AE36-48DA-A6EB-CE7948396618"/>
<View style = {viewstyle["36781B04-BBA0-4B0E-8947-1837DE4C29BF"]} id = "36781B04-BBA0-4B0E-8947-1837DE4C29BF">
<Oval id = "6D6D6E52-39FB-4827-AB10-454DD77B4445"/>
<Oval id = "82DBF5FE-9C92-454E-B7F0-DEA1BFB3CB0D"/>
<Oval id = "ECA2A6C3-71E7-428C-A83C-B1EF5E9B6145"/>
<Oval id = "A7A595F9-DBC5-4AD2-9A6C-E207D3E7CD0F"/>
</View>
</View>
<View style = {viewstyle["16846BAA-D8BB-41DA-993D-2021C8EDE9F0"]} id = "16846BAA-D8BB-41DA-993D-2021C8EDE9F0">
<Rectangle id = "373AC8CC-68CC-42AD-A63B-E4F476F768E5"/>
<View style = {viewstyle["A15C2749-A0F6-4A34-9EF2-18069300FE75"]} id = "A15C2749-A0F6-4A34-9EF2-18069300FE75">
<Rectangle id = "AF6B2F49-8EE7-4132-A6BC-DA951D65DC57"/>
<Pen id = "1C362B73-30A8-4FCE-88F3-5698066E2C69"/>
</View>
<Rectangle id = "4A7CCFCB-2C9D-4886-8EB0-DFE0B862F8E0"/>
<Pen id = "EE1836E5-A7C1-4D69-8A8A-46935C8DFCD7"/>
<Pen id = "E632D4B5-66C6-4A7A-9F78-79C79712F4A0"/>
<View style = {viewstyle["738BF11F-C690-45CE-894D-5823B583F9F1"]} id = "738BF11F-C690-45CE-894D-5823B583F9F1">
<Rectangle id = "3F46C67E-CE6A-47B9-943E-ED77BEF983ED"/>
<Pen id = "5DEF4128-29D0-4523-98F1-05273E882A6A"/>
</View>
</View>
</View>
);
}
}