$(document).ready(function(){
  var listItem = $('li');
  // listItem.css({
  //   'padding': '50px',
  //   'margin-bottom': '50px'
  // });

  listItem.on('click', function(e) {
    // $('li span').remove();
    var date = new Date();
    date.setTime(e.timeStamp);
    var clicked = date.toDateString();
    $(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>')
  });
});
