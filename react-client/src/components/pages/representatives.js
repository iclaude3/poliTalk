import React, { Component } from 'react';
import { dataRender } from "./homePage.js";

class Representatives extends Component {
    render() {
        return(
            <div className="container">
                {dataRender}          
            </div>
        )
    }
}

export default Representatives;