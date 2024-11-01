document.addEventListener("DOMContentLoaded", () => {
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");

    // Set the current year
    currentYearSpan.textContent = new Date().getFullYear();

    // Set the last modified date
    lastModifiedSpan.textContent = document.lastModified;
});

document.addEventListener("DOMContentLoaded", () => {
    // 1. Display a greeting message based on the time of day
    const greetingDiv = document.createElement("div");
    greetingDiv.classList.add("greeting");
    const main = document.querySelector("main");
    main.insertBefore(greetingDiv, main.firstChild);
  
    const hour = new Date().getHours();
    let greetingMessage;
    if (hour < 12) {
      greetingMessage = "Good morning! Start your day with a good book.";
    } else if (hour < 18) {
      greetingMessage = "Good afternoon! A perfect time to read.";
    } else {
      greetingMessage = "Good evening! Unwind with a captivating story.";
    }
    greetingDiv.textContent = greetingMessage;
  
    // 2. Form Validation for the Newsletter Signup
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("useremail");
  
      if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
        event.preventDefault();
        alert("Please fill in both your name and email to sign up for the newsletter.");
      } else {
        alert("Thank you for signing up! Check your email for the latest updates.");
      }
    });
  
    // 3. Update Footer Year and Last Modified Date
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");
  
    currentYearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;
  });

document.addEventListener("DOMContentLoaded", () => {
    // Select the "Join Now" button
    const joinButton = document.querySelector("button[type='submit']");
  
    // Add an event listener for the button click
    joinButton.addEventListener("click", () => {
      // Display an alert with a welcome message
      alert("Thank you for your interest! You’re now on your way to joining our Book Club!");
    });
  });

document.addEventListener("DOMContentLoaded", () => {
    // 1. Form Validation
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        const fullName = document.getElementById("fullname").value.trim();
        const email = document.getElementById("useremail").value.trim();
        const feedback = document.getElementById("feedback").value.trim();
        
        if (!fullName || !email || !feedback) {
            event.preventDefault();  // Prevent form submission
            alert("Please fill in your name, email, and message before submitting.");
        } else {
            alert("Thank you for your message! We’ll respond within 24 hours.");
        }
});
});

   document.addEventListener("DOMContentLoaded", () => {
    // Book data with Amazon links and ratings
    const books = [
      { title: "Disgrace", link: "https://www.amazon.com/Disgrace-Brittainy-Cherry/dp/1722429712/ref=sr_1_7?crid=3U8Q1AMZA4EIT&dib=eyJ2IjoiMSJ9.CSXhPfA2NYsEolInLhFVnK-9nE8E2vIw-oQYGje3-p7WyvbJ0xEM1QHQ7BXEKKjVHhCp1ugKbsz-_6LhWKUJ4yu8tjmXi0iUcmv7VnuATS04kFVKz7I9VFz-iZaAQmW3dR2rdwY8PZHOaCAglmI_GX24yIqG13W-5aOg4AXU2u_7aBPCjgXL0i5D8Vr7xeLoZv8j_-fKRsJNntE4D9P8A0qY1XeoQ4uI-u6BuN2gTJRWdbvGNoDadz75pS_6WE5Aq5iF3nXhHxcRmQ6TRfuqXGxnyLxcZrZk5YbPT9lUGRY.KBvtKGsBwOAj0J9Uu5FCxm_HLQurmUdqHpbowgifkuE&dib_tag=se&keywords=brittainy+cherry+books&qid=1730435778&sprefix=britta%2Caps%2C245&sr=8-7", rating: 4 },
      { title: "Verity", link: "https://www.amazon.com/Verity-Colleen-Hoover/dp/1538724731/ref=sr_1_2?crid=1O5KYYNQ15GR5&dib=eyJ2IjoiMSJ9.lkcU86ybDFFCqqbuU6SDTSh-QN6luHDAXRRwT1EG9PpDhZ1uCgXK1MILL1D-NkIsnbliLLJJM8v_YPHhV3O-erWiS0sRuvZJQIjV8Jhk1Trng89PGJo7c5xoMk-oBi-clNftUBJZeXq79vNQF6UQRTxmXpBzjPBzoFiN6ffY_ajfzRTUj-fG55s78yGi53qOZxz3oXggjWabfz6MBtmMQlNUru__aXTbPgNuce5qkoV7cpeKLAGRJQVJHM43TpaHQNfPPxlwBZ8hQWxMDtz5eBvPlT_oDhBO0OsNqFmh2P0.UuPQTDAAecK50NOqQCbTtHu14ktWmbYZ1v7V8Sc5T8Y&dib_tag=se&keywords=colleen+hoover%27s+books&qid=1730435681&sprefix=colle%2Caps%2C210&sr=8-2", rating: 5 },
      { title: "Strange Sally Diamond", link: "https://www.amazon.com/Strange-Sally-Diamond-Liz-Nugent/dp/1501189727/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.PNSkjBR1ObwZ7nIajI1NdLy2qbiOHDtGhkSsA0dIA0xJPtI03VaU7AoGa1BZ1Svd6sW6C32uRZBAYmmuafjdGGCubchlwrmQuRir6EQqROLLh7mp7XIvDd6cbwkVj2JOIBDL31Zy0cFreis-eRKtBOv72soy_SBVj6Q48uNagBwy5xp1vVYaxc3xNWdgVgPIyMy5SMWRP0N9ZedrBd7ALQftnZMSMKtPlymvn5fOz_T5wxwy2q_gxqkwndwV_bstog3bhezfztiEq2BrnTqH3e00_FmK0oTW5w4JPyrl31Q.PHN1wnoRHaKgv7KGMEOADrshBgiQijx-FiBfip2_XoI&qid=1730437371&sr=8-1", rating: 4 },
      { title: "The Love of My Afterlife", link: "https://www.amazon.com/Love-My-Afterlife-Kirsty-Greenwood-ebook/dp/B0CKB1K7FC?ref_=ast_author_mpb", rating: 3 },
      { title: "Size 12 & Ready to Rock", link: "https://www.amazon.com/gp/product/0061734780?ref_=dbs_m_mng_rwt_calw_tpbk_3&storeType=ebooks&qid=1730435943&sr=8-9", rating: 4 },
      { title: "Hidden Pictures", link: "https://www.amazon.com/Hidden-Pictures-Novel-Jason-Rekulak-ebook/dp/B09HPKQN43?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.RnJzF46Nurmp9ouagQQufxZPCuAbK8ZSGIoe77ypDHahDuwz3f8pZfnJUIa91cCbMscvn8J6W-qqMcsrS5koa2M18jZrSkOSZgY5XvhFEYIZ4LRCPKWSRlXaEBj9VnnhxSQNytpU7fENG5R1Rcw5XPIB0cb3lu0WO5A1E7_KcM7z3IVk7tWMe7Wx-J9Yxh4Cfh2tiw5osr3kmiPBPNbnEjjFqwfy0VBdI7NiqeWLcVc.U4QGQGmElNkS_cH_ngNDMK-0m7xGUNT7pZuWMvCES5A&dib_tag=AUTHOR"}
    ];
  
    // Get all figures in the .books section
    const figures = document.querySelectorAll(".books figure");
  
    figures.forEach((figure, index) => {
      // Get the book's rating and link
      const { rating, link } = books[index];
  
      // Create a div for the stars
      const starContainer = document.createElement("div");
      starContainer.classList.add("stars");
  
      // Generate star elements based on the rating
      for (let i = 0; i < 5; i++) {
        const star = document.createElement("span");
        star.classList.add("star");
        star.innerHTML = i < rating ? "★" : "☆"; // Filled star or empty star
        starContainer.appendChild(star);
      }
  
      // Insert the star container before the Buy Now button
      const buyButton = figure.querySelector("button[type='submit']");
      buyButton.parentNode.insertBefore(starContainer, buyButton);
  
      // Add a click event to the Buy Now button to open the Amazon link
      buyButton.addEventListener("click", () => {
        window.open(link, "_blank");
      });
    });
  });  