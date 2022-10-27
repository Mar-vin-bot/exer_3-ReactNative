import { Image, Text, TouchableOpacity } from 'react-native';
import { getDataById } from '../utils/data';
import { styles } from '../utils/styles';




export default function Card({ id }) {
  const { text, image } = getDataById(id);

  return (
    <TouchableOpacity style={styles.card}>
      <Image source={image} resizeMode="contain" style={styles.cardImage}> </Image>
      <Text style={styles.cardText}>{text}</Text>
    </TouchableOpacity>
  )
};

{/* TouchableOpacity transforma elemento num elemento clicavel*/}