import { Image, StyleSheet, View } from "react-native";
import Logo from "../../assets/logo.png";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#820AD1",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200, 
    height: 200, 
    resizeMode: "contain",
  },
});

export default Home;
