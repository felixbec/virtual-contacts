import React, { Component } from 'react';
import CardList from '../CardList';
import SearchBox from '../SearchBox';
import Scroll from '../Scroll';
import ErrorBoundry from '../ErrorBoundry';

import './MainPage.css'

class MainPage extends Component {

    componentDidMount() {
        this.props.onRequestContacts();
    }

    filteredContacts = () => {
        return this.props.contacts.filter(contacts => {
            return contacts.name.toLowerCase().includes(this.props.searchField);
        })
    }

    render(){
        const { contacts, onSearchChange, isPending } = this.props;
        return isPending ?
            <h1 className="tc">Loading</h1> :
        (
            <div className="tc">
                <h1 className="f1">Contacts</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList contacts={this.filteredContacts()} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default MainPage;
