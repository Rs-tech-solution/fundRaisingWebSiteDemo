import React from "react";

// interface RazorpayCheckoutProps {
//   orderId: string;
//   amount: number; // in INR
//   currency: string;
//   onSuccess: (response: any) => void;
//   onFailure?: (response: any) => void;
// }

const RazorpayCheckout = ({
  orderId,
  amount,
  currency,
  onSuccess,
  onFailure,
}) => {
  const openRazorpay = () => {
    const options = {
      key: "rzp_test_1b9JtyEHtm8Dqe", // Replace with your Razorpay Key ID
      amount: amount * 100, // Amount in paise
      currency: currency,
      name: "Your Company Name",
      description: "Payment for Order",
      order_id: orderId,
      handler: function (response) {
        onSuccess(response);
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      theme: {
        color: "#3399cc",
      },
      modal: {
        ondismiss: function () {
          if (onFailure) onFailure({ dismissed: true });
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <button
        onClick={openRazorpay}
        style={{
          backgroundColor: "blue",
          padding: "8px 16px",
          border: "none",
          outline: "none",
          color: "white",
          borderRadius: "1rem",
        }}
      >
        Pay with Razorpay
      </button>
    </div>
  );
};

export default RazorpayCheckout;
