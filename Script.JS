/* =========================================
   DILIP JEWELLERS & SONS
   (CHOWK SARAFE WALE)
   JAVASCRIPT LOGIC
========================================= */

/* =========================================
   PAGE LOADER
========================================= */

window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        if (loader) {
            loader.classList.add("hide");
        }
    }, 1000);
});


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        if (window.scrollY > 60) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }
});


/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {
    const menu = document.getElementById("navMenu");
    if (menu) {
        menu.classList.toggle("active");
    }
}

document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.getElementById("navMenu");
        if (menu) {
            menu.classList.remove("active");
        }
    });
});


/* =========================================
   PRODUCT DATABASE
   (Gold, Silver Fancy Jewellery & Zodiac Gems)
========================================= */

const products = [
    {
        category: "gold",
        type: "ring",
        name: "Fancy Gold Ring",
        weight: "Guaranteed Purity • 22K Hallmarked",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=90"
    },
    {
        category: "gold",
        type: "chain",
        name: "Classic Fancy Gold Chain",
        weight: "Guaranteed Purity • 22K Custom",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=90"
    },
    {
        category: "gold",
        type: "jhumka",
        name: "Traditional Gold Jhumka",
        weight: "Fancy Crafted • 22K Hallmarked",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=90"
    },
    {
        category: "gold",
        type: "bracelet",
        name: "Fancy Gold Bracelet",
        weight: "Manufactured In-House • 22K",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=90"
    },
    {
        category: "silver",
        type: "ring",
        name: "Silver Fancy Designer Ring",
        weight: "92.5 Pure Certified Silver",
        image: "https://images.unsplash.com/photo-1603561596112-db5f7c2d9b68?auto=format&fit=crop&w=1000&q=90"
    },
    {
        category: "silver",
        type: "chain",
        name: "Handcrafted Silver Chain",
        weight: "Pure Silver • Solid Weight",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=90"
    },
    {
        category: "silver",
        type: "jhumka",
        name: "Silver Fancy Jhumki",
        weight: "Traditional Chowk Sarafa Style",
        image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=90"
    },
    {
        category: "silver",
        type: "payal",
        name: "Bridal Fancy Silver Payal",
        weight: "Heavy Pure Silver • Fine Ghungroo",
        image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1000&q=90"
    },
    {
        category: "silver",
        type: "bracelet",
        name: "Solid Silver Kada",
        weight: "Pure 925 Hallmark",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1000&q=90"
    },
    {
        category: "gemstones",
        type: "ring",
        name: "Zodiac Yellow Sapphire (Pukhraj)",
        weight: "100% Certified Natural Gemstone",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=90"
    },
    {
        category: "gemstones",
        type: "gemstones",
        name: "Natural Blue Sapphire (Neelam)",
        weight: "Astrologically Energized",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=90"
    },
    {
        category: "gemstones",
        type: "gemstones",
        name: "Semi-Precious Rashi Stones",
        weight: "Available For All 12 Zodiacs",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=90"
    }
];


/* =========================================
   DISPLAY PRODUCTS
========================================= */

function displayProducts(filter = "all") {
    const grid = document.getElementById("productGrid");
    if (!grid) return;

    let filteredProducts;

    if (filter === "all") {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(product =>
            product.category === filter || product.type === filter
        );
    }

    grid.innerHTML = "";

    filteredProducts.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card reveal";

        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-type">${product.category.toUpperCase()} • ${product.type.toUpperCase()}</p>
                <p class="product-weight">${product.weight}</p>
                <button class="view-btn" onclick="selectProduct('${product.name}')">Book Store Visit</button>
            </div>
        `;

        grid.appendChild(card);
    });

    setTimeout(() => {
        document.querySelectorAll(".product-card").forEach(card => {
            card.classList.add("show");
        });
    }, 50);
}


/* =========================================
   PRODUCT FILTERS
========================================= */

function filterProducts(filter, button) {
    document.querySelectorAll(".filter").forEach(btn => {
        btn.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }

    displayProducts(filter);

    const productsSection = document.getElementById("products");
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth" });
    }
}


function showCategory(category) {
    displayProducts(category);

    document.querySelectorAll(".filter").forEach(btn => {
        btn.classList.remove("active");
    });

    const productsSection = document.getElementById("products");
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth" });
    }
}


/* =========================================
   SELECT PRODUCT FOR BOOKING
========================================= */

function selectProduct(productName) {
    const select = document.getElementById("customerItem");
    if (!select) return;

    let optionExists = false;

    for (let option of select.options) {
        if (option.text.toLowerCase().includes(productName.toLowerCase())) {
            select.value = option.value;
            optionExists = true;
            break;
        }
    }

    if (!optionExists) {
        select.selectedIndex = 0;
    }

    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth" });
    }

    showToast(productName + " selected for your visit booking.");
}


/* =========================================
   BOOKING DATE RESTRICTIONS
========================================= */

const today = new Date().toISOString().split("T")[0];

const visitDateInput = document.getElementById("visitDate");
const pickupDateInput = document.getElementById("pickupDate");

if (visitDateInput) visitDateInput.min = today;
if (pickupDateInput) pickupDateInput.min = today;


/* =========================================
   BOOKING FORM WITH WHATSAPP DISPATCH
========================================= */

function submitBooking(event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const phone = document.getElementById("customerPhone").value;
    const item = document.getElementById("customerItem").value;
    const visit = document.getElementById("visitDate").value;
    const pickup = document.getElementById("pickupDate").value;

    if (visit > pickup) {
        showToast("Pickup date should be on or after visit date.");
        return;
    }

    const message =
`*DILIP JEWELLERS & SONS (CHOWK SARAFE WALE)*
_Guaranteed Quality Product_

Namaste! I would like to book a visit for:
• *Customer Name:* ${name}
• *Mobile Number:* ${phone}
• *Requirement:* ${item}
• *Preferred Visit Date:* ${visit}
• *Target Pickup Date:* ${pickup}

*Store Location:* House No. 335-A, K Block, Salt Factory Square, Yashoda Nagar, Kanpur (Near Pragma Public School)

Looking forward to meeting you!`;

    const whatsappNumber = "916393378878";
    const whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
    showToast("Booking details ready! Opening WhatsApp...");
}


/* =========================================
   TOAST NOTIFICATION
========================================= */

let toastTimer;

function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 4000);
}


/* =========================================
   SCROLL REVEAL ANIMATIONS
========================================= */

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.12 }
);

function observeElements() {
    document.querySelectorAll(".reveal").forEach(element => {
        observer.observe(element);
    });
}


/* =========================================
   INITIALIZE EVERYTHING
========================================= */

displayProducts();
observeElements();


/* =========================================
   PRODUCT IMAGE ERROR FALLBACK
========================================= */

document.addEventListener(
    "error",
    function(event) {
        if (event.target.tagName === "IMG") {
            event.target.src = "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=80";
        }
    },
    true
);