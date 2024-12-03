// Enable drop-down functionality
document.querySelectorAll("article h3").forEach((header) => {
    header.addEventListener("click", () => {
        const dropdown = header.nextElementSibling;
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });
});

// Smooth scrolling for header links
document.querySelectorAll("header nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

function toggleCalculator() {
    const content = document.getElementById("calculator-content");
    content.style.display = content.style.display === "none" ? "block" : "none";
}
function calculateCost() {
    const numTrees = parseInt(document.getElementById("num-trees").value);
    if (isNaN(numTrees) || numTrees < 1) {
        document.getElementById("total-cost").textContent = "$0.00";
        return;
    }

    // Determine selected supply option
    const supplyOption = document.querySelector('input[name="supply-option"]:checked').value;

    // Cost per tree based on supply option
    let costPerTree;
    if (supplyOption === "all") {
        costPerTree = 9.00; // $3 planting + $3 tree cost (average)
    } else if (supplyOption === "trees") {
        costPerTree = 6.00; // $3 planting + $0.40 additional cost for protectors
    } else if (supplyOption === "protectors") {
        costPerTree = 6.00; // $3 planting only
    } else if (supplyOption === "both") {
        costPerTree = 3.00; // User supplies both trees and protectors
    } else {
        costPerTree = 0.00; // Default to avoid unexpected cases
    }

    // Calculate total cost
    const totalCost = numTrees * costPerTree;

    // Display total cost formatted to 2 decimal places
    document.getElementById("total-cost").textContent = `$${totalCost.toFixed(2)}`;
}
