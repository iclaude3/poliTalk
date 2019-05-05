import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GOOGLE_KEY } from "./keys.js";
import { dataRender } from "./civicAPI.js";

function OfficialName(props) {
  return (
    <div class="row">
      <img class="col" src={props.image} alt="<No image>" height="100" width="100" />
      <div class="col">
        <p><strong>Candidate:</strong> {props.name}</p>
        <p><strong>Party:</strong> {props.party}</p>
        <p><strong>Office(s):</strong> {props.office}</p>
      </div>
      <hr />
    </div>
  );
}

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      data:{}
    };
  }

  civicAPI(event) {
    if (event.target.value.length != 5) {
      this.setState({ data: [] });
      return (
        <div>
          <p>No Result</p>
        </div>
      );
    }

    const url ="https://www.googleapis.com/civicinfo/v2/representatives?address=" +
    event.target.value +
    "&key=" + GOOGLE_KEY;

    console.log("URL", url);

    fetch(url, {
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Tyle": "application/json; charset=utf-8"
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
        dataRender.splice(0,dataRender.length);
        return response.json();
      }
    })
    .then(response => {
      this.setState({ data: response });
    });
  }

  render() {

    /*Representative data*/
    var data = [];
    var office = [];
    // console.log(this.state.data);
    if(this.state.data.offices != null) {
      office = this.state.data.offices.map(obj => {
        let data = {
          name: obj.name,
          officialIndices: obj.officialIndices
        };
        return data;
      });
      console.log(office);
    }
    for (var key in this.state.data.officials) {
      data.push(this.state.data.officials[key]);
    }
    //Add Office to data
    for(let j = 0; j < office.length; j++) {
      console.log("office", office[j].name, office[j].officialIndices);
      for(let idx of office[j].officialIndices){
        console.log("idx", idx);
        data[idx].office = [];
        data[idx].office.push(office[j].name);
      }
    }

    /*Checks data by loggin to console*/
    console.log("rep", data);
    console.log("offices", office.length, "rep", data.length);

    /*Add data to be rendered*/
    for (var i = 0; i < data.length; i++) {
      /*Check is rep has a photo, if not place photo-holder*/
      let photoExists = typeof data[i].photoUrl !== 'undefined' ? true : false;
      if(!photoExists) {
        data[i].photoUrl = 'https://www.redrockmtg.com/uploads/sites/2338/public/ForMissingHeadshotsVelma_6.png';        
      }
      dataRender.push(<OfficialName key={i} name={data[i].name} party={data[i].party} image={data[i].photoUrl} office={data[i].office} />);
    }

    return (
        <div className="container ">
          <div className="row">
            <div className="bigText1">
              Want to vote but don't <br />
              know where to start? <br />      
              <div className="bigText2">
                View your <span className="highlight">representative</span>!<br />               
                Enter zip code: <br />
                <input
                  onChange={e => this.civicAPI(e)}
                  type = "text"
                  placeholder="zip code"
                  className="text-center"
                />
                <Link className="button" to="/representatives">Submit</Link>
              </div>
            </div>
          </div>         
        </div>
    )
  }
}

export default HomePage;
export {dataRender};
