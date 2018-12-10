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

    render(props) {
        // const {hotLists} = props;
        return (
            <View style={sty.categoryView}>

            </View>
        );
    }
}

const sty = StyleSheet.create({
    categoryView: {
        flex: 1,
        backgroundColor:'blue'
    },

});
