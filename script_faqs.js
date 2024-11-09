   // FAQ Accordion functionality
   const faqQuestions = document.querySelectorAll('.faq-question');

   faqQuestions.forEach(question => {
       question.addEventListener('click', () => {
           question.classList.toggle('active');
           const faqContent = question.nextElementSibling;
           if (faqContent.style.display === "block") {
               faqContent.style.display = "none";
           } else {
               faqContent.style.display = "block";
           }
       });
   });
function openSidebar() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}