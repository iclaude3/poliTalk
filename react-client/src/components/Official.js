import React from 'react';
import 'tachyons';
// import'./Official.css';


const Official = (props) => {
  return (
    <div class="outline w-25 pa3 mr2">
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

export default Official;