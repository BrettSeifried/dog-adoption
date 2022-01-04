import React from 'react';
import { Link } from 'react-router-dom';

export default function DogInfo({ dog }) {
  console.log(dog);
  return (
    <div className="dog-card">
      {dog.map(({ id, name, image, age, breed, bio }) => (
        <Link to={`/dogs/${id}`} key={id} className="card-render">
          <h1>{name}</h1>
          <img alt="dog" src={`${image}`}></img>
          <p>
            {age} {breed}
          </p>
          <p>{bio}</p>
        </Link>
      ))}
    </div>
  );
}
