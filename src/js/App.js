import React, { Component } from "react";
import ReactDOM from "react-dom";

export class App extends Component {
    render() {
        return (
            <div>Inside App Component</div>
        )
    }
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;