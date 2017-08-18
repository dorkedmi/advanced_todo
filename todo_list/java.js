$(function(){
    function getColor() {
      return '#' + Math.random().toString(16).slice(2, 8);
    }
    
    $('#lists').html(localStorage['lists']);
    
  $(window).keypress(function(e){
        if(e.keyCode==13)
            {
                newitem();
                localStorage['lists'] = $('#lists').html();
            }
    });
    
    $('ul').on('click','li',function(e){
        $(e.target).remove();
        localStorage['lists'] = $('#lists').html();
    });
    
    function newitem(){ 
        var item = $('input').val();
        var color = getColor();
        $('ul').append('<li class="lists" style="color:'+ color +';">'+ item +'</li>');
        $('input').val('');
    }
    
  });