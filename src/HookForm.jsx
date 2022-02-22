import { useForm } from "react-hook-form";
import './Form.css';


export default function Form({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <form className="Form" onSubmit={handleSubmit(onSubmit)} data-testid="form">
      <div className="Form-control">
        <label htmlFor="email">
          Email (*)
          <input
            id="email"
            type="email"
            name="email"
            {...register("email")}
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
            {...register("password")}
          />
        </label>
      </div>

      <div className="Form-control">
        <label htmlFor="pictureUrl">
          Profile picture URL
          <input
            id="pictureUrl"
            type="url"
            {...register("pictureUrl")}
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
            {...register("bio")}
          />
        </label>
      </div>

      <div className="Form-control">
        <label htmlFor="country">
          Country (*)
          <select
            id="country"
            name="country"
            {...register("country")}
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
            {...register("diet")}
          />
          Omnivore
        </label>
        <label htmlFor="vegetarian">
          <input
            type="radio"
            name="diet"
            id="vegetarian"
            value="vegetarian"
            {...register("diet")}
          />
          Vegetarian
        </label>
        <label htmlFor="vegan">
          <input
            type="radio"
            name="diet"
            id="vegan"
            value="vegan"
            {...register("diet")}
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
            {...register("rememberMe")}
          />
          Remember me
        </label>
      </div>

      <button type="submit">Send</button>
    </form>
  );
}
