const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2019"
  },
};

// write your code here 

// Select the nav in the header
const nav = document.querySelector('header > nav');

// Select all a tags inside of the nav
const listItems = document.querySelectorAll('header > nav > a');

// Insert a text to each element
const values = Object.values(siteContent.nav);

for(let i = 0; i < listItems.length; i++){
  listItems[i].textContent = values[i];
}

// Itrate through the elements to change their colors
listItems.forEach((item) => item.style.color = 'green');

// Adding the first new item
const newItem1 = document.createElement('a');
newItem1.textContent = 'Call';
newItem1.style.color = 'green';
nav.appendChild(newItem1);

// Adding the second new item
const newItem2 = document.createElement('a');
newItem2.textContent = 'EmailUS';
newItem2.style.color = 'green';
nav.appendChild(newItem2);

// Selecting the logo in the header
const logo = document.querySelector('header > img');

// Set the Attribute
logo.setAttribute('src', siteContent.nav["img-src"]);

// Select the main heading
const heading = document.querySelector('.cta-text > h1');

// Set a content for it
heading.textContent = siteContent.cta.h1;

// Select the Button
const btn = document.querySelector('.cta-text > button');

// Set a content for it
btn.textContent = siteContent.cta.button;
// Change the text if the button is clicked
btn.addEventListener('click', () => heading.textContent = 'Heading Changed');

// The second Image
const secondImage = document.querySelector('.cta > img');
secondImage.setAttribute('src', siteContent.cta["img-src"]);


// Selecting the paragraohs and thier heading and insert new content
const paragraphsHeadings = document.querySelectorAll('.text-content > h4');

paragraphsHeadings[0].textContent = siteContent["main-content"]["features-h4"];
paragraphsHeadings[1].textContent = siteContent["main-content"]["about-h4"];
paragraphsHeadings[2].textContent = siteContent["main-content"]["services-h4"];
paragraphsHeadings[3].textContent = siteContent["main-content"]["product-h4"];
paragraphsHeadings[4].textContent = siteContent["main-content"]["vision-h4"];

const paragraphsContent = document.querySelectorAll('.text-content > p');

paragraphsContent[0].textContent = siteContent["main-content"]["features-content"];
paragraphsContent[1].textContent = siteContent["main-content"]["about-content"];
paragraphsContent[2].textContent = siteContent["main-content"]["services-content"];
paragraphsContent[3].textContent = siteContent["main-content"]["product-content"];
paragraphsContent[4].textContent = siteContent["main-content"]["vision-content"];

// The middle image
const middleImg = document.querySelector('.main-content > img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Select the contact elements and insert values
const contact = document.querySelector('.contact');
const contactValues = Object.values(siteContent.contact);
for(let i = 0; i < contact.children.length; i++){
  contact.children[i].textContent = contactValues[i];
}

// Copy Right Paragraph
const copyRight = document.querySelector('footer > p');
copyRight.textContent = siteContent.footer.copyright;



