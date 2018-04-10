import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    searchTerm: "",
    startYear: "",
    endYear: ""
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    this.setState({ username: "", password: "" });
  };

  render() {
    return (
      <form role="form">
      <div className="form-group">
        <label for="search">Search Term:</label>
        <input
          type="text" 
          className="form-control" 
          name="searchTerm"
          value={this.state.searchTerm}
          onChange={this.handleInputChange} 
        />
      </div>
      <div className="form-group">
        <label for="start-year">Start Year (Optional):</label>
        <input 
          type="text" 
          className="form-control" 
          name="startYear"
          value={this.state.startYear}
          onChange={this.handleInputChange}
        />   
      </div>
      <div className="form-group">
        <label for="end-year">End Year (Optional):</label>
        <input 
          type="text" 
          className="form-control" 
          name="endYear"
          value={this.state.endYear}
          onChange={this.handleInputChange} 
        />
      </div>
      <button onClick={this.handleFormSubmit}>Submit</button>
      <button type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search" onClick={this.handleFormSubmit}>></i> Search</button>
    </form>
    );
  }
}

export default Form;