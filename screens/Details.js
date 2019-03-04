import React, {Component} from 'react';
import {View} from 'react-native';
import viewstyle from './View';
import Svg, {ClipPath, Defs, Text as SvgText} from 'react-native-svg';
import {TextField} from './components/TextField/TextField'
import {Rectangle} from './components/Rectangle/Rectangle'
import {Oval} from './components/Oval/Oval'
import {Bitmap} from './components/Bitmap/Bitmap'
import {Pen} from './components/Pen/Pen'
export default class Details extends Component{
render(){
return(
<View style={{width:"100%",height:"100%",position:'relative'}}>
<TextField text = "8:30" id = "9A3C2913-52AF-4C13-8CEB-DBFC128AB1B1"/>
<View style = {viewstyle["5E60A8C9-31E2-4AE2-84D3-ECB305F09D55"]} id = "5E60A8C9-31E2-4AE2-84D3-ECB305F09D55">
<Rectangle id = "7358184E-6395-4CC1-B2B9-B78841BBE796"/>
<TextField text = "Book transport" id = "91452304-447F-459B-AF58-087A5B69D365"/>
</View>
<View style = {viewstyle["A148D8DF-C5A2-426F-91A4-7BEE4CA7C953"]} id = "A148D8DF-C5A2-426F-91A4-7BEE4CA7C953">
<TextField text = "Start point:
Poznań" id = "6A537A59-6804-4393-9BC5-317FBE94E5F1"/>
<TextField text = "Destination:
Wrocław" id = "008BA8E2-C600-4B7C-AD3A-7D383BAD8C2D"/>
<TextField text = "Start time:
6:08" id = "4B7BBAB0-27C5-4A67-B67D-711B512CF289"/>
<TextField text = "Finish time:
8:06" id = "259954D2-0C13-4CA3-B57F-78F60AB2A6ED"/>
</View>
<Oval id = "79E37815-EAF5-44A3-851F-059F835820FB"/>
<Oval id = "53B50B50-A910-4E34-8D42-BFCD75350461"/>
<Rectangle id = "852B32E1-79F6-461B-98E8-DF4DD99E53C9"/>
<Rectangle id = "5C2B16A9-868D-44EC-9647-C1A74E716BFC"/>
<Rectangle id = "B6E49680-38C1-43F8-A296-7404DC686C4A"/>
<Rectangle id = "24245EEE-D6F2-4A30-8790-2FEDD601E9D0"/>
<View style = {viewstyle["93911554-A0A5-42AC-8FD7-5E3B1C46A4BD"]} id = "93911554-A0A5-42AC-8FD7-5E3B1C46A4BD">
<Oval id = "214AE518-4A24-4D69-8017-862A9C123BB3"/>
</View>
<TextField text = "Julia Bray" id = "DCA03719-25A9-4271-AD52-726600D3FCFF"/>
<TextField text = "28 years" id = "ED4A6BB9-D811-4FD3-AB2D-D89A42FD97B7"/>
<Bitmap id = "25E0BB4B-4535-4AD0-AE34-BF33350281A9"/>
<View style = {viewstyle["72EF8D31-DF0F-469E-81B5-F05A73148388"]} id = "72EF8D31-DF0F-469E-81B5-F05A73148388">
<Oval id = "C168BC40-2C2B-4BEF-90F9-DD5CF3E55AFB"/>
</View>
<Bitmap id = "5F292DAA-58F9-4DBD-93FC-DDB4A77809D3"/>
<TextField text = "Shared car: Mazda CX-5 " id = "97536536-BCFC-41E0-B62C-E2C2037A47D8"/>
<TextField text = "Transport price:" id = "61E23448-4EE0-45FC-9C04-3467E317EC69"/>
<TextField text = "€ 10,50" id = "0572F80E-698B-4737-A91B-DB084F1B6942"/>
<View style = {viewstyle["20D93EEF-8273-4C26-A988-089812241860"]} id = "20D93EEF-8273-4C26-A988-089812241860">
<TextField text = "Show transports" id = "4588B122-988B-4D90-8A6F-4069672DA9F9"/>
<View style = {viewstyle["8CD97D4A-678B-4EDE-8D1D-AA53B16D37AA"]} id = "8CD97D4A-678B-4EDE-8D1D-AA53B16D37AA">
<Pen id = "5A92D878-4865-4A27-A731-236F3CEA2943"/>
</View>
</View>
<View style = {viewstyle["BB9BA911-8F64-492F-9979-B6CE56B349CF"]} id = "BB9BA911-8F64-492F-9979-B6CE56B349CF">
<Pen id = "0AA823FA-D034-4241-B0AC-2836008DBE60"/>
<Pen id = "849FE132-DFA8-4375-A61A-1EC2194A10C1"/>
<Pen id = "8520A57F-B684-4991-B073-AC9C93561DA5"/>
<Pen id = "12E8675F-A964-4559-A46A-365BD1F6D0E6"/>
<Pen id = "B1414310-1CDD-4AAF-B0AA-339CAFE46C94"/>
<Pen id = "5BE00B72-7CCB-4D0F-B2EC-10E5F224DCA8"/>
<Pen id = "F5A3202C-5801-434A-BB0A-98A4486E5892"/>
<Pen id = "932B64B3-1CCE-4027-85D9-39B76532F198"/>
</View>
</View>
);
}
}