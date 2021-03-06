import React from 'react';
import { useState } from 'react';
import DogForm from '../component/DogForm';
import { addDog } from '../services/DogRoute';
import { useHistory } from 'react-router-dom';

export default function DogCreate() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [image, setImage] = useState('');
  const history = useHistory();
  // const [loading, setLoading] = useState(true);

  //   const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDog(name, age, bio, image, breed);
      alert('You Added a dog');
    } catch {
      alert('Data failed to upload');
    }
    history.push('/');
    // setLoading(false);
  };

  // if (loading) return <h1>Data Base is eating lunch. BRB</h1>;

  return (
    <div>
      <h1>Add a Dog</h1>
      <DogForm
        name={name}
        setName={setName}
        bio={bio}
        setBio={setBio}
        age={age}
        setAge={setAge}
        image={image}
        setImage={setImage}
        breed={breed}
        setBreed={setBreed}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
