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
        const {cid = '', thumb = '', id = '', tag = []} = hotLists;
        console.log(tag,thumb, '--hotLists---');
        return (
            <ScrollView style={sty.hot_wrap}>
                <View style={sty.hotView}>
                    <TouchableHighlight style={sty.item} onPress={()=>{
                        console.log(cid,id,'-----------------------')
                    }}>
                        <View style={sty.pictures}>
                            <Image style={sty.images} source={{uri: thumb}}/>
                        </View>
                        <View style={sty.tags}>
                            <Text style={sty.text_tag}>
                                {tag && tag.map((i) => {
                                    return (i)
                                })}
                            </Text>

                        </View>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        );
    }
}

const sty = StyleSheet.create({
    hot_wrap: {
        flex: 1,
    },
    hotView: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 300,
    },
    item: {
        width: '33.33%',
        height: 296,
        position: 'relative',
    },
    pictures: {
        flex: 1,
        height: 296,
        position: 'absolute',
        left: 0,
        top: 0,
    },
    images: {
        flex: 1,
        height: 296,
    },
    tags: {
        flex: 1,
        height: 50,
        display: 'flex',
        position: 'absolute',
        left: 10,
        top: 200,
        overflow: 'hidden'
    },
    text_tag: {
        color: 'black',
        fontSize: 20,
    }

});
