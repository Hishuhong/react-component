webpackJsonp([2],{52:function(t,e,l){var n=React.createClass({displayName:"Example",render:function(){return React.createElement("div",{className:"example-tooltip"},React.createElement("h2",{className:"title"},"提示",React.createElement("span",null,"Tooltip")),React.createElement("h3",{className:"sub-title"},"演示"),React.createElement("div",{className:"example"},React.createElement("div",null,React.createElement(RUI.Button,null,React.createElement("span",null,"上方Tooltip"),React.createElement(RUI.Tooltip,{align:"top-center"},"Tooltip"))),React.createElement("div",null,React.createElement(RUI.Button,null,React.createElement("span",null,"下方Tooltip"),React.createElement(RUI.Tooltip,{align:"bottom-center"},"Tooltip"))),React.createElement("div",null,React.createElement(RUI.Button,null,React.createElement("span",null,"左方Tooltip"),React.createElement(RUI.Tooltip,{align:"middle-left"},"Tooltip"))),React.createElement("div",null,React.createElement(RUI.Button,null,React.createElement("span",null,"右方Tooltip"),React.createElement(RUI.Tooltip,{align:"middle-right"},"Tooltip"))),React.createElement("div",null,React.createElement(RUI.Button,null,React.createElement("span",null,"左上方Tooltip"),React.createElement(RUI.Tooltip,{align:"top-left"},"Tooltip"))),React.createElement("div",null,React.createElement(RUI.Button,null,React.createElement("span",null,"右上方Tooltip"),React.createElement(RUI.Tooltip,{align:"top-right"},"Tooltip"))),React.createElement("div",null,React.createElement(RUI.Button,null,React.createElement("span",null,"左下方Tooltip"),React.createElement(RUI.Tooltip,{align:"bottom-left"},"Tooltip"))),React.createElement("div",null,React.createElement(RUI.Button,null,React.createElement("span",null,"右下方Tooltip"),React.createElement(RUI.Tooltip,{align:"bottom-right"},React.createElement("span",{style:{color:"#d90000"}},"this is a html block"))))),React.createElement("h3",{className:"sub-title"},"源码"),React.createElement("div",{className:"source"},React.createElement("textarea",{defaultValue:l(102)})))}});t.exports=n},102:function(t,e){t.exports='var Example = React.createClass({\r\n    render:function() {\r\n        return <div className="example-tooltip">\r\n            <h2 className="title">提示<span>Tooltip</span></h2>\r\n            <h3 className="sub-title">演示</h3>\r\n            <div className="example">\r\n                <div><RUI.Button>\r\n                    <span>上方Tooltip</span>\r\n                    <RUI.Tooltip align="top-center">Tooltip</RUI.Tooltip>\r\n                </RUI.Button></div>\r\n                <div><RUI.Button>\r\n                    <span>下方Tooltip</span>\r\n                    <RUI.Tooltip align="bottom-center">Tooltip</RUI.Tooltip>\r\n                </RUI.Button></div>\r\n                <div><RUI.Button>\r\n                    <span>左方Tooltip</span>\r\n                    <RUI.Tooltip align="middle-left">Tooltip</RUI.Tooltip>\r\n                </RUI.Button></div>\r\n                <div><RUI.Button>\r\n                    <span>右方Tooltip</span>\r\n                    <RUI.Tooltip align="middle-right">Tooltip</RUI.Tooltip>\r\n                </RUI.Button></div>\r\n                <div><RUI.Button>\r\n                    <span>左上方Tooltip</span>\r\n                    <RUI.Tooltip align="top-left">Tooltip</RUI.Tooltip>\r\n                </RUI.Button></div>\r\n                <div><RUI.Button>\r\n                    <span>右上方Tooltip</span>\r\n                    <RUI.Tooltip align="top-right">Tooltip</RUI.Tooltip>\r\n                </RUI.Button></div>\r\n                <div><RUI.Button>\r\n                    <span>左下方Tooltip</span>\r\n                    <RUI.Tooltip align="bottom-left">Tooltip</RUI.Tooltip>\r\n                </RUI.Button></div>\r\n                <div><RUI.Button>\r\n                    <span>右下方Tooltip</span>\r\n                    <RUI.Tooltip align="bottom-right"><span style={{color:\'#d90000\'}}>this is a html block</span></RUI.Tooltip>\r\n                </RUI.Button></div>\r\n            </div>\r\n            <h3 className="sub-title">源码</h3>\r\n            <div className="source">\r\n                <textarea defaultValue={require(\'raw!./tooltip.js\')} />\r\n            </div>\r\n        </div>;\r\n    }\r\n});\r\n\r\nmodule.exports = Example;'}});