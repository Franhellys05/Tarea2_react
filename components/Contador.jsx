import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Contador() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  const decrementarContador = () => {
    setContador(contador - 1);
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Contador</Text>
      <Text style={{ fontSize: 48, marginBottom: 32 }}>{contador}</Text>
      <Button
        style={styles.button}
        title="Incrementar"
        onPress={incrementarContador}
      />
      <Button title="Decrementar" onPress={decrementarContador} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 30,
  },
});
