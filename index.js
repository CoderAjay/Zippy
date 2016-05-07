//Zippy


  var Zippy = (function(){
    function Zippy(selector){
       if(!(this instanceof Zippy)) return new Zippy(selector);
       this[0] = document.querySelectorAll(selector);
    }
    Zippy.prototype.toggle = function toggle(className){
     if(className){
      if(this.hasClass(className)){
       this.removeClass(className);
      }else{
         this.addClass(className);
      }
     }else{
       for(var i=0; i< this[0].length;i++){
        (this[0][i].style.display === "none")?
            (this[0][i].style.display="block"):
            (this[0][i].style.display="none");
       }
     }
     return this;
    }
    Zippy.prototype.hasClass = function hasClass(className){
       var arr =  this[0][0].className.split(' ');
       return (arr.indexOf(className)!==-1);
    }
    Zippy.prototype.addClass = function addClass(className){
      for(var i=0; i< this[0].length;i++){
         var arr =  this[0][i].className.split(' '); 
         if(arr.indexOf(className)!==-1){
             continue;
          }
          this[0][i].className += ' ' +className;
      }
      return this;
    }
    Zippy.prototype.removeClass = function removeClass(className){
      for(var i=0;i< this[0].length;i++){
      this[0][i].className = this[0][i].className.split(' ').filter(function(cName){
                            return (cName !== className);
                          }).join(' ');
      }
      return this;
    }
    Zippy.fn = Zippy.prototype;
   
    return Zippy;
  })();
