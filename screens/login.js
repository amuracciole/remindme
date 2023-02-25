import { StatusBar } from 'expo-status-bar';
import {TouchableOpacity, Text, View, TextInput, Alert } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import Loginstyles from '../styles/loginstyles';
import React from 'react';

function SvgTop() {
    return (
      <Svg
        width={430}
        height={326}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
    <Path
      d="M430 0H-14v297.858c28.696 21.237 111.86 50.968 214.957 0 103.095-50.969 195.652-21.237 229.043 0V0Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={208}
        y1={0}
        x2={208.158}
        y2={797.398}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1B3283" />
        <Stop offset={1} stopColor="#1B3283" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
    )
  }


const showAlert =() =>
Alert.alert('Password recovery!','Do you want to recover your password?',[
    {text:'YES', onPress:()=>console.log('YES')},
    {text:'NO', onPress:()=>console.log('NO')}
] )

const Loginpage =({ navigation })  => {
    return (
        <View style={Loginstyles.main_container}>
        <View style={Loginstyles.container_SVG}>
            <SvgTop/>
        </View>
        <View style={Loginstyles.container}>
            <Text style={Loginstyles.titulo_principal}>Hello!</Text>
            <Text style={Loginstyles.titulo_secundario}>Welcome to RemindMe</Text>
            <TextInput 
            placeholder='mail@domain.com'
            style={Loginstyles.text_input} 
            />
            <TextInput
            placeholder='password'
            style={Loginstyles.text_input} 
            />
        </View>
        <View style={Loginstyles.text_password}>
            <TouchableOpacity onPress={showAlert}>
                <Text>Forgot password</Text>        
            </TouchableOpacity>
        </View>
        <View style={Loginstyles.container}>
            <View style={Loginstyles.button}>
            <TouchableOpacity onPress={() => navigation.navigate('Destino')}>
                <Text style={Loginstyles.button_text}>Log In</Text>        
            </TouchableOpacity>
            </View>
        </View>
        <StatusBar style="auto" />
        </View>
    );
}

export default Loginpage;