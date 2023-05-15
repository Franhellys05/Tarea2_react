import { StyleSheet, View, Text } from "react-native";
import Lista from "./components/Lista";
import Contador from "./components/Contador";
import MostrarOcultar from "./components/MostrarOcultar";
import Tareas from "./components/Tareas";
import Formulario from "./components/Formulario";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 48, fontWeight: "600", marginBottom: 32 }}>
        ¡Hola Bienvenidos a MultiApp!
      </Text>

      <View style={styles.row}>
        <Contador />
        <Lista />
        <MostrarOcultar />
        <Tareas />
        <Formulario />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    gap: 140,
    alignItems: "center",
    justifyContent: "center",
  },
});
