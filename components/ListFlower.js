import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

function ListFlower(props) {
  const flowers = [
    {
      id: "c1",
      name: "Cuc 1",
    },
    {
      id: "c2",
      name: "Cuc 2",
    },
    {
      id: "c3",
      name: "Cuc 3",
    },
    {
      id: "c4",
      name: "Cuc 4",
    },
    {
      id: "c5",
      name: "Cuc 5",
    },
    {
      id: "c6",
      name: "Cuc 6",
    },
    {
      id: "c7",
      name: "Cuc 7",
    },
    {
      id: "c8",
      name: "Cuc 8",
    },
    {
      id: "c9",
      name: "Cuc 9",
    },
    {
      id: "c10",
      name: "Cuc 10",
    },
    {
      id: "c11",
      name: "Cuc 11",
    },
    {
      id: "c12",
      name: "Cuc 12",
    },
    {
      id: "c13",
      name: "Cuc 13",
    },
    {
      id: "c14",
      name: "Cuc 14",
    },
    {
      id: "c15",
      name: "Cuc 15",
    },
    {
      id: "c16",
      name: "Cuc 16",
    },
    {
      id: "ci1",
      name: "Cuoi 1",
    },
    {
      id: "ci2",
      name: "Cuoi 2",
    },
    {
      id: "ci3",
      name: "Cuoi 3",
    },
    {
      id: "ci4",
      name: "Cuoi 4",
    },
    {
      id: "ci5",
      name: "Cuoi 5",
    },
    {
      id: "ci6",
      name: "Cuoi 6",
    },
    {
      id: "ci7",
      name: "Cuoi 7",
    },
    {
      id: "ci8",
      name: "Cuoi 8",
    },
    {
      id: "ci9",
      name: "Cuoi 9",
    },
    {
      id: "h1",
      name: "Hong 1",
    },
    {
      id: "h2",
      name: "Hong 2",
    },
    {
      id: "h3",
      name: "Hong 3",
    },
    {
      id: "h4",
      name: "Hong 4",
    },
    {
      id: "h5",
      name: "Hong 5",
    },
    {
      id: "h7",
      name: "Hong 7",
    },
    {
      id: "h8",
      name: "Hong 8",
    },
    {
      id: "h9",
      name: "Hong 9",
    },
    {
      id: "h10",
      name: "Hong 10",
    },
    {
      id: "h11",
      name: "Hong 11",
    },
    {
      id: "h12",
      name: "Hong 12",
    },
    {
      id: "h13",
      name: "Hong 13",
    },
    {
      id: "h14",
      name: "Hong 14",
    },
    {
      id: "h15",
      name: "Hong 15",
    },
    {
      id: "h16",
      name: "Hong 16",
    },
    {
      id: "x1",
      name: "Xuan 1",
    },
    {
      id: "x2",
      name: "Xuan 2",
    },
    {
      id: "x3",
      name: "Xuan 3",
    },
    {
      id: "x4",
      name: "Xuan 4",
    },
    {
      id: "x5",
      name: "Xuan 5",
    },
    {
      id: "x6",
      name: "Xuan 6",
    },
    {
      id: "x7",
      name: "Xuan 7",
    },
    {
      id: "x8",
      name: "Xuan 8",
    },
    {
      id: "x9",
      name: "Xuan 9",
    },
  ];

  const ItemView = ({ item }) => {
    return (
      <View style={styles.button}>
        <TouchableHighlight onPress={() => getItem(item)}>
          <View>
            <Text>{item.name}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  };

  const getItem = (item) => {
    props.SetFlower(item.id);
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 10,
          width: "100%",
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Text>Danh Sách Hoa</Text>
      <FlatList
        data={flowers}
        renderItem={ItemView}
        ItemSeparatorComponent={ItemSeparatorView}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
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
  button: {
    backgroundColor: "#c4fffa",
    padding: 15,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  countText: {
    color: "#FF00FF",
  },
});

export default ListFlower;
