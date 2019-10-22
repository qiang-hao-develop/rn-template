import React, {Component} from 'react';
import {View, Text, Dimensions, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {getRepoDetail} from '../reducers';

const screen = Dimensions.get('window');

class RepoDetail extends Component {
  static navigationOptions = ({navigation}) => {};

  componentDidMount() {
    const {name} = this.props.navigation.state.params;
    this.props.getRepoDetail('arronf2e', name);
  }
  render() {
    const {repoInfo, loadingInfo, user} = this.props;
    console.log(repoInfo, user, 'user');
    if (loadingInfo) return <Text>Loading Repoinfo....</Text>;
    const {
      name,
      full_name,
      description,
      forks_count,
      stargazers_count,
    } = repoInfo;
    return (
      <View>
        <Text>{name}</Text>
        <Text>{full_name}</Text>
        <Text>{description}</Text>
        <Text>Forks: {forks_count}</Text>
        <Text>Stars: {stargazers_count}</Text>
      </View>
    );
  }
}

const mapStateToProps = ({repoInfo, loadingInfo, user}) => ({
  repoInfo,
  loadingInfo,
  user,
});

const mapDispatchToProps = {
  getRepoDetail,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RepoDetail);
