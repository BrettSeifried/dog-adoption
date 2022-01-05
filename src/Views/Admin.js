import React from 'react';

export default function DogForm({
    name, breed, bio, age, image
}) {
  return (
  <div className='form'>
      <form>
          <h2>New Dog Name</h2>
          <div className="dog-info">
            <label>Name</label>
            <input placeholder="name" type="text" value={name} onChange={(e) => {
                setName(e.target.value);
            }}></input>
          </div>
          <div className="dog-info">
            <label>Breed</label>
            <input placeholder="Breed" type="text" value={breed} onChange={(e) => {
                setBreed(e.target.value);
            }}></input>
          </div>
          <div className="dog-info">
            <label>Age</label>
            <input placeholder="Age" type="number" value={age} onChange={(e) => {
                setAge(e.target.value);
            }}></input>
          </div>
          <div className="dog-info">
              <label>Bio</label>
              <input placeholder="Description of the Dog" type="text" value={bio} onChange={(e) => {
                  setBio(e.target.value);
              }}></input>
          </div>
          <div className="dog-info">
            <label>Image URL</label>
            <input placeholder="Image URL Address" type="text" value={image} onChange={(e) => {
                setImage(e.target.value);
            }}></input>
          </div>
      </form>
  </div>;
}
