// "use strict";
class Output {
    log(data) {
      console.log(data);
    }
    error(data) {
      console.error(
        "MoPay Errror:",
        data
      );
    }
    warn(data) {
      console.warn(
        "%c%s",
        "color: #f2da24; font-size: 12px; width: 500px; padding: 5px;",
        "Warning:",
        data
      );
    }
    info(data) {
      console.info(
        "Info:",
        data
      );
    }
  }
  const Logger = new Output();

class MoPayment {
    payWithMo(success, error) {
        let generateCheckoutID = () => {
            let string4 = () => {
                return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
            }
            return string4() + string4() +  string4()  + string4() + string4()  + string4();
        }
        let generateToken= () => {
            let string4 = () => {
                return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
            }
            return string4() + string4() +  string4()  + string4() + string4()  + string4(); 
        }
        const checkout_Id  = generateCheckoutID();
        const token  = generateToken();
        const payWithMoButton = document.getElementById('PayWithMo');
        if(!payWithMoButton) {
            error = Logger.error("PaywithMo button not defined");
        }
        payWithMoButton.addEventListener('click', e => {
            e.preventDefault();
            success = Logger.info("Starting payment transsaction")
            location.href = `https://pay.mosregal.com?token=${token}&checkout_Id=${checkout_Id}`
        })
    }
}

// function MoPayment() {
//     const payWithMo = () => {
//     }
// }

const moPayment = new MoPayment;

moPayment.payWithMo();