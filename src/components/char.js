import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Char extends Component {
  constructor(props){
    super(props);
  }

  render(){
          const charTxts = this.props.txt.split("").map((a, index) => {
                return(<li className="inline-box" key={index} onClick={this.props.onDelete}>
                  {a}
                </li>);
          })

    return(
      <ul>
        {charTxts}
      </ul>
    );
  }
}
