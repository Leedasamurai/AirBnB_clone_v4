$(document).ready(function() {
	var reviewsVisible = false;

	$('#toggle-reviews').click(function() {
		if (reviewsVisible) {
			$('#reviews-container').empty();
			$('#toggle-reviews').text('show');
			reviewsVisible = false;
		} else {
			$.ajax({
				type: 'GET',
				url: 'http://0.0.0.0:5001/api/v1/reviews/',
				success: function(data) {
					$('#reviews-container').empty();
					data.forEach(function(review) {
						var reviewElement = '<div class="review">';
						reviewElement += '<p><strong>User:</strong> ' + review.user + '</p>';
						reviewElement += '<p><strong>Text:</strong> ' + review.text + '</p>';
						reviewElement += '</div>';
						$('#reviews-container').append(reviewElement);
					});
					$('#toggle-reviews').text('hide');
					reviewsVisible = true;
				},
				error: function(xhr, status, error) {
					console.error('Error fetching reviews:', error);
				}
			});
		}
	});
});
