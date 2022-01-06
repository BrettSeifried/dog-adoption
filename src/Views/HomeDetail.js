import DogCard from '../component/DogCard';
import { fetchDogs } from '../services/DogRoute';
import { useEffect, useState } from 'react';
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
      // console.log(data);
    };
    fetchData();
  }, [id]);

  // useEffect(() => {
  //   getDogsById(id).then(({ data }) => setCards(data));
  // }, [id]);

  if (loading) return <h1> Say Hello to you new Best Friend </h1>;

  return (
    <ul>
      <DogCard dog={card} />
    </ul>
  );
}
