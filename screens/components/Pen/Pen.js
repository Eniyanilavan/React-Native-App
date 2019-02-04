import React, { Component } from 'react';
import Svg, {Path} from 'react-native-svg';
import svg_json from '../svg_json';
import {View,WebView} from 'react-native';
import style from './css';
import allpoints from './points';


export class Pen extends Component{
    render(){
        svg = svg_json[this.props.id];
        const firstHtml = '<html><head><style>html, body { margin:0; padding:0; overflow:hidden } svg { position:fixed; top:0; left:0; height:100%; width:100% }</style></head><body>'
        const lastHtml = '</body></html>' ;
        html = firstHtml + svg + lastHtml;
        styles = style[this.props.id];
        return(
            <View style={{...style[this.props.id],backgroundColor:"transparent",borderWidth:0}}>
                <WebView 
                    style={{backgroundColor: "transparent"}}
                    scrollEnabled={false}
                    source = {{html:html}}
                />
            </View>
        )
    }
}
