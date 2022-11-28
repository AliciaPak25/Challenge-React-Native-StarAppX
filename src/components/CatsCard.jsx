import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../theme';

const CatsCard = () => {
  const [catFact, setCatFact] = useState("");
  const [catImage, setCatImage] = useState(); // En estos useState se guarda la información de la API (frase e imagen)

  const api = "https://some-random-api.ml/animal/cat"; //API

  const getCatFact = async () => {
    fetch(api)
      .then((response) => response.json())
      .then((json) => setCatFact(json.fact)) // solo obtengo el fact (frase)
      .catch((error) => console.log(error));
  }; //fetch a la API para obtener los datos de gatos

  const getCatImage = async () => {
    fetch(api)
      .then((response) => response.json())
      .then((json) => setCatImage(json.image)) //Esta función es para obtener la imagen de los gatos
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCatFact();
    getCatImage();
  }, []); //cuando se carga "App", se hace el pedido de info a al API


  function getRandomCats() {
    getCatFact();
    getCatImage();
  } //función creada para ser utilizada en el botón y que al hacer click muestre los distintos datos de la API (cambia el dato)

  return (
      <View style={styles.card}>
        <Text style={styles.text}>{catFact}</Text>
        <Image source={{ uri: catImage }} style={styles.image} />
        <TouchableOpacity onPress={() => getRandomCats()}>
          <View style={styles.button}> 
            <Text style={styles.textButton}>Next Fact</Text>
          </View>
        </TouchableOpacity>
      </View>
  )
}/*  Como en React Native no existe el hover y los estilos que se le pueden dar a un button son limitados, utilicé Touchable Opacity para simular un hover y un botón con función onPress para cambiar los datos de gatos (frase e imagen) */

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    alignItems: 'center', //sección centrada
    justifyContent: 'center',
    backgroundColor: theme.colors.textSecondary, //sección en blanco
    width: 350,
    height: 600,
    borderRadius: 20, //sección redondeada
    padding: 10, //padding en bordes del "div" (View)
  },
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.fact, //los estilos que dicen theme vienen del archivo js: theme.js
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.bold,
    padding: 10, //padding entre elementos
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10, //imagen redondeada
    padding: 10, //padding entre elementos
  },
  button: {
    backgroundColor: '#5500be',
    marginTop: 40,
    borderRadius: 20, //botón redondeado
    padding: 15, //padding entre elementos
    width: 250,
  },
  textButton: {
    color: theme.colors.textSecondary,
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.button,
    fontWeight: theme.fontWeights.bold,
    textAlign: 'center'
  } // Este es solo el texto del botón, no hacía falta ponerle padding porque ya lo tiene el view de este "botón"
})
/* utilizo StyleSheet de React Native para que no poner los estilos directamente en el componente y que no esté cargando un objeto cada vez que este se renderiza */

export default CatsCard;