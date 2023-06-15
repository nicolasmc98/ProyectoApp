import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import MyStack from './AuthStack';
import Icon from 'react-native-vector-icons/Ionicons';
import Favorite from '../screens/Favorite';

const Tab = createMaterialBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Search" component={Search} options={{title:"Buscar", tabBarIcon: ({ color }) => (
            <Icon name="search-circle-outline" color={color} size={26} />
          )}}   />
      <Tab.Screen name="Profile" component={Profile} options={{title:"Perfil", tabBarIcon: ({ color }) => (
            <Icon name="person-circle-outline" color={color} size={26} />
          )}}   />
      <Tab.Screen name="Favorite" component={Favorite} options={{title:"Favorito", tabBarIcon: ({ color }) => (
            <Icon name="heart-circle-outline" color={color} size={26} />
          )}}   />
    </Tab.Navigator>
  );
}
export default MyTabs;