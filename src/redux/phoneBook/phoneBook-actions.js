import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', (name, number) => ({
    payload: {
        id: shortid.generate(),
        name,
        number,
    },
}));

const removeContact = createAction('contacts/remove');

const changeFilter = createAction('contacts/changeFilter');

const phoneBookActions = {
    addContact,
    removeContact,
    changeFilter,
};

export default phoneBookActions;