import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home';
import Constants from 'expo-constants';
import CreateEmployee from './src/screens/CreateEmployee';
import { Provider as PaperProvider } from 'react-native-paper';
import Profile from './src/screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function App() {
  const Stack = createNativeStackNavigator();
  const myOptions = {
    title: 'Ma sweet home',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#006aff',
    },
  };

  return (
    <View style={styles.container}>
      <Stack.Navigator >
      <Stack.Screen
      name="Home"
      component={Home} 
      options={myOptions}
      />
      <Stack.Screen 
      name="CreateEmployee" 
      component={CreateEmployee}
      options={{ ...myOptions, title: 'Créer un employé' }}

      />
      <Stack.Screen 
      name="Profile" 
      component={Profile} 
      options={{ ...myOptions, title: 'Profil de l\'employé' }}
      />
      </Stack.Navigator>  
    </View>
  );
}
export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
});