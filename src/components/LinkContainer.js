import React from 'react';
import Table from './Table';
import Form from './Form';
import DarkMode from './DarkMode';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            favLinks: []
        };  
    }

    removeCharacter = index => {
        this.setState(({favLinks}) => ({
            favLinks: favLinks.filter((_,i) => i !== index)

        }));  /* From StackOverFlow*/   
    }

    handleSubmit = favLink => {
        this.setState((state) => ({
            favLinks: state.favLinks.concat(favLink)
        }));
    }
    

    render() {

        const favLinks = this.state.favLinks;

        return (
            <div className="container">
                <h1 style={{color:'black', textDecoration: 'underline black'}}>My Favorite Links</h1>
                <nav> 
                    <p>Add a new url with a name and link to the table. <a href= "/"> <DarkMode /> 
                         Click icon on the left for Light or Dark Mode </a></p> 
                </nav>
                
            
                <Table linkData = {favLinks} removeLink = {this.removeCharacter}/>
                
                <br/>

                <h3 style={{color:'black', textDecoration: 'underline black' }}>Add New</h3>
                
                <Form handleSubmit = {this.handleSubmit}/>

                <br/>

                <p style={{color: 'black', fontSize: 30}}> <b> **Click URLs to go the page!</b> </p>
            </div>
        );
    }
}

export default LinkContainer;