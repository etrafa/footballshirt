import paypalMethod from "./footer-asset/paypalMethod.png";

const PaymentMethod = () => {
  return (
    <div className="payment__container">
      <h1>PAYMENT METHOD</h1>
      <div className="payment__text">
        <p>
          Pay with a credit or debit card via PayPal (You don't need to have a
          PayPal account). Press to pay via Paypal, then choose to "Create an
          Account" and you will get a window where you can eneter your card
          details and pay an order. If you need a help or instructions 'how to
          pay', feel free to contact us.
        </p>
        <p>
          PayPal is a safer, easier way to send and receive money online. When
          you select PayPal as the payment method, you will be linked to the
          PayPal site where you can make payment.
        </p>
        <p>
          PayPal can be used to purchase items by Credit Card (Visa, MasterCard,
          Discover, and American Express), Debit Card, or E-check (i.e. using
          your regular Bank Account).
        </p>
        <p>
          1) You can sign in to your PayPal account, or you can create a new one
          if you haven’t got one.
        </p>
        <img src={paypalMethod} alt="" />
        <p>
          2) You can use the PayPal as you want according to the on-screen
          instructions.
        </p>
        <p>The reasons why we suggest you use PayPal:</p>
        <p>
          Payment is traceable. By using your PayPal account, you can trace the
          status of your payment.
        </p>
        <p>
          When you make payment for your order, you don’t need to use your
          credit card online (you can transfer directly from your bank account).
          When you use your credit card through PayPal, nobody will see your
          credit card number, which will minimize the risk of unauthorized use.
        </p>
      </div>
    </div>
  );
};

export default PaymentMethod;
