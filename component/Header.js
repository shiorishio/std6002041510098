// import library
import React, { component } from 'react';
import { View, Text } from 'react-native';

// create component
class Header extends Comment {
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
        padding: 10,
        alignItems: 'center'
    },
    text:{
        fontSize: 20
    }
}

// export
export default Header;

