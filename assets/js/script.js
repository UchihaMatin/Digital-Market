// DOM Element Selectors
const rootElement = document.documentElement;
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');
const productItems = document.querySelectorAll('.product-item');

// Mock Data: Array of products (like a database)

/*
const categories = [
    {
        name: "Headphones",
        image: "assets/images/categories/headphones.png"
    },
    {
        name: "Mobile",
        image: "assets/images/categories/Mobile.png"
    },
    {
        name: "Speaker",
        image: "assets/images/categories/speaker.png"
    },
    {
        name: "Tablet",
        image: "assets/images/categories/Tablet.png"
    }
];
*/

const headphones = [
    { id: 0, name: "Samsung Bluetooth Headphones", image: "assets/images/product/1.png", rating: "4/5", price: 99.99 },
    { id: 1, name: "Anker Bluetooth Headphones", image: "assets/images/product/2.png", rating: "4/5", price: 99.99 },
    { id: 2, name: "JBL Bluetooth Headphones", image: "assets/images/product/3.png", rating: "4/5", price: 99.99 },
    { id: 3, name: "Anker Bluetooth Headphones", image: "assets/images/product/4.png", rating: "4/5", price: 99.99 },
    { id: 0, name: "Samsung Bluetooth Headphones", image: "assets/images/product/1.png", rating: "4/5", price: 99.99 },
    { id: 1, name: "Anker Bluetooth Headphones", image: "assets/images/product/2.png", rating: "4/5", price: 99.99 },
    { id: 2, name: "JBL Bluetooth Headphones", image: "assets/images/product/3.png", rating: "4/5", price: 99.99 },
    { id: 3, name: "Anker Bluetooth Headphones", image: "assets/images/product/4.png", rating: "4/5", price: 99.99 }
];

// State Variables
let currentCategory = headphones; // Currently displayed category (default: headphones)
let numberOfVisibleItems; // Number of items visible in the slider based on screen width
let sliderEndPosition; // The farthest position the slider can scroll to
let itemWidth; // Width of a single product item
let translateX = 0; // Current translation value for the slider
let currentIndex = 0; // Current index of the slider position

// Event Listeners
nextButton.addEventListener('click', handleNextItem);
previousButton.addEventListener('click', handlePreviousItem);
window.addEventListener('resize', handleWindowResize);

// Functions

/**
 * Calculates slider properties based on screen width and updates the slider.
 */
function calculateSliderProperties() {
    itemWidth = productItems[0].getBoundingClientRect().width;
    sliderEndPosition = (currentCategory.length - numberOfVisibleItems) * -1; // Calculate the end position of the slider
    updateSlider();
}

/**
 * Handles the "Next" button click to move the slider forward.
 */
function handleNextItem() {
    if (currentIndex === sliderEndPosition) return;
    currentIndex--;
    updateSlider();
}

/**
 * Handles the "Previous" button click to move the slider backward.
 */
function handlePreviousItem() {
    if (currentIndex === 0) return;
    currentIndex++;
    updateSlider();
}

/**
 * Updates the slider animation and button states.
 */
function updateSlider() {
    previousButton.classList.toggle('deactivate', currentIndex === 0);
    nextButton.classList.toggle('deactivate', currentIndex === sliderEndPosition);

    translateX = currentIndex * itemWidth;
    rootElement.style.setProperty('--translate-x', `${translateX}px`);
}

/**
 * Adjusts the slider for responsive design on window resize.
 */
function handleWindowResize() {
    const windowWidth = window.innerWidth;
    numberOfVisibleItems = windowWidth >= 768 ? 4 : 3;
    calculateSliderProperties();
}

// Initial Setup
handleWindowResize();