import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mostrarCampos, setMostrarCampos] = useState(false);

  const enviarFormulario = () => {
    setMostrarCampos(true);
  };

  const borrarFormulario = () => {
    setNombre("");
    setApellido("");
    setEmail("");
    setTelefono("");
    setMostrarCampos(false);
  };

  return (
    <View>
      <TextInput
        value={nombre}
        onChangeText={setNombre}
        placeholder="Nombre"
        style={{
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 5,
          padding: 5,
          marginBottom: 10,
        }}
      />
      <TextInput
        value={apellido}
        onChangeText={setApellido}
        placeholder="Apellido"
        style={{
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 5,
          padding: 5,
          marginBottom: 10,
        }}
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={{
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 5,
          padding: 5,
          marginBottom: 10,
        }}
      />
      <TextInput
        value={telefono}
        onChangeText={setTelefono}
        placeholder="Teléfono"
        style={{
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 5,
          padding: 5,
          marginBottom: 10,
        }}
      />
      {mostrarCampos && (
        <View>
          <Text>Nombre: {nombre}</Text>
          <Text>Apellido: {apellido}</Text>
          <Text>Email: {email}</Text>
          <Text>Teléfono: {telefono}</Text>
        </View>
      )}
      {!mostrarCampos && (
        <Button title="Mostrar campos" onPress={enviarFormulario} />
      )}
      {mostrarCampos && (
        <Button title="Borrar formulario" onPress={borrarFormulario} />
      )}
    </View>
  );
};

export default Formulario;
