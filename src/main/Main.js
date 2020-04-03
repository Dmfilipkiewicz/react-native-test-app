import React from 'react';
import { View, SafeAreaView } from 'react-native';
import Container from './content/listofCards/Container.js';
import { ScrollView } from 'react-native-gesture-handler';

const Main = props => {
    return (
    <SafeAreaView>
        <View>
            <ScrollView>
                <Container/>
            </ScrollView>
        </View>
    </SafeAreaView>
    )
} 

export default Main;