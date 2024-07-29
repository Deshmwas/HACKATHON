// import React, { useState } from 'react';
// import axios from 'axios';
// import '../styles/Login.scss';
// import hackathonImage from '../images/hero-background.png'; // Import the image

// function Login() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8000/myapp/users/login/', formData);
//       console.log('Login successful:', response.data);
//       // Handle successful login (e.g., store token, redirect)
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setError('Invalid email or password. Please try again.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="side-content">
//         <img
//           src={hackathonImage} // Use the imported image
//           alt="Hackathon event"
//           className="side-content__image"
//         />
//         <p className="side-content__text">
//           Welcome back to our Hackathon Management System! Log in to access your account and continue your journey of innovation, collaboration, and creativity.
//         </p>
//       </div>
//       <div className="login-form">
//         <h1>Login</h1>
//         <form onSubmit={handleSubmit}>
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
//           {error && <p className="error-message">{error}</p>}
//           <button type="submit" className="btn-submit">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;




import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.scss';
import hackathonImage from '../images/hero-background.png'; // Import the image

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/myapp/users/login/', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Login successful:', response.data);
      // Handle successful login (e.g., redirect, save token)
    } catch (error) {
      console.error('Error logging in:', error.response.data);
      // Handle login error (e.g., show error message)
    }
  };

  return (
    <div className="login-container">
      <div className="side-content">
        <img
          src={hackathonImage} // Use the imported image
          alt="Hackathon event"
          className="side-content__image"
        />
        <p className="side-content__text">
          Welcome back! Please login to continue to the Hackathon Management System and explore the exciting opportunities and events we have in store for you.
        </p>
      </div>
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
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
          <button type="submit" className="btn-submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
