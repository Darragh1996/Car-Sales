import React from "react";
import { connect } from "react-redux";
import { add } from "../state/actionCreators";
// import { additionalFeatures as poop } from "../Constants/additional";


const AdditionalFeature = props => {
  // console.log(props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => props.add(props.feature.id, props.additionalFeatures)}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

function mapStateToProps(state) {
  return {
    add: state.add
  };
}
export default connect(
  mapStateToProps, // injects props into Counter
  { add } // STEP 9 OF THE GENERAL STEPS (B)
)(AdditionalFeature);
