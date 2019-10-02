$('#myModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var recipient = button.data('name')
    
    var modal = $(this)
    modal.find('.modal-title').text('Register for course: ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })