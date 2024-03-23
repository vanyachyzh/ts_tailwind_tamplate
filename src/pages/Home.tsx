import { useScroll } from '../hooks/useScroll';

const Home = () => {
  useScroll(true);

  return <div className="h-[200vh]">Home</div>;
};

export default Home;
