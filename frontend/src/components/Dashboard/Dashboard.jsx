import { useState } from "react";
import AuthService from "../../services/AuthService";
import Layout from "../Layouts/Layout/Layout";

const Dashboard = () => {

    const userData = AuthService.getUserData();
    const [name, setName] = useState(userData.name);
    const [mobile, setMobile] = useState(userData.mobile);
    const [email, setEmail] = useState(userData.email);
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(
      `${import.meta.env.VITE_API_BE_URL}/images/${userData.image}`
    );




    const [errors, setErrors] = useState({});

    const handleSubmit = async (event) => {
      event.preventDefault();
      // Handle form submission logic here
    }

  return (
    <Layout>
      <div className="bg-gray-900 text-white h-screen p-4">
        <div className="userImage flex justify-center mb-4">
          <img
            src={imageUrl}
            alt="User Profile"
            height={150}
            className="h-[150px] w-[150px] object-contain"
          />
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 
              rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Mobile */}
          <div>
            <label className="block mb-1 font-medium">Mobile Number</label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 
              rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 
              rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Image Upload */}
          <div>
            <label className="block mb-1 font-medium">Profile Image</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full text-gray-300 bg-gray-800 border border-gray-700 
              rounded-lg p-2"
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">{errors.image}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold 
             hover:bg-blue-700 transition"
          >
            Update Profile
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Dashboard;
  