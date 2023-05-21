import { Form } from 'components/form/Form';
import { useSelector } from 'react-redux';
import { selectQuery, selectResult } from 'redux/selectors';

const Home = () => {
  const result = useSelector(selectResult);
  const query = useSelector(selectQuery);

  return (
    <div>
      <Form />
      <div>
        {result} {query.to} = {query.amount} {query.from}
      </div>
    </div>
  );
};

export default Home;
