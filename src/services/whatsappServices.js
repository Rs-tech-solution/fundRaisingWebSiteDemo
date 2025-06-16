"use client";
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";
import ApiService from "./ApiService";

const WhatsappServices = ({ height, phoneNumber, chatMessage }) => {
  const [url, setUrl] = useState("");
  const apiService = new ApiService();

  // useEffect(() => {
  //   const fetchPhoneNumber = async () => {
  //     try {
  //       const phoneNumberData = await apiService.get(+917981536744);
  //       if (phoneNumberData && phoneNumberData.phoneNumber) {
  //         const message = encodeURI(
  //           window.location.href +
  //             "\n I'm interested to know more about this product. Can you help?"
  //         );
  //         setUrl(
  //           `https://api.whatsapp.com/send?phone=${phoneNumberData.phoneNumber}&text=${message}`
  //         );
  //       } else {
  //         throw new Error("Phone number not found");
  //       }
  //     } catch (error) {
  //       toast.error("Failed to fetch phone number for WhatsApp chat");
  //     }
  //   };

  //   fetchPhoneNumber();
  // }, []);

  useEffect(() => {
    const constructWhatsAppUrl = () => {
      if (phoneNumber) {
        const message = encodeURI(`${window.location.href}\n${chatMessage}`);
        setUrl(
          `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`
        );
      } else {
        toast.error("Phone number not provided");
      }
    };

    constructWhatsAppUrl();
  }, [phoneNumber, chatMessage]);

  return (
    <a
      id="whatsappChatIcon"
      href={url}
      style={{ textDecoration: "none", color: "white" }}
    >
      <FaWhatsapp
        // className="lazyload"
        // height={height}
        size={32}
        //  round={true}
        alt="Chat With Support"
      />
    </a>
  );
};

export default WhatsappServices;

/* Dynamic Approach 
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";
import ApiService from "./ApiService"; // Adjust the path

const WhatsappServices = ({ chatMessage }) => {
  const [url, setUrl] = useState("");
  const apiService = new ApiService();

  useEffect(() => {
    const fetchPhoneNumber = async () => {
      try {
        const phoneNumberData = await apiService.get("/get-phone-number"); // Adjust the endpoint as necessary
        if (phoneNumberData && phoneNumberData.phoneNumber) {
          const message = encodeURI(`${window.location.href}\n${chatMessage}`);
          const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumberData.phoneNumber}&text=${message}`;
          setUrl(whatsappUrl);
        } else {
          throw new Error("Phone number not found");
        }
      } catch (error) {
        toast.error("Failed to fetch phone number for WhatsApp chat");
      }
    };

    fetchPhoneNumber();
  }, [chatMessage]);

  return (
    <a
      id="whatsappChatIcon"
      href={url}
      style={{ textDecoration: "none", color: "grey" }}
    >
      <FaWhatsapp size={32} alt="Chat With Support" />
    </a>
  );
};

export default WhatsappServices;

*/
