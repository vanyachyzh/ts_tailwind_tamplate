import useTheme from '../hooks/useTheme';

const Home = () => {
  const buttonRef = useTheme('light');

  return (
    <section className="section bg-primary text-secondary">
      <div>Home</div>
      <button ref={buttonRef}>Choose theme</button>
    </section>
  );
};

export default Home;
