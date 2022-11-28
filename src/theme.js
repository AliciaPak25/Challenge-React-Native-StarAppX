import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#000000",
    textSecondary: "#FFFFFF",
    primary: "#778899",
  },
  fontSizes: {
    fact: 16,
    button: 14,
  },
  fonts: {
    main: Platform.select({
      ios: "Arial",
      android: "Roboto",
      default: "System",
    }),
    /* utilizo Platform para seleccionar distintos tipos de fuente a utilizar según el dispositivo */
  },
  fontWeights: {
    bold: "700",
  },
};

export default theme;
/* archivo theme donde defino estilos generales a utilizar en la app, algunos se repiten más de una vez como textSecondary */
