// import library
import React, { component } from 'react';
import { View, Text } from 'react-native';

// create component
class Header extends Comment {
    render() {
        return (
            <View>
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}

// export
export default Header;
