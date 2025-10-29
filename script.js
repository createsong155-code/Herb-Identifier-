const herbs = {
  cough: ["Lagundi (Vitex negundo)", "Oregano", "Guava leaves", "Sambong"],
  wound: ["Aloe Vera", "Guava leaves", "Kalachuchi", "Tsaang Gubat"],
  stomach: ["Ginger", "Banaba", "Lemongrass", "Tsaang Gubat"],
  fever: ["Lagundi", "Sambong", "Guava leaves", "Guyabano"],
  skin: ["Aloe Vera", "Neem", "Papaya", "Turmeric"],
};

const herbListDiv = document.getElementById("herbList");
const categoryButtons = document.querySelectorAll(".category-btn");

function showHerbs(category) {
  herbListDiv.innerHTML = "";
  herbs[category].forEach((herb) => {
    const div = document.createElement("div");
    div.classList.add("herb-item");
    div.textContent = herb;
    herbListDiv.appendChild(div);
  });
}

categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".category-btn.active").classList.remove("active");
    btn.classList.add("active");
    const selectedCategory = btn.getAttribute("data-category");
    showHerbs(selectedCategory);
  });
});

// Default show herbs for cough
showHerbs("cough");

// Identify button temporary action
document.getElementById("identifyBtn").addEventListener("click", () => {
  document.getElementById("result").innerText =
    "Identifying... (feature coming soon)";
});