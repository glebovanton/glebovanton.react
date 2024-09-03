import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [form, setForm] = useState({ contacts: '', message: '' });

  const cService = 'U2FsdGVkX18bpdv9cDrGIDGyOoStaHcwlXYvTRQYKc4=';
  const cTemplate = 'U2FsdGVkX1/uIol/OVJZ8XmiTVavjKkAEzG2bp745vLI/ZdZtsNt9ZeSuzSTAA5I';
  const cPKey = 'U2FsdGVkX19JVBoOcDoXTf9PSi79MSL1MDc2BOlvLaHVk42VqrkMziSI0A+sv7Hd';

  function getString(string: string): string {
    const cKey = '80293905354';
    return CryptoJS.AES.decrypt(string, cKey).toString(CryptoJS.enc.Utf8);
  }

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        getString(cService),
        getString(cTemplate),
        { contacts: form.contacts, message: form.message },
        {
          publicKey: getString(cPKey),
        }
      )
      .then(
        () => {
          setForm({ contacts: '', message: '' });
          toast.success('Your message has been sent.');
        },
        error => {
          toast.error("Your message hasn't been sent.");
          console.error('FAILED...', error);
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section
        id="contact"
        className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
        style={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-medium capitalize mb-8 text-center">Contact me</h2>
        <p className="text-gray-700 -mt-6 dark:text-white/80">
          Please contact me directly at
          {' '}
          <a className="underline" href="mailto:workglebov@gmail.com">
            workglebov@gmail.com
          </a>
          {' '}
          or through this form.
        </p>
        <form className="mt-10 flex flex-col dark:text-black" onSubmit={sendEmail}>
          <input
            value={form.contacts}
            onChange={handleChange}
            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            type="email"
            maxLength={500}
            placeholder="Your email"
            name="contacts"
          />
          <textarea
            value={form.message}
            onChange={handleChange}
            className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <button
            type="submit"
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
          >
            Submit
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
              />
            </svg>
          </button>
        </form>
      </section>
      <ToastContainer />
    </>
  );
}
