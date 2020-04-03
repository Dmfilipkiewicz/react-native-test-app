import React from 'react';
import { View, SafeAreaView, Button } from 'react-native';
import { EnumView } from '../../../enums/EnumView';
import { connect } from 'react-redux'

const SimpleNav = ({handleSwitchView}) => {

        function handleChange(enumV){
            handleSwitchView(enumV)
        }
    

    return (
    <SafeAreaView>
        <View>
            <Button title = 'Main' onPress={() => handleChange(EnumView.Main)}/>
            <Button title = 'Secondary' onPress={(e) => handleChange(EnumView.Secondary)}/>
        </View>
    </SafeAreaView>)
} 

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps)(SimpleNav);