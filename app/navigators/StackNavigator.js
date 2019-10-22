import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import RepoDetail from '../containers/RepoDetail';
import Tabs from './TabNavigator';

const Stack = createStackNavigator(
  {
    Home: {
      screen: Tabs,
    },
    Detail: {
      screen: RepoDetail,
      navigationOptions: {
        title: '详情',
      },
    },
  },
  {
    // headerMode: 'none',
    mode: 'card', //modal
    headerBackTitleVisible: false, // 返回按钮文案是否显示
  },
);

export default createAppContainer(Stack);
