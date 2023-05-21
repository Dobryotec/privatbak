import { useDispatch } from 'react-redux';
import { fetchChangeCurrensy } from 'redux/thunk';
// import { changeCurrency } from "services/api";

export const Form = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();

    const [amount, from, , to] = e.target.elements.text.value.split(' ');
    dispatch(fetchChangeCurrensy({ amount, from, to }));
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="text" type="text" />
      <button>exchange</button>
    </form>
  );
};
