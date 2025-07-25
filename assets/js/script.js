let navLinks = document.querySelectorAll('nav ul li a');
console.log('These are the section links');
console.log(navLinks);

navLinks.forEach((item) => {
    item.addEventListener('click', function(){
        // remove active class (highlight / blue circle) from previously selected section link button
        document.querySelector('nav ul li a.active').classList.remove('active')
        // add active class (highlight / blue circle) to the newly clicked section link button
        item.classList.add('active')
        // remove the active class from the previously selected section
        document.querySelector('main > section.active').classList.remove('active')
        // add active class to the newly clicked section so it is displayed on the screen
        document.querySelector(`main > section${item.getAttribute('href')}`).classList.add('active')
        // the active style which allows the section to be displayed is defined in assets\scss\_structure.scss 
        console.log(`You clicked on ${item.getAttribute('href')}`);
    })
});

document.querySelector('#sidebar .toggle-sidebar').addEventListener('click', function(){
    document.querySelector('#sidebar').classList.toggle('open');
});

var options = {
    strings: ['Front-End Web Developer', 'Web Designer', 'Back-End Web Developer'],
    loop: true,
    typeSpeed: 70,
    backSpeed: 30
};

new Typed('.field h2', options);

for(let i = 1; i <= 15; i++) {
    let meteor = document.createElement('span');
    meteor.classList = 'meteor';
    document.querySelector('#home .meteor-shower').append(meteor);
}