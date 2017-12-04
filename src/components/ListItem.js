import { hyper } from 'hyperhtml/esm';

const ListItem = props =>
  props.reduce((acc, prop) => {
    acc.appendChild(hyper.wire(prop)`
    <li>
      <h2>${prop.firstName} ${prop.lastName}</h2>
      <a href=${`lighthouse/${prop.id}`} data-navigo>
        <img src="${prop.image}">
      </a>
    </li>`);
    return acc;
  }, document.createElement('ul'));

export default ListItem;
