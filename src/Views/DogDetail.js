import DogInfo from '../component/Dog';
import { useEffect, useState } from 'react';
import { deleteDog, getDogsById } from '../services/DogRoute';
import { useParams } from 'react-router-dom';

export default function Home() {
  const { id } = useParams();
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  // TRANSLATE TO ASYNC WAIT
  useEffect(() => {
    getDogsById(id)
      .then((data) => setInfo(data))
      .finally(() => setLoading(false));
  }, [id]);

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteDog(id);
  };

  if (loading) return <h1> Welcome for considering helping a lost dog </h1>;

  return (
    <ul>
      <DogInfo {...info} handleDelete={handleDelete} />
    </ul>
  );
}
