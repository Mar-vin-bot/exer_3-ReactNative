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
        <View style={styles.topoImageContainer}>
          <Image style={styles.topoImagem} source={require('./assets/icone-sacola.png')} />
        </View>
      </View>

      {/*titulo*/}
      <View style={styles.tituloContainer}>
        <Text style={styles.tituloTexto}>Categorias</Text>
      </View>

      {/*lista de imagem*/}
      <View style={styles.listaContainer}>
        <View style={styles.listaLinhaContainer}>
          <View style={styles.card}>

            <Image source={require('./assets/01-tablelamps.png')} style={styles.cardImage}></Image>
            <Text style={styles.cardText}>Abajur</Text>


          </View>
        </View>
      </View>
      <StatusBar />
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

  topoImageContainer: {
    backgroundColor: "white",
    borderRadius: 40,
    padding: 20,
  },

  topoTexto: {

    fontSize: 40,
    fontFamily: "Lato_900Black",

  },
  tituloTexto: {
    fontSize: 16,
    color: "#999",
    marginTop: -16,
    backgroundColor: "#ccc",
    paddingHorizontal: 16,
  },

  tituloContainer: {
    alignItems: "center",
    borderTopColor: "#888",
    borderTopWidth: 1,
    marginTop: 20,
  },

  listaContainer: {},
  listaLinhaContainer: {},
  card: {
    backgroundColor: "white",
    borderRadius:10,
    flex: 1,
    width: "48%",
    borderColor:"red",
    borderWidth: 1,
  },
  cardImage: {},
  cardText: {},



});
