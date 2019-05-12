import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BILLS_KEY } from "./keys.js";

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
        var billInfo = []; 

        if (this.state.data.results != null) {
            //console.log(this.state.data.results[0].bills); 
            console.log(this.state.data.results[0].bills.length);
            for (let i = 0; i < this.state.data.results[0].bills.length; i++) {
                // billInfo.push(this.state.data.results[0].bills[i].title); 
                // billInfo.push(this.state.data.results[0].bills[i].shortTitle); 

                console.log("title = " + this.state.data.results[0].bills[i].short_title);
                console.log("short title = " + this.state.data.results[0].bills[i].title);

                let data = {
                    title: this.state.data.results[0].bills[i].short_title,
                    desc: this.state.data.results[0].bills[i].title
                }

                billInfo.push(data);
            } 

            for (let i = 0; i < billInfo.length; i++) {
                console.log(billInfo.data.title + " " + billInfo.data.desc);
            }

            // console.log(billInfo.length);
            // for (var a in billInfo) {
            //     console.log("BillInfo: " + a); 
            // }
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
                    </div>
                </div>
            </div>
        )
    }
}

export default bills;