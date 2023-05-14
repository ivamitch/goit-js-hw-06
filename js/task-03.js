const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const ulGallery = document.querySelector('.gallery');
console.log(ulGallery);

const makeImages = options => {
  return options.map(option => {
    const imageDone = document.createElement('img');
    imageDone.src = option.url;
    imageDone.alt = option.alt;
    imageDone.width = 100;
    return imageDone;
  })
}

// const elements = images.map(option => {
//   const imageDone = document.createElement('img');
//   imageDone.src = option.url;
//   imageDone.alt = option.alt;
//   imageDone.width = 100;
//   return imageDone;
// })

const elements = makeImages(images)
ulGallery.append(...elements)















// const tetsImage = document.createElement('img');
// tetsImage.src = 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
// tetsImage.alt = 'Orange and White Koi Fish Near Yellow Koi Fish'
// tetsImage.width = 300; 

// const testLink = document.createElement('a');
// testLink.classList.add('link_style');
// testLink.textContent = 'Just a usual link';

// ul.appendChild(testLink)
// ul.appendChild(tetsImage)

// ul.append(tetsImage, testLink)

// const liElements = ingredients.map(ingredient => {
//   const li = document.createElement('li');
//   li.textContent = ingredient;
//   li.classList.add('item');
  
//   return li;
// });


// ul.append(...liElements);