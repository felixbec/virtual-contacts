import React, { Component } from 'react';
import {connect} from 'react-redux';
import { setSearchField, requestContacts } from '../actions';
import MainPage from '../Components/MainPage';

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
    render(){
        return <MainPage {...this.props} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
