import React from "react";
import Layout from "../Layouts/Layout/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div className="bg-gray-900 text-white h-screen p-4">
        <h3 className="text-2xl font-bold mb-4">Dashboard</h3>
        <p>Welcome to your dashboard! Here you can manage your account and view your data.</p>
      </div>
    </Layout>
  );
};

export default Dashboard;
  