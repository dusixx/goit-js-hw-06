const counterRef = document.querySelector("#counter");

const refs = {
  counter: counterRef,
  decrementBtn: counterRef.firstElementChild,
  incrementBtn: counterRef.lastElementChild,
  counterValue: counterRef.children[1],
};

let counterValue = 0;

const onIncrementButtonClick = () => (refs.counterValue.textContent = counterValue += 1);
const onDecrementButtonClick = () => (refs.counterValue.textContent = counterValue -= 1);

refs.incrementBtn.addEventListener("click", onIncrementButtonClick);
refs.decrementBtn.addEventListener("click", onDecrementButtonClick);

//
// Вариант 2
//
// const onIncrementButtonClick = ({
//   currentTarget: {
//     dataset: { action },
//   },
// }) => {
//   counterValue += action === "increment" ? 1 : -1;
//   refs.counterValue.textContent = counterValue;
// };

// refs.incrementBtn.addEventListener("click", onIncrementButtonClick);
// refs.decrementBtn.addEventListener("click", onIncrementButtonClick);
