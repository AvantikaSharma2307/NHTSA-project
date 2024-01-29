import React from 'react'
import './Complaint.css';

export default function Complaint() {
    function toggleComplaintForm() {
    var form = document.getElementById('complaintForm');
    var confirmationMessage = document.getElementById('confirmationMessage');

    if (form.style.display === 'none' || form.style.display === '') {
        
        form.style.display = 'flex';
        confirmationMessage.style.display = 'none';
    } else {
        
        form.style.display = 'none';
    }
}

function submitComplaint() {
    
    document.getElementById('complaintForm').style.display = 'none';
    document.getElementById('confirmationMessage').style.display = 'block';
}


    return (
        <div className='body'>
            <div className="background-image">
                <div className="container1 m-14">
                    <h1 >Road Safety and Complaint</h1>

                    <div className="safety-precautions">
                        <h2 >Safety Precautions</h2>
                        <ul>
                            <li>Always wear your seatbelt while driving.</li>
                            <li>Obey traffic rules and signals.</li>
                            <li>Do not use your mobile phone while driving.</li>
                            <li>Maintain a safe following distance.</li>

                        </ul>
                    </div>

                    <button onClick={toggleComplaintForm}>Complain Now</button>

                    <form id="complaintForm" className="hiddenform ">
                        <label htmlFor="name">Your Name:</label>
                        <input type="text" id="name" name="name" required/>

                            <label htmlFor="email">Your Email:</label>
                            <input type="email" id="email" name="email" required/>

                                <label htmlFor="location">Accident Location:</label>
                                <input type="text" id="location" name="location" required/>

                                    <label htmlFor="vehicleNumber">Vehicle Number:</label>
                                    <input type="text" id="vehicleNumber" name="vehicleNumber" required/>

                                        <label htmlFor="description">Accident Description:</label>
                                        <textarea id="description" name="description" rows="4" required></textarea>

                                        <label htmlFor="image">Upload Image:</label>
                                        <input type="file" id="image" name="image" accept="image/*"/>

                                            <div className="button-container">
                                                <button type="button" onClick={submitComplaint}>Submit Complaint</button>
                                            </div>
                                        </form>

                                        <div id="confirmationMessage" className="hidden">
                                            <p>Your complaint has been submitted. Thank you for reporting.</p>
                                        </div>
                                    </div>
                                </div>






                            </div>
        )
}

