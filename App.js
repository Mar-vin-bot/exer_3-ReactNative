import { useFonts, Lato_900Black } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DatailsScreen from './src/screens/DatailsScreen';
import HomeScreen from './src/screens/HomeScreen';



const App = () =>{
  const Stack = createNativeStackNavigator();


  let [fontsLoaded] = useFonts({
    Lato_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
    <Stack.Navigation>
        <Stack.Screen name="home" component={HomeScreen}/>
        <Stack.Screen name="datails" component={DatailsScreen}/>
    </Stack.Navigation>
    </NavigationContainer>
  );
};

export default App;







