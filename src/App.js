import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactForm from './Components/ContactForm/ContactForm';
import Layout from './Components/Layout/Layout';
import Filter from './Components/Filter/Filter';
import ContactList from './Components/ContactList/ContactList';
import { CSSTransition } from 'react-transition-group';
import Logo from './Components/Logo/Logo';

const App = ({contacts}) => {
    return (
          <Layout>
                <Logo />  
                
                <ContactForm /> 
                    
                <Filter />

                <CSSTransition
                    in={contacts.length > 0}
                    timeout={0}
                    ommountOnExit>     
                <ContactList />
                </CSSTransition>

            </Layout>
    );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
    contacts: state.phoneBook.contacts,
})

export default connect(mapStateToProps, null)(App);