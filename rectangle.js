/* global Rectangle,valid: true */
$(function() {    
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');

 
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
