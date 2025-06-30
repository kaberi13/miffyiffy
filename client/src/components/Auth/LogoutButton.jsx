import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import LogoutButton from '../Auth/LogoutButton'; // Adjust the import path accordingly

export default function Profile() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get('http://localhost:5000/api/dashboard', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfileData(res.data);
      } catch (error) {
        console.error('Failed to fetch profile data', error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Profile</h1>
      {profileData ? (
        <pre>{JSON.stringify(profileData, null, 2)}</pre>
      ) : (
        <p>Loading profile data...</p>
      )}
      <LogoutButton />
    </div>
  );
}
