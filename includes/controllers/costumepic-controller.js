angular.module('vicki')
	.controller('GalleryController', function () {
      	   $('li img').on('click',function(){
  
		        var src = $(this).attr('src');
		        //var newSrc = src.substring(0, src.length-8) + src.substring(src.length-4, src.length);
		        var img = '<center><img src="' + parseLargeImage(src) + '" class="img-responsive"/></center>';
				  //Start of new code
				  var index = $(this).parent('li').index();
				  var html = '';

				  html += img;
				  html += '<div style="height:25px;clear:both;display:block;">';
				  html += '<a class="controls next" href="'+ (index + 2) + '" >next &raquo;</a>'
				  html += '<a class="controls previous" href="' + (index) + '">&laquo; prev</a>';
				  html += '</div>';
				  //End of new code
				
				  $('#myModal').modal();
				  $('#myModal').on('shown.bs.modal', function(){
				      $('#myModal .modal-body').html(html);
				  })
				  $('#myModal').on('hidden.bs.modal', function(){
				      $('#myModal .modal-body').html('');
				  });
			});
     });
      	