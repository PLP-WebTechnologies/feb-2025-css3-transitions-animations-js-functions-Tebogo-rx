const input = document.querySelector("input"),
    h2 = document.querySelector("h2");

h2.innerHTML = localStorage.getItem("value");

input.addEventListener("keyup",display);

function display() {
    localStorage.setItem("value", input.value);
    h2.innerHTML = input.value;
}

// Modal functionality
const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");

openModalButton.addEventListener("click", () => {
  modal.classList.add("show");
});

closeModalButton.addEventListener("click", () => {
  modal.classList.remove("show");
});
//Pop up window can be closed when clicking anywhere outside the box */

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

//animation
openModalButton.addEventListener("click", () => {
  modal.classList.add("show");
});
closeModalButton.addEventListener("click", () => {
  modal.classList.remove("show");
});

// Adjust padding
const modalContent = document.querySelector('.modal-content');
const ro = new ResizeObserver(entries => {
  const bounceHeight = 50;
  entries.forEach(entry => {
    entry.target.style.paddingBottom = `${bounceHeight}px`;
  });
});
ro.observe(modalContent);
