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

  //ABRE QUADRO LOGIN
  $("a.bt_login").click(function(){
    $(this).parent("li").children("ul").slideToggle(100);
    $(this).parent("li").toggleClass('ativo');
    return false;
  });

});