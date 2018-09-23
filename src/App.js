import React, { Component } from 'react';
import './App.css';
import jpp from './jsonpPromise';
import PetCard from './Components/PetCard';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import adopt from './adopt.png';
import FeaturedPet from './Components/Featured-pet.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // used in isPetEmpty function to check if pet is equal to a pet
      pet: '-'
    }
  }

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
    let pet = response.petfinder.pet;
    let photo;
    let shortDescrpt;

    console.log(pet)
    if (!pet) {
      return {}
    }

    let longDescrpt = pet.description['$t'] || "";

 
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

// formatting the information wanted from response; setting alt defaults
    return {
      age: pet.age['$t'] || "Unknown.",
      name: pet.name['$t'] || "very lovable!",
      breed: pet.breeds.breed['$t'] || pet.animal['$t'],
      description: pet.description['$t'] || "",
      truncatedDescription: shortDescrpt || '',
      picture: photo,
      sex: pet.sex['$t'] || "N/A",
      city: pet.contact.city['$t'] || "N/A",
      state: pet.contact.state['$t'] || "N/A",
      zip: pet.contact.zip['$t'] || "",
      phone: pet.contact.phone['$t'] || "N/A",
      email: pet.contact.email['$t'] || "N/A",

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
  }

// renders main components of app
  render() {
    return (
      <div className="main-content">

        <Nav />

        <PetCard pet={this.state.pet}
                 isPetEmpty={this.isPetEmpty()} />

        <div className="button">
          <button className="search-btn" onClick={() => this.getPet()}>Search</button>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
