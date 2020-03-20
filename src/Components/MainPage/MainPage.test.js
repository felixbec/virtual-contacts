import { shallow } from 'enzyme';
import React from 'react';
import MainPage from '../MainPage';
import {exportAllDeclaration} from '@babel/types';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestContacts: jest.fn(),
        contacts: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps} />)
})

it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
})

it('filters Contacts correctly', () => {
    const mockProps2 = {
        onRequestContacts: jest.fn(),
        contacts: [{
            id: 3,
            name: 'Carlos',
            email: 'carlos@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage {...mockProps2} />)
    expect(wrapper2.instance().filteredContacts()).toEqual([{
        id: 3,
        name: 'Carlos',
        email: 'carlos@gmail.com'
    }]);
})