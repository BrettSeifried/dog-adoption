import React from 'react';
import { useState, useEffect } from 'react';
import DogForm from '../component/DogForm';
import { updateDog } from '../services/DogRoute';
import { useParams } from 'react-router-dom';
import { getDogsById } from '../services/DogRoute';
import { useHistory } from 'react-router-dom';

export default function DogEdit() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDogsById(params.id);
      setName(data.name);
      setBio(data.bio);
      setAge(data.age);
      setBreed(data.breed);
      setImage(data.image);
      setLoading(false);
      // console.log(data);
    };
    fetchData();
  }, [params.id]);

  if (loading) return <h1>Data Base is eating lunch. BRB</h1>;

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const redir = await updateDog(params.id, name, age, bio, image, breed);
      alert('You editied the info!');
      history.push(`/dogs/${redir[0].id}`);
    } catch {
      alert('Data failed to upload');
    }
  };

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
