import { Platform } from "react-native";

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      textHeader: '#FFFFFF',
      primary: '#0366d6',
      appBackground: '#e1e4e8',
      appBarBackground: '#24292e',
      itemBackground: 'white',
      textBorder: '#ccc',
      error: '#d73a4a',
      rating: '#3792cb'
    },
    fontSizes: {
      body: 14,
      subheading: 16,
      header: 20
    },
    fonts: {
      main: Platform.select({
        android: "Roboto",
        ios: "Arial",
        default: "System",
      })
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    image: {
      width: 50,
      height: 50,
    }
  };
  
  export default theme;