import React from 'react';
import './AdvancedSearchForm.css';

export default (props) => {
	
	return (
		<div className="form-wrap">
			<form className="form" onSubmit={ (e) => {
// When the form is submitted the getSearchPet function is called
					e.preventDefault()
					props.getSearchPet()
				} }>
				<div className="search-form-item">
					<label>Select Animal Type</label>
					<select name="animal" value={props.value} onChange={(e) => { 
// When the value of the select element is change the state is set for formData.animal to new value and getBreedList function is called
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
// The map() method is used on the breeds array to create an options element for each breed type in the array							
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
