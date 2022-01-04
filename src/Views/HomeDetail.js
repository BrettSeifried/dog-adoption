import { Link } from 'react-router-dom';
import DogCard from '../component/DogCard';
import { fetchDogs } from '../services/DogRoute';
import { useEffect, useState } from 'react';

export default function Home() {
  const [card, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setCards(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Test Home Page</h2>
      <Link to={'/dogs/1'}>Dog</Link>;
      <DogCard />
    </div>
  );
}
