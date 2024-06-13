setTimeout(function() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
}, 5000); // Change 5000 to 3000


document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const githubLink = this.getAttribute('data-githublink');
            if (githubLink) {
                window.open(githubLink, '_blank');
            }
        });
    });
});
  

document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById('downloadButton');
    downloadButton.addEventListener('click', function() {
        // Specify the path relative to the static folder
        const cvPath = '/static/Altamash_Cv.pdf'; // Update path to start with '/static/'
        // Trigger the download by creating an anchor element and simulating a click
        const link = document.createElement('a');
        link.href = cvPath;
        link.download = "Altamash_Cv.pdf"; // Corrected attribute name
        link.click();
    });
});






document.getElementById("scrollToTop").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



    // Function to scroll to the target div when clicking on a navigation link
    // function scrollToDiv(className) {
    //     var targetDiv = document.querySelector('.' + className);
    //     if (targetDiv) {
    //         targetDiv.scrollIntoView({ behavior: 'smooth' });
    //     }
    // }

    // function scrollToDiv(className) {
    //     var targetY = 0;
    //     try {
    //         if (className === 'education-link') {
    //             var targetElement = document.querySelector('.education-heading');
    //             console.log('Target Element:', targetElement);
    //             targetY = targetElement.getBoundingClientRect().top + window.pageYOffset;
    //         } else if (className === 'projects-link') {
    //             var targetElement = document.querySelector('.projects-heading');
    //             console.log('Target Element:', targetElement);
    //             targetY = targetElement.getBoundingClientRect().top + window.pageYOffset;
    //         } else if (className === 'achievements-link') {
    //             var targetElement = document.querySelector('.achievements-heading');
    //             console.log('Target Element:', targetElement);
    //             targetY = targetElement.getBoundingClientRect().top + window.pageYOffset;
    //         } else if (className === 'cv-link') {
    //             var targetElement = document.querySelector('.cv-heading');
    //             console.log('Target Element:', targetElement);
    //             targetY = targetElement.getBoundingClientRect().top + window.pageYOffset;
    //         } else if (className === 'contact-link') {
    //             var targetElement = document.querySelector('.contact-heading');
    //             console.log('Target Element:', targetElement);
    //             targetY = targetElement.getBoundingClientRect().top + window.pageYOffset;
    //         }
    
    //         console.log('Target Y:', targetY);
    
    //         window.scrollTo({
    //             top: targetY,
    //             behavior: 'smooth'
    //         });
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // }
    
    function scrollToDiv(className) {
        var targetDiv;
        try {
            if (className === 'education-link') {
                targetDiv = document.querySelector('.education-heading');
            } else if (className === 'projects-link') {
                targetDiv = document.querySelector('.projects-heading');
            } else if (className === 'achievements-link') {
                targetDiv = document.querySelector('.achievements-heading');
            } else if (className === 'cv-link') {
                targetDiv = document.querySelector('.cv-section');
            } else if (className === 'contact-link') {
                targetDiv = document.querySelector('.contact-heading');
            }
            
            if (targetDiv) {
                targetDiv.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error('Target div not found for class:', className);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    