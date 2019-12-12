import React from 'react';

import AddedFeature from './AddedFeature';
import {connect} from 'react-redux';


const AddedFeatures = props => {
  console.log(props.add);
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.add ? (
        <ol type="1">
          {props.add.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};


function mapStateToProps(state) {
  return {
    add: state.add
  };
}
export default connect(
  mapStateToProps, // injects props into Counter
  {} // STEP 9 OF THE GENERAL STEPS (B)
)(AddedFeatures);