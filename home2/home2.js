$('#categoryFilter').on('change', function() {
  var selectedCategory = $(this).val();
  if (selectedCategory == 'all') {
    $('#cardContainer').children().show();
  } else {
    $('#cardContainer').children().hide();
    $('#cardContainer').children('.' + selectedCategory).show();
  }
});

$(document).ready(function(){
$('#myModal').modal('show');
});