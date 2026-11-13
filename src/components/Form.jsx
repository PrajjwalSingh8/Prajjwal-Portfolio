import { useState } from 'react';
import Button from './Button.jsx';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Form() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (status) setStatus('');
  }

  function handleSubmit(event) {
    event.preventDefault();
    setStatus(`Thanks, ${formData.name.trim()}! Your message has been validated. This demo form does not send data to a server.`);
    setFormData(initialForm);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Your name
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required minLength={2} />
        </label>
        <label>
          Email address
          <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
        </label>
      </div>
      <label>
        Subject
        <input name="subject" value={formData.subject} onChange={handleChange} placeholder="What would you like to discuss?" required />
      </label>
      <label>
        Message
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message..." rows="5" required minLength={10} />
      </label>
      <div className="form-bottom">
        <span className="form-hint">All fields are required.</span>
        <Button type="submit">Send message <span aria-hidden="true">↗</span></Button>
      </div>
      {status && <p className="form-success" role="status">{status}</p>}
    </form>
  );
}
