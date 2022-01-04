// import { Link } from 'react-router-dom';

// export default function DogDetail() {
//   return <h2> Test Dog Detail</h2>;
// }
import DogInfo from '../component/Dog';
import { fetchDogs } from '../services/DogRoute';
import { useEffect, useState } from 'react';
import { getDogsById } from '../services/DogRoute';
import { useParams } from 'react-router-dom';

export default function Home() {
  const { id } = useParams();
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs(id);
      setInfo(data);
      setLoading(false);
      console.log(data);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    getDogsById(id).then(({ data }) => setInfo(data));
  }, [id]);

  if (loading) return <h1> holder </h1>;

  return (
    <div>
      <ul>
        <DogInfo dog={info} />
      </ul>
    </div>
  );
}
