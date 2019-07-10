/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

// Get the header
const header = document.querySelector('.header')

// Add the menu component to the header
header.appendChild(createMenu(menuItems))

function createMenu(items) {
  // Define new elements
  const menu = document.createElement('div')
  const menuList = document.createElement('ul')
  
  // Setup structure of menu elements
  menu.appendChild(menuList) 

  // Add classes
  menu.classList.add('menu')
    
  // Define, get / set list item elements
  let menuListItem = null
  items.forEach(element => {
    menuListItem = document.createElement('li')
    menuListItem.textContent = element
    menuList.appendChild(menuListItem)
  })

  // Get the menu-button
  const menuBtn = document.querySelector('.menu-button')

  // Menu button events
  menuBtn.addEventListener('click', event => menu.classList.toggle('menu--open'))

  // Return the menu
  return menu
}