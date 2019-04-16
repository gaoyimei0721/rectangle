/* global Rectangle, valid, isLegalKey: true */
$(function() {    
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $widthValidation = $('#width-validate'),
      $heightValidation = $('#height-validate'),
      $area = $('#area');

  $width.keypress(function(e){
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
      e.preventDefault();
    }
  });

  $width.focusout(function(){      
    var result = valid($width.val());     
    if(!result.isOK){              
      $widthValidation.html('宽度' + result.reason);                   
      $width.select();                              
    } else{              
      $widthValidation.html('');           
    }        
  });

  $height.focusout(function(){      
    var result = valid($height.val());      
    if(!result.isOK){              
      $heightValidation.html('高度' + result.reason);                    
      $height.select();                              
    }else{              
      $heightValidation.html('');                        
    }        
  });

  $height.keypress(function(e) {
    if(!isLegalKey(e.key, e.target.value, e.target.selectionStart)) {   
      e.preventDefault();               
    }     
  });

  $btnCal.click(function(){      
    var w = $width.val(),
        h = $height.val();

    var validWidth = valid(w),
        validHeight = valid(h);

    var r = new Rectangle(w, h);

    if(!validWidth.isOK){
      return;
    }

    if(!validHeight.isOK){
      return;
    }

    $perimeter.val(r.perimeter());
    $area.val(r.area());
  });
});
