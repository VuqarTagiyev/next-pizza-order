import { PayPalButtons } from "@paypal/react-paypal-js";

const CheckoutButton = ({ setIsPaid }) => {
  return (
    <PayPalButtons
      onApprove={(data, actions) => {
        setIsPaid();
      }}
    />
  );
};

export default CheckoutButton;
