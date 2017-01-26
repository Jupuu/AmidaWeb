$(function()
{
  console.log('live');
  $('.picture').mouseenter(function()
  {
    console.log("enter");
    $(this).addClass('active');
    $('#members').children().not($(this)).addClass('inactive');
  })
  .mouseleave(function()
  {
    $(this).removeClass('active');
    $('#members').children().not($(this)).removeClass('inactive');
  });

});

$(function()
{
  console.log('live');
  $('.pictures').mouseenter(function()
  {
    console.log("enter");
    $(this).addClass('active');
    $('#member').children().not($(this)).addClass('inactive');
  })
  .mouseleave(function()
  {
    $(this).removeClass('active');
    $('#member').children().not($(this)).removeClass('inactive');
  });

});
