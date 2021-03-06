import React, {Component} from 'react';
import {View} from 'react-native';
import viewstyle from './View';
import Svg, {ClipPath, Defs, Text as SvgText} from 'react-native-svg';
import {Rectangle} from './components/Rectangle/Rectangle'
import {TextField} from './components/TextField/TextField'
import {Pen} from './components/Pen/Pen'
import {Oval} from './components/Oval/Oval'
export default class Profile extends Component{
render(){
return(
<View style={{width:"100%",height:"100%",position:'relative',backgroundColor:'#f1ebfbff'}}>
<View style = {viewstyle["C8C9EC20-7C69-44A9-B176-90ACC15A84DE"]} id = "C8C9EC20-7C69-44A9-B176-90ACC15A84DE">
<Rectangle id = "A271A61D-2D3B-4824-9A1B-E5BFD3310297"/>
</View>
<TextField text = "Profile Settings" id = "067FB23F-09AA-42E7-87EC-F27F8BCB7D26"/>
<View style = {viewstyle["7DEDE551-363A-4719-88E7-C5CE5EF3FBE2"]} id = "7DEDE551-363A-4719-88E7-C5CE5EF3FBE2">
<View style = {viewstyle["F06F1B08-A900-4D21-B6CF-D57A5F66E67C"]} id = "F06F1B08-A900-4D21-B6CF-D57A5F66E67C">
<Pen id = "F50D8A98-82AC-4362-82FE-9107503775DE"/>
<Pen id = "45462C11-0DC7-4DC7-AEEE-BBD9176C41DC"/>
</View>
</View>
<View style = {viewstyle["6ED68EDA-C261-477B-90F5-84AD401C4667"]} id = "6ED68EDA-C261-477B-90F5-84AD401C4667">
<View style = {viewstyle["C2CD9982-1A43-4213-BB9C-F9423D7D5B48"]} id = "C2CD9982-1A43-4213-BB9C-F9423D7D5B48">
<Pen id = "63E25BF9-2108-4EDD-B243-C588539D2ECC"/>
<Pen id = "8E038D84-9E24-44EF-9B08-61D726A99F34"/>
<Pen id = "414EF546-DA96-462B-8A1B-5301FE4BED02"/>
</View>
</View>
<Oval id = "FA59DC67-CDAA-44F2-924C-AE20CF4377BE"/>
<TextField text = "Augusta F" id = "75C084D6-64D9-4602-91B6-90E68E70F200"/>
<View style = {viewstyle["3525B010-1BFD-4C64-AEE6-B0BB6CAFA1C0"]} id = "3525B010-1BFD-4C64-AEE6-B0BB6CAFA1C0">
<View style = {viewstyle["E43C79CF-2130-4824-8312-578DCD168E61"]} id = "E43C79CF-2130-4824-8312-578DCD168E61">
<View style = {viewstyle["30BA908D-D474-4B01-BDF3-53779AB8F38E"]} id = "30BA908D-D474-4B01-BDF3-53779AB8F38E">
<Pen id = "D486E02F-50A1-4E57-86FF-AF3AA112F5E1"/>
<Pen id = "190FA1BE-4564-4B4B-A26E-C9938EB4B6D4"/>
</View>
</View>
<TextField text = "augusta@yaypay " id = "E568BCC6-1326-4FB6-88E0-DFB48D9CF2E3"/>
</View>
<View style = {viewstyle["5460C65A-BA64-4313-B7A4-74A6134376E7"]} id = "5460C65A-BA64-4313-B7A4-74A6134376E7">
<View style = {viewstyle["A625EF04-DFD0-4733-82A5-64E9A8856840"]} id = "A625EF04-DFD0-4733-82A5-64E9A8856840">
<Pen id = "6391E219-50F8-476F-AEF2-81223B5D5C7D"/>
</View>
</View>
<Pen id = "7CF7F7E5-FF5C-4D58-8B7D-7F6FFF68F565"/>
<Rectangle id = "1BF9FF8D-E0C1-4C04-8334-460DA4A82AE0"/>
<Rectangle id = "51A7EBE1-B797-499A-8514-A6ABA55623F7"/>
<View style = {viewstyle["DE0CEDD3-6DD8-4360-9B2B-0FE15B333332"]} id = "DE0CEDD3-6DD8-4360-9B2B-0FE15B333332">
<Rectangle id = "B0B3452B-72BB-49D1-8BB6-C9D48B29F199"/>
<TextField text = "+ Add" id = "C303140F-CC55-422E-B36C-3F79994059F4"/>
</View>
<TextField text = "Account Info" id = "6740D901-871C-41BA-8267-A45F990904F8"/>
<TextField text = "Privacy & Security" id = "A22A26D6-BACF-4063-91A2-0C0C53115407"/>
<View style = {viewstyle["A095940F-4820-47AB-857C-5DB4D145B211"]} id = "A095940F-4820-47AB-857C-5DB4D145B211">
<TextField text = "Mobile Number" id = "0C3AD1F5-ED31-4A81-B538-AB06FE3E6ABE"/>
<TextField text = "+91 12451 13526" id = "A4BF71C1-E368-433A-957D-531C16C29C02"/>
</View>
<View style = {viewstyle["C968E2DE-2D4C-4380-BB5A-DAA245FF5443"]} id = "C968E2DE-2D4C-4380-BB5A-DAA245FF5443">
<TextField text = "Privacy" id = "214F21B3-A596-4967-88A2-E348B9D03FE7"/>
<TextField text = "Sharing and visiblity" id = "B436A8CD-B051-4F19-9A5A-6ABA7271344F"/>
</View>
<View style = {viewstyle["624E4774-6CEC-4002-AFF0-271C13D9DF44"]} id = "624E4774-6CEC-4002-AFF0-271C13D9DF44">
<TextField text = "Help & Feedback" id = "E1709C86-225B-4207-8E93-B3B2208A94E8"/>
</View>
<View style = {viewstyle["50582EDC-5B9E-4A39-A27E-A6374595480A"]} id = "50582EDC-5B9E-4A39-A27E-A6374595480A">
<View style = {viewstyle["7FB140E8-73E3-4E87-8024-1764AF0B2D8A"]} id = "7FB140E8-73E3-4E87-8024-1764AF0B2D8A">
<Pen id = "75E2DAA9-2FBC-4288-9FF4-EFA12D76B995"/>
<Pen id = "D05E75B0-4E82-46B6-A873-62A949C3795D"/>
</View>
</View>
<View style = {viewstyle["ADDDED4E-A509-4016-8A27-8550E340ACCB"]} id = "ADDDED4E-A509-4016-8A27-8550E340ACCB">
<TextField text = "Terms and Conditions" id = "1F37573F-A532-45B7-A158-952F9BF04154"/>
</View>
<View style = {viewstyle["01B4A7AD-4F3E-47E7-A872-27C12625B6E1"]} id = "01B4A7AD-4F3E-47E7-A872-27C12625B6E1">
<TextField text = "Notifications" id = "DD64EAEF-C60C-4E5B-812B-F5ED239F7B69"/>
<TextField text = "Security" id = "DBB6365A-1267-44E8-9732-B0EF66853E80"/>
<TextField text = "Logout" id = "7A8F32FF-B92B-4CDE-947C-0570723C0ACD"/>
<TextField text = "Turn notifications On/Off" id = "96E1F5A2-D695-413A-AEC2-50EFF27F6EAD"/>
<TextField text = "Security Pin" id = "90EB0252-758D-4326-B100-24E71C28856A"/>
<TextField text = "Logout from YayPay" id = "52D84260-D096-47EE-96F5-7F648AE339AE"/>
</View>
<View style = {viewstyle["F6E8F637-034C-4120-ABA0-5A4BDD025BB1"]} id = "F6E8F637-034C-4120-ABA0-5A4BDD025BB1">
<TextField text = "Bank Account" id = "B7262B48-9AE0-4AC8-9ADF-6C3D8974DC4C"/>
<TextField text = "1273 xxxx xxxx 8771" id = "72FDB664-AFE7-442A-A04B-FD923E2DE257"/>
</View>
<View style = {viewstyle["6C2ABBF2-070F-44F5-A8C3-1B11D0F21047"]} id = "6C2ABBF2-070F-44F5-A8C3-1B11D0F21047">
<TextField text = "Language" id = "C9F88923-779D-4089-8864-0B18F15E1035"/>
<TextField text = "English" id = "02A09294-840B-4A5E-A1F1-0D8D1E35652A"/>
</View>
<View style = {viewstyle["3059E14D-D4EF-4C7E-BCA9-75B7E93C5B42"]} id = "3059E14D-D4EF-4C7E-BCA9-75B7E93C5B42">
<View style = {viewstyle["35462AD5-941A-4050-A4B2-648CE8C132FB"]} id = "35462AD5-941A-4050-A4B2-648CE8C132FB">
<Pen id = "47019D43-DF0D-4A6E-925C-90ED8BF37D1E"/>
<Pen id = "DB0ADF6C-C721-4A3A-B2F4-42AD234086C7"/>
</View>
</View>
<View style = {viewstyle["D009A87B-62BB-4B9B-9548-0764D301D2A8"]} id = "D009A87B-62BB-4B9B-9548-0764D301D2A8">
<View style = {viewstyle["770287AD-CFDF-4157-B5FD-B45BE75D584B"]} id = "770287AD-CFDF-4157-B5FD-B45BE75D584B">
<Pen id = "53A08B88-4997-4558-957D-AF2622C69BAE"/>
<Pen id = "FF4321CA-7EC9-4D75-98CD-3A861A5F1597"/>
</View>
</View>
<View style = {viewstyle["C0523D26-C8F3-4D1B-BF8B-090953A7E49E"]} id = "C0523D26-C8F3-4D1B-BF8B-090953A7E49E">
<View style = {viewstyle["F1424E31-623D-4ED0-829D-C3D28FEC8E77"]} id = "F1424E31-623D-4ED0-829D-C3D28FEC8E77">
<Pen id = "6F03A972-C3B2-40BA-BB43-D5235BA34AC5"/>
<Pen id = "B2E6FDD6-DFD4-45D4-9AF8-2E4811BDAF58"/>
</View>
</View>
<View style = {viewstyle["D475A9C1-2AA1-4D9C-B611-B3FC63D21DAB"]} id = "D475A9C1-2AA1-4D9C-B611-B3FC63D21DAB">
<View style = {viewstyle["CBA93310-3FF7-4E77-8425-DFA25E819B72"]} id = "CBA93310-3FF7-4E77-8425-DFA25E819B72">
<Pen id = "BE92D707-D052-44BB-BDE2-799525D2F577"/>
<Pen id = "BD8D2037-4259-4CF6-998A-37B898757D9D"/>
</View>
</View>
<View style = {viewstyle["114EF4DA-382D-4457-9E36-4ED61089A56E"]} id = "114EF4DA-382D-4457-9E36-4ED61089A56E">
<View style = {viewstyle["B51EF359-156A-466F-89F8-C1CD65E086FC"]} id = "B51EF359-156A-466F-89F8-C1CD65E086FC">
<Pen id = "DD47DDD2-837F-4660-9E71-259B0905956B"/>
<Pen id = "9101A227-06F6-4C29-9054-E2433D723B5C"/>
</View>
</View>
<View style = {viewstyle["2635B507-4E5C-42BD-BBC5-12AA45705DB4"]} id = "2635B507-4E5C-42BD-BBC5-12AA45705DB4">
<Pen id = "2FC1D54E-C79D-48C1-A567-B08A0FEC58C2"/>
</View>
<View style = {viewstyle["02258C8C-3127-451C-AB03-71ECE89C1C20"]} id = "02258C8C-3127-451C-AB03-71ECE89C1C20">
<View style = {viewstyle["3E42C9D3-50F7-4BDD-8E83-5055EE974AE0"]} id = "3E42C9D3-50F7-4BDD-8E83-5055EE974AE0">
<Pen id = "0415BA8A-5D24-41B5-AA08-AAE22BA5F589"/>
<Pen id = "8088006E-E739-456A-B19E-F47A11C1694D"/>
<Pen id = "33F6B41B-434F-47C8-ACC2-0A25DFEF4446"/>
<Pen id = "E0C0135F-CBAF-4491-ADCA-6F389AF7B609"/>
<Pen id = "437EDC7A-F0EE-44C1-900F-BFB678E50723"/>
<Pen id = "86582793-9128-444F-9194-C633F228A7EA"/>
<Pen id = "2CDA84BF-96A8-4222-8CDA-A06378267B7D"/>
<Pen id = "BF2E2930-88BE-490C-9A46-115B5FCF419D"/>
</View>
</View>
<View style = {viewstyle["0A00DFAF-4D53-4ECA-B2C9-AFD914DF7CA3"]} id = "0A00DFAF-4D53-4ECA-B2C9-AFD914DF7CA3">
<Pen id = "404A9946-7B26-4D65-B020-08257945D7A8"/>
</View>
</View>
);
}
}