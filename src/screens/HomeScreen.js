import React from 'react';
import {View, StyleSheet, FlatList, Text, Image, StatusBar} from 'react-native';
import Card from '../components/Card';
import { getData } from '../utils/data';
import { styles } from '../utils/styles';


export default function HomeScreen() {

  function titulo() {
    return <View style={styles.tituloContainer}>
      <Text style={styles.tituloTexto}>Categorias</Text>
    </View>;
  }

    function topo() {
        return <View style={styles.topoContainer}>
          <Text style={stylesles.topoTexto}>Ligtheria</Text>
          <View style={styles.topoImageContainer}>
            <Image style={styles.topoImagem} source={require('../../assets/icone-sacola.png')} />
          </View>
        </View>;
      }
      



    return (
        <View style={styles.container}>
        {topo()}
  
        {/*titulo*/}
        {titulo()}
  
        {/*lista de imagem*/}
        <FlatList
          data={getData()}
          renderItem={({item}) => <Card id={item.id}/>} 
          numColumns={2}
          columnWrapperStyle={{justifyContent:"space-between"}}
        />
        <StatusBar/>
      </View>
    );



}


