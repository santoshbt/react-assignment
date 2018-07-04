import React, {Component} from 'react';

import Validation from './validation';
import Char from './char';

export default class Username extends Component {
  constructor(props) {
    super(props);

    this.state = {name: ""};
    const charBoxes = "";
  }

  onChangeHandler = (e) => {
    this.setState({name: e.target.value})
  }


  deleteMe = (txt) => {
    var txtToRemov = txt.target.innerText;
    const newText = this.state.name.replace(txtToRemov,'');
    this.setState({name: newText});
  }


  render() {

    return(
      <div className="username">
          <input
            value={this.state.name}
            onChange={this.onChangeHandler}
           />
           <Validation name={this.state.name} />
           <br />
           <span> The entered name is : {this.state.name}</span>
           <br />
           <Char txt={this.state.name} onDelete={this.deleteMe.bind(this)}   />

      </div>
    )
  }
}
