let filterItem1 = document.querySelector(".fitler-item1");
let filterItem2 = document.querySelector(".fitler-item2");
let filterItem3 = document.querySelector(".fitler-item3");
let filterItem4 = document.querySelector(".fitler-item4");
let filterItem5 = document.querySelector(".fitler-item5")
let catalog = document.querySelector(".catalog");

filterItem1.onclick = function () {
    catalog.classList.add("fitler-item1-bg");

    catalog.classList.remove("fitler-item2-bg");
    catalog.classList.remove("fitler-item3-bg");
    catalog.classList.remove("fitler-item4-bg");
    catalog.classList.remove("fitler-item5-bg");
}

filterItem2.onclick = function () {
    catalog.classList.add("fitler-item2-bg");

    catalog.classList.remove("fitler-item1-bg");
    catalog.classList.remove("fitler-item3-bg");
    catalog.classList.remove("fitler-item4-bg");
    catalog.classList.remove("fitler-item5-bg");
}

filterItem3.onclick = function () {
    catalog.classList.add("fitler-item3-bg");

    catalog.classList.remove("fitler-item1-bg");
    catalog.classList.remove("fitler-item2-bg");
    catalog.classList.remove("fitler-item4-bg");
    catalog.classList.remove("fitler-item5-bg");
}

filterItem4.onclick = function () {
    catalog.classList.add("fitler-item4-bg");

    catalog.classList.remove("fitler-item1-bg");
    catalog.classList.remove("fitler-item2-bg");
    catalog.classList.remove("fitler-item3-bg");
    catalog.classList.remove("fitler-item5-bg");
}


filterItem5.onclick = function () {
    catalog.classList.add("fitler-item5-bg");
    filterItem5.style.background = oldCss;
    catalog.classList.remove("fitler-item1-bg");
    catalog.classList.remove("fitler-item2-bg");
    catalog.classList.remove("fitler-item3-bg");
    catalog.classList.remove("fitler-item4-bg");
}