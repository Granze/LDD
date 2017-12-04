import { hyper } from 'hyperhtml/esm';

const Detail = props =>
  hyper.wire(props)`
  <article>
    <h2>${props.name}</h2>
    <img src="${props.image}">
    <p>${props.year}</p>
    <a href=${props.map}>map</a>
  </article>`;

export default Detail;
