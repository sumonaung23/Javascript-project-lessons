const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    let random = getRandomNumber();
    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];
})

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}
