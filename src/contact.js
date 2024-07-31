import './contact.css';

function loadContact() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact');

  const headline = document.createElement('h1');
  headline.textContent = "Contact Us";

  const address = document.createElement('p');
  address.textContent = "123 Main Street, Hometown, USA";

  const phone = document.createElement('p');
  phone.textContent = "Phone: (123) 456-7890";

  const map = document.createElement('iframe');
  map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6660.060081429025!2d-111.92109822474195!3d33.42246115072267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b08e4e45000ad%3A0xa287a193d6cb2d08!2s1260%20E%20University%20Dr%2C%20Tempe%2C%20AZ%2085288!5e0!3m2!1sen!2sus!4v1722401842006!5m2!1sen!2sus";
  map.width = '600';
  map.height = '450';
  map.style.border = '0';
  map.allowFullscreen = '';
  map.loading = 'lazy';

  contactDiv.appendChild(headline);
  contactDiv.appendChild(address);
  contactDiv.appendChild(phone);
  contactDiv.appendChild(map);
  content.appendChild(contactDiv);
}

export default loadContact;
