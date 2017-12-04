import { hyper } from 'hyperhtml/esm';

const Form = () =>
  hyper.wire()`
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name">
    <label for="email">E-mail:</label>
    <input type="email" id="email">
    <label for="message">Message:</label>
    <textarea id="message"></textarea>
    <button>Submit</button>
  </form>`;

export default Form;
