import './home.css';

function loadHome() {
    const content = document.getElementById('content');
  
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');
  
    const headline = document.createElement('h1');
    headline.textContent = "Welcome to Our Restaurant";
  
    const description = document.createElement('p');
    description.textContent = "Enjoy the best food in town.";
  
    const image = document.createElement('img');
    image.src = '../images/hompage-image.jpg';
    image.alt = 'Restaurant Image';
  
    homeDiv.appendChild(headline);
    homeDiv.appendChild(description);
    homeDiv.appendChild(image);
    content.appendChild(homeDiv);
  }
  
  export default loadHome;
  