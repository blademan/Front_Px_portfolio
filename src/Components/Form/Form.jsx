export default function Form() {
  return (
    <div className="py-12 grow md:pt-0">
      <div className="mt-8 max-w-md">
        <form className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="dark:text-D_titleColor text-titleColor">Name</span>
            <input
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
            />
          </label>
          <label className="block">
            <span className="dark:text-D_titleColor text-titleColor">Email</span>
            <input
              type="email"
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
            />
          </label>

          <label className="block">
            <span className="dark:text-D_titleColor text-titleColor">Message</span>
            <textarea
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

          <button
            type="submit"
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
