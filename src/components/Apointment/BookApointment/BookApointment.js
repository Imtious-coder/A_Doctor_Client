import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        _id : '',
        id:'1',
        subject:'Subject Here',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 12
    },
    {
        _id : '',
        id:'2',
        subject:'Subject Here',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 12
    },
    {
        _id : '',
        id:'3',
        subject:'Subject Here',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 12
    },
    {
        _id : '',
        id:'4',
        subject:'Subject Here',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 12
    },
    {
        _id : '',
        id:'5',
        subject:'Subject Here',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 12
    },
    {
        _id : '',
        id:'6',
        subject:'Subject Here',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 12
    }
]

const BookApointment = ({date}) => {
    return (
        <section>
            <h2 className="text-center text-brand mb-5">Available Appointments on {date.toDateString()}</h2>
            <div className="container">
            <div className="row">
                {
                    bookingData.map(booking => <BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
                }
            </div>
            </div>
        </section>
    );
};

export default BookApointment;