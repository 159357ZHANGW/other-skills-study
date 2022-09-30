import _ from "lodash"; //无法找到lodash是因为 浏览器不知道文件中有node_modules目录  且node_modules中有lodash 所以 无法找到路径lodash

// 哪为什么es官方 在我们导入非绝对路径和非相对绝对路径的资源时候 不默认帮我们搜寻node_modules？

//假设浏览器做了这个事情, lodash就会被发现 lodash就会导入其它的东西，然而其它的东西又依赖更多的东西 这样的话 要就不停的绕圈 导入的东西过多 这样会非常消耗网络资源
// 但是common.js可以的  因为commonjs是运行在服务端的（服务端不是通过网络请求去找 是通过本地的文件 内存的东西） 服务端是运行在本地的 
// 但是浏览器是通过网络请求去请求模块 所以浏览器是不敢去做的
console.log("lodash",_);
export const count = 0;