import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import Favorite from '../screens/Favorite';
import PokemonList from '../components/PokemonList';

const Tab = createMaterialBottomTabNavigator();

export const MyTabs = () => {

  
  return (
    <Tab.Navigator
    initialRouteName="Search"
    activeColor="#000000"
    barStyle={{ backgroundColor: '#caff42' }}
    >
      <Tab.Screen name="PokemonList" component={PokemonList} options={{title:"Buscar", tabBarIcon: ({ color }) => (
            <Icon name="search-circle-outline" color={color} size={26}  />
          )}}   />
      <Tab.Screen name="Favorite" component={Favorite} options={{title:"Favorito", tabBarIcon: ({ color }) => (
            <Icon name="heart-circle-outline" color={color} size={26} />
          )}}   />  
      <Tab.Screen name="Profile" component={Profile} options={{title:"Perfil", tabBarIcon: ({ color }) => (
            <Icon name="person-circle-outline" color={color} size={26} />
          )}}   />
      
    </Tab.Navigator>
  );
}
export default MyTabs;