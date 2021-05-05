import Template from '@templates/Template.js';
import '@styles/main.css';
import '@styles/main.scss';

console.log('Que pasa mono qliao');

(async function App() {
    const main = null || document.getElementById('main');
    main.innerHTML = await Template();
})();