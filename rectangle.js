/* global Rectangle,valid: true */
$(function() {    
  var $width = $('#width'),
      $height = $('#height'),
      $form = $('form'),
      $perimeter = $('#perimeter'),
      $area = $('#area');

  $form.submit(function(){
    var rect = new rectangle($width.val(),$length.val());//eslint-disable-line no-undef
    $area.val(rect.area());
    $perimeter.val(rect.perimeter());
  }); 

});
