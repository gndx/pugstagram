$(document).ready(function(){

   var newComment = '';

   $('#btnSubmitForm1').click(function(){
     newComment = $('#new-comment-1').val();
     $('#commentsContent1').append('<div class="Comments-users"><h3 class="Card-footer">gndx</h3><span class="Card-footer">'+newComment+'</span></div>');
   });

});
