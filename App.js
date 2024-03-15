import { useState } from "react";
import { StyleSheet, View } from "react-native";
import DetailFlower from "./components/DetailFlower";
import ListFlower from "./components/ListFlower";

export default function App() {
  const [flower, setFlower] = useState();

  function set_flower(flower) {
    setFlower(flower);
  }

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <ListFlower SetFlower={set_flower} />
      </View>
      <View style={styles.container2}>
        <DetailFlower Flower={flower} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "left",
    justifyContent: "top",
    marginTop: 30,
    padding: 10,
  },
  container1: {
    flex: 1,
    with: "20%",
    backgroundColor: "#fff",
    alignItems: "left",
    justifyContent: "top",
    marginTop: 30,
  },
  container2: {
    flex: 1,
    with: "80%",
    backgroundColor: "#fff",
    alignItems: "left",
    justifyContent: "top",
    marginTop: 30,
  },
  nhaplieu: {
    borderWidth: 1,
    borderColor: "blue",
    width: "90%",
    height: 40,
  },
});
