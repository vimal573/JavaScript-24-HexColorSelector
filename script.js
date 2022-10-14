const colorBox = document.querySelector(".color-box");
const color = document.querySelector(".color");

colorBox.addEventListener("click", (e) => {
  const link = e.target.closest(".color");

  if (!link) return;

  const targetId = link.dataset.id;

  const hexColorCode = document.querySelector(`.hex-color-${targetId}`);

  //   const hexColorCode1 = getComputedStyle(link).backgroundColor;
  //   console.log(hexColorCode1);

  navigator.clipboard.writeText(hexColorCode.textContent).then(
    () => {
      /* clipboard successfully set */
      alert(`${hexColorCode.textContent} copied to clipboard`);
    },
    () => {
      /* clipboard write failed */
    }
  );
});
