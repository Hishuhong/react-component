webpackJsonp([13],{35:function(e,n,t){var a=React.createClass({displayName:"Example",showDialog:function(){this.refs.dialog.show()},dialogCancel:function(){RUI.DialogManager.alert("自定义弹出层的取消按钮点击了")},dialogSubmit:function(){RUI.DialogManager.alert("自定义弹出层的确认按钮点击了")},showAlert:function(){RUI.DialogManager.alert("弹出提示","自定义标题",function(){RUI.DialogManager.alert("alert的确定按钮点击了")})},showConfirm:function(){RUI.DialogManager.confirm("真的要删除么？")},showConfirmCustom:function(){RUI.DialogManager.confirm({message:"确定要删除么?",title:"自定义标题",submit:function(){RUI.DialogManager.alert("确定按钮被点击了")}})},render:function(){return React.createElement("div",{className:"example-button"},React.createElement("h2",{className:"title"},"弹出层",React.createElement("span",null,"Dialog")),React.createElement("h3",{className:"sub-title"},"演示"),React.createElement("div",{className:"example"},React.createElement(RUI.Button,{className:"primary",onClick:this.showDialog},"自定义内容"),React.createElement(RUI.Button,{onClick:this.showAlert},"默认Alert"),React.createElement(RUI.Button,{onClick:this.showConfirm},"默认Confirm"),React.createElement(RUI.Button,{onClick:this.showConfirmCustom},"自定义Confirm"),React.createElement(RUI.Dialog,{ref:"dialog",title:"测试标题",buttons:"submit,cancel",onCancel:this.dialogCancel,onSubmit:this.dialogSubmit},React.createElement("div",{style:{width:"240px",wordWrap:"break-word"}},React.createElement("p",null,"在这里可以自定义任何节点和内容")))),React.createElement("h3",{className:"sub-title"},"源码"),React.createElement("div",{className:"source"},React.createElement("textarea",{defaultValue:t(85)})))}});e.exports=a},85:function(e,n){e.exports='var Example = React.createClass({\n    showDialog:function() {\n        this.refs.dialog.show();\n    },\n    dialogCancel:function() {\n        RUI.DialogManager.alert("自定义弹出层的取消按钮点击了");\n    },\n    dialogSubmit:function() {\n        RUI.DialogManager.alert("自定义弹出层的确认按钮点击了");\n    },\n    showAlert:function() {\n        RUI.DialogManager.alert(\'弹出提示\', \'自定义标题\', function() {\n            RUI.DialogManager.alert(\'alert的确定按钮点击了\');\n        });\n    },\n    showConfirm:function() {\n        RUI.DialogManager.confirm(\'真的要删除么？\');\n    },\n    showConfirmCustom:function() {\n        RUI.DialogManager.confirm({\n            message:\'确定要删除么?\',\n            title:\'自定义标题\',\n            submit:function() {\n                RUI.DialogManager.alert(\'确定按钮被点击了\');\n            }\n        });\n    },\n    render:function() {\n        return <div className="example-button">\n            <h2 className="title">弹出层<span>Dialog</span></h2>\n            <h3 className="sub-title">演示</h3>\n            <div className="example">\n                <RUI.Button className="primary" onClick={this.showDialog}>自定义内容</RUI.Button>\n                <RUI.Button onClick={this.showAlert}>默认Alert</RUI.Button>\n                <RUI.Button onClick={this.showConfirm}>默认Confirm</RUI.Button>\n                <RUI.Button onClick={this.showConfirmCustom}>自定义Confirm</RUI.Button>\n\n                <RUI.Dialog ref="dialog" title="测试标题" buttons="submit,cancel" onCancel={this.dialogCancel} onSubmit={this.dialogSubmit}>\n                    <div style={{width:\'240px\', wordWrap:\'break-word\'}}>\n                        <p>在这里可以自定义任何节点和内容</p>\n                    </div>\n                </RUI.Dialog>\n            </div>\n            <h3 className="sub-title">源码</h3>\n            <div className="source">\n                <textarea defaultValue={require(\'raw!./dialog.js\')} />\n            </div>\n        </div>;\n    }\n});\n\nmodule.exports = Example;'}});