import request from '../utils/request';
import Config from '../common/config';
import { stringify } from 'qs';
export async function defaultList(params) { // 不分类别获取壁纸接口
  return request(`${Config.API_HOST}vertical/vertical?${stringify(params)}`);
}
export async function categoryList(params) { // 获取手机壁纸类别
  return request(`${Config.API_HOST}vertical/category?${stringify(params)}`);
}
export async function downLoadCategory(id,params) { // 获取某类手机壁纸下壁纸
    return request(`${Config.API_HOST}vertical/category/${id}?${stringify(params)}`);
}
export async function comments(id) { // 获取手机壁纸评论
    return request(`${Config.API_HOST}vertical/vertical/${id}/comment?`);
}
export async function downLoads(id) { // 下载手机壁纸
    return request(`http://img5.adesk.com/${id}`);
}
export async function wallpaperList(id) { // 获取专辑下的壁纸
    return request(`${Config.API_HOST}wallpaper/album/+ ${id}/wallpaper`);
}