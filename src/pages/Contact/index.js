import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [errorMessage, setErrorMessage] = useState("");

    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    };

    function handleFormSubmit(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            if (!isValid) {
                setErrorMessage("Your Email Address is invalid!");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!e.target.length) {
                setErrorMessage(`${e.target.name} is required!`);
            } else {
                setErrorMessage("");
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log("Handle Form", formState);
        }
    };

    return (
        <section>
            <div>
                <h1>
                    Contact Me
                </h1>
            </div>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="text" name="name" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <input type="text" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
            <div>Email: kfc21194@gmail.com | Phone Number: 860-280-6791</div>
        </section>
    );
}

export default Contact;