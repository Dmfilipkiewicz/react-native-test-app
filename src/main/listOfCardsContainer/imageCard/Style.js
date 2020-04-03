import { StyleSheet, Dimensions } from 'react-native'

const dimensions = Dimensions.get('window')
const imageWidth = dimensions.width;

export default StyleSheet.create({
    image_view:{
        
    },
    image_card:{
        height:200,
        width: imageWidth
    }
})