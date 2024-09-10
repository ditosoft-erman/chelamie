import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
            <View style={{ height: '100%', width: '100%' }}>
                <StatusBar style="auto" />
                <LinearGradient colors={[ '#ffffff',  '#FFD600', '#FFD600', '#FF0069']} style={{height: '100%', width: '100%', position: 'absolute',}}/>

              

              

                <View style={{ height: '100%', width: '100%', justifyContent: 'center', paddingTop: 10, paddingBottom: 10 }}>
                    <View style={{ alignItems: 'center', width: '100%'}}>
                    <Image style={{height: 100, width:100, marginBottom: 30}} source={require('../assets/insta-logo.png')}/>
                    </View>
                   
                   
                    <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                        <View  style={{ backgroundColor: 'transparent', padding: 20, borderRadius: 16, width: '100%', borderBottomWidth: 1, borderBottomColor: 'black' }}>
                            <TextInput placeholder="Email" placeholderTextColor={'black'} />
                        </View>
                        <View  style={{ backgroundColor: 'transparent', padding: 20, borderRadius: 16, width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: 20, borderBottomWidth: 1, borderBottomColor: 'black' }}>
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor={'black'}
                                secureTextEntry={!passwordVisible}
                                style={{ flex: 1,  height: 50 }}
                            />
                            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                                <Ionicons
                                    name={passwordVisible ? "eye-outline" : "eye-off-outline"}
                                    size={24}
                                    color="black"
                                  
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '100%' }}>
                            <TouchableOpacity style={{ width: '100%', backgroundColor: 'white', padding: 12, borderRadius: 16, marginTop: 30 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <View  style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
                            <Text>Don't have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.push('Register')}>
                                <Text style={{ color: 'white' }}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View> 
    );
}


export default LoginScreen;
