import { Link } from 'react-router-dom';
import DogCard from '../component/DogCard';
import { fetchDogs } from '../services/DogRoute';
import { useEffect, useState } from 'react';
import { getDogsById } from '../services/DogRoute';
import { useParams } from 'react-router-dom';

export default function Home() {
  const { id } = useParams();
  const [card, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs(id);
      setCards(data);
      setLoading(false);
      console.log(data);
    };
    fetchData();
  }, [id]);

  // useEffect(() => {
  //   getDogsById(id).then(({ data }) => setCards(data));
  // }, [id]);

  if (loading) return <h1> holder </h1>;

  return (
    <div>
      <ul>
        <DogCard dog={card} />
      </ul>
    </div>
  );
}
