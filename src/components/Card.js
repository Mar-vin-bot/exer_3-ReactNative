import { Image, Text, View } from 'react-native';
import { getDataById } from '../utils/data';
import { styles } from '../utils/styles';




export default function Card({ id }) {
  const { text, image } = getDataByIdById(id);

  return (
    <View style={styles.card}>

      <Image source={image}
        resizeMode="contain"
        style={styles.cardImage}>
      </Image>
      <Text style={styles.cardText}>{text}</Text>
    </View>
  )
};