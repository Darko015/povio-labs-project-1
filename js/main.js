function show_connect() {
  swal({
    title: '<i>HTML</i> <u>example</u>',
    type: '',
    html:
      'You can use <b>bold text</b>, ' +
      '<a href="//github.com">links</a> ' +
      'and other HTML tags',
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> OK',
    cancelButtonText: '<i class="fa fa-thumbs-down">Cancel</i>'
  })
}

function show_message() {
  swal({
    title: '<i>HTML</i> <u>example</u>',
    type: '',
    html:
      'You can use <b>bold text</b>, ' +
      '<a href="//github.com">links</a> ' +
      'and other HTML tags',
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> OK',
    cancelButtonText: '<i class="fa fa-thumbs-down">Cancel</i>'
  });
}


$(document).ready(function() {

  $('#button_connect').on('click', show_connect);
  $('#button_message').on('click', show_message);

})
