export default class HomeController {
    constructor(randomNames) {
        this.random = randomNames;
        this.name = 'Word';
    }

    changeName() {
        this.name = 'angulat-tips';
    }
    randomName() {
        this.name = this.random.getName();
    }
}
HomeController.$inject = ['randomNames'];