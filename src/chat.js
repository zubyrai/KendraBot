import React, { Component } from 'react';
import { render } from 'react-dom';
class KommunicateChat extends Component {
    constructor(props){
    super(props);
}
componentDidMount(){
  
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"395d6c8e96ca1c3f069cb08e461fbd0a1","popupWidget":true,"automaticChatOpenOnNavigation":true, "voiceName":"Google UK English Male"};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
}
render() {
    return (
        <div>
               <h1> Welcome to Middlesex University</h1>
        </div>
    )
}
}
export default KommunicateChat;
