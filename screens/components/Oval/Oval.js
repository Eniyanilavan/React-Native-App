import React, { Component } from 'react';
import Svg, {Path,Defs,ClipPath} from 'react-native-svg';
import {View, WebView} from 'react-native';
import {Bitmap} from '../Bitmap/Bitmap';
import svg_json from '../svg_json';
import style from './css';
import allpoints from './points';

export class Oval extends Component{
    render(){
        svg = svg_json[this.props.id];
        const firstHtml = '<html><head><style>html, body { margin:0; padding:0; overflow:hidden }</style></head><body>'
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
