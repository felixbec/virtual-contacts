import React from 'react';
import Card from '../Card';

const CardList = ({ contacts }) => {
    //Mapping through all data to return all Users
    const cardArray = contacts.map((user, i) => {
        return (
        <Card 
            key={contacts[i].id} 
            id={contacts[i].id} 
            name={contacts[i].name} 
            email={contacts[i].email} 

        />)
    })
    //Returns cardArray 
    return (
        <div>
            {cardArray}
        </div>
    );
}

export default CardList;
/* CLEANER way to do the exact same thing
const CardList = ({ contacts }) => {
    return (
        <div>
            {
                contacts.map((user, i) => {
                    return (
                    <Card 
                        key={contacts[i].id} 
                        id={contacts[i].id} 
                        name={contacts[i].name} 
                        email={contacts[i].email} 

                    />)
                });
            }
        </div>
    );
}*/