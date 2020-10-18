import { useLinkProps } from '@react-navigation/native';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';



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
    backgroundColor: '#DCDCDC',
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
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});

export default class RegisterUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      mobilenumber:  '',
      Firstname:  '',
      Lastname: '',
      email:  '',
      username: '',
      password: '', 
    }
  }

  handleChange = event => {
    
    const {name, value} = event.target
    alert(name);
    this.setState({
      [name]: value
    })    
  }
   
  handleSubmit = event => {
    event.preventDefault()
    const { email, mobilenumber, password ,Lastname,Firstname} = this.state
    alert(`Your registration detail: \n 
           Email: ${email} \n 
           mobilenumber: ${mobilenumber} \n
           Lastname: ${Lastname} \n
           Firstname: ${Firstname} \n
           Password: ${password}`)
  }
  
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

/*
* the functions for our button
*/
previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <button 
        className="btn btn-secondary" 
        type="button" onClick={this._prev}>
      Previous
      </button>
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <3){
    return (
      <button 
        className="btn btn-primary float-right" 
        type="button" onClick={this._next}>
      Next
      </button>        
    )
  }
  return null;
}
  
  render() {    
    return (
      <React.Fragment>
      <p>Step {this.state.currentStep} </p> 

      <form onSubmit={this.handleSubmit}>
      {/* 
        render the form steps and pass required props in
      */}
        <Step1 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          
          mobilenumber={this.state.mobilenumber}
          Firstname={this.state.Firstname}
          Lastname={this.state.Lastname}
          
        />
        <Step2 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          email={this.state.email}
          age={this.state.age}
        />
         <Step3 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          password={this.state.password}
        />

        {this.previousButton()}
        {this.nextButton()}

      </form>
      </React.Fragment>
    );
  }
  
}



function Step1(props) {

  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <View style={styles.container}>       
    <View style={styles.inputContainer}  >
      <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
      <TextInput style={styles.inputs}
          placeholder="Mobile Number"
          keyboardType="numeric"
          underlineColorAndroid='transparent'
          name={props.mobilenumber}
          onChange={props.handleChange}

         
         />
    </View>

    <View style={styles.inputContainer}>
      <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
      <TextInput style={styles.inputs}
          placeholder="Firstname"
          keyboardType="default"
          underlineColorAndroid='transparent'
          onChangeText={(Firstname) => {this.state.props.Firstname}}/>
    </View>

    <View style={styles.inputContainer}>
      <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
      <TextInput style={styles.inputs}
          placeholder="Lastname"
          keyboardType="default"
          underlineColorAndroid='transparent'
          onChangeText={(Lastname) => {this.setState({Lastname})}}/>
    </View>
    </View>
  );
  
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <View style={styles.container}> 
    <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
              <TextInput style={styles.inputs}
                  placeholder="Email (Optional)"
                  keyboardType="email-address"
                  underlineColorAndroid='transparent'
                  onChangeText={(Email) => {this.setState({Email})}}/>
            </View>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
              <TextInput style={styles.inputs}
                  placeholder="Age"
                  keyboardType="numeric"
                  underlineColorAndroid='transparent'
                  onChangeText={(Age) => {this.setState({Age})}}/>
            </View>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
              <TextInput style={styles.inputs}
                  placeholder="Height(in cms)"
                  keyboardType="numeric"
                  underlineColorAndroid='transparent'
                  onChangeText={(Height) => {this.setState({Height})}}/>
            </View>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
              <TextInput style={styles.inputs}
                  placeholder="Weight(in Kgs)"
                  keyboardType="numeric"
                  underlineColorAndroid='transparent'
                  onChangeText={(Weight) => {this.setState({Weight})}}/>
            </View>
            </View>
   
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <React.Fragment>
       <View style={styles.container}> 
    <Text style={styles.loginText}>Workout History</Text>

    <View style={styles.inputContainer}>

</View>

    <View style={styles.inputContainer}>
   <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
    <TextInput style={styles.inputs}
      placeholder="Password"
      secureTextEntry={true}
      underlineColorAndroid='transparent'
      onChangeText={(password) => this.setState({password})}/>
    </View>


    <View style={styles.inputContainer}>
      <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
      <TextInput style={styles.inputs}
          placeholder="Confirm Password"
          secureTextEntry={true}
          underlineColorAndroid='transparent'
          onChangeText={(cpassword) => this.setState({cpassword})}/>
    </View>
    </View>
    <button className="btn btn-success btn-block">Sign up</button>
    </React.Fragment>
  );
}




ReactDOM.render(<RegisterUser />, document.getElementById('root'))

