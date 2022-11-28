import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import CatsCard from "./CatsCard"; /* importacion de card donde están todos los datos */
import theme from '../theme'; /* importación de archivo js donde definí estilos principales a utilizar en la app */

const Main = () => {
  return (
    <View style={styles.background}> 
      <CatsCard />
    </View> 
  )
} /* El componente main solo muestra un fondo gris piedra claro y el componente de la card de gatos */

const styles = StyleSheet.create({
  background: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height /* "Dimensions" lo utilicé para poner width y height al 100%, pero midiendo el ancho y el alto de la pantalla */
  }
})

export default Main;
