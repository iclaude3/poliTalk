import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BILLS_KEY } from "./keys.js";
import 'tachyons';

// billInfo pushes to dataRender, dataRender calls Title and holds all "titles" objs, then dataRender called to be displayed in render()
// Title variable is what's displayed in webpage
const Title = (props) => {
    return (
        <div className="billCol">
            <p>{props.idx + ") " + props.number + ": " + props.title}</p>
            <p>{props.desc}</p>
            <br />
        </div>
    );
}

class bills extends Component {
    constructor() {
        super();
        this.state = {
          data:{}
        };
    }

    //mayb display invalid search if not one of possible subject categories
    billsAPI(event) {
        
        const url = "https://api.propublica.org/congress/v1/bills/search.json?query=" + event.target.value;

        fetch(url, {
            mode: "cors",
            credentials: "same-origin",
            headers: {
              "X-API-Key": BILLS_KEY
            },
            redirect: "follow",
            referrer: "no-referrer"
          })
          .then(response => {
            if (response.status === 200) {
              console.log("response ok");
              return response.json();
            }
            else {
              console.log("There was an error", response.status, response);
              return response.json();
            }
          })
          .then(response => {
            this.setState({ data: response }); 
          });
    }

    render() {
        //will include in program the values we want to print onto website 
        var billInfo = []; 
        var dataRender = []; 

        //getting values from state, and putting them in billInfo
        if (this.state.data.results != null) {

            for (let i = 0; i < this.state.data.results[0].bills.length; i++) {
                // console.log("title = " + this.state.data.results[0].bills[i].short_title);
                // console.log("short title = " + this.state.data.results[0].bills[i].title);

                let data = {
                    title: this.state.data.results[0].bills[i].short_title,
                    desc: this.state.data.results[0].bills[i].title,
                    number: this.state.data.results[0].bills[i].number
                }

                billInfo.push(data);
            } 

            //setting dataRender the values, so dataRender can print onto the website
            for (let i = 0; i < billInfo.length; i++) {
                if (this.state.data.results[0].bills[i].title.substring(0,20) == this.state.data.results[0].bills[i].short_title.substring(0,20) ) {
                    billInfo[i].title = "";
                }

                dataRender.push(<Title idx={i+1} number={billInfo[i].number} title={billInfo[i].title} desc={billInfo[i].desc} />);
            }
        }

        return (
            <div className="container">
                <div className="row">
                    <div className = "bigText1"> 
                        Your stop for primary resources, <br />
                        Enter subject to search for top 20 bills:
                        <input
                            onChange={e => this.billsAPI(e)}
                            type = "text"
                            placeholder="search..."
                            className="text-center"
                        />

                        <br />
                        <br /> 
                    </div>

                    <div className="">
                        {dataRender}    
                    </div>
                </div>
            </div>
        )
    }
}

export default bills;