### videotapecanvas

这是一个播放视频的小插件，因为在页面中直接用video标签播放的话长宽比例等问题很麻烦，这里利用了canvas技术来播放，灵活的设置宽高。
使用方式，首先引入video2canvas.js文件，之后
```
  new Video2canvas(el,src);
  实例化插件构造函数，两个参数，
  el:父节点，这里定义父节点的宽高，视频将以父节点的宽高为标准填充进去
  src：视频的路径（这里并没有处理视频格式的兼容性，传入的时候判断吧）
  demo如下
  new Video2canvas(document.querySelector('#div_video'),'/assets/video/earth.ogg');
```
