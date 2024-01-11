import logo from "./Logo (1).png";
import logo1 from "./Logo (2).png";
import logo2 from "./Logo (3).png";
import logo3 from "./Logo (4).png";
import logo4 from "./Logo (5).png";
import logo6 from "./Logo (6).png";
import logo5 from "./Logo 1.png";
import icon from "./icon.png";
import "./client.css";
function Clients() {
  return (
    <div className="client">
      <h1 className="client-heading">Our Clients</h1>
      <p>We have been working with some Fortune 500+ clients</p>
      <div className="client-logo">
        <img src={logo} alt="" />
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
        <img src={logo6} alt="" />
      </div>
      <div className="client-title">
        <h2>Manage your entire community in a single system</h2>
      </div>
      <div className="community">
        <div className="card">
          <img src={icon} alt="" />
          <h3>Membership Organisations</h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="card">
          <img src={icon} alt="" />
          <h3>Membership Organisations</h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="card">
          <img src={icon} alt="" />
          <h3>Membership Organisations</h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
}

export default Clients;
