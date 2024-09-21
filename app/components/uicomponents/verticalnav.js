export default function VerticalNav() {
    return (
      <>
        <div className="h-[calc(100vh)-100px]  bg-[#161616] rounded-lg mb-2.5 flex flex-col items-center">
          {/* Home Button */}
          <button className=" rounded-lg bg-[#212121] w-[92%] h-[45px] mt-4 flex items-center hover:bg-[#333] transition-all duration-300 shadow-lg">
            <div className="ml-5 flex -mt-0.5 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
                width="1.6em"
                height="1.6em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81zM12 3L2 12h3v8h6v-6h2v6h6v-8h3z"
                ></path>
              </svg>
              <p className="medium text-md ml-2 mt-0.5 text-white">Home</p>
            </div>
          </button>
  
          {/* Bookmark Tags */}
          <button className="rounded-lg bg-[#212121] w-[92%] h-[45px] mt-3 flex items-center hover:bg-[#333] transition-all duration-300 shadow-lg">
            <div className="ml-5 flex -mt-0.5 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
                width="1.6em"
                height="1.6em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12zM16 17H5V7h11l3.55 5z"
                ></path>
              </svg>
              <p className="medium text-md ml-2 mt-0.5 text-white">Bookmark Tags</p>
            </div>
          </button>
  
          {/* Calendar */}
          <button className="rounded-lg bg-[#212121] w-[92%] h-[45px] mt-3 flex items-center hover:bg-[#333] transition-all duration-300 shadow-lg">
            <div className="ml-5 flex -mt-0.5 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 18H4V10h16zm0-13H4V5h16z"
                ></path>
              </svg>
              <p className="medium text-md ml-2 mt-0.5 text-white">Calendar</p>
            </div>
          </button>
  
          {/* Drawing Board */}
          <button className="rounded-lg bg-[#212121] w-[92%] h-[45px] mt-3 flex items-center hover:bg-[#333] transition-all duration-300 shadow-lg">
            <div className="ml-5 flex -mt-0.5 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
                width="1.6em"
                height="1.6em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M5 19V5h6v14zm14 0h-6v-7h6zm0-9h-6V5h6z"
                ></path>
              </svg>
              <p className="medium text-md ml-2 mt-0.5 text-white">Drawing Board</p>
            </div>
          </button>
  
          {/* Settings */}
          <button className="rounded-lg bg-[#212121] w-[92%] h-[45px] mt-3 flex items-center hover:bg-[#333] transition-all duration-300 shadow-lg">
            <div className="ml-5 flex -mt-0.5 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
                width="1.6em"
                height="1.6em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.49.49 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.6.6 0 0 0-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1q.09.03.18.03c.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64zm-1.98-1.71c.04.31.05.52.05.73s-.02.43-.05.73l-.14 1.13l.89.7l1.08.84l-.7 1.21l-1.27-.51l-1.04-.42l-.9.68c-.43.32-.84.56-1.25.73l-1.06.43l-.16 1.13l-.2 1.35h-1.4l-.19-1.35l-.16-1.13l-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7l-1.06.43l-1.27.51l-.7-1.21l1.08-.84l.89-.7l-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13l-.89-.7l-1.08-.84l.7-1.21l1.27.51l1.04.42l.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43l.16-1.13l.2-1.35h1.39l.19 1.35l.16 1.13l1.06.43c.43.18.83.41 1.23.71l.91.7l1.06-.43l1.27-.51l.7 1.21l-1.07.85l-.89.7zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"
                ></path>
              </svg>
              <p className="medium text-md ml-2 mt-0.5 text-white">Settings</p>
            </div>
          </button>
          <br />
          <br />
          <br />
        </div>
      </>
    );
  }
  