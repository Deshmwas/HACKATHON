// import React, { useState } from 'react';
// import '../styles/Register.scss';
// import hackathonImage from '../images/hero-background.png'; // Import the image

// function Register() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form submission logic here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="register-container">
//       <div className="side-content">
//         <img
//           src={hackathonImage} // Use the imported image
//           alt="Hackathon event"
//           className="side-content__image"
//         />
//         <p className="side-content__text">
//         Welcome to our Hackathon Management System! We are excited to have you join us on this thrilling journey of innovation, collaboration, and creativity. Our platform is designed to make your hackathon experience seamless and enjoyable, providing you with all the tools you need to connect, collaborate, and compete with like-minded individuals. Register now to become part of an inspiring community where your ideas can come to life and make a real impact. Let's hack the future together
//         </p>
//       </div>
//       <div className="register-form">
//         <h1>Register</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="firstName">First Name</label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="lastName">Last Name</label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="confirmPassword">Confirm Password</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit" className="btn-submit">
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;



import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import '../styles/Register.scss';
import hackathonImage from '../images/hero-background.png'; // Import the image

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/myapp/users/register/', {
        username: formData.email,
        password: formData.password,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email
      });
      console.log('Registration successful:', response.data);
      setSuccess('Registration successful!');
      setError(null);
    } catch (error) {
      // Check if error response exists
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
  
        // Customize error messages based on response data
        if (error.response.status === 400) {
          // Example: Handle specific validation errors
          const errors = error.response.data.errors; // Adjust based on your backend response structure
          if (errors) {
            setError(Object.values(errors).join(', ')); // Display all validation errors
          } else {
            setError('Bad request. Please check your input.');
          }
        } else {
          setError('Registration failed. Please try again.');
        }
      } else if (error.request) {
        // Request was made but no response received
        console.error('Error request data:', error.request);
        setError('No response from server. Please try again later.');
      } else {
        // Something happened while setting up the request
        console.error('Error message:', error.message);
        setError('An error occurred. Please try again.');
      }
      setSuccess(null);
    }
  };

  return (
    <div className="register-container">
      <div className="side-content">
        <img
          src={hackathonImage} // Use the imported image
          alt="Hackathon event"
          className="side-content__image"
        />
        <p className="side-content__text">
          Welcome to our Hackathon Management System! We are excited to have you join us on this thrilling journey of innovation, collaboration, and creativity. Our platform is designed to make your hackathon experience seamless and enjoyable, providing you with all the tools you need to connect, collaborate, and compete with like-minded individuals. Register now to become part of an inspiring community where your ideas can come to life and make a real impact. Let's hack the future together!
        </p>
      </div>
      <div className="register-form">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Register
          </button>
        </form>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
      </div>
    </div>
  );
}

export default Register;
