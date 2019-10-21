import { createStackNavigator } from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import RepoDetail from '../containers/RepoDetail'
import Tabs from './TabNavigator'

const Stack = createStackNavigator({
  Home: {
    screen: Tabs
  },
  Detail: {
    screen: RepoDetail
  }
})

export default createAppContainer(Stack)
