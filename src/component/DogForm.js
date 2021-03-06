import React from 'react';

export default function DogForm({
  name,
  setName,
  breed,
  setBreed,
  bio,
  setBio,
  age,
  setAge,
  image,
  setImage,
  handleSubmit,
}) {
  return (
    <div className="form">
      <form>
        <h3>Dog Edit Form</h3>
        <div className="dog-info">
          <label>Name</label>
          <input
            placeholder="name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div className="dog-info">
          <label>Breed</label>
          <input
            placeholder="Breed"
            type="text"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          ></input>
        </div>
        <div className="dog-info">
          <label>Age</label>
          <input
            placeholder="Age"
            type="number"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          ></input>
        </div>
        <div className="dog-info">
          <label>Bio</label>
          <input
            placeholder="Description of the Dog"
            type="text"
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          ></input>
        </div>
        <div className="dog-info">
          <label>Image URL</label>
          <input
            placeholder="Image URL Address"
            type="text"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <button onClick={handleSubmit}>Add/Edit</button>
        </div>
      </form>
    </div>
  );
}
