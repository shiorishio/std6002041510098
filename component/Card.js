import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import CardSection from './CardSection';

class Card extends Component {
    render() {
        return(
            <View>
                <CardSection>
                    <Image 
                        style={{ width: 50, height: 50 }}
                        source={{ uri: 'https://goo.gl/PguLCa' }} 
                    />
                    <Text>อาชิตะ</Text>
                    <Text>POP</Text>
                </CardSection>  
                <CardSection>
                    <Image 
                        style={{ width: 450, height: 300 }}
                        source={{ uri: 'https://goo.gl/PguLCa' }} 
                    />
                </CardSection>

                <CardSection>
                    <View>
                    <View style={{ width: 100, alignItems: 'center' }}>
                    <Button
                        title="Buy"
                    />
                    </View>
                    </View>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    button: {
        justifyContent: 'center', 
        justifyItems: 'center', 
        marginTop: 10
    }
}

export default Card;