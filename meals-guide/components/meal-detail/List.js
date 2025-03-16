import { Text, View, StyleSheet } from "react-native";

export function List({ data }) { 
    return data.map((dataPoint) => (
      <View style={styles.listItem} key={dataPoint}>
        <Text style={styles.itemText}>{dataPoint}</Text>
      </View>
    ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: "#daa520",
  },
  itemText: {
    textAlign: "center",
  },
});
