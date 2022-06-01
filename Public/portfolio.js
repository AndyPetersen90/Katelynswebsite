//Here we will be creating our axios requests from the portfolio page
//that we will send to the backend.


const mainPortfolio = document.getElementsByClassName('main-portfolio');

const portfolioLocation = document.getElementsByClassName('instagram-images');

let portfolio = document.querySelector(".portfolio-categories");

portfolio.addEventListener('change', () => {
    if (portfolio.options[portfolio.selectedIndex].value === "main-portfolio") {
        document.getElementById('main').style.visibility = "visible";
        document.getElementById('winter').style.visibility = "hidden";
        document.getElementById('spring').style.visibility = "hidden";
        document.getElementById('summer').style.visibility = "hidden";
        document.getElementById('fall').style.visibility = "hidden";
        document.getElementById('main').classList.add("main");
    } else if (portfolio.options[portfolio.selectedIndex].value === "winter") { 
        document.getElementById('winter').style.visibility = "visible";
        document.getElementById('main').style.visibility = "hidden";
        document.getElementById('spring').style.visibility = "hidden";
        document.getElementById('summer').style.visibility = "hidden";
        document.getElementById('fall').style.visibility = "hidden";
        document.getElementById('winter').classList.add("winter");
    } else if (portfolio.options[portfolio.selectedIndex].value === "spring") { 
        document.getElementById('spring').style.visibility = "visible";
        document.getElementById('winter').style.visibility = "hidden";
        document.getElementById('main').style.visibility = "hidden";
        document.getElementById('summer').style.visibility = "hidden";
        document.getElementById('fall').style.visibility = "hidden";
        document.getElementById('spring').classList.add("spring");
    } else if (portfolio.options[portfolio.selectedIndex].value === "summer") { 
        document.getElementById('summer').style.visibility = "visible";
        document.getElementById('winter').style.visibility = "hidden";
        document.getElementById('spring').style.visibility = "hidden";
        document.getElementById('main').style.visibility = "hidden";
        document.getElementById('fall').style.visibility = "hidden";
        document.getElementById('summer').classList.add("summer");
    } else if (portfolio.options[portfolio.selectedIndex].value === "fall") { 
        document.getElementById('fall').style.visibility = "visible";
        document.getElementById('winter').style.visibility = "hidden";
        document.getElementById('spring').style.visibility = "hidden";
        document.getElementById('summer').style.visibility = "hidden";
        document.getElementById('main').style.visibility = "hidden";
        document.getElementById('fall').classList.add("fall");
    }

})





