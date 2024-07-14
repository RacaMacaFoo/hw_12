const container = document.getElementById("container");
const firstPhrase = prompt("Напишите свою первую фразу");
const secondPhrase = prompt("Напишите свою вторую фразу");
const thirdPhrase = prompt("Напишите свою третью фразу");
const number = prompt("Напишите номер который будет состоять из 5 цифр");

container.innerHTML = 
`
    <p>Your phrases is: ${firstPhrase + ", " + secondPhrase + ", " + thirdPhrase}</p> 
    <p>Your splited numbers: ${number.split("").join(" ")}</p>
`;