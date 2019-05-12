import React from 'react';
import 'tachyons';
import { Link } from 'react-router-dom';
// import'./Official.css';


const Official = (props) => {
  return (
    <div class="outline w-25 pa3 mr2">
      <img class="col" src={props.image} alt="<No image>" height="130" width="130" />
      <div class="col">
        <p>This candidate is <strong>{props.name}</strong>.<br />
        Their party is the <strong>{props.party}</strong>.<br />
        They hold the office of <strong>{props.office}</strong></p>
        <Link className="" to="">Supported Bills</Link>
      </div>
      <hr width="1" size="500"></hr>
      <hr />
    </div>
  );
}

export default Official;