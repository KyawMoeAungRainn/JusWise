
let wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
)
wow.init();

// ================= Modal Trigger ===================

$(window).on('load', function() {
    $("#staticBackdrop").modal('show');
});

let timer = setInterval(function () {
    $("#staticBackdrop").modal('show');
}, 5000);

setTimeout(function () {
    clearInterval(timer);
    console.log('stop')
}, 13000);
    

// ================== Star Rating Process ==================
const rating = document.querySelector('.star-rating');
const stars = Array.from(document.querySelectorAll('.fa-star'));
const one = document.getElementById('starOne');
const two = document.getElementById('starTwo');
const three = document.getElementById('starThree');
const four = document.getElementById('starFour');
const five = document.getElementById('starFive');

rating.addEventListener('click', e => {
    e.preventDefault();
    let select = e.target;
   
    if (select.classList.contains('one')) {
        console.log('1');
        stars.filter(star => star.classList.remove('checked'));
        one.classList.add('checked');
    }
    
    if (select.classList.contains('two')) {
        console.log('2');
        stars.filter(star => star.classList.remove('checked'));
        one.classList.add('checked');
        two.classList.add('checked');
    }

    if (select.classList.contains('three')) {
        console.log('3');
        stars.filter(star => star.classList.remove('checked'));
        one.classList.add('checked');
        two.classList.add('checked');
        three.classList.add('checked');
    }

    if (select.classList.contains('four')) {
        console.log('4');
        stars.filter(star => star.classList.remove('checked'));
        one.classList.add('checked');
        two.classList.add('checked');
        three.classList.add('checked');
        four.classList.add('checked');
    }

    if (select.classList.contains('five')) {
        console.log('5')
        stars.filter(star => star.classList.add('checked'));
    }
})


