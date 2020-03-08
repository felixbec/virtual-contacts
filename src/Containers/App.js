import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';

import { setSearchField, requestContacts } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchContacts.searchField,
        contacts: state.requestContacts.contacts,
        isPending: state.requestContacts.isPending,
        error: state.requestContacts.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestContacts: () => dispatch(requestContacts())
    }
}

class App extends Component {

    componentDidMount() {
        this.props.onRequestContacts();
    }

    render(){
        const { contacts, searchField, onSearchChange, isPending } = this.props;
        const filteredContacts = contacts.filter(contacts => {
            return contacts.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ?
            <h1 className="tc">Loading</h1> :
        (
            <div className="tc">
                <h1 className="f1">Contacts</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList contacts={filteredContacts} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
