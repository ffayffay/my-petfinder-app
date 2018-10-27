import React from 'react';
import './AdvancedSearchForm.css';

export default (props) => {
	
	return (
		<div className="form-wrap">
			<form className="form" onSubmit={ (e) => {
					e.preventDefault()
					props.getSearchPet()
				} }>
				<div className="search-form-item">
					<label>Select Animal Type</label>
					<select name="animal" value={props.value} onChange={(e) => { 
						 	props.setSearchData(e, "animal", props.getBreedList)	
						}
					}>
						<option value="dog">Dog</option>
						<option value="cat">Cat</option>
						<option value="smallfurry">Small Furry</option>
						<option value="bird">Bird</option>
						<option value="reptile">Reptile</option>
						<option value="horse">Horse</option>
						<option value="barnyard">Barnyard</option>
					</select>
				</div>

				<div className="search-form-item">
					<label>Select Animal Breed</label>
					<select name="breed" value={props.value} onChange={(e) => props.setSearchData(e, "breed")}>
						{
							props.breeds.map((breed, index) =>
								<option value={ breed } key={index}>{ breed }</option>)
							
						}
					</select>
				</div>

				<div className="search-form-item">
					<label>Select Size</label>
					<select name="size" value={props.value} onChange={(e) => props.setSearchData(e, "size")}>
						<option value="S">Small</option>
						<option value="M">Medium</option>
						<option value="L">Large</option>
						<option value="XL">Extra Large</option>
					</select>
				</div>

				<div className="search-form-item">
					<label>Select Animal Sex</label>
					<select name="sex" value={props.value} onChange={(e) => props.setSearchData(e, "sex")}>
						<option value="M">Male</option>
						<option value="F">Female</option>
					</select>
				</div>

				<div className="search-form-item">
					<label>Select Animal Age</label>
					<select name="age" value={props.value} onChange={(e) => props.setSearchData(e, "age")}>
						<option value="Baby">Baby</option>
						<option value="Young">Young</option>
						<option value="Adult">Adult</option>
						<option value="Senior">Senior</option>

					</select>
				</div>

				<div className="search-form-item">
					<label>Enter Zip Code</label>
					<input type="text" name="location" value={props.value} onChange={(e) => props.setSearchData(e, "location")}/>
				</div>

				<button className="search-submit-button">Submit</button>
			</form>
		</div>
	)
}




// ********** WRITTING OUT IDEAS/NOT LEAVING THIS HERE ;) **************************************************

// makeSearchRequest(pet) {
// 	const form = document.getElementById('search-form');
// 	const animal = form.animal.value;
// 	const breed = form.breed.value;
// 	const size = form.size.value;
// 	const sex = form.sex.value;
// 	const age = form.age.value;
// 	const zipCode = form.zipcode.value;
// 	const url = `http://api.petfinder.com/pet.getRandom?format=json&key=30813f445b233300ac28d89179cd71c7&animal=${animal}&location=${zipCode}`;

// 	return jpp(url)
// 		.then(response => response.petfinder.petIds.id['$t'])
// 		.then(id => getPetDetails(id))
// }

// BREED :::
// `http://api.petfinder.com/breed.list?format=json&key=30813f445b233300ac28d89179cd71c7&animal=${animal}`