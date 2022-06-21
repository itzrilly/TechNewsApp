import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo, FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export default function App() {
  return (

      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          tabBarActiveTintColor: 'red',
          tabBarStyle:{
            backgroundColor:'#2ec4b6',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50
          },
          tabBarShowLabel: false
        }}>
          <Tab.Screen name='Accueil' component={HomeScreen} options={{
            tabBarIcon: () => <Entypo name="home" size={24} color='#fff' />
          }} />
          <Tab.Screen name='Recherche' component={SearchScreen} options={{
            tabBarIcon: () => <FontAwesome name="search" size={24} color='#fff' />
          }} />
        </Tab.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
