import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import ListOfCards from './listOfCards/Index.js';
import SearchForCards from './SearchForCards.js';
import {useDataCardApi, axiosGet } from '../../../../requests/api.js';
import { connect } from 'react-redux';
import { CardRequest } from '../../../../requests/apiCards.js';

const Container = (props) => {

    return (
    <View>
        <SearchForCards/>
        <ListOfCards/>
    </View>)
} 


export default connect()(Container);