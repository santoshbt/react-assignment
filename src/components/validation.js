import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const Validation = (props) => {
      let text = "";
      if(props.name.length > 4) {
          text = "Name is too long";
      }
      if(props.name.length < 2){
          text = "Name is too short";
      }
      return <div>{text}</div>;
}

export default Validation;
