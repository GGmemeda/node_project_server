# node_project_server
node_project_server for node_app
supervisor server.js--事实监控代码变化，不需要重启服务
set DEBUG=express:* & node index.js
设置 DEBUG 的值为 express:router，只查看路由部分的日志；设置 DEBUG 的值为 express:application，只查看应用部分的日志，依此类推。

//node 调试模式
$ node  debug  ./handle/api.handle.js
