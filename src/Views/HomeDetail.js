import { Link } from 'react-router-dom';
import DogCard from '../component/DogCard';
import { fetchDogs } from '../services/DogRoute';
import { useEffect, useState } from 'react';
import { getDogsById } from '../services/DogRoute';
import { useParams } from 'react-router-dom';

export default function Home() {
  const { id } = useParams();
  const [card, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs(id);
      setCards(data);
      console.log(data);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    getDogsById(id).then(({ data }) => setCards(data));
  }, [id]);

  return (
    <div>
      <DogCard dog={card} />
      {/* <h2>Test Home Page</h2>
      <Link to={'/dogs/1'}>Dog</Link>;
      <DogCard /> */}
    </div>
  );
}
