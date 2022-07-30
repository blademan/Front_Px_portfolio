import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Form() {
  const [state, handleSubmit] = useForm('mknewwed');
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="py-12 grow md:pt-0">
      <div className="mt-8 max-w-md">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="dark:text-D_titleColor text-titleColor">Name</span>
            <input
              required
              name="name"
              type="text"
              className="
             dark:text-D_textColor text-textColor
                    mt-1
                    block
                    w-full
                    rounded-md
                    dark:bg-D_inputColor bg-inputColor
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
              placeholder=""
            />{' '}
          </label>
          <label className="block">
            <span className="dark:text-D_titleColor text-titleColor">Email</span>
            <input
              required
              id="email"
              type="email"
              name="email"
              className="      dark:text-D_textColor text-textColor
                    mt-1
                    block
                    w-full
                    rounded-md
                    dark:bg-D_inputColor bg-inputColor
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
              placeholder="john@example.com"
            />{' '}
          </label>
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label className="block">
            <span className="dark:text-D_titleColor text-titleColor">Message</span>
            <textarea
              required
              id="message"
              name="message"
              className=" dark:text-D_textColor text-textColor
                    mt-1
                    block
                    w-full
                    rounded-md
                    dark:bg-D_inputColor bg-inputColor
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
              rows="3"></textarea>
          </label>
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button
            type="submit"
            disabled={state.submitting}
            className="flex space-x-2 mt-8 w-48 px-4 py-4 font-medium
        rounded-md
        text-white hover:bg-firstColorAlt bg-firstColor 
    
    ">
            <span>Send Message</span>
            <i className="uil uil-message button__icon"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
