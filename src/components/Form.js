import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            URL: ""
        };
    }

    handleNameChange = event => {
        this.setState({ 
            Name: event.target.value,
            });  
    }

    handleURLChange = event => {
        this.setState({ 
            URL: event.target.value,
            });  
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        this.props.handleSubmit(this.state);

        this.setState({  
            Name: "",
            URL: ""
        });
    }

    render() {
        
        return(
            <form onSubmit={this.onFormSubmit}>
                <label>Name:</label>
                <input type="text" onChange= {this.handleNameChange} value={this.state.Name} ></input>

                <label >URL:</label>
                <input type="text" onChange={this.handleURLChange} value= {this.state.URL} ></input>
                
                

                <button onClick= {this.onFormSubmit}>Submit</button> 
                
            </form>
        )
    
    }
}

export default Form;
