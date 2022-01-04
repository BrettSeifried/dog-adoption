import { Link } from 'react-router-dom';
import DogCard from '../component/DogCard';

export default function Home() {
  return (
    <div>
      <h2>Test Home Page</h2>
      <Link to={'/dogs/1'}>Dog</Link>;
      <DogCard />
    </div>
  );
}
