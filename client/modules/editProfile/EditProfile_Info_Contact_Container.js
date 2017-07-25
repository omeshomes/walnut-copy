import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import saveContactThunk from '../../thunks/profile_thunks/saveContactThunk';

const styles = {
  contact: {
    backgroundColor: 'lightblue',
    width: '65%',
    paddingLeft: '2%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

class ContactContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
  }

  toggleEdit() {
    this.setState({
      edit: !this.state.edit,
      email: this.props.email,
      address: this.props.address,
      phone: this.props.phone
    });
  }

  contactChange(val, key) {
    const obj = JSON.parse(JSON.stringify(this.state));
    obj[key] = val;
    this.setState(obj);
  }

  handleSave() {
    this.setState({edit: false});
    console.log('the state that gets sent to middleware', this.state);
    this.props.saveContact(this.state);
  }

  render() {
    return (
      <div style={styles.contact}>
        <h1>Contact</h1>
        <p onClick={() => (this.toggleEdit())}>E</p>
        <p>Email</p>
        {this.state.edit ?
          <input value={this.state.email}
            onChange={(e) => (this.contactChange(e.target.value, 'email'))} />
           :
           <p>{this.state.email ? this.state.email : this.props.email}</p>}

        <p>Address</p>
        {this.state.edit ?
          <input value={this.state.address}
            onChange={(e) => (this.contactChange(e.target.value, 'address'))} />
           :
           <p>{this.state.address ? this.state.address : this.props.address}</p>}

        <p>Phone</p>
        {this.state.edit ?
          <input value={this.state.phone}
            onChange={(e) => (this.contactChange(e.target.value, 'phone'))} />
          :
          <p>{this.state.phone ? this.state.phone : this.props.phone}</p>}

        {this.state.edit ?
          <a style={{backgroundColor: '#0D9ED3', float: 'right'}}
            className="waves-effect waves-light btn"
            onClick={() => this.handleSave()}>
            save</a>
          :
        <p></p>}
      </div>
    );
  }
}

ContactContainer.propTypes = {
  email: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  saveContact: PropTypes.func
};

const mapStateToProps = (state) => ({
  email: state.userReducer.email,
  address: state.userReducer.from,
  phone: state.userReducer.phone
});

const mapDispatchToProps = (dispatch) => ({
  saveContact: (contactObj) => saveContactThunk(contactObj)(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);
