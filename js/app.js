const courseUl = document.querySelector(".courses");
const cartUl = document.querySelector("#cart-ul");

const cart = new Cart();

courseUl.addEventListener("click", function (e) {
    if (e.target.nodeName === "BUTTON") {
        const courseEl = e.target.closest("li");
        console.log(courseEl);
        cart.addCourse(courseEl.dataset.courseId);
    }
});

cartUl.addEventListener("click", function (e) {
    if (e.target.nodeName === "I") {
        const courseEl = e.target.closest("li");
        cart.remove(courseEl.dataset.index);
    }
});

cart.render();
