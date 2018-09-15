import React, { Component } from 'react';
import './App.css';
import jpp from './jsonpPromise';
import PetCard from './Components/PetCard';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pet: '-'
      
    }
  }

  getRandomPetId() {
    return jpp('http://api.petfinder.com/pet.getRandom?format=json&key=30813f445b233300ac28d89179cd71c7')
      .then(res => res.petfinder.petIds.id['$t'])
  }

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
        console.log(pet)
        if (!pet) {
          return {}
        }

        if (pet.media && pet.media.photos && pet.media.photos.photo[2]) {
          console.log('has photo')
          photo = pet.media.photos.photo[2]['$t']
        } else {
          photo = "https://www.rspcansw.org.au/wp-content/themes/noPhotoFound.png"
        }

        return {
          age: pet.age['$t'] || "Not known.",
          name: pet.name['$t'] || "very lovable!",
          breed: pet.breeds.breed['$t'] || pet.animal['$t'],
          description: pet.description['$t'] || "",
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
    // this.getPet()
  }

  render() {
    return (
      <div className="main-content">

        <Nav />

        <PetCard pet={this.state.pet}
                  isPetEmpty={this.isPetEmpty()} />

        <div className="button">
          <button onClick={() => this.getPet()}>Search</button>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
