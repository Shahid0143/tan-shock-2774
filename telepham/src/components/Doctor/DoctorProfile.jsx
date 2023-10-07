import React, { useState } from "react";
import "../Doctor/DoctorProflie.css";
import DoctorData from "./DoctorData";
import { ToastContainer, toast } from "react-toastify";

const DoctorProfile = () => {
  const doctorData = [
    {
      avatar:
        "https://previews.123rf.com/images/tomwang/tomwang1510/tomwang151000126/46811098-smiling-young-female-doctor-isolated-on-white.jpg",
      name: "Dr. John Smith",
      specialization: "Cardiologist",
      rating: 4.5,
      reviews: [
        { id: 1, text: "Great doctor!", rating: 5 },
        { id: 2, text: "Very knowledgeable.", rating: 4 },
      ],
    },
    {
      avatar:
        "https://media.istockphoto.com/id/1215049238/vector/doctor-in-mask.jpg?s=612x612&w=0&k=20&c=GrmGirD9WikkJ5yO7TM1MkRB4NbGCNnr3DEplZ0aAWY=",
      name: "Dr. Jane Doe",
      specialization: "Pediatrician",
      rating: 4.2,
      reviews: [
        { id: 1, text: "Excellent pediatrician!", rating: 5 },
        { id: 2, text: "Great with kids.", rating: 4 },
      ],
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI5ToBnBw6WWKdm5J4Om0sqk8H_X7CBCs3I1HY9OdVvS521vxyveoJqZ56J9KjmHYuMWA&usqp=CAU",
      name: "Dr. Sarah Johnson",
      specialization: "Dermatologist",
      rating: 4.8,
      reviews: [
        { id: 1, text: "Fantastic skin specialist!", rating: 5 },
        { id: 2, text: "My skin has never looked better.", rating: 5 },
      ],
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRavxOwtUuZkBLeVt2T4XLonVToztn39X3F7cR-LYj4eJ0cX0izJKooSR9lOy-ZT2UJbU&usqp=CAU",
      name: "Dr. Michael Brown",
      specialization: "Orthopedic Surgeon",
      rating: 4.3,
      reviews: [
        { id: 1, text: "Fixed my knee pain!", rating: 5 },
        { id: 2, text: "Highly recommended for joint issues.", rating: 4 },
      ],
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD0Lsj8Hqp7inLAjkc0P-u-6utSztzdvvyqwPyH4uCtGL7LESgY7vfFBPzfKCwcAoYMWQ&usqp=CAU",
      name: "Dr. Emily Wilson",
      specialization: "Psychiatrist",
      rating: 4.7,
      reviews: [
        { id: 1, text: "A great listener and empathetic.", rating: 5 },
        { id: 2, text: "Helped me through a tough time.", rating: 5 },
      ],
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ0vgRiU6uWPLPc4yWk7FupArypgBsHcJ1hWQw_xpzB_crecxiHs_fqvJjmWqJU5x0Z1M&usqp=CAU",
      name: "Dr. Robert Anderson",
      specialization: "Ophthalmologist",
      rating: 4.1,
      reviews: [
        { id: 1, text: "Excellent eye care.", rating: 5 },
        { id: 2, text: "My vision improved significantly.", rating: 4 },
      ],
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKtbNyPA2yeWLrGvwhq98B9jsBtZIZJx2CGhz0YOUfixg3_HiS62Zk47hND5KrLqbc0io&usqp=CAU",
      name: "Dr. Lisa Davis",
      specialization: "Obstetrician-Gynecologist",
      rating: 4.6,
      reviews: [
        { id: 1, text: "Caring and knowledgeable.", rating: 5 },
        {
          id: 2,
          text: "Made me feel comfortable during appointments.",
          rating: 4,
        },
      ],
    },
    {
      avatar:
        "https://previews.123rf.com/images/rudall30/rudall301404/rudall30140400004/27362133-cute-cartoon-illustration-of-a-female-doctor.jpg",
      name: "Dr. William Wilson",
      specialization: "Dentist",
      rating: 4.4,
      reviews: [
        { id: 1, text: "Great dental care.", rating: 5 },
        { id: 2, text: "No more dental anxiety.", rating: 4 },
      ],
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNEQZesEB9ni4CHv-7TZGAH1USQwqkDXty05NrS_xlzC75LhKeFssYD3mCVZds3_PCUDE&usqp=CAU",
      name: "Dr. Laura Adams",
      specialization: "Neurologist",
      rating: 4.9,
      reviews: [
        { id: 1, text: "Highly skilled in neurology.", rating: 5 },
        { id: 2, text: "Helped me with my migraines.", rating: 5 },
      ],
    },
    {
      avatar:
        "https://previews.123rf.com/images/tomwang/tomwang1510/tomwang151000126/46811098-smiling-young-female-doctor-isolated-on-white.jpg",
      name: "Dr. Richard Taylor",
      specialization: "General Practitioner",
      rating: 4.0,
      reviews: [
        { id: 1, text: "Good overall healthcare.", rating: 4 },
        { id: 2, text: "Friendly and approachable.", rating: 3 },
      ],
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const [appointmentInfo, setAppointmentInfo] = useState({
    doctor: "",
    date: "",
    time: "",
    reason: "",
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    // Handle the appointment submission logic here,
    console.log("Appointment Data:", appointmentInfo);

    // Show a success toast
    toast.success("Appointment scheduled successfully!", {
      position: "top-center",
      autoClose: 3000, // Close the toast after 3 seconds
    });

    // Reset the form after submission
    setAppointmentInfo({
      doctor: "",
      date: "",
      time: "",
      reason: "",
    });
    // Close the modal
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentInfo({
      ...appointmentInfo,
      [name]: value,
    });
  };

  const handleAppointmentClick = (doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true); // Show the modal
  };

  return (
    <>
      {doctorData?.map((doctor, index) => (
        <div key={index}>
          <DoctorData {...doctor} />
          <button
            style={{
              border: "1px solid teal",
              backgroundColor: "teal",
              color: "yellow",
              padding: "10px 20px 10px 20px",
              borderRadius: "4px",
              marginLeft: "20px",
            }}
            onClick={() => handleAppointmentClick(doctor)}
          >
            Appointment
          </button>
        </div>
      ))}

      {/* Modal */}
      {showModal && selectedDoctor && (
        <div className="modal-container">
          <div className="modal">
            <h3>Book an Appointment with {selectedDoctor.name}</h3>
            <form onSubmit={handleAppointmentSubmit}>
              <div>
                <label style={{ color: "teal" }} htmlFor="doctor">
                  Doctor:
                </label>
                <input
                  type="text"
                  id="doctor"
                  name="doctor"
                  value={selectedDoctor.name}
                  readOnly
                />
              </div>
              <div>
                <label style={{ color: "teal" }} htmlFor="date">
                  Date:
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={appointmentInfo.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label style={{ color: "teal" }} htmlFor="time">
                  Time:
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={appointmentInfo.time}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label style={{ color: "teal" }} htmlFor="reason">
                  Reason for Appointment:
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  value={appointmentInfo.reason}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit">Schedule Appointment</button>
            </form>
            <button
              style={{
                border: "1px solid teal",
                backgroundColor: "teal",
                color: "yellow",
                padding: "10px 20px 10px 20px",
                borderRadius: "4px",
                marginTop: "10px",
              }}
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ToastContainer for Toast notifications */}
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
};

export default DoctorProfile;
