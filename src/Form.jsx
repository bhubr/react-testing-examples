import { useState } from 'react';
import "./Form.css"

const initialFormState = {
  email: '',
  password: '',
  pictureUrl: '',
  country: '',
  diet: '',
  rememberMe: false,
}

export default function Form({ onSubmit }) {
  const [data, setData] = useState(initialFormState)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(data)
    setData({ ...initialFormState })
  }

  const handleChange = (key) => ({ target }) => setData(prev => ({ ...prev, [key]: target.value }))
  return (
    <form className="Form" onSubmit={handleSubmit}>

      <div className="Form-control">
        <label htmlFor="email" required>
          Email (*)
          <input id="email" type="email" value={data.email} onChange={handleChange('email')} />
        </label>
      </div>

      <div className="Form-control">
        <label htmlFor="password" required>
          Password (*)
          <input id="password" type="password" value={data.password} onChange={handleChange('password')} />
        </label>
      </div>

      <div className="Form-control">
        <label htmlFor="pictureUrl">
          Profile picture URL
          <input id="pictureUrl" type="url" value={data.pictureUrl} onChange={handleChange('pictureUrl')} />
        </label>
      </div>

      <div className="Form-control">
        <label htmlFor="bio">
          Short biography
          <textarea id="bio" rows="4" value={data.bio} onChange={handleChange('bio')} />
        </label>
      </div>

      <div className="Form-control">
        <label htmlFor="country">
          Country (*)
          <select id="country" value={data.country} onChange={handleChange('country')} required>
            <option value="">&mdash;</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="UK">United Kingdom</option>
            <option value="SP">Spain</option>
            <option value="IT">Italy</option>
            <option value="BE">Belgium</option>
            <option value="CH">Switzerland</option>
          </select>
        </label>
      </div>

      <div className="Form-control">
        <p className="Form-radioGroupHeader">Diet</p>
        <label htmlFor="omnivore">
          <input type="radio" name="diet" id="omnivore" value="omnivore" />
          Omnivore
        </label>
        <label htmlFor="vegetarian">
          <input type="radio" name="diet" id="vegetarian" value="vegetarian" />
          Vegetarian
        </label>
        <label htmlFor="vegan">
          <input type="radio" name="diet" id="vegan" value="vegan" />
          Vegan
        </label>
      </div>

      <div className="Form-control">
        <label htmlFor="rememberMe">
          <input type="checkbox" name="rememberMe" id="rememberMe" />
          Remember me
        </label>
      </div>

      <button type="submit">Send</button>

    </form>
  )
}