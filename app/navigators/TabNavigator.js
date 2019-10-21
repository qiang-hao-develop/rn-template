import {createBottomTabNavigator} from 'react-navigation-tabs'
import RepoList from '../containers/RepoList'
import Profile from '../containers/Profile'

const Tabs = createBottomTabNavigator({
  RepoList: {
    screen: RepoList
  },
  Profile: {
    screen: Profile
  }
})

export default Tabs
