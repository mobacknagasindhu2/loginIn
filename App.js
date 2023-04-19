import React, { useState } from 'react';

import { View, TextInput, Button, StyleSheet,ImageBackground , Text, Image, Dimensions, ScrollView} from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {

   alert("LoggedIn")
  };
  return (
    <ScrollView>
    <ImageBackground  source={require('./assets/images/Island.png')} style={styles.back}>
    <View style={styles.container}>

    <Text style = {styles.con}>Welcome to Travel App</Text>
    <Image
          style={styles.image}
          source={require('./assets/images/trave.png')}
        />
      <TextInput
        placeholder="Username or Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      /> 
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        style={styles.input}
      />
      <Button title="Login" onPress={onLogin} color = "black"/>
    </View>
    </ImageBackground>

    {/* bottomView */}
  <View style= {styles.bottomView}>
      <View style = {{padding : 40}}>
    <Text style = {styles.pa}>Forgot Password</Text>
    <Text style= {{color  :"White"}}>
      New to travel App  <Text style = {styles.pa}> Signup</Text>
   
</Text>
      </View>
    </View> 
  
 
    </ScrollView> 
  );
};

const styles = StyleSheet.create({
  back:{
    flex:1,
    height:Dimensions.get("window").height/1.33,

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  con:{
    fontSize:40,
    fontFamily:"Roboto",
    padding:16,
  },
  input: {
    width: '100%',
    height: 50,
    padding: 16,
   
   
    marginBottom: 20,
    backgroundColor:"white",
    
    borderColor: '#e4d0ff',
    
    color: '#120438',
    borderRadius: 6,
  },
  image: {
    width: 50,
    height: 50,
    margin: 20,
   borderRadius:50, 
   
  },
  bottomView : {
    flex:1,
    backgroundColor:"#21274B",
    alignItems: 'center',
    padding: 20,
    height:Dimensions.get("window").height/2.9,
    
    

  },
  pa: {
    color:"white",
    padding:20,
    textDecorationLine:"underline",

  },
 
});

export default LoginScreen;
