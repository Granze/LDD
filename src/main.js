import Navigo from 'navigo';
import ListItem from './components/ListItem';
import Detail from './components/Detail';
import Form from './components/Form';
import './main.css';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => {
      console.log('service worker registered');
    })
    .catch(err => {
      console.log('oh nooooo', err);
    });
}

const contentContainer = document.querySelector('#content-container');
const router = new Navigo();

const renderComponent = (url, component) => {
  if (url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        contentContainer.appendChild(component(data));
        router.updatePageLinks();
      });
  } else {
    contentContainer.appendChild(component());
  }
};

router.hooks({
  before: done => {
    while (contentContainer.hasChildNodes()) {
      contentContainer.removeChild(contentContainer.lastChild);
    }
    done();
  }
});

router.on({
  '/lighthouse/:id': params => {
    renderComponent(`http://localhost:3000/lighthouses/${params.id}`, Detail);
  },
  '/contacts/': () => {
    renderComponent(null, Form);
  },
  '*': () => {
    renderComponent('http://localhost:3000/keepers', ListItem);
  }
});

router.resolve();
