import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
const flowers = [
  {
    id: "c1",
    name: "Cuc 1",
    hinh: require("../assets/image/cuc_1.jpg"),
  },
  {
    id: "c2",
    name: "Cuc 2",
    hinh: require("../assets/image/cuc_2.jpg"),
  },
  {
    id: "c3",
    name: "Cuc 3",
    hinh: require("../assets/image/cuc_3.jpg"),
  },
  {
    id: "c4",
    name: "Cuc 4",
    hinh: require("../assets/image/cuc_4.jpg"),
  },
  {
    id: "c5",
    name: "Cuc 5",
    hinh: require("../assets/image/cuc_5.jpg"),
  },
  {
    id: "c6",
    name: "Cuc 6",
    hinh: require("../assets/image/cuc_6.jpg"),
  },
  {
    id: "c7",
    name: "Cuc 7",
    hinh: require("../assets/image/cuc_7.jpg"),
  },
  {
    id: "c8",
    name: "Cuc 8",
    hinh: require("../assets/image/cuc_8.jpg"),
  },
  {
    id: "c9",
    name: "Cuc 9",
    hinh: require("../assets/image/cuc_9.jpg"),
  },
  {
    id: "c10",
    name: "Cuc 10",
    hinh: require("../assets/image/cuc_10.jpg"),
  },
  {
    id: "c11",
    name: "Cuc 11",
    hinh: require("../assets/image/cuc_11.jpg"),
  },
  {
    id: "c12",
    name: "Cuc 12",
    hinh: require("../assets/image/cuc_12.jpg"),
  },
  {
    id: "c13",
    name: "Cuc 13",
    hinh: require("../assets/image/cuc_13.jpg"),
  },
  {
    id: "c14",
    name: "Cuc 14",
    hinh: require("../assets/image/cuc_14.jpg"),
  },
  {
    id: "c15",
    name: "Cuc 15",
    hinh: require("../assets/image/cuc_15.jpg"),
  },
  {
    id: "c16",
    name: "Cuc 16",
    hinh: require("../assets/image/cuc_16.jpg"),
  },
  {
    id: "ci1",
    name: "Cuoi 1",
    hinh: require("../assets/image/cuoi_1.jpg"),
  },
  {
    id: "ci2",
    name: "Cuoi 2",
    hinh: require("../assets/image/cuoi_2.jpg"),
  },
  {
    id: "ci3",
    name: "Cuoi 3",
    hinh: require("../assets/image/cuoi_3.jpg"),
  },
  {
    id: "ci4",
    name: "Cuoi 4",
    hinh: require("../assets/image/cuoi_4.jpg"),
  },
  {
    id: "ci5",
    name: "Cuoi 5",
    hinh: require("../assets/image/cuoi_5.jpg"),
  },
  {
    id: "ci6",
    name: "Cuoi 6",
    hinh: require("../assets/image/cuoi_6.jpg"),
  },
  {
    id: "ci7",
    name: "Cuoi 7",
    hinh: require("../assets/image/cuoi_7.jpg"),
  },
  {
    id: "ci8",
    name: "Cuoi 8",
    hinh: require("../assets/image/cuoi_8.jpg"),
  },
  {
    id: "ci9",
    name: "Cuoi 9",
    hinh: require("../assets/image/cuoi_9.jpg"),
  },
  {
    id: "h1",
    name: "Hong 1",
    hinh: require("../assets/image/hong_1.jpg"),
  },
  {
    id: "h2",
    name: "Hong 2",
    hinh: require("../assets/image/hong_2.jpg"),
  },
  {
    id: "h3",
    name: "Hong 3",
    hinh: require("../assets/image/hong_3.jpg"),
  },
  {
    id: "h4",
    name: "Hong 4",
    hinh: require("../assets/image/hong_4.jpg"),
  },
  {
    id: "h5",
    name: "Hong 5",
    hinh: require("../assets/image/hong_5.jpg"),
  },
  {
    id: "h7",
    name: "Hong 7",
    hinh: require("../assets/image/hong_7.jpg"),
  },
  {
    id: "h8",
    name: "Hong 8",
    hinh: require("../assets/image/hong_8.jpg"),
  },
  {
    id: "h9",
    name: "Hong 9",
    hinh: require("../assets/image/hong_9.jpg"),
  },
  {
    id: "h10",
    name: "Hong 10",
    hinh: require("../assets/image/hong_10.jpg"),
  },
  {
    id: "h11",
    name: "Hong 11",
    hinh: require("../assets/image/hong_11.jpg"),
  },
  {
    id: "h12",
    name: "Hong 12",
    hinh: require("../assets/image/hong_12.jpg"),
  },
  {
    id: "h13",
    name: "Hong 13",
    hinh: require("../assets/image/hong_13.jpg"),
  },
  {
    id: "h14",
    name: "Hong 14",
    hinh: require("../assets/image/hong_14.jpg"),
  },
  {
    id: "h15",
    name: "Hong 15",
    hinh: require("../assets/image/hong_15.jpg"),
  },
  {
    id: "h16",
    name: "Hong 16",
    hinh: require("../assets/image/hong_16.jpg"),
  },
  {
    id: "x1",
    name: "Xuan 1",
    hinh: require("../assets/image/xuan_1.jpg"),
  },
  {
    id: "x2",
    name: "Xuan 2",
    hinh: require("../assets/image/xuan_2.jpg"),
  },
  {
    id: "x3",
    name: "Xuan 3",
    hinh: require("../assets/image/xuan_3.jpg"),
  },
  {
    id: "x4",
    name: "Xuan 4",
    hinh: require("../assets/image/xuan_4.jpg"),
  },
  {
    id: "x5",
    name: "Xuan 5",
    hinh: require("../assets/image/xuan_5.jpg"),
  },
  {
    id: "x6",
    name: "Xuan 6",
    hinh: require("../assets/image/xuan_6.jpg"),
  },
  {
    id: "x7",
    name: "Xuan 7",
    hinh: require("../assets/image/xuan_7.jpg"),
  },
  {
    id: "x8",
    name: "Xuan 8",
    hinh: require("../assets/image/xuan_8.jpg"),
  },
  {
    id: "x9",
    name: "Xuan 9",
    hinh: require("../assets/image/xuan_9.jpg"),
  },
];

const DetailFlower = (props) => {
  const [img, setImg] = useState();
  useEffect(() => {
    const flowerChon = flowers.filter(function (flower) {
      return flower.id == props.Flower;
    });
    setImg(flowerChon);
  }, [props.Flower]);

  const ItemView = ({ item }) => {
    return (
      <View style={styles.button}>
        <TouchableHighlight>
          <View>
            <Image source={item.hinh} style={{ width: 170, height: 170 }} />
            <Text style={styles.text}>{item.name}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: "red",
        }}
      />
    );
  };
  return (
    <>
      <Text style={styles.text}>Chi tiết Hoa</Text>
      <FlatList
        data={img}
        renderItem={ItemView}
        ItemSeparatorComponent={ItemSeparatorView}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  item: {
    width: 150,
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 32,
  },
  hideBtn: {
    fontSize: 20,
    marginVertical: 50,
    backgroundColor: "#f9c2ff",
    padding: 20,
  },
  text: {
    textAlign: "center",
  },
});

export default DetailFlower;
