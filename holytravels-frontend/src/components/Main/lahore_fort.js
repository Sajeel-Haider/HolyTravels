import React from 'react';
import lahorefort from "../../assets/lahore_fort.jpg";
import lahorefort2 from "../../assets/lahore_fort2.jpg";
const LahoreFortPage = () => {
  const historyAndImportance = (
    <>
      <h1 className="title">The History & Importance of Lahore Fort</h1>
      <p>
        Lahore Fort, also known as Shahi Qila, has been standing tall since its construction began under Mughal Emperor Akbar in 1566 AD. The fort served as a symbol of power and grandeur throughout the reigns of various emperors until British rule.
      </p>
      <img src={lahorefort} alt="Exterior of Lahore Fort" className="fort-image" />
      <p>
        Lahore Fort is a magnificent monument that has stood the test of time. Its stunning architecture and rich history make it a must-visit destination for anyone interested in the Mughal era of South Asia.
      </p>
      <img src={lahorefort2} alt="Interior of Lahore Fort" className="fort-image" />
      <p>
        The interior of Lahore Fort is just as impressive as its exterior. Visitors can explore the various buildings and structures within the fort, including the Sheesh Mahal, Naulakha Pavilion, and Moti Masjid.
      </p>
    </>
  );

  const handleBooking = () => {
    alert('Booking option will be available soon!');
  };

  return (
    <div className="container">
      {historyAndImportance}
      <button onClick={handleBooking} className="booking-button">Book a Visit</button>
    </div>
  );
};

export default LahoreFortPage;