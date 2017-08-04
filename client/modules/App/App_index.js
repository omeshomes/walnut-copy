import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Community from './App_Community';
import WalnutHomeContainer from './App_Walnut_Home_Container';
import EditProfile from '../EditProfile/EditProfile_index';
import getUser from '../../thunks/app_thunks/getAppThunk';
import getCommunities from '../../thunks/community_thunks/getAllCommunitiesThunk';

const styles = {
  App: {
    backgroundColor: 'lightblue',
    marginLeft: '100px',
    width: '65%'
  }
};

const history = createBrowserHistory();

class App extends React.Component {

  // componentWillMount() {
  //   // if (localStorage.getItem('user')) {
  //   //   console.log(JSON.parse(localStorage.getItem('user')));
  //   //   this.props.setUser();
  //   // } else {
  //   //   this.props.getUser();
  //   // }
  //   this.props.getUser();
  // }

  render() {
    return (
        <div>
          <Switch>
            <Route path="/app/walnuthome" component={WalnutHomeContainer}/>
            <Route path="/app/community" component={Community} />
            <Route path="/app/editprofile" render={(props) =>
              <EditProfile isCreating={!null} {...props} />
            } />
          </Switch>
        </div>
    );
  }
}


App.propTypes = {
  getUser: PropTypes.func,
  setUser: PropTypes.func
};


const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser())
});


export default connect(null, mapDispatchToProps)(App);
