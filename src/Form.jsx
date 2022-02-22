import "./Form.css"

export default function Form({ onSubmit }) {
  return (
    <form className="Form" onSubmit={onSubmit}>

      <div className="Form-control">
        <label htmlFor="email">
          Email
          <input id="email" type="email" />
        </label>
      </div>

      <div className="Form-control">
        <label htmlFor="password">
          Password
          <input id="password" type="password" />
        </label>
      </div>

      <div className="Form-control">
        <label htmlFor="pictureUrl">
          Profile picture URL
          <input id="pictureUrl" type="url" />
        </label>
      </div>

      <div className="Form-control">
        <label htmlFor="bio">
          Short biography
          <textarea id="bio" rows="4" />
        </label>
      </div>

      <div className="Form-control">
        <label htmlFor="country">
          Country
          <select id="country">
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