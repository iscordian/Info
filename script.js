const textList = ["Developer", "NextHub Founder"];
let currentIndex = 0;
const cycler = document.getElementById('cycler');
let currentText = ''; 
let typeMode = true;  

function typeEffect() {
    if (typeMode) {
        currentText += textList[currentIndex].charAt(currentText.length);

        if (currentText.length === textList[currentIndex].length) {
            typeMode = false; // Done typing, switch to deleting mode
            setTimeout(deleteEffect, 3000); // 3-second pause before deleting
        }
    } else {
        currentText = currentText.slice(0, -1); // Remove last character

        if (currentText.length === 0) {
            typeMode = true; // Done deleting, switch back to typing mode
            currentIndex = (currentIndex + 1) % textList.length;  
        }
    }

    cycler.textContent = currentText + '|'; 
}

function deleteEffect() {
    typeEffect(); // Reuse the typeEffect function for deletion
}


typeEffect();
setInterval(typeEffect, 150); // Adjust typing speed here

const showBioButton = document.getElementById('showBio');
const bioText = document.getElementById('bioText');
let bioVisible = false; 

showBioButton.addEventListener('click', () => {
    bioVisible = !bioVisible; // Toggle visibility

    if (bioVisible) {
        bioText.style.display = 'block';
        showBioButton.textContent = 'Hide'; 
    } else {
        bioText.style.display = 'none';
        showBioButton.textContent = 'About Me'; 
    }
});
