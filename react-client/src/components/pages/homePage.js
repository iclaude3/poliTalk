import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GOOGLE_KEY } from "./keys.js";
import { dataRender } from "./keys.js";

function OfficialName(props) {
  return (
    <div>
      <p>Candidate : {props.name}</p>
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

    const url = 
    "https://www.googleapis.com/civicinfo/v2/representatives?address=" +
    event.target.value +
    "&key=" + GOOGLE_KEY;

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
      if (response.status === 200) return response.json();
      else console.log("There was an error");
    })
    .then(response => {
      this.setState({ data: response });
    });
  }

  render() {
    var data = [];
    console.log(this.state.data);
    for (var key in this.state.data.officials) {
      data.push(this.state.data.officials[key]);
    }

    for (var i = 0; i < data.length; i++) {
      dataRender.push(<OfficialName key={i} name={data[i].name} />);
    }

    return (
        <div className="container">
          <div className="row"> 
            <div className="bigText1">
              Want to vote but don't <br />
              know where to start? <br />
              <p className="bigText2"> 
                View your representative! <br />
                Enter zip code: <br />
                <input 
                  onChange={e => this.civicAPI(e)}
                  type = "text"
                  placeholder="zip code"
                  className="text-center"
                />
               <Link className="button" to="/representatives">Submit</Link>
              </p>
            </div>
          </div>
        </div>
    )
  }
}

export default HomePage;
export {dataRender};