$(document).ready(function() {
	$.ajax({
		type: 'POST',
		url: 'http://0.0.0.0:5001/api/v1/places_search/',
		contentType: 'application/json',
		data: '{}',
		success: function(data) {
			$('.places').empty();
			data.forEach(function(place) {
				var article = '<article>';
				article += '<div class="title"><h2>' + place.name + '</h2></div>';
				article += '<div class="price_by_night">' + place.price_by_night + '</div>';
				article += '<div class="information">';
				article += '<div class="max_guest">' + place.max_guest + ' Guests</div>';
				article += '<div class="number_rooms">' + place.number_rooms + ' Rooms</div>';
				article += '<div class="number_bathrooms">' + place.number_bathrooms + ' Bathrooms</div>';
				article += '</div>';
				article += '<div class="description">' + place.description + '</div>';
				article += '</article>';
				$('.places').append(article);
			});
		},
		error: function(xhr, status, error) {
			console.error('Error fetching places:', error);
		}
	});
});
