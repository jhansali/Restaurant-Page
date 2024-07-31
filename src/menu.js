import './menu.css';

function loadMenu() {
    const content = document.getElementById('content');
  
    // Clear existing content
    content.innerHTML = '';
  
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');
  
    const headline = document.createElement('h1');
    headline.textContent = "Our Menu";
  
    const menuItems = [
      { name: "Spaghetti Carbonara", description: "Classic Italian pasta dish", price: "$12" },
      { name: "Margherita Pizza", description: "Traditional pizza with fresh tomatoes and basil", price: "$10" },
      { name: "Caesar Salad", description: "Crisp romaine lettuce with Caesar dressing", price: "$8" },
      { name: "Grilled Salmon", description: "Fresh salmon grilled to perfection", price: "$15" },
      { name: "Tiramisu", description: "Delicious coffee-flavored Italian dessert", price: "$6" }
    ];
  
    const list = document.createElement('ul');
  
    menuItems.forEach(item => {
      const listItem = document.createElement('li');
  
      const itemName = document.createElement('h2');
      itemName.textContent = item.name;
  
      const itemDescription = document.createElement('p');
      itemDescription.textContent = item.description;
  
      const itemPrice = document.createElement('span');
      itemPrice.textContent = item.price;
  
      listItem.appendChild(itemName);
      listItem.appendChild(itemDescription);
      listItem.appendChild(itemPrice);
      list.appendChild(listItem);
    });
  
    menuDiv.appendChild(headline);
    menuDiv.appendChild(list);
    content.appendChild(menuDiv);
  }
  
  export default loadMenu;
  