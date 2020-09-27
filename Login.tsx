import React,{ Component }from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Image } from 'react-native';
export default class LoginView extends Component {
  [x: string]: any;

  constructor(props) {
    super(props);
    this.state = {
      Username   : '',
      password: '',
    }
  }
  onClickListener = (viewId) => {
    alert("this"+viewId);
    if(viewId=='login')
    {
      //Calling Post api endpoint
    fetch('http://localhost:3001/Users/Authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
      },
      body: JSON.stringify({
        userNm : this.state.Username,
        userPwd: this.state.password  
      })
    })
      .then(response => {return response.json()})
      .then(response => {
        alert('bae');
        alert("hi"+JSON.stringify(response));
      })
      .catch(error => alert("Error " + error));
    alert("Button pressed "+ this.state.Username);
    }


    //Calling get api endpoint
    fetch('http://192.168.0.103:3001/Users',{
    
    headers:
    {
      'Access-Control-Allow-Origin' : '*'
    }}).then((response) => {return response.json()})
    .then(response=>alert(JSON.stringify(response)))
    .catch((error) => {
            console.error(error);
          });

    
  }


    
//   const requestOptions = {
//     method: 'POST',
//     headers: { 
//         'Content-Type': 'application/json',
        
//     },
//     body: JSON.stringify({ userNm : 'Shrav',
//         userPwd: 'NewPwd@01'})
// };

// fetch("http://192.168.0.103:3001/Users/Authenticate",requestOptions)
// .then(response => response.json())
// .then(response => {
//         alert('hi'+JSON.stringify(response));
//       })
//       .catch(error => alert("Error " + error));
//     alert("Button pressed "+ this.state.Username);
//   }



  render() {
    return (
      <View style={styles.container}>

        {/* Move tile to a different component */}
        <TouchableOpacity style={styles.card}>
            <Image style={styles.cardImage} source={require('C:/Users/anusha.inuganti/Documents/GitHub/EarnFitApp/Logo.JPG')}/>
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Username"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(Username) => {this.setState({Username})}}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() =>{this.onClickListener('login')}}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text style={styles.RegisterText}>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text style={styles.RegisterText}>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  card:{
    backgroundColor:'#fff',
    marginBottom:10,
    marginLeft:'2%',
    width:'45%',
    height:'30%',
    shadowColor:'#000',
    borderRadius:5,
    shadowOpacity:0.2,
    shadowRadius:3,
    shadowOffset:{
      width:3,
      height:3
    }
  },
  cardImage:{
    marginTop:'1%',
    width:'100%',
    height:'80%',
    resizeMode:'cover'
  },
  cardText:{
    color: '#a9a9a9',
    fontSize:12,
    height:'10%',
    paddingLeft:15
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF4500',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#0d98ba",
  },
  loginText: {
    color: '#FF6347',
  },
  RegisterText: {
    color: 'black',
  }
});