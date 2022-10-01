import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useFonts, Lato_900Black } from '@expo-google-fonts/lato';




export default function App() {

  let [fontsLoaded] = useFonts({
    Lato_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.topoContainer}>
        <Text style={styles.topoTexto}>Ligtheria</Text>
        <Image style={styles.topoImagem} source={require('./assets/icone-sacola.png')} />
        <StatusBar />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    padding: 10,
  },
  topoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topoImagem: {
    width: 40,
    height: 40,
  },
  topoTexto:{
    fontWeight: "bold",
    fontSize: 40,
    fontFamily: "Lato_900Black",
    
  },
});
