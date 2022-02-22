import { useState } from 'react';
import './Form.css';

const initialFormState = {
  email: '',
  password: '',
  pictureUrl: '',
  country: '',
  diet: '',
  rememberMe: false,
};

export default function Form({ onSubmit }) {
  const [data, setData] = useState(initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
    setData({ ...initialFormState });
  };

  const handleChange = ({ target: { name, value } }) =>
    setData((prev) => ({ ...prev, [name]: value }));

  const handleChangeCheckbox = ({ target: { name, checked } }) =>
    setData((prev) => ({ ...prev, [name]: checked }));
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <div className="Form-control">
        <label htmlFor="email">
          Email (*)
          <input
            id="email"
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className="Form-control">
        <label htmlFor="password">
          Password (*)
          <input
            id="password"
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className="Form-control">
        <label htmlFor="pictureUrl">
          Profile picture URL
          <input
            id="pictureUrl"
            type="url"
            name="pictureUrl"
            value={data.pictureUrl}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="Form-control">
        <label htmlFor="bio">
          Short biography
          <textarea
            id="bio"
            rows="4"
            name="bio"
            value={data.bio}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="Form-control">
        <label htmlFor="country">
          Country (*)
          <select
            id="country"
            name="country"
            value={data.country}
            onChange={handleChange}
            required
          >
            <option value="">&mdash;</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="UK">United Kingdom</option>
            <option value="SP">Spain</option>
            <option value="IT">Italy</option>
            <option value="BE">Belgium</option>
            <option value="CH">Switzerland</option>
            <option value="US">United States</option>
          </select>
        </label>
      </div>

      <div className="Form-control">
        <p className="Form-radioGroupHeader">Diet</p>
        <label htmlFor="omnivore">
          <input
            type="radio"
            name="diet"
            id="omnivore"
            value="omnivore"
            onChange={handleChange}
          />
          Omnivore
        </label>
        <label htmlFor="vegetarian">
          <input
            type="radio"
            name="diet"
            id="vegetarian"
            value="vegetarian"
            onChange={handleChange}
          />
          Vegetarian
        </label>
        <label htmlFor="vegan">
          <input
            type="radio"
            name="diet"
            id="vegan"
            value="vegan"
            onChange={handleChange}
          />
          Vegan
        </label>
      </div>

      <div className="Form-control">
        <label htmlFor="rememberMe">
          <input
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            onChange={handleChangeCheckbox}
          />
          Remember me
        </label>
      </div>

      <button type="submit">Send</button>
    </form>
  );
}
