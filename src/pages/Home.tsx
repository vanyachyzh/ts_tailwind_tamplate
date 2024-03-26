import { useEffect } from 'react';

import useAppDispatch from '../hooks/useAppDispatch';
import useAppSelector from '../hooks/useAppSelector';
import {
  decrease,
  fetchTodos,
  increase,
  increaseByNumber,
} from '../store/mainSlice';

const Home = () => {
  const { count } = useAppSelector(state => state.main);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos(2));
  }, []);

  return (
    <section className="section">
      <div>{count}</div>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
      <button onClick={() => dispatch(increaseByNumber(12))}>++++</button>
    </section>
  );
};

export default Home;
