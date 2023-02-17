const counterRef = document.querySelector("#counter");
const decBtnRef = counterRef.firstElementChild;
const incBtnRef = counterRef.lastElementChild;
const counterValueRef = counterRef.children[1];
let counterValue = 0;

incBtnRef.addEventListener("click", () => (counterValueRef.textContent = counterValue += 1));
decBtnRef.addEventListener("click", () => (counterValueRef.textContent = counterValue -= 1));

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

// refs.incBtn.addEventListener("click", onIncrementButtonClick);
// refs.decBtn.addEventListener("click", onIncrementButtonClick);
