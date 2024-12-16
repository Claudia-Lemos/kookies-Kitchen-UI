import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      return;
    }

    setError(""); 
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert(`Message sent! Thank you, ${formData.name}.`);
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000); 
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="border rounded p-2 w-full"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="border rounded p-2 w-full"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="border rounded p-2 w-full"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Connect with Us:</h3>
        <p>WhatsApp: <a href="tel:+91XXXXXXXXXX" className="text-indigo-600">+91-XXXXXXXXXX</a></p>
        <p>Twitter: <a href="https://twitter.com/Kookies_Kitchen" className="text-indigo-600">@Kookies_Kitchen</a></p>
        <p>Instagram: <a href="https://instagram.com/Kookies_Kitchen" className="text-indigo-600">@Kookies_Kitchen</a></p>
      </div>
    </div>
  );
};

export default Contact;
