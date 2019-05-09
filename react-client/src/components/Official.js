import React from 'react';


const Official = (props) => {
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

export default Official;