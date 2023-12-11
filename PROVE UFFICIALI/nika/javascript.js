window.onload = function() {
    // Set the ball's initial position
    movingCircle.style.top = '134px';

    // Scroll to the top of the page
    window.scrollTo(134, 0);
}
const movingCircle = document.querySelector('.ball');
const rectangle1 = document.querySelector('.rectangle-1'); // replace '.rectangle-1' with the correct selector for your rectangle

function updateCirclePosition() {
    const scrollY = window.scrollY;
    const scrollPercentage = scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    const y = 20000 * scrollPercentage;
    var newY = y + 134;

    // Get the bottom position of the rectangle relative to the document
    const rectTop = rectangle1.getBoundingClientRect().top + window.scrollY;
    const rectHeight = rectangle1.getBoundingClientRect().height;
    const rectBottom = 1429;

    // If the new position of the ball is beyond the bottom of the rectangle, stop updating the position
    if (newY > rectBottom) {
        return;
    }

    gsap.to(movingCircle, { 
        duration: 0.5, 
        top: newY + 'px',
    });
}

window.onscroll = function() {
    updateCirclePosition();

//the ball's animation ends here//

//starting the lines animation//

const scrollY = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollY / scrollHeight;

window.onload = function() {
    const path = document.querySelector('#path1');
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;
    
    const drawLength = length * scrollPercentage;
    
    path.style.strokeDashoffset = length - drawLength;
  }
}
