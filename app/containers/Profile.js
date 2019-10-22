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
    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2430577509,1916784461&fm=26&gp=0.jpg',
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  image: {
    flex: 1,
    resizeMode: 'stretch',
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
