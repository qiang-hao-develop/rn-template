import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {getUser} from '../reducers';

class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
    header: null,
  };
  componentDidMount() {
    console.log('profile did mount');
    this.props.getUser('arronf2e');
  }
  render() {
    const {user, loadingProfile} = this.props;
    if (loadingProfile) return <Text>Loading profile....</Text>;
    const {name, login} = user;
    return <SafeAreaView style={styles.container}><Text>111</Text></SafeAreaView>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  image: {
    flex: 1,
  },
});

const mapStateToProps = ({user, loadingProfile}) => ({
  user,
  loadingProfile,
});

const mapDispatchToProps = {
  getUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
