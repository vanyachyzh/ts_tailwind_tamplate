import { useEffect } from 'react';

import { getPost, getPostsByUserId } from '../api/requests';

const Home = () => {
  useEffect(() => {
    getPost(1);
    getPostsByUserId(1);
  }, []);
  return (
    <section className="section">
      <div>Home</div>
    </section>
  );
};

export default Home;
