import { StyleSheet } from "react-native";
import { horizontalScale, width } from "../../Global.styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingLeft: width > 370 ? horizontalScale(24) : horizontalScale(20),
    paddingRight: width > 370 ? horizontalScale(24) : horizontalScale(20),
  },
});

export default styles;
