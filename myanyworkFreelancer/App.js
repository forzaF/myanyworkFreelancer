import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Login from './src/screens/login'
import SignUp from './src/screens/signup'



const App: () => React$Node = () => {
  return (
      <SafeAreaView style={styles.container}>
        {/* <Login/> */}
        <SignUp/>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});

export default App;
