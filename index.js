//Zippy


  var Zippy = (function(){
    function Zippy(selector){
       if(!(this instanceof Zippy)) return new Zippy(selector);
       if(selector.nodeType){
         this[0] = selector;
         this.length = 1;
       }else{
         var arr =  document.querySelectorAll(selector);
         for(var i=0; i< arr.length; i++){
           this[i] = arr[i];
         }
         this.length = arr.length;
       }
    }
    Zippy.prototype.toggle = function toggle(className){
     if(className){
      if(this.hasClass(className)){
       this.removeClass(className);
      }else{
         this.addClass(className);
      }
     }else{
       for(var i=0; i< this.length;i++){
        (this[i].style.display === "none")?
            (this[i].style.display="block"):
            (this[i].style.display="none");
       }
     }
     return this;
    }
    Zippy.prototype.hasClass = function hasClass(className){
       var arr =  this[0].className.split(' ');
       return (arr.indexOf(className)!==-1);
    }
    Zippy.prototype.addClass = function addClass(className){
      for(var i=0; i< this.length;i++){
         var arr =  this[i].className.split(' '); 
         if(arr.indexOf(className)!==-1){
             continue;
          }
          this[i].className += ' ' +className;
      }
      return this;
    }
    Zippy.prototype.removeClass = function removeClass(className){
      for(var i=0;i< this.length;i++){
      this[i].className = this[i].className.split(' ').filter(function(cName){
                            return (cName !== className);
                          }).join(' ');
      }
      return this;
    }
    Zippy.prototype.first = function first(){
      return this[0];
    };
    Zippy.prototype.last = function last(){
      return this[this.length-1];
    };
    
    Zippy.prototype.click = function click(cb){
      if(!cb || typeof cb !== 'function') return this;
      var self = this;
      function loop(i){
        self[i].onclick = function(event){
          cb.call(self[i], event ) 
        };
      }

      for(var i=0;i< this.length; i++){
        loop(i); 
       }
      return this;
    };

    
    
    Zippy.fn = Zippy.prototype;
   
    return Zippy;
  })();
