import { connect } from 'react-redux';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import './Filter.scss';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';


const Filter = ({value, onChangeFilter, contacts}) => (
    <CSSTransition
        in={contacts.length > 1}
        timeout={250}
        classNames="Filter-fade"
        unmountOnExit>
        
        <div className="FindForm">
            <label
                htmlFor="find"
                className="FindLabel">
            Find contact by name
            </label>
            <input
                type="text"
                value={value}
                id="find"
                className="FindInput"
                onChange={onChangeFilter}/>
        </div>
     </CSSTransition>
)

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
    value: state.phoneBook.filter,
    contacts: state.phoneBook.contacts,
})

const mapDispatchToProps = dispatsh => ({
    onChangeFilter: e => dispatsh(phoneBookActions.changeFilter(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);