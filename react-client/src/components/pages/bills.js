import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BILLS_KEY } from "./keys.js";
import { Reps } from "./representatives.js";
import Iframe from 'react-iframe';
import 'tachyons';

// billInfo pushes to dataRender, dataRender calls Title and holds all "titles" objs, then dataRender called to be displayed in render()
// Title variable is what's displayed in webpage
const Title = (props) => {
    function repClick(e) {
        e.preventDefault();
        console.log('The rep was clicked');
    }

    return (
        <div className="flex flex-column black db ma4 mw7 w-50 pa2 br2 ba b--black-10 shadow-1 hover">
            <a href={props.url} target="_blank" className=" billLink title dim w-100">
                <p className="f2 lh-title sumBills">{props.number + ": " + props.shortTitle}</p><br />
                <p className="f4 lh-copy">{props.title}</p>
            </a>
            <div className="h-65 flex">
                <div className="f4 sumMaxHeight lh-copy sumBills bt br bb b--silver w-75 ">
                    <p className="f2 lh-copy">SUMMARY:</p><br />
                    <p className="f3 lh-copy">{props.desc}</p>
                </div>
                <a href="" onClick={repClick} target="_blank" className="f5 lh-copy billLink dim bt bb b--silver w-25">
                    <strong>Sponsor</strong><br /><hr />
                    <p><strong>NAME: </strong>{props.sName}</p>
                    <p><strong>STATE: </strong>{props.sState}</p>
                    <p><strong>TITLE: </strong>{props.sTitle}</p>
                    <p><strong>PARTY: </strong>{props.sParty}</p>
                </a>
            </div>
            <div className="mw9 sumBills mh4 w-100 pa5 tc ">
                <p className="f3 lh-copy">Last action on this bill: </p>
                <p className="f4 lh-copy ma3">{props.action}</p>
                <p className="f6 lh-copy">{props.actionDate}</p>
            </div>
        </div>
    );
}

class bills extends Component {
    constructor() {
        super();
        this.state = {
          data:{},
          bill:{}
        };
    }

    //mayb display invalid search if not one of possible subject categories
    billsAPI(event) {
        
        const url = "https://api.propublica.org/congress/v1/bills/search.json?query=" + event.target.value;
        console.log("bills key", BILLS_KEY);

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
            console.log("api result", this.state.data.results);

            console.log("length", this.state.data.results[0].bills.length);

            for (let i = 0; i < this.state.data.results[0].bills.length; i++) {
                // console.log("title = " + this.state.data.results[0].bills[i].short_title);
                // console.log("short title = " + this.state.data.results[0].bills[i].title);

                let data = {
                    title: this.state.data.results[0].bills[i].title,
                    title_short: this.state.data.results[0].bills[i].short_title,
                    desc: this.state.data.results[0].bills[i].summary,
                    number: this.state.data.results[0].bills[i].number,
                    url: this.state.data.results[0].bills[i].congressdotgov_url,
                    pdf: this.state.data.results[0].bills[i].gpo_pdf_uri,
                    sponsor_name: this.state.data.results[0].bills[i].sponsor_name,
                    sponsor_party: this.state.data.results[0].bills[i].sponsor_party,
                    sponsor_title: this.state.data.results[0].bills[i].sponsor_title,
                    sponsor_state: this.state.data.results[0].bills[i].sponsor_state,
                    sponsor_uri: this.state.data.results[0].bills[i].sponsor_uri,
                    major_action: this.state.data.results[0].bills[i].latest_major_action,
                    action_date: this.state.data.results[0].bills[i].latest_major_action_date
                }

                if(data.desc === "") {
                    data.desc = "No summary for this bill";
                }     

                billInfo.push(data);
            } 

            

            //setting dataRender the values, so dataRender can print onto the website
            for (let i = 0; i < billInfo.length; i++) {
                if (this.state.data.results[0].bills[i].title.substring(0,20) == this.state.data.results[0].bills[i].short_title.substring(0,20) ) {
                    billInfo[i].title = "";
                }

                dataRender.push(<Title idx={i+1} number={billInfo[i].number} title={billInfo[i].title} desc={billInfo[i].desc}
                    shortTitle={billInfo[i].title_short}  url={billInfo[i].url} sName={billInfo[i].sponsor_name} sParty={billInfo[i].sponsor_party}
                    sTitle={billInfo[i].sponsor_title} sState={billInfo[i].sponsor_state} sURI={billInfo[i].sponsor_uri} action={billInfo[i].major_action} 
                    actionDate={billInfo[i].action_date} pdf={billInfo[i].pdf} />);
            }
        }

        return (
            <div className="container">
                <div className="row">
                    <div className = "bigText2"> 
                        <div>
                            Your Stop for Primary Resources, <br />
                            Enter Subject to Search for Top 20 Recent Bills: <br />
                        </div>
                        <input
                            onChange={e => this.billsAPI(e)}
                            type = "text"
                            placeholder="search..."
                            className="h3 text-center flex self-end"
                        />

                        <br />
                        <br /> 
                    </div>

                    <div className="flex flex-wrap tc pa3 pa5-ns">
                        {dataRender}    
                    </div>
                </div>
            </div>
        )
    }
}

export default bills;