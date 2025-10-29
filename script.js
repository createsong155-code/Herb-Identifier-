function showHerb(name) {
  const herbs = {
    lagundi: {
      name: "Lagundi",
      description: "A herbal plant known for treating coughs, colds, and asthma.",
      uses: "Cough, fever, asthma relief",
      preparation: "Boil leaves in water for 10 minutes and drink 1 cup 3x daily.",
      caution: "Not recommended for pregnant women."
    },
    sambong: {
      name: "Sambong",
      description: "Commonly used for kidney stones and urinary problems.",
      uses: "Kidney cleanser, anti-inflammatory",
      preparation: "Boil leaves and drink as tea.",
      caution: "Use moderately, may affect kidney function in excess."
    },
    tanglad: {
      name: "Tanglad (Lemongrass)",
      description: "A fragrant herb used for fever, stomach ache, and stress.",
      uses: "Fever, stomach pain, relaxation",
      preparation: "Boil leaves and drink as tea or apply as oil.",
      caution: "Avoid strong concentration for children."
    },
    bayabas: {
      name: "Bayabas (Guava)",
      description: "Natural antiseptic used for wounds and oral health.",
      uses: "Wound cleaning, gum care",
      preparation: "Boil leaves, cool, and use as mouth rinse or wound wash.",
      caution: "Do not swallow when using as mouthwash."
    },
    ampalaya: {
      name: "Ampalaya (Bitter Gourd)",
      description: "Known to help regulate blood sugar levels.",
      uses: "Diabetes management, digestion aid",
      preparation: "Boil leaves or eat as cooked vegetable.",
      caution: "Avoid excessive intake during pregnancy."
    }
  };

  const herb = herbs[name];
  document.getElementById("home").style.display = "none";
  document.getElementById("herb-details").style.display = "block";
  document.getElementById("herb-name").innerText = herb.name;
  document.getElementById("herb-description").innerText = herb.description;
  document.getElementById("herb-uses").innerText = herb.uses;
  document.getElementById("herb-preparation").innerText = herb.preparation;
  document.getElementById("herb-caution").innerText = herb.caution;
}

function goBack() {
  document.getElementById("herb-details").style.display = "none";
  document.getElementById("home").style.display = "block";
}
