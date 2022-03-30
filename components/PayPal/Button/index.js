import { PayPalButtons } from "@paypal/react-paypal-js";

const CheckoutButton = ({ handlePayment, createOrderHandler }) => {
  return (
    <PayPalButtons
      createOrder={createOrderHandler}
      onApprove={(data, actions) => {
        handlePayment();
      }}
    />
  );
};

export default CheckoutButton;
