import { StyleSheet, View, Text, Pressable, Platform } from "react-native";
import { connect } from "react-redux";
import AppLoading from "expo-app-loading";
import { useFonts, Limelight_400Regular } from "@expo-google-fonts/limelight";

function Header() {
  let [fontsLoaded] = useFonts({
    Limelight_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: "#F2D379",
            fontFamily: "Limelight_400Regular",
            fontSize: 30,
          }}
        >
          The Movie Game
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#EEF525",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 3,
    borderColor: "#F2D379",
    backgroundColor: "#401323",
  },
  movieGame: {
    fontSize: 60,
    textAlign: "center",
    fontFamily: "Limelight_400Regular",
    color: "#F2D379",
  },
  movieGameMobile: {
    fontSize: 40,
    marginBottom: 70,
    textAlign: "center",
    fontFamily: "Limelight_400Regular",
    color: "#F2D379",
  },

  movieGameMini: {
    fontSize: 24,
    marginBottom: Platform.OS === "android" ? 20 : 70,
    textAlign: "center",
    fontFamily: "Limelight_400Regular",
    color: "#F2D379",
  },
});

export default connect()(Header);
