# 这是什么
SUI

# 用到了这些

* Grunt, 用于编译压缩代码
* requirejs, jquery, backbone, 可以自行增删
* coffeescript, 建议使用coffee来写js，当然不是强制的
* less, 还默认引入了bootstrap中的三个文件normalize.less, variable.less, mixin.less，可以根据自己的喜好修改
* qunit, 用于做单元测试
* hogan, 文档模板，用来编译mustache

# 如何安装
直接在根目录下执行 `npm install` 即可。
**前提是必须安装了nodejs**

# 文件结构说明

- project 根目录
- Gruntfile.coffee Grunt配置文件
- package.json npm配置文件
- src/ 静态文件放在这里
    - coffee/，coffeesciprt代码，会全部编译到js目录下的对应文件
        - requirejs-config.coffee， requirejs配置文件
        - entry.coffee，入口，根据这个文件编译生成app.js和app.min.js
    - less/，less代码
        - normalize.less
        - variable.less
        - mixins.less
    - css/，编译后的less
        - app.css，合并的css文件，未压缩，开发调试使用
        - app.min.css，合并压缩的css文件，发布使用
    - js/，编译后的coffee
        - app.js，合并的js文件，未压缩，开发调试使用
        - app.min.js，合并压缩的js文件，发布使用
        - tests/，单元测试
            - demo.html，单元测试例子，可以参考此文件来写单元测试，详细的可以参见 [QUnit](www.qunitjs.com)
- docs/ 文档放在这里
    - build/ 编译模板的脚本放这里
    - templates/ 模板
        - layout.mustache
        - pages/ 每个页面都放在这里

**注意，其中的demo可以自行删除**

# Grunt 使用
Grunt 已经配置了如下几个任务

- *watch*, 监听文件改动并自动编译代码，配好了livereload，只需要在html中引入对应js或者在浏览器中安装插件即可，参见demo.html
- *default*, 编译合并js和css，执行qunit，但是不压缩代码，开发调试使用
- *production*，功能同default, 不同的是会压缩代码，发布使用
- *test*, qunit的别名，js代码必须通过qunit测试
