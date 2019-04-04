// import library
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// create component
class Header extends Component {
    render() {
        return (
            <View style={style.header}>
                <Text style={style.text}>
                    {this.props.title}
                </Text>
            </View>
        );
    }
}

// style
const style = {
    header: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: "#7FFFD4"
    },
    text:{
        fontSize: 30
    }
}

// export
export default Header;
