# Welcome to my portfolio!

## Description
Hi there! My name is Cynthia and this is my first ever portfolio in my coding journey! I had a lot of fun making it and I can't wait to further improve my front-end coding skills so I can come back and revamp this website.

## Features
- Hero section
- About section
- Projects section
- Contact info

## My journey
There were a lot of things that went right and so many more that went wrong. Here are a few instant wins (yay!) and also that I had to overcome: 
- smooth scroll
- timeline creation
- z-index
- [animate on scroll](https://blog.hubspot.com/website/css-animate-on-scroll#how)

```css
html {
  scroll-behavior: smooth;
}
```

```javascript
const elements = document.querySelectorAll('.fade-lefttoright');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: .4
}

// elementsTWO
const elements2 = document.querySelectorAll('.fade-righttoleft');
const options2 = {
  root: null,
  rootMargin: '0px',
  threshold: .4
}
const callbacks = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('active');
    } 
    // else {
    //   entry.target.classList.remove('active');
    // }
  });
}```