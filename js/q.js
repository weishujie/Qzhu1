window.onload=function(){
    //test test  test test
    var index=0;
    var line=document.getElementById("line");
    var headerul=document.getElementById("headerul");
    var lis=headerul.children;
    var speed=3;//计时器
    line.style.left=lis[index].offsetLeft+"px";
    var position;
    function quan(){
        var slid=document.getElementById("slid");
        var slide2=document.getElementById("slide2");
        var screenH=slide2.offsetHeight;
        var cert=document.getElementsByClassName("cert")[0];
        var flag=true;
        //var index=0;
        //var line=document.getElementById("line");
        //var headerul=document.getElementById("headerul");
        //var lis=headerul.children;
        //var speed=3;//计时器
        line.style.left=lis[index].offsetLeft+"px";
        //var position;

        function animation(event){
            if(index==8){
                index=7
            }
            position=lis[index].offsetLeft;

            if(event.deltaY>0){
                if(line.style.left.slice(0,-2)<position&&((line.style.left.slice(0,-2)-0+speed)<position)){
                    line.style.left=line.style.left.slice(0,-2)-0+speed+"px";
                }else{
                    line.style.left=position+"px";
                    return;
                }
            }else if(event.deltaY<0){
                if(line.style.left.slice(0,-2)>position&&((line.style.left.slice(0,-2)-0-speed)>position)){
                    line.style.left=line.style.left.slice(0,-2)-0-speed+"px";
                }else{
                    line.style.left=position+"px";
                    return;
                }
            }
            requestAnimationFrame(function(){
                animation(event)
            });
        }


        function next(event){
            if(event.deltaY>0){
                if(index<lis.length){
                    index++
                }else{
                    index=lis.length;
                    return
                }
                if(index==1){
                    for(var i=0; i<lis.length;i++){
                        lis[i].style.fontSize="14px"
                    }
                }
                clear();
            }else if(event.deltaY<0){
                if(index>0){
                    clear();
                    index--;
                }else{
                    return
                }
                if(index==0){
                    for(var i=0; i<lis.length;i++){
                        lis[i].style.fontSize="16px"
                    }
                }
            }
            slid.style.marginTop=0-screenH*index+"px";
            if(index!=lis.length){
                requestAnimationFrame(function(){
                    animation(event)
                })
            }else{
                return;
            }
            if(flag) {
                cert.style.marginTop="-110px"
                //cert.style.transition="all 0.1s"
                flag=false

            }else{
                if(index==0){
                    cert.style.marginTop="50px"
                }
                flag = true;
            }
        }

        slid.addEventListener('webkitTransitionEnd',function(){
            wheel();
        });
        function wheel(){
            window.addEventListener('wheel',next,false);
        }
        function clear(){
            window.removeEventListener('wheel',next,false);
        }
        wheel()
    }
    quan();




    headerP();
    function headerP(){
        var line=document.getElementById("line");
        var headerUl=document.getElementById("headerul");
        var headerul=document.getElementById("headerul");
        //var index=0;
        var lis=headerul.children;
        line.style.left=lis[index].offsetLeft;
        var positionLeft;
        var positionTop;
        headerUl.addEventListener('mouseover',function(event){
            positionLeft=event.target.offsetLeft;
            positionTop=event.target.offsetTop;
            line.style.left=positionLeft+"px";
            line.style.top=positionTop+"px";
        },false)
    }


//    第四屏遮罩
    zhezhao();
    function zhezhao() {
        var forUl = document.getElementById("forUl");
        //var inner = forUl.children;
        var maskF = document.getElementById("maskF");
        var positionLeft;
        var positionTop;
        forUl.addEventListener('mouseover', function (event) {
            maskF.style.display = "block";
            positionLeft = event.target.offsetLeft;
            positionTop = event.target.offsetTop;
            maskF.style.left = positionLeft + "px";
            maskF.style.top = positionTop + 90 + "px";
        }, false);
        forUl.addEventListener('mouseout', function () {
            maskF.style.display = "none";
        }, false)
    }


//    第五屏响应式轮播
    xianglun();
    function xianglun(){
        function Child(){
            Preass.call(this);
            this.animation=function(bl){
                if(bl){
                    this.boxUl.children[0].style.marginLeft=-240*this.index+"px";
                }
            }
        }
        var child=new Child();
        var boxUl=document.getElementById("boxUl");
        var prev=document.getElementsByClassName("prev")[0];
        var next=document.getElementsByClassName("next")[0];
        child.init(boxUl,prev,next);
        child.listener();
        function Preass(){
            this.init=function(dom,prev,next){
                this.boxUl=dom;
                this.inners=this.boxUl.children[0].children;
                this.prev=prev;
                this.next=next;
                this.index=0;
            };
            this.nextBtns=function(){
                this.animation(false);
                if(this.index<this.inners.length-1){
                    this.index++
                }else{
                    this.index=0;
                }
                this.animation(true);
            };
            this.per=function(){
                this.animation(false);
                if(this.index>0){
                    this.index--
                }else{
                    this.index=this.inners.length-1;
                }
                this.animation(true);
            }
            this.listener=function(){
              this.next.addEventListener('click',function(){
                  this.nextBtns();
              }.bind(this),false)

                this.prev.addEventListener('click',function(){
                    this.per();
                }.bind(this),false)
            }
        }
    }


//    第七屏轮播
    sevent();
function sevent(){
    function Coures(){
        Super.call(this);
        this.animation=function(bl){
            if(bl){
                this.box.children[0].style.marginLeft=-500*this.index+"px";
            }
        }
    }
    var coures=new Coures();
    var box=document.getElementById('box-s');
    var sevLeft=document.getElementById('sevLeft');
    coures.init(box,sevLeft);
    coures.move();
    coures.listener();
    coures.btnColor();

    function Super(){
        this.init=function(dom,sevLeft){
            this.box=dom;
            this.boxChildren=this.box.children[0].children;
            this.sevLeft=sevLeft;
            this.btn=this.sevLeft.children;
            this.index=0;
            this.time=null;
        };
        this.move=function(){
            this.time=setInterval(function(){
                this.animation(false);
                if(this.index<this.boxChildren.length-1){
                    this.index++
                }else{
                    this.index=0;
                }
                this.animation(true)
                this.btnColor();
            }.bind(this),3000)
        };
        this.clear=function(){
            clearInterval(this.time);
        };
        this.btnColor=function(){
            var btn=this.btn;
            Array.prototype.slice.call(btn).forEach(function(ele){
                ele.style.backgroundColor="#19343A";
            });
            btn[this.index].style.backgroundColor="#1F5453"
        };

        this.listener=function(){
            this.sevLeft.addEventListener('mouseover',function(event){
                if(event.target.className=="btn"){
                    this.clear();
                    var btn=this.btn;
                    this.animation(false);
                    this.index=[...btn].indexOf(event.target);
                    this.animation(true);
                    this.btnColor()
                }
            }.bind(this),false)
            this.sevLeft.addEventListener('mouseout',function(event){
                if(event.target.className=="btn"){
                    this.move();
                }
            }.bind(this),false)
        }

    }
}

//侧边点击
    cemian()
    function cemian(){

        function animation(event){
            if(index==8){
                index=7
            }
            line.style.left=lis[index].offsetLeft+"px";
            position=lis[index].offsetLeft;

            if(index>0){
                if(line.style.left.slice(0,-2)<position&&((line.style.left.slice(0,-2)-0+speed)<position)){
                    line.style.left=line.style.left.slice(0,-2)-0+speed+"px";
                }else{
                    line.style.left=position+"px";
                    return;
                }
            }else if(index<0){
                if(line.style.left.slice(0,-2)>position&&((line.style.left.slice(0,-2)-0-speed)>position)){
                    line.style.left=line.style.left.slice(0,-2)-0-speed+"px";
                }else{
                    line.style.left=position+"px";
                    return;
                }
            }
            requestAnimationFrame(function(){
                animation(event)
            });
        }


        function Dock(){
            Pard.call(this);
            this.animation=function(fl){
                if(fl){
                    this.box.children[0].style.marginTop=-document.body.offsetHeight*index+"px";
                }
                requestAnimationFrame(function(){
                    animation(event)
                });
            }
        }
        var dock=new Dock();
        var boxc=document.getElementById("box");
        var up=document.getElementById("up");
        var down=document.getElementById("down");
        var switchs=document.getElementsByClassName("switch")[0];
        var docks=document.getElementsByClassName("dock")[0];
        var icons=document.getElementsByClassName("icons")[0];
        dock.init(boxc,up,down,switchs,docks,icons);
        dock.listener();
        dock.dianJ();

        function Pard(){
            this.init=function(dom,up,down,switchs,docks,icons){
                this.box=dom;
                this.many=this.box.children;
                this.up=up;
                this.down=down;
                this.dock=docks;
                this.switchs=switchs;
                this.icons=icons;
                //this.index=0;
                this.flag=true;
            };

            this.dianJ=function(){
                this.switchs.addEventListener("click",function(){
                    if(this.flag) {
                        this.icons.style.marginRight="-50px";
                        this.switchs.style.transform="rotate(30deg)";
                        this.flag=false

                    }else{
                        this.icons.style.marginRight="0px";
                        this.switchs.style.transform="rotate(0deg)";
                        this.flag = true;
                    }
                }.bind(this),false)
            }

            this.downbtn=function(){
                this.animation(false);
                if(index<this.many.length-1){
                    index++;
                }else{
                    index=0;
                }
                this.animation(true);
            };
            this.upbtn=function(){
                this.animation(false);
                if(index>0){
                    index--;
                }else{
                    index=this.many.length-1;
                }
                this.animation(true);
            };
            this.listener=function(){
                this.down.addEventListener('click',function(){
                    this.downbtn();
                }.bind(this),false);
                this.up.addEventListener('click',function(){
                    this.upbtn();
                }.bind(this),false);
            };

            //requestAnimationFrame(function(){
            //    animation(event)
            //});
        }
    }


        //导航跳转
        dianji();
        function dianji(){
           function Tab(){
               Ftab.call(this);
                this.animation=function(flag){
                    if(flag){
                        this.box.children[0].style.marginTop=-document.body.offsetHeight*index+"px";
                    }
                }
           }
            var tab=new Tab();
            var box=document.getElementById("box");
            var headerul=document.getElementById("headerul");
            var movedown=document.getElementById("movedown");
            tab.init(box,headerul,movedown)
            tab.listener();

            function Ftab(){
                this.init=function(dom,headerul,movedown){
                    this.box=dom;
                    this.boxChildren=this.box.children;
                    this.headerul=headerul;
                    this.headerLi=this.headerul.children;
                    this.movedown=movedown;
                };
                this.next=function(){
                    this.animation(false);
                    if(index<this.boxChildren.length-1){
                        index++
                    }else{
                        return
                    }
                    this.animation(true);
                };
                this.listener=function(){
                    this.headerul.addEventListener("click",function(event){
                        if(event.target.className=="liBtn"){
                            var liBtn=this.headerLi;
                            console.log(liBtn);
                            this.animation(false);
                            index=[...liBtn].indexOf(event.target);
                            this.animation(true)

                        }
                    }.bind(this),false);

                    this.movedown.addEventListener("click",function(){
                        this.next()

                    }.bind(this),false)
                }
            }
        }



};








//    第一屏轮播
$(function(){
    var lw = document.documentElement.clientWidth;
    //var ll=document.documentElement.clientHeight;
    var boxs = document.getElementById("boxs");
    var flag = true;
    boxs.style.width = lw + "px";
    var imgs = $(".imgs");
    var boximg = $(".box-img");
    boximg.css({width: lw});
    var num = 0;
    var wd = $(".box-img").width()

    var imgwd = $(".imgs").width()

    imgs.css({width: lw * 5 + "px"})
    function move() {
        if (flag) {
            num++

            flag = false
            if (num == 4) {
                imgs.animate({left: -wd * num}, function () {
                    imgs.css({left: 0})
                    num = 0
                    flag = true;
                })
            } else {
                imgs.animate({left: -wd * num}, function () {
                    flag = true;
                })
            }
        }
    }

    var time = setInterval(move, 2000)
})