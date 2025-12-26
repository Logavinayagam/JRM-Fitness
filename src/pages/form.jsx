import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

function Form() {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');    
    const [Phone , setPhone] = useState('');
    
        const handleSubmit = async (e) => {
            e.preventDefault();
           
            await addDoc(collection(db, "leads"), {
                name, email, Phone,
                createdAt : new Date()
            });

            fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
                body: JSON.stringify({
                name: name,
                email: email,
                phone: Phone
                }),
            })
            .then(() => {
                console.log("Saved to Google Sheets");
            })
            .catch(err => {
                console.error("Google Sheets error", err);
            });

            window.gtag("event", "lead_submit", {
                event_category: "engagement",
                event_label: "gym_lead_form"
            });

            setName('');
            setEmail('');
            setPhone('');
      
            alert("Details submitted successfully! We will contact you soon.");
        }
    
        return (
            <div className="form-container">
                <div className="form-card">
                    <h2>Try a free trial session</h2>
                    <p>Enter your details below to get started with a free trial session.</p>
                    
                    <form id="contactForm" onSubmit={handleSubmit} className="styled-form">
                        <div className="input-group">
                            <input type="text" placeholder="Name" value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />
                        </div>
                        
                        <div className="input-group">
                            <input type="email" placeholder="Email" value={email}
                            onChange={(e) => setEmail(e.target.value)}  
                            required />
                        </div>
                        
                        <div className="input-group">
                            <input type="tel" placeholder="Phone Number" value={Phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required />
                        </div>
                        
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>
            </div>
        );
}

export default Form;