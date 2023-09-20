# Welcome to my portfolio!

## Description
Hi there! My name is Cynthia and this is my first ever portfolio in my coding journey! I had a lot of fun making it and I can't wait to further improve my front-end coding skills so I can come back and revamp this website.

## Features
- Hero section
- About section
- Projects section
- Contact info

## My journey
There were a lot of things that went right and so many more that went wrong. Here are a few instant wins (yay!) and also some challenges that I had to overcome: 
- smooth scroll
- [timeline creation](https://www.w3schools.com/howto/howto_css_timeline.asp)
- [z-index](https://www.google.com/search?q=css+content+showing+on+top+of+header&rlz=1C1VDKB_enCA1036CA1036&oq=css+content+showing+on+top+of+header&aqs=chrome..69i57j33i160.6101j0j4&sourceid=chrome&ie=UTF-8)
- [multiple classes](https://developer.mozilla.org/en-US/docs/Learn/CSS/Howto/CSS_FAQ#how_do_i_assign_multiple_classes_to_an_element)
- [animate on scroll](https://blog.hubspot.com/website/css-animate-on-scroll#how)

The best single line of code:
```css
html {
  scroll-behavior: smooth;
}
```

Some javascript I was proud to figure out/work with:
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