# YunzaiBOT-HD-Voice-module
适用于云崽和猫崽的高清语音支持模块

给不想装枫叶，土块等大型插件但需要使用高清语音插件的人准备的模块

``` bash
git clone --depth=1 https://github.com/xiaotian2333/YunzaiBOT-HD-Voice-module ./plugins/HD-Voice-module
```

本模块不包含任何命令，仅提供高清语音发送支持

简单调用示例
``` js
e.reply(await uploadRecord(msg,0,false)) 
```
参数说明 ：1.音频链接或本地文件路径,2.音频时长欺骗，0=关闭,3.压缩音质（普通语音音质）
