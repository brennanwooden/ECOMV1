// Load the product data from the JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Select the container where the products will be displayed
    const productList = document.querySelector("#product-list");

    // Loop through each product in the JSON data and create a card for each one
    data.product_page.products.forEach(product => {
      // Create a new div for the product card
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      // Create an image element for the product photo
      const productImage = document.createElement("img");
      productImage.src = `ecom-photos/${product.image}`; // Updated path to images in ecom-photos folder
      productImage.alt = product.name; // Set the alt attribute for accessibility

      // Create an anchor tag to make the image clickable
      const imageLink = document.createElement("a");
      imageLink.href = `product-detail.html?id=${product.id}`; // Link to product detail page
      imageLink.appendChild(productImage); // Append the image to the link

      // Construct the inner HTML for the product card (with the image link)
      productCard.innerHTML = `
        ${imageLink.outerHTML}
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>${product.price}</strong></p>
      `;

      // Append the product card to the product list container
      productList.appendChild(productCard);
    });
  })
  .catch(error => {
    console.error("Error loading data:", error);
    document.getElementById("product-list").innerHTML = "<p>Sorry, there was an issue loading the products.</p>";
  });


// Form validation for the contact page
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    document.getElementById("form-message").textContent = "Please fill in all fields.";
  } else {
    document.getElementById("form-message").textContent = "Thank you for your message!";
    // Here you can also handle the form submission, e.g., send data to a server.
  }
});
