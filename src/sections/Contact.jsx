import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';  // <-- Import SweetAlert2

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_oyav3zz',         // your EmailJS service ID
      'template_g2oyr9g',        // your EmailJS template ID
      form.current,
      '3cqMbVjCMkegoGz8g'        // your EmailJS public key
    )
    .then((result) => {
        console.log('Message sent:', result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent',
          text: 'Your message was sent successfully!',
          confirmButtonText: 'OK'
        });
        form.current.reset();
    }, (error) => {
        console.error('Send failed:', error.text);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to send your message. Please try again later.',
          confirmButtonText: 'OK'
        });
    });
  };

  return (
    <section id="contact" className="bg-base-200 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Contact Info Boxes */}
          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-base-100 rounded-xl p-6 shadow-md text-center">
              <FiMail className="mx-auto text-3xl text-secondary mb-3" />
              <h4 className="text-xl font-semibold text-primary mb-1">Email</h4>
              <p>minhazchy101@gmail.com</p>
            </div>

            <div className="bg-base-100 rounded-xl p-6 shadow-md text-center">
              <FiPhone className="mx-auto text-3xl text-secondary mb-3" />
              <h4 className="text-xl font-semibold text-primary mb-1">Phone</h4>
              <p>+880 1763352974</p>
            </div>

            <div className="bg-base-100 rounded-xl p-6 shadow-md text-center">
              <FiMessageSquare className="mx-auto text-3xl text-secondary mb-3" />
              <h4 className="text-xl font-semibold text-primary mb-1">WhatsApp</h4>
              <p>+880 1763352974</p>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="bg-base-100 p-6 rounded-xl shadow-md flex flex-col space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-primary mb-2">Send a Message</h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="input input-bordered w-full"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="input input-bordered w-full"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="5"
              className="textarea textarea-bordered w-full"
            />
            <button type="submit" className="btn btn-primary w-fit self-end">
              Send
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
