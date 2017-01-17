topics = ["cats","babies","puppies","pandas","reactions"];
var btnDiv = $('#preSets');
var gifDiv = $('#gifDiv');
var searchBox = $('#input');
for (i in topics) {
	var but = $('<button>').attr('class','btn btn-default');
	but.attr('id', 'gifBtn');
	but.html(topics[i]);
	but.attr('data-label', topics[i]);
	btnDiv.append(but);
}



var apiCall = function() {
	if ($(this).attr('id')==="search"){
		term =  searchBox.val().trim();
		searchBox.val('');
	} else {
	term = $(this).html();
};

	console.log(term);
	gifDiv.empty();
	queryUrl = "https://api.giphy.com/v1/gifs/random?tag="+term+"&api_key=dc6zaTOxFJmzC";
	for (i=0;i<10;i++) {
	$.ajax({
		url: queryUrl,
		type: 'GET',
		dataType: 'JSON',
		
	})
	.done(function(response) {
		console.log("success");
		console.log(response)
		
		gif = response.data;
		
			newDiv = $('<div>');
			pic = $('<img>').attr({
				class: 'giphy-embed',
				src: gif.image_url ,
				width: 300,
				height: 160,
			});
			rating = $('<h6>').html(gif.rating);
			gifDiv.append(pic);
			gifDiv.append(rating);

		
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});

};
	
}




$(document).on('click', '#gifBtn', apiCall);

$(document).on('click', '#search', apiCall);
