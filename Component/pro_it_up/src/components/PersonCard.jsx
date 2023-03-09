import React, { Component } from 'react'

class PersonCard extends Component {
  constructor(props) {
    super(props)
      this.state = {
        age:this.props.age
      };
    }
    
  render() {
     const changeAge = ()=>{
      
      this.setState({age:this.props.age + 1});
  }
    return (
      <div className="App">
          <h1>{this.props.lastName}, {this.props.firstName}</h1>
          <p>Age: {this.state.age}</p>
          <p>Hair Color: {this.props.hairColor}</p>
          <button onClick={this.changeAge}>Happy Birthday{this.props.firstName} {this.props.lastName}</button>
      </div>
  
    )
  }
}
export default PersonCard
