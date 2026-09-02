/* =========================================
   DILIP & SONS
   JAVASCRIPT
========================================= */


/* =========================================
   PAGE LOADER
========================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList.add("hide");

    }, 1000);

});


/* =========================================
   NAVBAR
========================================= */

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 60) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    const menu =
        document.getElementById("navMenu");

    menu.classList.toggle("active");

}


/* Close mobile menu after clicking */

document
    .querySelectorAll("#navMenu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            document
                .getElementById("navMenu")
                .classList.remove("active");

        });

    });


/* =========================================
   PRODUCT DATABASE
========================================= */

const products = [

    {
        category: "gold",
        type: "ring",
        name: "Royal Gold Ring",
        weight: "22K • 4.8g",
        image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=90"
    },

    {
        category: "gold",
        type: "chain",
        name: "Classic Gold Chain",
        weight: "22K • 18.2g",
        image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=90"
    },

    {
        category: "gold",
        type: "jhumka",
        name: "Golden Jhumka",
        weight: "22K • 7.5g",
        image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=90"
    },

    {
        category: "gold",
        type: "bracelet",
        name: "Gold Bracelet",
        weight: "22K • 11.6g",
        image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=90"
    },

    {
        category: "gold",
        type: "payal",
        name: "Gold Payal",
        weight: "22K • 16.4g",
        image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=90"
    },

    {
        category: "silver",
        type: "ring",
        name: "Silver Ring",
        weight: "925 • 6.1g",
        image:
        "https://images.unsplash.com/photo-1603561596112-db5f7c2d9b68?auto=format&fit=crop&w=1000&q=90"
    },

    {
        category: "silver",
        type: "chain",
        name: "Silver Chain",
        weight: "925 • 21g",
        image:
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=90"
    },

    {
        category: "silver",
        type: "jhumka",
        name: "Silver Jhumka",
        weight: "925 • 8.4g",
        image:
        "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=90"
    },

    {
        category: "silver",
        type: "bracelet",
        name: "Silver Bracelet",
        weight: "925 • 12g",
        image:
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1000&q=90"
    },

    {
        category: "silver",
        type: "payal",
        name: "Silver Payal",
        weight: "925 • 32g",
        image:
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1000&q=90"
    },

    {
        category: "copper",
        type: "ring",
        name: "Copper Ring",
        weight: "Premium • 7g",
        image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=90"
    },

    {
        category: "copper",
        type: "bracelet",
        name: "Copper Kada",
        weight: "Premium • 18g",
        image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1000&q=90"
    }

];


/* =========================================
   SHOW PRODUCTS
========================================= */

function displayProducts(filter = "all") {

    const grid =
        document.getElementById("productGrid");

    let filteredProducts;

    if (filter === "all") {

        filteredProducts = products;

    } else {

        filteredProducts =
            products.filter(product =>

                product.category === filter ||
                product.type === filter

            );

    }


    grid.innerHTML = "";


    filteredProducts.forEach((product, index) => {

        const card =
            document.createElement("div");

        card.className =
            "product-card reveal";


        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy">

            </div>

            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>

                <p class="product-type">
                    ${product.category.toUpperCase()}
                    •
                    ${product.type.toUpperCase()}
                </p>

                <p class="product-weight">
                    ${product.weight}
                </p>

                <button
                    class="view-btn"
                    onclick="selectProduct('${product.name}')">

                    View / Book

                </button>

            </div>
        `;


        grid.appendChild(card);

    });


    setTimeout(() => {

        document
            .querySelectorAll(".product-card")
            .forEach(card => {

                card.classList.add("show");

            });

    }, 50);

}


/* =========================================
   PRODUCT FILTER
========================================= */

function filterProducts(
    filter,
    button
) {

    document
        .querySelectorAll(".filter")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    if (button) {

        button.classList.add("active");

    }


    displayProducts(filter);


    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   COLLECTION CLICK
========================================= */

function showCategory(category) {

    displayProducts(category);


    document
        .querySelectorAll(".filter")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   SELECT PRODUCT FOR BOOKING
========================================= */

function selectProduct(productName) {

    const select =
        document.getElementById(
            "customerItem"
        );


    let optionExists = false;


    for (let option of select.options) {

        if (
            option.text
                .toLowerCase()
                .includes(
                    productName
                        .split(" ")
                        .slice(1)
                        .join(" ")
                        .toLowerCase()
                )
        ) {

            select.value = option.value;

            optionExists = true;

            break;

        }

    }


    if (!optionExists) {

        select.selectedIndex = 0;

    }


    document
        .getElementById("booking")
        .scrollIntoView({
            behavior: "smooth"
        });


    showToast(
        productName +
        " selected for booking."
    );

}


/* =========================================
   BOOKING DATE
========================================= */

const today =
    new Date()
        .toISOString()
        .split("T")[0];


document
    .getElementById("visitDate")
    .min = today;


document
    .getElementById("pickupDate")
    .min = today;


/* =========================================
   BOOKING FORM
========================================= */

function submitBooking(event) {

    event.preventDefault();


    const name =
        document
            .getElementById("customerName")
            .value;


    const phone =
        document
            .getElementById("customerPhone")
            .value;


    const item =
        document
            .getElementById("customerItem")
            .value;


    const visit =
        document
            .getElementById("visitDate")
            .value;


    const pickup =
        document
            .getElementById("pickupDate")
            .value;


    if (visit > pickup) {

        showToast(
            "Pickup date should be after visit date."
        );

        return;

    }


    /*
       WhatsApp booking message

       This opens WhatsApp with
       customer booking information.
    */

    const message =

`Hello Dilip & Sons,

I want to book a jewellery visit.

Name: ${name}
Mobile: ${phone}
Jewellery: ${item}
Visit Date: ${visit}
Pickup Date: ${pickup}

Thank you.`;


    const whatsappNumber =
        "916393378878";


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);


    window.open(
        whatsappURL,
        "_blank"
    );


    showToast(
        "Booking details are ready. WhatsApp is opening..."
    );

}


/* =========================================
   TOAST
========================================= */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById("toast");


    toast.textContent = message;


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 4000);

}


/* =========================================
   SCROLL REVEAL
========================================= */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target
                        .classList
                        .add("show");

                }

            });

        },

        {
            threshold: 0.12
        }

    );


function observeElements() {

    document
        .querySelectorAll(".reveal")
        .forEach(element => {

            observer.observe(element);

        });

}


/* =========================================
   INITIALIZE
========================================= */

displayProducts();

observeElements();


/* =========================================
   PRODUCT IMAGE FALLBACK
========================================= */

document.addEventListener(
    "error",
    function(event) {

        if (
            event.target.tagName === "IMG"
        ) {

            event.target.src =
                "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=80";

        }

    },
    true
);