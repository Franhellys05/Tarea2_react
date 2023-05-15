import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Lista() {
  const [lista, setLista] = useState([]);
  const [nuevoElemento, setNuevoElemento] = useState("");

  const agregarElemento = () => {
    setLista([...lista, nuevoElemento]);
    setNuevoElemento("");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Lista</Text>
      <TextInput
        style={{
          height: 40,
          width: "80%",
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 16,
          paddingHorizontal: 8,
        }}
        value={nuevoElemento}
        onChangeText={setNuevoElemento}
        placeholder="Nuevo elemento"
      />
      <Button title="Agregar" onPress={agregarElemento} />
      {lista.map((elemento, index) => (
        <Text key={index} style={{ fontSize: 24 }}>
          {elemento}
        </Text>
      ))}
    </View>
  );
}
