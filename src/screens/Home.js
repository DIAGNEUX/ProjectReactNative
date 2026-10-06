import { Text, StyleSheet, Image, View , FlatList } from 'react-native';
import { Card , FAB} from 'react-native-paper';


const data = [
  { id: 1, name: 'Paul', post: 'Développeur', age: 23, ville: 'Paris' },
  { id: 2, name: 'Geoffrey', post: 'Testeur', age: 30, ville: 'Paris' },
  { id: 3, name: 'Sylvain', post: 'Chef de projet', age: 40, ville: 'Lyon' },
  { id: 4, name: 'Thibault', post: 'Chef de projet', age: 40, ville: 'Lyon' },
//   { id: 5, name: 'Thibault', post: 'Chef de projet', age: 40, ville: 'Lyon' },
//   { id: 6, name: 'Thibault', post: 'Chef de projet', age: 40, ville: 'Lyon' },
//   { id: 7, name: 'Thibault', post: 'Chef de projet', age: 40, ville: 'Lyon' },
//   { id: 8, name: 'Thibault', post: 'Chef de projet', age: 40, ville: 'Lyon' },
//   { id: 9, name: 'Thibault', post: 'Chef de projet', age: 40, ville: 'Lyon' },
//   { id: 10, name: 'Thibault', post: 'Chef de projet', age: 40, ville: 'Lyon' },

];

const renderItem = ({ item }) => (
  <Card style={styles.mycard}>
    <View style={styles.cardView}>
      <Image
        source={{ uri: 'https://media.licdn.com/dms/image/v2/D4E03AQFZu-S3aiRDtQ/profile-displayphoto-crop_800_800/B4EZ6srQppGUAI-/0/1781013482782?e=1792627200&v=beta&t=keNsLdE6KPCtciJ5UJ3ereEGE5ITyC_lLc25Y3GhO3Q' }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>{item.post}</Text>
        <Text style={styles.text}>{item.age} ans</Text>
        <Text style={styles.text}>{item.ville}</Text>
      </View>
    </View>
  </Card>
);

const Home = (props) => {
  return (
    <view style={{ flex: 1 }}>
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return renderItem({ item });
      }}
        keyExtractor={item => `${item.id}`}
    />
    <FAB
      style={styles.fab}
      small = {false}
        icon="plus"
      theme={{ colors: { accent: '#006aff' } }}
      onPress={() => props.navigation.navigate("CreateEmployee")}
    />
    
    </view>
  );
};

const styles = StyleSheet.create({
  mycard: {
    margin: 5,
    padding: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  text: {
    fontSize: 10,
  },
  cardView: {
    flexDirection: 'row',
    padding: 5,
  },
  info: {
    marginLeft: 10,
    padding: 5,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Home;
         