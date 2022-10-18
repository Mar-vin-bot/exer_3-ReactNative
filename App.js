import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
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
      {topo()}

      {/*titulo*/}
      {titulo()}

      {/*lista de imagem*/}
      <ScrollView>
        <View style={styles.listaContainer}>
          {linha()}
          {linha()}
          {linha()}
        </View>
      </ScrollView>
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

  listaContainer: {
    paddingTop: 20,
  },

  listaLinhaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,

  },

  card: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
    paddingVertical: 28,

  },
  cardImage: {
    height: 120,

  },
  cardText: {
    fontSize: 18,
    paddingTop: 12,

  },



});
function linha() {
  return <View style={styles.listaLinhaContainer}>
    {card()}
    {card()}



  </View>;
}

function card() {
  return <View style={styles.card}>
    <Image source={require('./assets/01-tablelamps.png')} resizeMode="contain"
      style={styles.cardImage}></Image>
    <Text style={styles.cardText}>Abajur</Text>
  </View>;
}

function titulo() {
  return <View style={styles.tituloContainer}>
    <Text style={styles.tituloTexto}>Categorias</Text>
  </View>;
}

function topo() {
  return <View style={styles.topoContainer}>
    <Text style={styles.topoTexto}>Ligtheria</Text>
    <View style={styles.topoImageContainer}>
      <Image style={styles.topoImagem} source={require('./assets/icone-sacola.png')} />
    </View>
  </View>;
}

