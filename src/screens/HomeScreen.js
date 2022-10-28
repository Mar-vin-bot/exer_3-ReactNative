//import React from 'react';
import { View, FlatList, Text, Image, StatusBar } from 'react-native';
import Card from '../components/Card';
import { getData } from '../utils/data';
import { styles } from '../utils/styles';


export default function HomeScreen({navigation}) {
  const navegacao = (id) => {navigation.navigate("datails", {id: id}) }

  function titulo() {
    return (
      <View style={styles.tituloContainer}>
        <Text style={styles.tituloTexto}>Categorias</Text>
      </View>
    );
  }

  function topo() {
    return (
      <View style={styles.topoContainer}>
        <Text style={styles.topoTexto}>Ligtheria</Text>
        <View style={styles.topoImageContainer}>
          <Image style={styles.topoImagem} source={require('../../assets/icone-sacola.png')} />
        </View>
      </View>
    );
  }




  return (
    <View style={styles.container}>
      {topo()}

      {titulo()}

      <FlatList
        data={getData()}
        renderItem={({ item }) => (   <Card id={item.id}  onPress={navegacao} />   ) }
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
      <StatusBar /> 
    </View>
  );

}


