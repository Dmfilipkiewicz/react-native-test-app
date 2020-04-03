import React from 'react';
import { View, Text } from 'react-native';
import { EnumView } from '../../../enums/EnumView';

const LocationNav = ({numberView, style}) => {
    const location = () => {
        switch(numberView){
            case EnumView.Main: return <Text style={style}>Jesteś w głównym pseudo-widoku :)</Text>
            case EnumView.Secondary: return <Text style={style}>Jestes w podrzędnym pseudo-widoku :))</Text>
            default: 
                 return <Text style={style} >jesteś w nicości :)</Text>
        }
    }
    return (
    <View>
        {location()}
    </View>
    )
} 

export default LocationNav;