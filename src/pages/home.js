const renderHomePage = function () {
  const content = document.querySelector("#content");
  const restName = document.createElement("h3");
  const restDesc = document.createElement("p");
  content.innerHTML = "";


  restName.classList.add("restaurant-name");
  restName.textContent = "Finny's Fine Foods";
  content.appendChild(restName)


  restDesc.classList.add("restaurant-description");
  restDesc.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquipex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. hi`
  restName.appendChild(restDesc)
}

export {renderHomePage}