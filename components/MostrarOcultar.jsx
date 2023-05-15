import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const MostrarOcultar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleVisibility}>
        <Text style={{ color: "blue" }}>Mostrar/Ocultar</Text>
      </TouchableOpacity>
      {isVisible && (
        <View>
          <Text style={{ marginTop: 10 }}>
            Este es el texto que se muestra y oculta
          </Text>
        </View>
      )}
    </View>
  );
};

export default MostrarOcultar;
