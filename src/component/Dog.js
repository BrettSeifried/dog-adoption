import React from 'react';
import { Link } from 'react-router-dom';

export default function DogInfo({ id, name, image, age, breed, bio, handleDelete }) {
  //   console.log(dog);
  return (
    <div className="dog-info">
      <>
        <section key="dogInfo" className="dog-text">
          <h1>{name}</h1>
          <img alt="dog" src={`${image}`}></img>
          <h3>
            {age} Year old {breed}
          </h3>
          <p>{bio}</p>
          <button>
            <Link to={`/dogs/${id}/edit`}> Edit </Link>
          </button>
          <button onClick={handleDelete}>Delete</button>
        </section>
      </>
    </div>
  );
}
