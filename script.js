const carouselContainer = document.querySelector('.carousel-container');
const images = document.querySelectorAll('.featuring-photos');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');

let currentIndex = 0;

function updateCarousel() {
  const imageWidth = images[0].clientWidth;
  carouselContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

let btnSubmit = document.getElementById('submit-button');
    let msg = "";
    //process form 
    btnSubmit.addEventListener('click', function (e) {
        e.preventDefault();
  
        //get first-name value
        let FirstName = document.getElementById('first-name').value;
        msg += `First Name: ${FirstName}<br/>`;

        if(FirstName.length < 1){
            errorMsg = `Please enter your first name.`;
          console.log(errorMsg);
              document.getElementById('errorUsername').innerHTML = errorMsg;
        }else{
          document.getElementById('errorUsername').innerHTML = "";
        }
        
        //get Last-name value
        let Lastname = document.getElementById('last-name').value;
        msg += `Last Name: ${Lastname}<br/>`;

        //get Contactno value
        let contactno = document.getElementById('contactno').value;
        msg += `Contact No: ${contactno}<br/>`;

        //get datetime value
        let datetime = document.getElementById('datetime').value;
        msg += `Date & Time: ${datetime}<br/>`;

        //get message value
        let message = document.getElementById('message-id').value;
        msg += `Message: ${message}<br/>`;
    })