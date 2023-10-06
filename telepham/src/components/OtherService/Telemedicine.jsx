import React, { Component } from "react";
import "../OtherService/Telemedicine.css";
import Footer from "../Footer";

class Telemedicine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      selectedDoctor: null,
      chatMessages: [],
      medicalRecords: null,
    };
  }

  handleAppointment = (selectedDoctor) => {
    const newAppointment = {
      doctor: selectedDoctor,
      date: new Date().toLocaleString(),
    };

    this.setState((prevState) => ({
      appointments: [...prevState.appointments, newAppointment],
      selectedDoctor: selectedDoctor,
    }));

    alert("Appointment scheduled successfully!");
  };

  handleChat = () => {
    const selectedDoctor = this.state.selectedDoctor;
    if (selectedDoctor) {
      alert(`Chat initiated with Dr. ${selectedDoctor}`);
    } else {
      alert("Please select a doctor before starting a chat.");
    }
  };

  handleMedicalRecordsUpload = (file) => {
    this.setState({ medicalRecords: file.name });
    alert(`Medical record "${file.name}" uploaded successfully!`);
  };

  render() {
    const { appointments, chatMessages, medicalRecords } = this.state;

    return (
      <div className="telemedicine-container">
        <h3>Telemedicine Services</h3>
        <AppointmentScheduler handleAppointment={this.handleAppointment} />
        <ChatStarter handleChat={this.handleChat} />
        <MedicalRecordsUploader
          handleMedicalRecordsUpload={this.handleMedicalRecordsUpload}
        />

        <div className="info-section">
          <div>
            <h4>Scheduled Appointments</h4>
            <ul>
              {appointments.map((appointment, index) => (
                <li key={index}>
                  {appointment.doctor} - {appointment.date}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Chat Messages</h4>
            <ul>
              {chatMessages.map((message, index) => (
                <li key={index}>{message}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Medical Records</h4>
            {medicalRecords ? (
              <p>Uploaded: {medicalRecords}</p>
            ) : (
              <p>No medical records uploaded.</p>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const AppointmentScheduler = ({ handleAppointment }) => {
  const scheduleAppointment = () => {
    const selectedDoctor = prompt("Enter the name of the doctor:");
    if (selectedDoctor) {
      handleAppointment(selectedDoctor);
    }
  };

  return (
    <div>
      <h4>Schedule Appointment</h4>
      <button onClick={scheduleAppointment}>Schedule Appointment</button>
    </div>
  );
};

const ChatStarter = ({ handleChat }) => {
  return (
    <div>
      <h4>Start Chat</h4>
      <button onClick={handleChat}>Start Chat</button>
    </div>
  );
};

const MedicalRecordsUploader = ({ handleMedicalRecordsUpload }) => {
  const uploadMedicalRecords = (event) => {
    const file = event.target.files[0];
    handleMedicalRecordsUpload(file);
  };

  return (
    <div>
      <h4>Upload Medical Records</h4>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={uploadMedicalRecords}
      />
    </div>
  );
};

export default Telemedicine;
