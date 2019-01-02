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
            <View style={sty.newView}>

            </View>
        );
    }
}

const sty = StyleSheet.create({
    newView: {
        flex: 1,
        backgroundColor:'yellow'
    },

});
