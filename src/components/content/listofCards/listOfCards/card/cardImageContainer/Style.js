import { StyleSheet, Dimensions } from 'react-native'

const dimensions = Dimensions.get('window')
const imageWidth = dimensions.width;
const imageHeight = dimensions.height

export default StyleSheet.create({
    image_view:{
        alignItems: "center",
        justifyContent: "center"
    },
    image_card:{
        alignItems: "center",
        height:300,
        width: 200
    }
})