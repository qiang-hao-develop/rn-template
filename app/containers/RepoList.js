import React, {Component} from 'react'
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {listRepos} from '../reducers'

class RepoList extends Component {
  componentDidMount() {
    this.props.listRepos('arronf2e')
  }

  renderItem = ({item}) => (
    <TouchableOpacity style={styles.item} onPress={() => {
        console.log(1, '1')
        this.props.navigation.navigate('Detail', {name: item.name})
      }}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  )

  render() {
    const { repos } = this.props
    return (
      <FlatList
        style={styles.container}
        data={repos}
        renderItem={this.renderItem}/>
    )
  }
}

const styles = {
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
}

const mapStateToProps = state => {
  let storedRepositories = state.repos.map(repo => ({ key: repo.id, ...repo }))
  return {
    repos: storedRepositories
  }
}

const mapDispatchToProps = {
  listRepos
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoList)
