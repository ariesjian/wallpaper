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
import {TabView, SceneMap} from 'react-native-tab-view';
import {CategoryView, NewView, HotView} from '../../componentItems'
import {defaultList, categoryList, wallpaperList} from "../../service/api";

const {height: D_HEIGHT, width: D_WIDTH} = Dimensions.get('window');
export default class extends PureComponent {
    state = {
        hotLists: [],// 推荐列表
        categoryList: [],// 分类列表
        wallpaperList: [], // 专辑列表
        tabs: {
            index: 0,
            routes: [
                {key: 'one', title: '热门'},
                {key: 'two', title: '最新'},
                {key: 'three', title: '分类'},
            ],
        },
    };

    componentDidMount() {
        this.getHotList(false, false);
    }
    // 最热列表
    getHotList = async (currentPage, type) => {
        const params = {
            limit: 30,// 返回数量
            adult: false,// 布尔值，暂时未知
            first: currentPage ? currentPage : 1,// 数字，如1
            skip: 180,// 略过数量
            order: type ? type : 'hot',//值 hot:最热为favs：受喜欢的， new：最新的
        };
        try {
            const res = await defaultList(params);
            if (res && res.res &&res.res.vertical && res.res.vertical.length > 0) {
                this.setState({
                    hotLists: res.res.vertical
                });
            }
        } catch (e) {
        }
    };

    // 分类列表
    getCategoryList = async (currentPage) => {
        const params = {
            adult: false,// 布尔值，暂时未知
            first: currentPage ? currentPage : 1,// 数字，如1
        };
        try {
            const res = await categoryList(params);
            if (res && res.res && res.res.category && res.res.category.length > 0) {
                this.setState({
                    categoryList: this.state.categoryList.concat(res.res.category)
                });
            }
        } catch (e) {
        }
    };
    // 专辑列表
    getWallpaperList = async (currentPage) => {
        const params = {
            adult: false,// 布尔值，暂时未知
            first: currentPage ? currentPage : 1,// 数字，如1
        };
        try {
            const res = await wallpaperList(params);
            if (res && res.res && res.res.album && res.res.album.length > 0) {
                this.setState({
                    wallpaperList: this.state.wallpaperList.concat(res.res.album)
                });
            }
        } catch (e) {
        }
    };
    // 最热模块组件
    HotView = () => {

    };
    // renderScene={() => {
    //     switch (routes.key) {
    //         case 'one':
    //             return <HotView/>;
    //         case 'two':
    //             return <NewView/>;
    //         case 'three':
    //             return <CategoryView/>;
    //         default:
    //             return null;
    //     }
    // }}
    render() {
        const {hotLists, categoryList, tabs} = this.state;
        return (
            <View style={sty.container}>
                {hotLists &&
                <TabView
                    navigationState={tabs}
                    renderScene={SceneMap({
                        one: () => {
                            if (hotLists && hotLists.length > 0) {
                                return (
                                    <HotView hotLists={hotLists}/>
                                )
                            }else{
                                return null;
                            }
                        },
                        two: () => <NewView/>,
                        three: () => <CategoryView/>,
                    })}
                    onIndexChange={index => this.setState({index})}
                    initialLayout={{width: D_WIDTH}}
                />
                }

            </View>
        );
    }
}

const sty = StyleSheet.create({
    container: {
        flex: 1
    },

});
