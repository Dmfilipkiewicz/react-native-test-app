import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { returnView, EnumView } from '../../helpers/EnumView.js'
import SimpleNav from './header/SimpleNav.js';
import LocationNav from './header/LocationNav.js';
import styles from './Style.js'
import Container from './content/listofCards/Container.js';
import {result} from '../../requests/api'
import Axios from 'axios';

const Main = props => {

    const [switchView, setSwitchView] = useState(0)

    useEffect( () => {
        setSwitchView(EnumView.Main);
    }, [])

    const handleSwitchView = ((newView) => {
        console.log(newView)
        setSwitchView(newView)
    })
    return (
    <SafeAreaView>
    {/* <View style={styles.Header}>
        <SimpleNav handleSwitchView = {handleSwitchView}/>
        <LocationNav style={styles.Header__text} numberView = {switchView} />
    </View> */}
    <View>
        <Container/>
    </View>
    </SafeAreaView>
    )
} 

export default Main;