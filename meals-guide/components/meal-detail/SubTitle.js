import { Text, View, StyleSheet } from "react-native";

export function SubTitle({title}) {
    return (
      <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{title}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#daa520",
  },
  subTitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#daa520",
    borderBottomWidth: 2,
  },
});