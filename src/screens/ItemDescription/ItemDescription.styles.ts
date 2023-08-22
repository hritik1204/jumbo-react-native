import { StyleSheet } from "react-native";
import { width } from "../../Global.styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",

    paddingLeft: width > 370 ? 24 : 20,
    paddingRight: width > 370 ? 24 : 20,
  },
});

export default styles;
