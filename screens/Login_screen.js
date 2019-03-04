import React, {Component} from 'react';
import {View} from 'react-native';
import viewstyle from './View';
import Svg, {ClipPath, Defs, Text as SvgText} from 'react-native-svg';
import {Pen} from './components/Pen/Pen'
import {Bitmap} from './components/Bitmap/Bitmap'
import {Rectangle} from './components/Rectangle/Rectangle'
import {TextField} from './components/TextField/TextField'
export default class Login_screen extends Component{
render(){
return(
<View style={{width:"100%",height:"100%",position:'relative'}}>
<View style = {viewstyle["AA415DD0-B28E-4B18-BD41-1B86A4E0B540"]} id = "AA415DD0-B28E-4B18-BD41-1B86A4E0B540">
<Pen id = "FA689140-5073-4CB5-B30D-8E398B49D484"/>
<Bitmap id = "5C8A18BB-3795-4E35-B1E6-6CF1C79227A8"/>
</View>
<View style = {viewstyle["B43B735D-82E7-45D6-AA40-8C3D8867C1DB"]} id = "B43B735D-82E7-45D6-AA40-8C3D8867C1DB">
<Pen id = "C626B767-DAA6-4BB0-960F-8360FEF45192"/>
</View>
<View style = {viewstyle["9C7F6D6F-B7CD-4287-8477-4868DA462413"]} id = "9C7F6D6F-B7CD-4287-8477-4868DA462413">
<Rectangle id = "E8C804FC-B8FC-45DD-B06E-D93DAFF14056"/>
<TextField text = "E-mail adress" id = "E7ED15F3-739D-4C33-9C62-27CC2967E653"/>
</View>
<View style = {viewstyle["4C1436FD-BB91-4657-86AC-76843A5FE763"]} id = "4C1436FD-BB91-4657-86AC-76843A5FE763">
<Rectangle id = "1727B16F-CC42-4B51-9388-1A8046F01FEA"/>
<TextField text = "Password" id = "17253762-338A-4984-9C6C-8A86D34E8BEA"/>
</View>
<View style = {viewstyle["7D830DB2-6FFD-4ABD-8560-09097AE6806E"]} id = "7D830DB2-6FFD-4ABD-8560-09097AE6806E">
<Rectangle id = "C2CE3282-BBA7-42AF-BC84-8CCD3C745FBD"/>
<TextField text = "Login me" id = "277EA4A4-4CE3-4AB2-B8FB-0F8646735A85"/>
<TextField text = "Don’t have account?  Create it!" id = "8D4F2672-E615-4A8C-9ECD-FF14C50BA4DA"/>
</View>
<View style = {viewstyle["907D8CF6-AC6E-40C7-BF46-D0D6A72D1C71"]} id = "907D8CF6-AC6E-40C7-BF46-D0D6A72D1C71">
<Pen id = "609594E7-9565-422C-981F-F2BD5CCBF067"/>
<Pen id = "E3DA5FA4-FDEA-4B4F-95B1-281EECCBA7B4"/>
<Pen id = "E7D5703A-CB91-440A-8B84-6710BDD1104E"/>
<Pen id = "5447B7C5-8C79-4A28-91E3-2A3489307265"/>
<Pen id = "48054946-D82A-4856-8EC1-EF574A8B1FD3"/>
<Pen id = "78D125A1-B903-4C26-856E-2E49B095E27D"/>
<Pen id = "B1476945-DC01-437F-B26F-00FD57A81704"/>
<Pen id = "52128FE5-81DC-4026-ACC3-FEA22D7FB1C5"/>
</View>
<TextField text = "Compare,
Travel, Save money.
" id = "F5651B74-7FE7-4064-B260-6A8EA6DA3324"/>
</View>
);
}
}