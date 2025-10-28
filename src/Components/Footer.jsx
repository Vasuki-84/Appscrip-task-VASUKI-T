import React, { useState } from "react";
import "./Footer.css";
import { Mail, Instagram, Linkedin, ChevronDown, ChevronUp } from "lucide-react";

function Footer() {
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="footer">
      {/* --- Newsletter Section --- */}
      <div className="newsletter">
        <div className="newsletter-text">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
        </div>

        <form className="newsletter-form">
          <input type="email" placeholder="Enter your e-mail..." />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>

      <hr className="divider" />

      {/* --- Footer Content (Desktop) --- */}
      <div className="footer-content desktop-footer">
        <div className="footer-col">
          <h4>mëttä muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h4 className="currency-title">CURRENCY</h4>
          <div className="currency">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
              alt="US flag"
            />
            <span>USD</span>
          </div>
          <small>
            Transactions will be completed in Euros and a currency reference is available on hover.
          </small>
        </div>

        <div className="footer-col">
          <h4>FOLLOW US</h4>
          <div className="socials">
            <Instagram size={18} />
            <Linkedin size={18} />
          </div>

          <h4 className="accepts">mëttä muse ACCEPTS</h4>
          <div className="payment-logos">
            <img
              src="https://i.pinimg.com/1200x/e1/38/b7/e138b7ed5f21ba151bcc6fd2a875fe80.jpg"
              alt="GPay"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Mastercard-logo.png"
              alt="Mastercard"
            />
            <img
              src="https://i.pinimg.com/736x/10/4f/24/104f249d8b4824276ed9f2892a8fdb6e.jpg"
              alt="Amex"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_Pay_logo.svg"
              alt="Apple Pay"
            />
            <img
              src="https://i.pinimg.com/736x/10/4f/24/104f249d8b4824276ed9f2892a8fdb6e.jpg"
              alt="Pay"
            />
          </div>
        </div>
      </div>

      {/* --- Collapsible Mobile Footer --- */}
      <div className="mobile-footer">
        {[
          {
            title: "mëttä muse",
            items: [
              "About Us",
              "Stories",
              "Artisans",
              "Boutiques",
              "Contact Us",
              "EU Compliances Docs",
            ],
          },
          {
            title: "QUICK LINKS",
            items: [
              "Orders & Shipping",
              "Join/Login as a Seller",
              "Payment & Pricing",
              "Return & Refunds",
              "FAQs",
              "Privacy Policy",
              "Terms & Conditions",
            ],
          },
          { title: "FOLLOW US", items: ["Instagram", "LinkedIn"] },
        ].map((section, index) => (
          <div key={index} className="mobile-section">
            <button
              onClick={() => toggleSection(section.title)}
              className="mobile-section-header"
            >
              {section.title}
              {openSection === section.title ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>
            {openSection === section.title && (
              <ul className="mobile-section-list">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <hr className="divider" />

      {/* --- Bottom Copyright --- */}
      <div className="footer-bottom">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
