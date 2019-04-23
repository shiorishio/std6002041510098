// import library
import React from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

// write component
class Login extends React.Component {
    static navigationOptions = {
            title: "Login",
            headerStyle: {
                backgroundColor: "green",
            },
            headerTintColor: "pink",

    };
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.onChangeEmail = this.onChangeEmail.bind()
    }
    //onChangeEmail(e) {
        //console.log('onChangeEmail', e)
    onChangeEmail= (e) => {
        this.setState({email: e})
    }
    //onChangePassword(e) {
        //this.setState({ password: e})
    //}
    onPress(){
        //console.log(this.state)
        //const url = ('http://128.199.240.120:9999/api/auth/login', {
        axios.post('http://128.199.240.120:9999/api/auth/login', {
            email: this.state.email,
            password: this.state.password
        }).then(async function (response) {
            console.log(response.data.data.token);
            try {
                await AsyncStorage.setItem("login_token", response.data.data.token);
            } catch (error) {
                alert("Error");
                return;
            }
            this.props.navigation.navigate("Profile");
        }.bind(this)).catch(function (error) {
            alert("Login Fail");
            console.log(error);
        });
    }

    async componentDidMount() {
        try{
            if (await AsyncStorage.getItem("login_token") !==null) {
                this.props.navigation.navigate("Profile");
            }
        } catch (error) {
            console.error(error);
        }
    }
         
        //axios.post(url, this.state)
            //.then(response => {
                //console.log('token', response.data.data.token)
            //})
    //}

    render() {
        return (
            //<Text>Test Email</Text>
            <View>
                <TextInput 
                    style={{ height: 40, fontWeight: 'bold', fontSize: 20 }}
                    placeholder="E-mail"
                    value={this.state.email}
                    //onChangeText={this.onChangeEmail.bind(this)}
                    onChangeText = {(email)=> {this.setState({email: email}) }}
                />
                <TextInput 
                    secureTextEntry
                    style={{ height: 40, fontWeight: 'bold', fontSize: 20 }}
                    placeholder="Password"
                    value={this.state.password}
                    //onChangeText={this.onChangePassword.bind(this)}
                    onChangeText = { (pass) => {this.setState({password: pass}) }}
                />
                <Button
                    color="#1E90FF"
                    title="Login"
                    onPress={this.onPress.bind(this)}
                />
            </View>
        );
    }
}

// export
export default Login;
