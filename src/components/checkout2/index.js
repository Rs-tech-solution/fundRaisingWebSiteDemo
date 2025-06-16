'use client'

import React, { useState } from 'react';
import styles from "./index.module.scss";
import { FaWhatsapp } from 'react-icons/fa';
import ApiService from '@/services/ApiService';

const apiService = new ApiService();

const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const Checkout = ({ id, donationAmount, image, title, currency, setDonation, fetchTotalDonatedAmount }) => {
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gotram, setGortram] = useState('');
    const [nationality, setNationality] = useState('indian');
    const [tip, setTip] = useState(0);
    const [donateAnonymously, setDonateAnonymously] = useState(false);
    const [agreeToPrivacy, setAgreeToPrivacy] = useState(false);

    const baseAmount = donationAmount || 0;
    const totalAmount = (Number(baseAmount) + Number(tip)).toFixed(2);
    const tipPercentages = [0, 5, 10, 15, 20];


    const createTransaction = async () => {
        const userConfirmation = window.confirm('Do you want to proceed?');
        if (userConfirmation) {
            const orderData = {
                firstName,
                lastName,
                email,
                number,
                tip,
                totalAmount,
                anonymous: donateAnonymously,
                campaignId: id,
                currency: currency,
            }
            try {
                const res = await apiService.post('/orders/create_order', { orderData })
                if (res.data) {
                    alert('transaction created');
                    fetchTotalDonatedAmount();
                    setDonation(false);
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    const handleVerification = () => {
        const fields = [
            { value: email, message: "Please enter your email.", id: "email" },
            { value: number, message: "Please enter your mobile number.", id: "number" },
            { value: firstName, message: "Please enter your first name.", id: "firstName" },
            { value: lastName, message: "Please enter your last name.", id: "lastName" },
            { value: gotram, message: "Please enter your Gotram.", id: "gotram" },
            { value: agreeToPrivacy, message: "Please checked privacy policy.", id: 'terms' }
        ];

        const emptyField = fields.find(field => !field.value);

        if (emptyField) {
            alert(emptyField.message);
            document.getElementById(emptyField.id).focus();
            return;
        }
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            document.getElementById("email")?.focus();
            return;
        }
        createTransaction();
    };


    return (
        <div className={styles.checkout_container}>
            <div className={styles.checkout_left}>
                <div className={styles.checkout_item}>
                    <img src={image} alt="Donation Item" className={styles.item_image} />
                    <div>
                        <h2 className={styles.item_title}>{title}</h2>
                        <p className={styles.item_price}>₹ {baseAmount}</p>
                    </div>
                </div>

                <div className={styles.tip_section}>
                    <label>Select Tip amount</label>
                    <br />
                    <select value={tip} onChange={(e) => setTip(Number(e.target.value))}>
                        {tipPercentages.map((percent) => (
                            <option key={percent} value={(baseAmount * percent) / 100}>
                                {percent}% - ₹{((baseAmount * percent) / 100).toFixed(2)}
                            </option>
                        ))}
                    </select>
                    <p className={styles.tip_info}>The amount collected through tips will go to Veda Sankalpa, for platform maintenance and operational expenses.</p>
                </div>
                <hr />

                <div className={styles.personal_info}>
                    <h3>Personal Information</h3>
                    <div className={styles.input_group}>
                        <input type="text" placeholder="First Name *"
                            id='firstName'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input type="text" placeholder="Last Name *"
                            id='lastName'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className={styles.input_group}>
                        <input type="email" placeholder="Email *"
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input type="number" placeholder="Mobile No *"
                            id='number'
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </div>
                    <div className={styles.input_group}>
                        <input type="text" placeholder="Gotram"
                            id='gotram'
                            value={gotram}
                            onChange={(e) => setGortram(e.target.value)}
                        />
                    </div>

                    <div className={styles.radio_group}>
                        <label><input type="radio" name="nationality"
                            value="indian"
                            checked={nationality === "indian"}
                            onChange={(e) => setNationality(e.target.value)}
                        /> I'm Indian National</label>
                        <label><input type="radio" name="nationality"
                            value="non_indian"
                            checked={nationality === "non_indian"}
                            onChange={(e) => setNationality(e.target.value)}
                        /> Non Indian National</label>
                    </div>

                    <div className={styles.checkbox_group}>
                        <input type="checkbox"
                            id="anyonymous"
                            className={styles.custom_checkbox}
                            checked={donateAnonymously}
                            onChange={() => setDonateAnonymously(!donateAnonymously)}
                        />
                        <label htmlFor="anyonymous"> Donate as Anonymous</label>
                    </div>

                    <div className={styles.checkbox_group}>

                        <input type="checkbox"
                            id='terms'
                            className={styles.custom_checkbox}
                            checked={agreeToPrivacy}
                            onChange={() => setAgreeToPrivacy(!agreeToPrivacy)}
                        />
                        <label htmlFor="terms">I agree to the terms and conditions</label>

                    </div>

                </div>
            </div>

            <div className={styles.checkout_right}>
                <h3>Summary</h3>
                <div className={styles.summary_row}>
                    <span>Sub Total</span>
                    <span>₹ {baseAmount}</span>
                </div>
                <div className={styles.summary_row}>
                    <span>Tip</span>
                    <span>₹ {tip}</span>
                </div>
                <div className={styles.summary_row + " " + styles.total}>
                    <span>Total</span>
                    <span>₹ {totalAmount}</span>
                </div>
                <button className={styles.checkout_button} onClick={handleVerification} disabled={!email || !agreeToPrivacy}>Checkout</button>
            </div>

            <div className={styles.whatsapp_button}>
                <button><FaWhatsapp size={52} /></button>
            </div>
        </div>
    );
};

export default Checkout;
