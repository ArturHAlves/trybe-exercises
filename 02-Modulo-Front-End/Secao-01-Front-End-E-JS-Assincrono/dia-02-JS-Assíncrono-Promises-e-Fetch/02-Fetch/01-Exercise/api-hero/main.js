import './style.css';
import Swal from 'sweetalert2';

// https://superheroapi.com/api/access-token

// buscar elementos
const char = document.querySelector('#name');
const img = document.querySelector('#img');
const btn = document.querySelector('#btn');

const token = '112879481638483';

function imagemAPI(id) {
  const heroAPI = `https://www.superheroapi.com/api.php/${token}/${id}/image`;

  fetch(`${heroAPI}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      img.src = data.url;
      char.innerHTML = data.name;
    })
    .catch((erro) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: erro.message,
        footer: '<a href="">Why do I have this issue?</a>',
      });
    });
}

// imagemAPI(732);

function random() {
  const numeroMaximo = 732;
  const randomId = Math.floor(Math.random() * numeroMaximo);
  imagemAPI(randomId);
}

btn.addEventListener('click', random);
