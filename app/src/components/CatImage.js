import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCatImage } from "../actions";

const CatImage = (props) => {
  //console.log("meow", props);

  useEffect(() => {
    props.getCatImage();
  }, [props.getCatImage]);

  if (props.isFetching) {
    return <h3>Click the button if you feel like smiling</h3>;
  }

  return (
    <div>
      <h2>Want to make your day better?</h2>
      <button onClick={props.getCatImage}>Click for cuteness</button>
      <img src={props.catImage} alt="cat-attack" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    catImage: state.image.catImage,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getCatImage })(CatImage);
