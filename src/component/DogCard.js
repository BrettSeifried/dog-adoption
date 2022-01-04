// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function dogCard() {
//   return (
//     <div>
//       <h1> dog Name </h1>
//       <p> Dog Img</p>
//       <p> dog Detail</p>
//     </div>
//   );
// }

// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function DogCard({ dog: { id, created_at, name, image, breeds, bio } }) {
//   return (
//     <div className="dogCard">
//       <h2>{name}</h2>
//       <img src={image} />
//       <p>{breeds}</p>
//     </div>
//   );
// }


import React from 'react';
import { Link } from 'react-router-dom';

export default function DogCard({ dog }) {
    <div className="dog-card">
        {dog.map(({ id, name, image, bio }) => (
            <h2>{name}</h2>
            <img src={image} />
            <p>{bio}</p>
        ))}
    </div>
}