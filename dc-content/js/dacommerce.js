$(function(){
	//APAGA VALUE
  $("form input[type=text], form input[type=password], form textarea").focus(function() {
    if ($(this).val()==this.defaultValue) {
     $(this).val('');
    }
  });
  
  $("form input[type=text], form input[type=password], form textarea").blur(function() {
    if ($(this).val()=='') {
     $(this).val(this.defaultValue);
    }
  });

});