
// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});
// Toggle project 1
const projectDetails1 = document.getElementById('project-details-1');
const toggleBtn1 = document.getElementById('toggle-btn-1');

toggleBtn1.addEventListener('click', () => {
    if (projectDetails1.classList.contains('hidden')) {
        projectDetails1.classList.remove('hidden');
        toggleBtn1.textContent = 'Read Less';
    } else {
        projectDetails1.classList.add('hidden');
        toggleBtn1.textContent = 'Read More';
    }
});

// Toggle project 2
const projectDetails2 = document.getElementById('project-details-2');
const toggleBtn2 = document.getElementById('toggle-btn-2');

toggleBtn2.addEventListener('click', () => {
    if (projectDetails2.classList.contains('hidden')) {
        projectDetails2.classList.remove('hidden');
        toggleBtn2.textContent = 'Read Less';
    } else {
        projectDetails2.classList.add('hidden');
        toggleBtn2.textContent = 'Read More';
    }
});

// Toggle project 3
const projectDetails3 = document.getElementById('project-details-3');
const toggleBtn3 = document.getElementById('toggle-btn-3');

toggleBtn3.addEventListener('click', () => {
    if (projectDetails3.classList.contains('hidden')) {
        projectDetails3.classList.remove('hidden');
        toggleBtn3.textContent = 'Read Less';
    } else {
        projectDetails3.classList.add('hidden');
        toggleBtn3.textContent = 'Read More';
    }
});

// form submission section
const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect form data
  const formData = new FormData(form);

  // Check that all fields are correctly included
  const object = {};
  formData.forEach((value, key) => {
    object[key] = value; // Add all fields to the object
  });

  const json = JSON.stringify(object); // Convert form data to JSON
  result.innerHTML = "Please wait...";

  // Sending form data to API
  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = "Form submitted successfully";
      } else {
        console.log(response);
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
});


