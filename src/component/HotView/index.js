import React, {PureComponent} from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    TouchableHighlight,
    Dimensions
} from "react-native";

const {height: D_HEIGHT, width: D_WIDTH} = Dimensions.get('window');
export default class extends PureComponent {

    render() {
         const {hotLists} = this.props;
         console.log(hotLists,'--hotLists---');
        return (
            <View style={sty.hotView}>

            </View>
        );
    }
}

const sty = StyleSheet.create({
    hotView: {
        flex: 1,
        backgroundColor:'red'
    },

});
