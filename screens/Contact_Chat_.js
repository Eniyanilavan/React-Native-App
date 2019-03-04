import React, {Component} from 'react';
import {View} from 'react-native';
import viewstyle from './View';
import Svg, {ClipPath, Defs, Text as SvgText} from 'react-native-svg';
import {Rectangle} from './components/Rectangle/Rectangle'
import {TextField} from './components/TextField/TextField'
import {Oval} from './components/Oval/Oval'
import {Pen} from './components/Pen/Pen'
export default class Contact_Chat_ extends Component{
render(){
return(
<View style={{width:"100%",height:"100%",position:'relative',backgroundColor:'#f1ebfbff'}}>
<Rectangle id = "43E99472-C2CF-48A0-A697-62AFF4359AE4"/>
<View style = {viewstyle["404C3B1F-FAFA-4EFB-9BEC-5B2FA58A01C5"]} id = "404C3B1F-FAFA-4EFB-9BEC-5B2FA58A01C5">
<View style = {viewstyle["163251EB-AE6E-469C-A5F9-61D51F4BA2CB"]} id = "163251EB-AE6E-469C-A5F9-61D51F4BA2CB">
<View style = {viewstyle["8104B1A2-20F4-4EA4-B72F-979EC9D8894F"]} id = "8104B1A2-20F4-4EA4-B72F-979EC9D8894F">
<Rectangle id = "015E92CC-AF35-4ADC-ADB3-48C0EC2073A7"/>
</View>
</View>
</View>
<Rectangle id = "E9A156BE-4B3C-4345-9D98-9DC4DEF00ADA"/>
<View style = {viewstyle["A8F6A23A-BD6E-4334-84FD-9B300756F575"]} id = "A8F6A23A-BD6E-4334-84FD-9B300756F575">
<Rectangle id = "45549D2D-D684-4419-A9A0-D9ABF7C15ABA"/>
<TextField text = "Pay" id = "3FA1B869-2B8D-4DAF-956F-0AA35917E5A7"/>
<Rectangle id = "F72CA819-9889-41DC-954D-79B87AFADFCB"/>
<TextField text = "Recieve" id = "279649D5-7791-4856-8BAA-82DB4C7B0E60"/>
</View>
<TextField text = "Type Something Here" id = "859F4F67-1322-4A72-9BBE-6377F4289E1B"/>
<Oval id = "FAAD6E57-BC2C-4045-912F-774FBD0BA374"/>
<View style = {viewstyle["E8A5C593-4E16-4C5E-8C5B-D422AD525961"]} id = "E8A5C593-4E16-4C5E-8C5B-D422AD525961">
<View style = {viewstyle["98C9FE21-4ACC-453E-97A5-D59B3E29A5A3"]} id = "98C9FE21-4ACC-453E-97A5-D59B3E29A5A3">
<Pen id = "13672D17-DF8F-409C-989A-B1DBE0B53042"/>
<Pen id = "BF562FC5-E788-4972-82E0-34A9E4B09D4E"/>
</View>
</View>
<Rectangle id = "8FA41950-62E9-43E9-8CE5-CF153D93B1AF"/>
<TextField text = "$35" id = "FC5ECD35-96CF-4BBF-9E12-AAD768C8DB35"/>
<TextField text = "For the movie" id = "DC724BBC-0DFD-44B7-AEAA-44396B7BB5F0"/>
<TextField text = "7th Jan 2019" id = "3C505581-1B77-43C1-A539-4408124266A9"/>
<View style = {viewstyle["5CCDD47D-B306-462D-A46C-A9B543509245"]} id = "5CCDD47D-B306-462D-A46C-A9B543509245">
<TextField text = "Paid" id = "F8F5DA62-183A-41E6-A50E-00F6530AF193"/>
<View style = {viewstyle["0A1B87BC-D6CB-43AE-897F-483EFEB0601D"]} id = "0A1B87BC-D6CB-43AE-897F-483EFEB0601D">
<View style = {viewstyle["A629BEE0-3E8D-41F9-939B-BB7BA40B7E1A"]} id = "A629BEE0-3E8D-41F9-939B-BB7BA40B7E1A">
<Pen id = "E9B43773-19D1-4E42-B9E2-DF0865E58E48"/>
<Pen id = "23B274F8-D62F-4296-A065-475FA64C1CAD"/>
</View>
</View>
</View>
</View>
);
}
}