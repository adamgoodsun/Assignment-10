let letter = document.querySelector('#letter img');
let mail = document.querySelector('#mail img');
let santa = document.querySelector('#santa img');
let present = document.querySelector('#present img');

let mailContainer = document.querySelector('#mail');
let presentContainer = document.querySelector('#present');

mailContainer.style.display = 'none';
presentContainer.style.display = 'none';

letter.onclick = () => {
    letter.src = mail.src;
    let letterText = letter.closest('div').querySelector('p');
    let mailText = mailContainer.querySelector('p');
    letterText.innerHTML = mailText.innerHTML + ' (Image by <a href="https://www.vectorportal.com">Vectorportal.com</a>, <a class="external text" href="https://creativecommons.org/licenses/by/4.0/">CC BY</a>)';
};

santa.onmouseover = () => {
    santa.src = present.src;
    let santaText = santa.closest('div').querySelector('p');
    let presentText = presentContainer.querySelector('p');
    santaText.innerHTML = presentText.innerHTML + ' (Image by <a href="https://creazilla.com/media/clipart/69377/gifts">creazilla.com</a>, <a class="external text" href="https://creativecommons.org/licenses/by/4.0/">CC BY</a>)';
};
