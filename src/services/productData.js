import imgOne from '../../src/assets/products/DUMMY_PRODUCTS/1.jpg';
import imgTwo from '../../src/assets/products/DUMMY_PRODUCTS/2.jpg';
import imgThree from '../../src/assets/products/DUMMY_PRODUCTS/3.jpg';
import imgFour from '../../src/assets/products/DUMMY_PRODUCTS/4.jpg';
import imgFive from '../../src/assets/products/DUMMY_PRODUCTS/5.jpg';
import imgSix from '../../src/assets/products/DUMMY_PRODUCTS/6.jpg';
import imgSeven from '../../src/assets/products/DUMMY_PRODUCTS/7.jpg';
import imgEight from '../../src/assets/products/DUMMY_PRODUCTS/8.jpg';
import imgNine from '../../src/assets/products/DUMMY_PRODUCTS/9.jpg';
import imgTen from '../../src/assets/products/DUMMY_PRODUCTS/10.jpg';
import imgEleven from '../../src/assets/products/DUMMY_PRODUCTS/11.jpg';
import imgTwelve from '../../src/assets/products/DUMMY_PRODUCTS/12.jpg';

// Import imges for carousel slider
import carouselImgOne from '../assets/carouselImgs/carouselImgOne.jpg';
import carouselImgTwo from '../assets/carouselImgs/carouselImgTwo.jpg';
import carouselImgThree from '../assets/carouselImgs/carouselImgThree.jpg';

// Import imges for Product Categories
import productsCategoriesProteinImg from '../assets/productsCategories/productsCategoriesProteinsImg.webp';
import productCategoriesPerformanceImg from '../assets/productsCategories/productCategoriesPerformanceImg.webp';
import productCategoriesAccessoriesImg from '../assets/productsCategories/productCategoriesAccessoriesImg.webp';

// Import imges for Shop Procuct Categories
import shopProductsCategoriesProteinImg from '../assets/shop/ProductCategoriesImgs/shopProductCategoryProteinImg.jpg';
import shopProductCategoryPostWorkoutImg from '../assets/shop/ProductCategoriesImgs/shopProductCategoryPostWorkoutImg.jpg';
import shopProductCategoryFatBurnerImg from '../assets/shop/ProductCategoriesImgs/shopProductCategoryFatBurnerImg.jpg';
import shopProductCategoryAminoAcidImg from '../assets/shop/ProductCategoriesImgs/shopProductCategoryAminoAcidsImg.jpg';
import shopProductCategoryPreWorkoutImg from '../assets/shop/ProductCategoriesImgs/shopProductCategoryPreWorkoutImg.jpg';
import shopProductCategoryGiftsAndValueSetsImg from '../assets/shop/ProductCategoriesImgs/shopProductCategoryGiftsAndValueSetsImg.jpg';

// ------------------------DUMMY PRODUCTS-----------------------------------------------

export const DUMMY_PRODUCTS = [
  {
    img: imgOne,
  },
  { img: imgTwo },
  {
    img: imgThree,
  },
  { img: imgFour },
  {
    img: imgFive,
  },
  {
    img: imgSix,
  },
  { img: imgSeven },
  {
    img: imgEight,
  },
  { img: imgNine },
  {
    img: imgTen,
  },
  { img: imgEleven },
  {
    img: imgTwelve,
  },
];

// ------------------------CAROUSEL IMAGES-----------------------------------------------

export const carouselImgs = [
  { img: carouselImgOne },
  { img: carouselImgTwo },
  { img: carouselImgThree },
];

// ------------------------PRODUCT CATEGORIES DATA-----------------------------------------------

export const productsCategoriesData = [
  {
    heading: 'Proteins',
    desc: `Protein is an essential macronutrient to build and maintain your
     muscle mass. Our protein requirements depend on many internal and
     external factors.`,
    img: productsCategoriesProteinImg,
    style: 'imgRightSide',
  },
  {
    heading: 'Performance',
    desc: `Enhance your muscle building workout with our range of performance supplements. You will find supplements like essential amino acids, pre-workout supplements and more.`,
    img: productCategoriesPerformanceImg,
    style: 'imgLeftSide',
  },
  {
    heading: 'Accessories',
    desc: `Shop our accessories for shakers, gym bags, pill box and more. All prepared with high-grade raw materials.`,
    img: productCategoriesAccessoriesImg,
    style: 'imgRightSide',
  },
];

// ------------------------PRICING DATA-----------------------------------------------

export const pricingsData = [
  {
    logo: '🤑',
    title: 'Free Demo',
    cost: '0$',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
  },
  {
    logo: '🏠',
    title: 'Home Package',
    cost: '20$',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
  },
  {
    logo: '😎',
    title: 'Personal Training',
    cost: '45$',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
  },
  {
    logo: '🧘🏻‍♀️',
    title: 'Customised Target',
    cost: '50$',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
  },
];

//--------------------------------SHOP PRODUCT CATEGORIES------------------------------

export const shopProductCategories = [
  { productCategory: 'PROTEIN', img: shopProductsCategoriesProteinImg },
  { productCategory: 'POST-WORKOUT', img: shopProductCategoryPostWorkoutImg },
  { productCategory: 'FAT BURNER', img: shopProductCategoryFatBurnerImg },
  { productCategory: 'AMINO ACID', img: shopProductCategoryAminoAcidImg },
  { productCategory: 'PRE-WORKOUT', img: shopProductCategoryPreWorkoutImg },
  {
    productCategory: 'GUIFTS & VALUE SETS',
    img: shopProductCategoryGiftsAndValueSetsImg,
  },
];

// rafce shortcut
