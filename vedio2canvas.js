;(function () {
    var Video2canvas = function(el,videoSrc){
        this.el = el;
        this.videoSrc = videoSrc;
        this.init();
    }
    Video2canvas.prototype.init = function(){
            var Ocan,           //canvas元素对象
                context,        //canvas画笔
                Ovideo,         //视频元素对象

            Ocan = document.createElement('CANVAS');
            this.el.appendChild(Ocan);
            context = Ocan.getContext('2d');
            Ovideo = document.createElement('VIDEO');
            //设置视频属性
            Ovideo.preload = 'auto';
            Ovideo.loop = 'loop';
            Ovideo.src = this.videoSrc;
            //视频添加事件
            Ovideo.addEventListener('loadeddata',()=>{
                Ocan.width = parseInt(document.defaultView.getComputedStyle(this.el,null)['width']);
                Ocan.height = parseInt(document.defaultView.getComputedStyle(this.el,null)['height']);
            },false);
            Ovideo.addEventListener('timeupdate',function(){
                //console.log();
            },false);

            function playVideo() {
                if(Ovideo.ended || Ovideo.paused) return;
                context.drawImage(Ovideo, 0, 0, Ocan.width, Ocan.height);
                window.RAF(playVideo);
            };
            window.RAF = (function(){
                return  window.requestAnimationFrame        ||
                        window.webkitRequestAnimationFrame  ||
                        window.mozRequestAnimationFrame     ||
                        window.msRequestAnimationFrame      ||
                        function(callback,element){
                            window.setTimeout(function(){
                                callback(+new Date(),element);
                            },1000 / 60);
                        };
            })();

            if(Ovideo.paused){
                Ovideo.play();
                window.RAF(playVideo);
            } else {
                Ovideo.pause();
            }
    }

    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = Video2canvas;
    } else {
        window.Video2canvas = Video2canvas;
    }
})();