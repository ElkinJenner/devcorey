/* @refresh reload */
import { render } from 'solid-js/web';

//Css
import '../src/assets/css/main.css'
import '../src/assets/css/framework.css'
import '../src/assets/css/responsive.css'
import '../src/assets/css/akar-icons.css'
import '../src/assets/css/boxicons.css'

//Pages
import App from './App';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => <App />, root);
