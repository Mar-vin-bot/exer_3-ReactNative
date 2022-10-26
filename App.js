import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFonts, Lato_900Black } from '@expo-google-fonts/lato';
import Card from './src/components/Card';
import { styles } from './src/utils/styles';


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
          {linha(1)}
          {linha(3)}
          {linha(5)}
        </View>
      </ScrollView>
      <StatusBar />
    </View>
  );
}

function topo() {
  return <View style={styles.topoContainer}>
    <Text style={styles.topoTexto}>Ligtheria</Text>
    <View style={styles.topoImageContainer}>
      <Image style={styles.topoImagem} source={require('./assets/icone-sacola.png')} />
    </View>
  </View>;
}

function titulo() {
  return <View style={styles.tituloContainer}>
    <Text style={styles.tituloTexto}>Categorias</Text>
  </View>;
}

function linha(nroLinha) {
  let id = nroLinha
  return <View style={styles.listaLinhaContainer}>
    <Card id={nroLinha} />
    <Card id={++nroLinha} />
  </View>;
}







