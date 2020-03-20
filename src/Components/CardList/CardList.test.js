import { shallow } from 'enzyme';
import React from 'react';
import CardList from '../CardList';

it('expect to render CardList Component', () => {
    const mockContacts = [
        {
            id: 1,
            name: 'John Snow',
            username: 'snow123',
            email: 'john.snow@gmail.com'
        }
    ]
    expect(shallow(<CardList contacts={mockContacts} />)).toMatchSnapshot();
})
