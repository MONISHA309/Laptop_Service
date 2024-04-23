import React from 'react';
import { Link } from 'react-router-dom';
import Hardware from '../images/hardware_repair.jpg'; 
import Software from '../images/Software_Troubleshooting.jpg'
import Data from '../images/Data_Recovery.jpg'
import Upgrades from '../images/Upgrades.jpg'
import Maintenance from '../images/Cleaning_and_Maintenance.jpg'
import Networking from '../images/Networking_Solutions.jpg'
import '../css/home.css'

function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="navbar-brand-text">Laptop Services</span>
        </div>
        <div className="navbar-buttons">
          <Link to="/" className="navbar-button">Login</Link>
          <Link to="/sign" className="navbar-button">Sign Up</Link>
          <Link to="/appointment" className="navbar-button">Appointment</Link>
        </div>
      </nav>

      {/* Service information section */}
      <div className="service-info">
        <h2>Our Services</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis velit ac eros feugiat aliquet sit amet nec ex. Donec tincidunt consectetur ultricies.</p>
        <p>Sed vehicula, nunc at pharetra bibendum, mauris metus lacinia mauris, et scelerisque lorem sem at est. Nulla facilisi. Suspendisse auctor lectus ut purus vehicula tempor.</p>
      </div>

      {/* Cards for laptop service types */}
      <div className="service-cards">
        {/* Card 1: Hardware Repair */}
        <a href="">
        <div className="service-card">
          <img src={Hardware} alt="Laptop Service" className="service-card-image" />
          <div className="service-card-body">
            <h3 className="service-card-title">Hardware Repair</h3>
            <p className="service-card-description">Fix hardware issues such as broken screens, faulty keyboards, and more.</p>
          </div>
        </div>
        </a>
        
        {/* Card 2: Software Troubleshooting */}
        <a href="">
        <div className="service-card">
          <img src={Software} alt="Laptop Service" className="service-card-image" />
          <div className="service-card-body">
            <h3 className="service-card-title">Software Troubleshooting</h3>
            <p className="service-card-description">Resolve software issues, including virus removal, system optimization, and more.</p>
          </div>
        </div>
        </a>
        
        {/* Card 3: Data Recovery */}
        <a href="">
        <div className="service-card">
          <img src={Data} alt="Laptop Service" className="service-card-image" />
          <div className="service-card-body">
            <h3 className="service-card-title">Data Recovery</h3>
            <p className="service-card-description">Recover lost or deleted data from your laptop's hard drive or storage devices.</p>
          </div>
        </div>
        </a>


        <a href="">
          {/* Card 4: Upgrades */}
      <div className="service-card">
          <img src={Upgrades} alt="Laptop Service" className="service-card-image" />
          <div className="service-card-body">
            <h3 className="service-card-title">Upgrades</h3>
            <p className="service-card-description">Upgrade your laptop's hardware components for improved performance and functionality.</p>
          </div>
        </div>
        </a>


        <a href="">
          {/* Card 5: Cleaning and Maintenance */}
        <div className="service-card">
          <img src={Maintenance} alt="Laptop Service" className="service-card-image" />
          <div className="service-card-body">
            <h3 className="service-card-title">Cleaning and Maintenance</h3>
            <p className="service-card-description">Clean your laptop internally and externally to prevent overheating and maintain optimal performance.</p>
          </div>
        </div>
        </a>


        <a href="">
          {/* Card 6: Networking Solutions */}
        <div className="service-card">
          <img src={Networking} alt="Laptop Service" className="service-card-image" />
          <div className="service-card-body">
            <h3 className="service-card-title">Networking Solutions</h3>
            <p className="service-card-description">Set up, troubleshoot, and optimize your laptop's network connectivity for seamless internet access.</p>
          </div>
        </div>
        </a>


      </div>


      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Laptop Services. All rights reserved.</p>
      </footer>  


    </div>
  );
}

export default Home;
