/*exported Rectangle , valid*/
function Rectangle(width, height) {    
  var w = Number(width),              
      h = Number(height);
    
  this.area = function() {          
    return w * h;               
  };
    
  this.perimeter = function() {          
    return 2 * (w + h);                
  };
}

function valid(data){
  var result = {
    isOK: false,
    reason: ''
  };

  if(data === ''){
    result.reason = '不能为空！';
    return result;
                    
  }

  if(Number(data) < 0){
    result.reason = '不能为负！'; 
    return result;
  }

  if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(data)){
    result.reason = '不是合法数字！';
    return result;
  }

  result.isOK = true;
  return result;

}
