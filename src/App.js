import React, { Component } from 'react';
import './App.css';
import jpp from './jsonpPromise';
import PetCard from './Components/PetCard';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import adopt from './adopt.png';
import FeaturedPet from './Components/Featured-pet.js';
import AdvancedSearchForm from './Components/AdvancedSearchForm.js';
import { get } from 'lodash';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // used in isPetEmpty function to check if pet is equal to a pet
      pet: '-',
      randomCat: '-',
      randomDog: '-',
      breeds: [],
      searchData: {
        animal: "dog",
        breed: "Yorkshire Terrier",
        size: "M",
        sex: "M",
        location: "47130",
        age: "Baby"
      }
    }

    this.getBreedList()
  }


// FEATURED PET ***************************************
  getCatFeatPet() {
    return jpp(`http://api.petfinder.com/pet.find?format=json&key=30813f445b233300ac28d89179cd71c7&animal=cat&location=47130`)
      .then(res => {
        let cats = res.petfinder.pets.pet
        let randomIndex = Math.floor(Math.random() * cats.length)
        let randomCat = cats[randomIndex]

        this.setFeaturedCat(this.formatPetResponse(randomCat))
      })
      
  }
    

  getDogFeatPet() {
    return jpp(`http://api.petfinder.com/pet.find?format=json&key=30813f445b233300ac28d89179cd71c7&animal=dog&location=47130`)
      .then(res => {
        let dogs = res.petfinder.pets.pet
        let randomIndex = Math.floor(Math.random() * dogs.length)
        let randomDog = dogs[randomIndex]

        this.setFeaturedDog(this.formatPetResponse(randomDog))
      })
      
  }

  setFeaturedCat(randomCat) {
      this.setState({
        randomCat: randomCat
      })
    }

  setFeaturedDog(randomDog) {
    this.setState({
      randomDog: randomDog
    })
  }

// ***************************************************

// *************** ADVANCED SEARCH********************



  getBreedList = () => {
    console.log(this)
    return jpp(`http://api.petfinder.com/breed.list?format=json&key=30813f445b233300ac28d89179cd71c7&animal=${this.state.searchData.animal}`)
      .then(res => {
        console.log(res)
        let rawBreeds = get(res, 'petfinder.breeds.breed', null);

        if (rawBreeds === null) return console.error('oopss')
        let breeds = rawBreeds.map(breed => breed['$t'])
        
        this.setBreeds(breeds)
      })
  }

   setBreeds(breeds) {
    this.setState({
      breeds: breeds
    })
  }

  getSearchPet = () => {
    let formData = this.state.searchData
    let { animal, breed, size, sex, location, age } = formData
    return jpp(`http://api.petfinder.com/pet.find?format=json&key=30813f445b233300ac28d89179cd71c7&animal=${animal}&breed=${breed}&size=${size}&sex=${sex}&location=${location}&age=${age}`)
      .then(res => res.petfinder.pets.pet.map(this.formatPetResponse))
      .then(res => console.log(res))
  }

  setSearchData = (e, value, cb) => {
    e.preventDefault();
    this.setState({
      searchData: {
        ...this.state.searchData,
        [value]: e.target.value
      }
    }, cb);
  }

//****************************************************


// RANDOM PET ****************************************
// requesting a pet ID from the api
  getRandomPetId() {
    return jpp('http://api.petfinder.com/pet.getRandom?format=json&key=30813f445b233300ac28d89179cd71c7')
      .then(res => res.petfinder.petIds.id['$t'])
  }

// requesting pet information for the pet ID returned from getRandomPetId
  getPetDetails(id) {
    return jpp(`http://api.petfinder.com/pet.get?format=json&key=30813f445b233300ac28d89179cd71c7&id=${id}`)
      .then(res => this.formatPetResponse(res))

  }

  setPet(pet) {
    this.setState({
      pet: pet
    })
  }


  formatPetResponse(response) {
    let photo;
    let shortDescrpt;

    if (response.petfinder && response.petfinder.pet) {
      var pet = response.petfinder.pet;
    } else {
      var pet = response
    }

    let longDescrpt = pet.description ? (pet.description['$t'] || "") : "";

   
  // sets default image if pet has no photo
    if (pet.media && pet.media.photos && pet.media.photos.photo[2]) {
      console.log('has photo')
      photo = pet.media.photos.photo[2]['$t']
    } else {
      photo = "https://www.rspcansw.org.au/wp-content/themes/noPhotoFound.png"
    }

  // checks length of description; displays 300 characters
    if(longDescrpt && longDescrpt.length > 300) {
        shortDescrpt = longDescrpt.slice(0, 300) + '...'
    }
    
    console.log(pet)
    
    if (!pet) {
      return this.getPet
    }
    return {
      age: pet.age ? (pet.age['$t'] || "Not known.") : "",
      name: pet.name ? (pet.name['$t'] || "very lovable!") : "",
      breed: pet.breeds ? (pet.breeds.breed['$t'] || pet.animal['$t']) : "",
      description: pet.description ? (pet.description['$t'] || "") : "",
      picture: get(pet, 'media.photos.photo[2]["$t"]', "https://www.rspcansw.org.au/wp-content/themes/noPhotoFound.png"),
      sex: pet.sex ? (pet.sex['$t'] || "N/A") : "",
      size: pet.size ? (pet.size['$t'] || "N/A") : "",
      city: pet.contact ? (pet.contact.city['$t'] || "N/A") : "",
      state: pet.contact ? (pet.contact.state['$t'] || "N/A") : "",
      zip: pet.contact ? (pet.contact.zip['$t'] || "") : "",
      phone: pet.contact ? (pet.contact.phone['$t'] || "N/A") : "",
      email: pet.contact ? (pet.contact.email['$t'] || "N/A") : "",

    }
  }


  getPet() {
    this.getRandomPetId()
        .then(id => this.getPetDetails(id))
        .then(pet => this.setPet(pet))
  }
  

  isPetEmpty() {
    if(this.state.pet === '-') return false
    if(!this.state.pet) return true
    return Object.keys(this.state.pet).length === 0
  }

  componentDidMount() {
    this.getPet()
    this.getCatFeatPet()
    this.getDogFeatPet()
  }

// renders main components of app
  render() {
    return (
      <div className="main-content">

        <Nav />

        <FeaturedPet 
          randomCat={ this.state.randomCat }
          randomDog={ this.state.randomDog } />

        <PetCard 
          pet={ this.state.pet }
          isPetEmpty={ this.isPetEmpty() } />

        <div className="button">
          <button className="search-btn" onClick={ () => this.getPet() }>Search</button>
        </div>

        <AdvancedSearchForm
         breeds={ this.state.breeds }
         formData={ this.formData }
         setSearchData={ this.setSearchData }
         getSearchPet= { this.getSearchPet } 
         getBreedList={ this.getBreedList } 
         getSearchPet={ this.getSearchPet.bind(this) }/>

        <Footer />
      </div>
    );
  }
}

export default App;
