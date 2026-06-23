//--------------------
//1. SKILLS COUNTER
//Shows how many skills you have in the console
//-------------------

const skillTags = document.querySelectorAll(".tag");
console.log(`You have ${skillTags.length} skills listed.`);

//----------------
//2. DYNAMIC GREETING BASED ON TIME OF THE DAY
//-------------------

const heroHeading = document.querySelector("#hero h1");
const hour = new Date().getHours();

let greeting;

if (hour < 12) {
    greeting = "Good morning";
} else if (hour < 17) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";
}

heroHeading.textContent = `${greeting}, I'm Ifeanyichukwu`;

//----------------
//3. CONTACT BUTTON - SHOW EMAIL ON CLICK
//-------------------

const contactBtn = document.querySelector("#contact .btn");

contactBtn.addEventListener("click", () => {
    contactBtn.textContent = "kanuifeanyiuche@gmail.com";
    contactBtn.style.backgroundColor = "#0077b6";
    contactBtn.style.color = "#ffffff";
});

//----------------
//4. CARD HOVER - LOG WHICH PROJECT WAS CLICKED
//-------------------

const cards = document.querySelectorAll(".card"); 

cards.forEach((card) => {
    card.addEventListener("click", () => {
        const projectName = card.querySelector("h3").textContent;
        console.log(`You clicked: ${projectName} `);
    });
});

//----------------
//5. FETCH COUNTRY DATA AND DISPLAY IT
//-------------------

const fetchUserProfile = async () => {
  try {
    // 1. Fetch a random user from the API
    const response = await fetch("https://randomuser.me/api/");

    // 2. Convert to JavaScript object
    const data = await response.json();

    // 3. Pull out what we need
    const user = data.results[0];
    const fullName = `${user.name.first} ${user.name.last}`;
    const email = user.email;
    const country = user.location.country;
    const city = user.location.city;
    const photo = user.picture.large;

    // 4. Display it on the page
    const aboutSection = document.querySelector("#about");

    const userCard = document.createElement("div");
    userCard.style.cssText = `
      background: #e0f4ff;
      border-radius: 10px;
      padding: 20px;
      margin-top: 30px;
      display: flex;
      align-items: center;
      gap: 20px;
    `;

    userCard.innerHTML = `
      <img 
        src="${photo}" 
        alt="${fullName}"
        style="width: 80px; height: 80px; border-radius: 50%; border: 3px solid #0077b6;"
      />
      <div>
        <h3 style="color: #0077b6; margin-bottom: 6px;">${fullName}</h3>
        <p style="margin-bottom: 4px;"><strong>Email:</strong> ${email}</p>
        <p style="margin-bottom: 4px;"><strong>Location:</strong> ${city}, ${country}</p>
      </div>
    `;

    aboutSection.appendChild(userCard);

  } catch (error) {
    console.log("Something went wrong:", error);
  }
};

fetchUserProfile();