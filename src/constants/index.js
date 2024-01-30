import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, bigShoe4, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, thumbnailShoe4 } from "../assets/images";
import { shoe11, shoe12, shoe13, shoe14, shoe15, shoe16 } from "../assets/images";
import { shoe21, shoe22, shoe23, shoe24, shoe25, shoe26 } from "../assets/images";
import { shoe31, shoe32, shoe33, shoe34, shoe35, shoe36 } from "../assets/images";
import { shoe41, shoe42, shoe43, shoe44, shoe45, shoe46 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
    {
        thumbnail: thumbnailShoe4,
        bigShoe: bigShoe4,
    },
];

export const statistics = [
    { value: '50+', label: 'Brands' },
    { value: '300+', label: 'Shops' },
    { value: '3k+', label: 'Sneakers' },
    { value: '40k+', label: 'Customers' },
];

export const products = [
    {
        imgURL1: shoe11,
        imgURL2: shoe12,
        imgURL3: shoe13,
        imgURL4: shoe14,
        imgURL5: shoe15,
        imgURL6: shoe16,
        name: "Adidas: ultimashow shoes",
        rating: 4.5,
        sold: 26,
        colors: 4,
        price: "20,999",
        quantity: 106,
    },
    {
        imgURL1: shoe21,
        imgURL2: shoe22,
        imgURL3: shoe23,
        imgURL4: shoe24,
        imgURL5: shoe25,
        imgURL6: shoe26,
        name: "Nike: Zoom Vomero 5",
        rating: 5.0,
        sold: 143,
        colors: 7,
        price: "35,999",
        quantity: 13,
    },
    {
        imgURL1: shoe31,
        imgURL2: shoe32,
        imgURL3: shoe33,
        imgURL4: shoe34,
        imgURL5: shoe35,
        imgURL6: shoe36,
        name: "Puma: Future Rider Camo",
        rating: 4.5,
        sold: 30,
        colors: 2,
        price: "20,999",
        quantity: 96,
    },
    {
        imgURL1: shoe41,
        imgURL2: shoe42,
        imgURL3: shoe43,
        imgURL4: shoe44,
        imgURL5: shoe45,
        imgURL6: shoe46,
        name: "New balance: 990v6",
        rating: 4.5,
        sold: 67,
        colors: 2,
        price: "24,999",
        quantity: 14,
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@sneakerwave.com", link: "mailto:customer@sneakerwave.com" },
            { name: "+9411664444", link: "tel:+9411664444" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];