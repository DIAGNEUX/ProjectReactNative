import { Image, StyleSheet, Text, View , Linking } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Card, Title } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";

import {NatigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Profile = () => {
  const handleEditProfile = () => console.log("Edit Profile pressed");
  const handleFireEmployee = () => console.log("Fire Employee pressed");

  const Stack = createNativeStackNavigator();

  return (
    <View style={Styles.root}>
      <LinearGradient colors={["#0033ff", "#6bc1ff"]} style={Styles.header}>
        
      </LinearGradient>

      <View style={Styles.avatarContainer}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
          }}
          style={Styles.avatar}
        />
      </View>

      <View style={Styles.identity}>
        <Title style={Styles.name}>Lydia Jane</Title>
        <Text style={Styles.role}>Software Engineer</Text>
      </View>

      <Card style={Styles.myCard} onPress={() => Linking.openURL("mailto:lydia.jane@insta.com")}>
        <View style={Styles.cardContent}>
          <Entypo name="email" size={24} color="#006aff" />
          <Text style={Styles.myText}>lydia.jane@insta.com</Text>
        </View>
      </Card>

      <Card style={Styles.myCard} onPress={() => Linking.openURL("tel:+33123456789")}>
        <View style={Styles.cardContent}>
          <Entypo name="phone" size={24} color="#006aff"  />
          <Text style={Styles.myText}>+33 1 23 45 67 89</Text>
        </View>
      </Card>

      <Card style={Styles.myCard}>
        <View style={Styles.cardContent}>
          <Entypo name="wallet" size={24} color="#006aff" />
          <Text style={Styles.myText}>€2,000</Text>
        </View>
      </Card>

      <View style={Styles.actions}>
        <Button
          icon="account-edit"
          mode="contained"
          theme={theme}
          style={Styles.actionButton}
          onPress={handleEditProfile}
        >
          Modifier le profil
        </Button>
        <Button
          icon="account-remove"
          mode="contained"
          theme={theme}
          style={Styles.actionButton}
          onPress={handleFireEmployee}
        >
          Supprimer l’employé
        </Button>
      </View>
    </View>
  );
};

export default Profile;

const Styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    height: "20%",
    justifyContent: "center",
    paddingTop: 20,
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: -50,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 16,
    borderWidth: 4,
    borderColor: "#ffffff",
  },
  identity: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 8,
  },
  name: {
    color: "#1f2937",
    fontSize: 20,
  },
  role: {
    color: "#4b5563",
    fontSize: 16,
    marginTop: 2,
  },
  myCard: {
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: "#ffffff",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  myText: {
    color: "#1f2937",
    fontSize: 18,
    marginLeft: 10,
    marginTop: 3,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 14,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  actionButton: {
    flex: 1,
    borderRadius: 10,
  },
});

const theme = {
  colors: {
    primary: "#0033ff",
    text: "#000000",
    background: "#ffffff",
  },
};
