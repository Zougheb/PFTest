import React from 'react';
import Doc from './Doc';
import NoDocs from './NoDocs';

const DocList = props => { 
// store the data
  const results = props.data;
  let docs;
  if(results.length > 0){
    // using map method to map over the array and return a doc component for 
    // each object in the array
    docs = results.map(doc =>
      <Doc image_url={doc.profile.image_url}  key={doc.uid} />);
  } else {
docs = <NoDocs />
  }
  
  
  
  return(
    <ul className="doc-list">
      {docs}
    </ul> 
  );
}

export default DocList;
