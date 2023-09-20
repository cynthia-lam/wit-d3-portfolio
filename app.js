const elements = document.querySelectorAll('.fade-lefttoright');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: .4
}

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
}


let observer = new IntersectionObserver(callbacks, options);
elements.forEach(element => {
  observer.observe(element);
});
elements2.forEach(element => {
    observer.observe(element);
  });