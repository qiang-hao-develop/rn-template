import {createBottomTabNavigator} from 'react-navigation-tabs';
import RepoList from '../containers/RepoList';
import Profile from '../containers/Profile';

const Tabs = createBottomTabNavigator(
  {
    RepoList: {
      screen: RepoList,
    },
    Profile: {
      screen: Profile,
    },
    RepoList2: {
      screen: RepoList,
    },
    Profile2: {
      screen: Profile,
    },
  },
  {
    headerMode: 'none',
    mode: 'card', //modal
  },
);
Tabs.navigationOptions = {
  header: null,
};

export default Tabs;
