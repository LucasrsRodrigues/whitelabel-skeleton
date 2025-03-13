import { WebView } from 'react-native-webview';
import { StatusBar, StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#7bda33"
      }}
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <WebView
        style={styles.container}
        source={{ uri: 'https://www.ib.app.orixbank.com.br/' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
