import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const Tareas = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    setTareas([...tareas, nuevaTarea]);
    setNuevaTarea("");
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  return (
    <View>
      <Text style={{ marginBottom: 10 }}>Lista de tareas:</Text>
      {tareas.map((tarea, index) => (
        <View
          key={index}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <Text style={{ marginRight: 10 }}>{tarea}</Text>
          <TouchableOpacity onPress={() => eliminarTarea(index)}>
            <Text style={{ color: "red" }}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      ))}
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
      >
        <TextInput
          value={nuevaTarea}
          onChangeText={setNuevaTarea}
          placeholder="Ingrese una tarea"
          style={{
            flex: 1,
            marginRight: 10,
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 5,
            padding: 5,
          }}
        />
        <TouchableOpacity onPress={agregarTarea}>
          <Text style={{ color: "blue" }}>Agregar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tareas;
