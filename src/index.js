import gallery from '../src/gallery.js';
import images from '../data/images.js';

const imageList = document.getElementById('photo-gallery'); //grab ul location in html

images.forEach(function(image) { //loop through each image
    const dom = gallery(image); //run the function through each image
    imageList.appendChild(dom); // append each image to the dom ul element
});