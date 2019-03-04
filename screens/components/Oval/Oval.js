import React, { Component } from 'react';
import {View, WebView} from 'react-native';
import svg_json from '../svg_json';
import style from './css';

export class Oval extends Component{
    render(){
        svg = svg_json[this.props.id];
        const firstHtml = '<html><head><style>html, body { margin:0; padding:0; overflow:hidden;}svg { position:fixed; top:0; left:0; height:100%; width:100% }</style></head><body>'
        const lastHtml = '</body></html>'
        html = firstHtml + svg + lastHtml;
        styles = style[this.props.id];
        console.log(svg);
        return(
            <View style={{...style[this.props.id],backgroundColor:"transparent",borderWidth:0}}>
                <WebView 
                    style={{width: "100%", height: "100%",backgroundColor: "transparent"}}
                    scrollEnabled={false}
                    source = {{html:html}}
                />
            </View>
        )
    }
}
