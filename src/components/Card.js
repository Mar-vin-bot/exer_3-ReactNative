import { Alert, Image, Text, TouchableOpacity } from 'react-native';
import { getDataById } from '../utils/data';
import { styles } from '../utils/styles';

export default function Card({ id, onPress }) {
  const { text, image } = getDataById(id);

  return (
    <TouchableOpacity style={styles.card} onPress={()=> onPress(id)}>
        <Image source={image} resizeMode="contain" style={styles.cardImage}/> 
        <Text style={styles.cardText}>{text}</Text>
    </TouchableOpacity>
  )
};

{/* TouchableOpacity transforma elemento num elemento clicavel*/ }