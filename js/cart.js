const cartNumber = document.querySelector(".cartNumber");

class Cart {
    constructor() {
        this.courses = [];
    }

    get length() {
        return this.courses.length;
    }

    addCourse(courseId) {
        const courseObj = courses.find(function (course) {
            return course.id === courseId;
        });
        this.courses.push(courseObj);
        this.render();
    }

    remove(courseIndex) {
        this.courses.splice(courseIndex, 1);
        this.render();
    }

    subTotal() {
        let subTotal = 0;

        this.courses.forEach(function (course) {
            subTotal = subTotal + course.price;
        });

        return subTotal.toFixed(2);
    }

    total() {
        return (this.subTotal() * 1.13).toFixed(2);
    }

    render() {
        const itemsInCart = document.getElementById("items-in-cart");
        const subTotalEl = document.getElementById("subtotal-amount");
        const totalEl = document.getElementById("total-amount");

        cartUl.innerHTML = "";

        for (let i = 0; i < this.length; i++) {
            cartUl.insertAdjacentHTML(
                "beforeend",
                ` <li data-course-id="${i}">
            <img src="images/${this.courses[i].image}" />
            <div id="cart-title">${this.courses[i].title}</div>
            <div id="cart-price">${this.courses[i].price}</div>
            <div id="delete">
              <i class="far fa-times-circle"></i>
            </div>
          </li>`
            );
        }

        // this.courses.forEach(function (courseObj) {

        // });

        itemsInCart.textContent = `You have ${this.length} courses in your cart`;
        cartNumber.textContent = ` ${this.length}`;
        subTotalEl.textContent = `$${this.subTotal()}`;
        totalEl.textContent = `$${this.total()}`;
    }
}
