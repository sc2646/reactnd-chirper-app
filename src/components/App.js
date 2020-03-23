import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashbroad from './Dashbroad'
import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true
          ? null
          : <TweetPage match={{params: {id: '3km0v4hf1ps92ajf4z2ytg'}}} />}

      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect()(App)
