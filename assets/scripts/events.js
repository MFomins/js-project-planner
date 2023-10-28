const buttons = document.querySelectorAll("button");
const button = document.querySelector("button");

// button.onclick = function() {

// };

const buttonClickHandler = (event) => {
    // alert("Button was clicked!");
    // event.target.disabled = true;
    console.log(event);
};

const anotherBtnClickHandler = () => {
    console.log("this was clicked!");
};

// button.onclick = buttonClickHandler;

const boundFn = buttonClickHandler.bind(this);

// button.addEventListener("click", buttonClickHandler);

// setTimeout(() => {
//     button.removeEventListener("click", buttonClickHandler);
// }, 2000);

// buttons.forEach(btn => {
//     btn.addEventListener('mouseenter', buttonClickHandler);
// });

// window.addEventListener('scroll', event => {
//     console.log(event);
// })

// let curElementNumber = 0;

// function scrollHandler() {
//     const distanceToBottom = document.body.getBoundingClientRect().bottom;

//     if (distanceToBottom < document.documentElement.clientHeight + 150) {
//         const newDataElement = document.createElement('div');
//         curElementNumber++;
//         newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
//         document.body.append(newDataElement);
//     }
// }

// window.addEventListener('scroll', scrollHandler);

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
});

const div = document.querySelector("div");

div.addEventListener("click", (event) => {
    console.log("CLICKED DIV");
    console.log(event);
});

button.addEventListener("click", function (event) {
    event.stopPropagation();
    // event.stopImmediatePropagation();
    console.log("CLICKED BUTTON");
    console.log(event);
    console.log(this);
});

const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

// listItems.forEach(listItems => {
//     listItems.addEventListener('click', () => {
//         event.target.classList.toggle('highlight');
//     });
// });    Worse performance

list.addEventListener("click", function(event) {
    // console.log(event.currentTarget);
    // event.target.classList.toggle('highlight');
    event.target.closest("li").classList.toggle("highlight");
    // form.submit();
    button.click();
    console.log(this);
});
