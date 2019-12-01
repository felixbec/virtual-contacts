import React, { Component } from 'react';
import CardList from './Components/CardList';
import SearchBox from './Components/SearchBox';
import Scroll from './Components/Scroll';
import ErrorBoundry from './Components/ErrorBoundry'
//import {contacts} from './contactData';


class App extends Component {
    constructor() {
        super()
        this.state = {
            contacts: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState({contacts: users}));
    }

    render(){
        const filteredContacts = this.state.contacts.filter(contacts => {
            return contacts.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return !this.state.contacts.length ?
            <h1 className="tc">Loading</h1> :
        (
            <div className="tc">
                <h1 className="f1">Contacts</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList contacts={filteredContacts} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default App;
