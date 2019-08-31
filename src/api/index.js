/*
包含n个接口请求函数的模块
函数的返回值：promise对象
 */
// 引入ajax.js
import ajax from './ajax'
// export function () {}
// 如何根据接口文档定义接口请求函数，必须要会
// 有个规律，所有的接口请求函数，名称上面都要有req的开头
// 传递的参数的名字，得根据文档来写
// 1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)
// 如果要把经纬度分开传，就得在函数里面去拼
export const reqAddress = (geohash) => ajax('/position/${geohash}')

// 2、获取食品分类列表](#2获取食品分类列表)
export const reqCategorys = () => ajax('/index_category')

// 3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)
export const reqShops = (longitude, latitude) => ajax('/shops', {longitude, latitude})

// 4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)

// 5、获取一次性验证码](#5获取一次性验证码)

// 6、用户名密码登陆](#6用户名密码登陆)

// 7、发送短信验证码](#7发送短信验证码)

// 8、手机号验证码登陆](#8手机号验证码登陆)

// 9、根据会话获取用户信息](#9根据会话获取用户信息)

// 10、用户登出](#10用户登出)
