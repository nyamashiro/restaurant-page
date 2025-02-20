const renderMenuPage = function () {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const data = [
    {
      name: "Finn's Fishfry and Fries",
      desc: "Flaky fish filled with fish and french fries straight from France on the side.",
      price: "...$12"
    },
    {
      name: "Finn's Famous Filet Mignon",
      desc: "Filet mignon featuring Father Finn's fantastic fruit sauce.",
      price: "...$26"
    },
    {
      name: "Finn's Flavorful Figs",
      desc: "Figs picked from forests in Finland.",
      price: "...$24"
    },
  ]

  const renderContainer = function () {
    const menuContainer = document.createElement("div");
    for (let i = 0; i < 2; i++) {
      let list = document.createElement("ul");
      for (let j = 0; j < 3; j++) {
        let listItem = document.createElement("li");
        if (i === 0) {
          listItem.classList.add("menu-item")
          list.appendChild(listItem);
        } else if (i === 1) {
          listItem.classList.add("prices")
          list.appendChild(listItem);
        }
      }
      menuContainer.classList.add("menu-container")
      menuContainer.appendChild(list)
    }

    content.appendChild(menuContainer)
  }

  const renderMenuItems = function () {
    const menuItem = document.querySelectorAll(".menu-item");

    menuItem.forEach((item, i) => {
      let h3 = document.createElement("h3");
      let p = document.createElement("p");
      h3.textContent = `${data[i].name}`;
      p.textContent = `${data[i].desc}`;
      item.appendChild(h3);
      item.appendChild(p)
    })
  }

  const renderPrice = function () {
    const menuPrice = document.querySelectorAll(".prices");

    menuPrice.forEach((item, i) => {
      let p = document.createElement("p");;
      p.textContent = `${data[i].price}`;
      item.appendChild(p)
    })
  }

  renderContainer();
  renderMenuItems();
  renderPrice();
}

export { renderMenuPage }