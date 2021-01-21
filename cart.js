`use strict`

      class Cart {
         constructor() {
            this.item = 4
            this.qtys = 4
            this.price = 100
            this.diskon = "50%"
         }

         setItem(w) {
            this.item = w;
            return this;
         }

         setQuantity(d) {
            this.qtys = d;
            return this;
         }

         setPrice(t) {
            this.price = t;
            return this;
         }

         setDiskon(fc) {
            this.diskon = fc;
            return this;
         }

         displayCarProps() {
            console.log(`Your cart has ${this.item} item,\
            ${this.qtys} qtys with a price of ${this.price}\
            and Diskon of ${this.diskon}`)
         }
      }

      let sportsCart = new Cart()
         .setQuantity(2)
         .setPrice(250)
         .setDiskon("50%")
         .displayCarProps()