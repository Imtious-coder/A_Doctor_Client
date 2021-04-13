import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import ApointmentHeader from '../ApointmentHeader/ApointmentHeader';
import BookApointment from '../BookApointment/BookApointment';

const Apointment = () => {
    const [selectedDate, setSelectedDate] =useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <div>
           <Navbar></Navbar>
           <ApointmentHeader handleDateChange={handleDateChange}></ApointmentHeader>
           <BookApointment date={selectedDate}></BookApointment>
           <Footer></Footer>
        </div>
    );
};

export default Apointment;