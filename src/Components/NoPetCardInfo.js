import React from 'react';
import './NoPetCardInfo.css';

export default (props) => (
	<div className="empty-card-info">
		<h1>OOOOooops!</h1>
		<div className="empty-card-img">
			<img src="https://cdn.instructables.com/FV5/090M/GU4MC7OA/FV5090MGU4MC7OA.LARGE.jpg"
				 alt="https://www.rspcansw.org.au/wp-content/themes/noPhotoFound.png" />
		</div>
		<h1>Please try again!</h1>
	</div>
)

// handles letting viewer know if there was an error in returning a pet
// prompts user to try search again