# nextjs-learn
Next.js是一个基于React实现的SSR框架（服务端渲染框架，全称：Server Side Rendering），建立在React，Webpack和Babel的基础之上。

目的是为了解决单页面应用的SEO问题，对于一般网站影响不大，但是对于论坛类，内容类网站来说是致命的，搜索引擎无法抓取页面相关内容，也就是用户搜不到此网站的相关信息。

# 原理图
![img](https://img.alicdn.com/tfs/TB1cFYIi3DqK1RjSZSyXXaxEVXa-800-413.png)

## 本地测试
1. clone代码，进入项目根目录
2. 运行 `npm run dev`命令，启动服务
3. 访问`http://localhost:3000`预览demo


## 服务端测试
1. 搭建node环境，clone代码，进入项目根目录
1. 运行 `npm start`命令，启动服务
2. 访问`http://公网ip`预览demo


## 日志查看
请到logs目录下查看错误日志和程序中的打印信息。


## 其它说明
1. 启动nginx服务
`systemctl restart nginx.service`

2. 下载代码包
`wget -O nextjs-learn.zip https://github.com/hnliji1107/nextjs-learn/archive/master.zip`

3. 解压
`unzip nextjs-learn.zip`

