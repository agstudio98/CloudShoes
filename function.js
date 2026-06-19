class Navigation {
    constructor() {
        this.carousel = document.getElementById("carrousel");
        this.check1 = document.getElementById("check1");
        this.check2 = document.getElementById("check2");
        this.check3 = document.getElementById("check3");
        this.indicators = [this.check1, this.check2, this.check3];
    }

    setActiveIndicator(activeElement) {
        this.indicators.forEach(indicator => {
            if (indicator) {
                indicator.classList.remove('active');
            }
        });
        if (activeElement) {
            activeElement.classList.add('active');
        }
    }

    init() {
        if (!this.carousel) return;

        // Set initial active state
        this.setActiveIndicator(this.check2); // original default is check2

        if (this.check1) {
            this.check1.addEventListener('click', () => {
                this.carousel.style.backgroundImage = "url('img/Carrousel-2.png')";
                this.carousel.style.transition = "background-image 0.8s ease-in-out";
                this.setActiveIndicator(this.check1);
            });
        }

        if (this.check2) {
            this.check2.addEventListener('click', () => {
                this.carousel.style.backgroundImage = "url('img/Carrousel.png')";
                this.carousel.style.transition = "background-image 0.8s ease-in-out";
                this.setActiveIndicator(this.check2);
            });
        }

        if (this.check3) {
            this.check3.addEventListener('click', () => {
                this.carousel.style.backgroundImage = "url('img/Carrousel-1.png')";
                this.carousel.style.transition = "background-image 0.8s ease-in-out";
                this.setActiveIndicator(this.check3);
            });
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const nav = new Navigation();
    nav.init();
});
