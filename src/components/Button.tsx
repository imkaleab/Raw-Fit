import * as React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import colors from "../config/colors";

interface Props {
  disabled?: boolean; // Add a "disabled" prop
  label: string;
  onPress: () => void;
}

class Button extends React.Component<Props> {
  render() {
    const { disabled, label, onPress } = this.props;
    // If the button is disabled we lower its opacity
    const containerStyle = [
      styles.container,
      disabled
        ? styles.containerDisabled
        : styles.containerEnabled
    ];
    return (
      <TouchableOpacity
        style={containerStyle}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: "center",
    alignContent: "space-around",
    justifyContent: "flex-start"
  },
  logo: {
    height: "80%",
    width: '100%',
    resizeMode: "contain",
    marginTop: -145,
    borderTopWidth: 0,
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%",
    height: 100,
    marginTop: -245,
  }
});

export default Button;
