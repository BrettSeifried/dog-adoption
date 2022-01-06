import React from 'react';
// import { Link } from 'react-router-dom';

export default function DogInfo({ dog }) {
  //   console.log(dog);
  return (
    <div className="dog-info">
      {dog.map(({ name, image, age, breed, bio }) => (
        // <Link to={`/dogs/${id}`} key={id} className="card-render">
        <section key="dogInfo" className="dog-text">
          <h1>{name}</h1>
          <img alt="dog" src={`${image}`}></img>
          <h3>
            {age} Year old {breed}
          </h3>
          <p>{bio}</p>
        </section>
        // </Link>
      ))}
    </div>
  );
}
