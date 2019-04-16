/*exported Rectangle, valid, roundFractional, isLegalKey */
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
/**
 * 检查按键是否合法
 *
 * @param key 键盘按键
 * @param content 文本框中已有的内容（字符串）
 * @param pos 文本框中光标位置
 * @returns {bool} 按键是否合法，true 合法，false 非法
 */
function isLegalKey(key, content, pos) {  
  if(/[abcdf-zABCDF-Z`~!@#$%^&*()\-=_+[\]{}|;:'",<>/?\\]/.test(key)) { 
    return false;
  }

  if(key === '.') {      
    if(pos === 0 || content.indexOf('.') !== -1) return false;          
    if(pos === 1 && content.substring(0,1) === '-') return false;       
  }

  if(key === 'e') {     
    if(pos === 0 || content.indexOf('e') !== -1                  
      || content.indexOf('E') !== -1) return false;
          
    if(pos === 1 && content.substring(0,1) === '-') return false;
  }

  if(key === 'E') {      
    if(pos === 0 || content.indexOf('e') !== -1                   
      || content.indexOf('E') !== -1) return false;          
    if(pos === 1 && content.substring(0,1) === '-') return false;       
  }

  return true;
}
