import {  Link }from "react-router-dom";
function SideBar() {
    return (
      <>
        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="shadow-2xl shadow-gray-900 h-full px-3 py-4 overflow-y-auto bg-gray-800 dark:bg-gray-800">
                <div className="flex items-center ps-2.5 mb-5">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ">
                    <img src="/logo.png" className=" w-14 h-14 rounded-full shadow-lg cursor-pointer shadow-blue-500 " alt="PackIt" />
                    </span>
                </div>
                <ul className="space-y-2 font-medium">  
                    <li>
                        <Link to={"/"}>
                            <label className="cursor-pointer flex items-center p-4 text-white rounded-lg dark:text-white hover:bg-blue-600 dark:hover:bg-blue-600 group transition-colors duration-300">
                                <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
                                    <path
                                    d="M946.5 505L534.6 93.4a31.93 31.93 0 00-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z" />
                                </svg>
                                    <span className="ms-3">Home</span>
                            </label>
                        </Link>
                    </li>
                    <hr></hr>
                    <li>
                        <Link to={"/CreateLink"}>
                            <label className="cursor-pointer flex items-center p-4 text-white rounded-lg dark:text-white hover:bg-blue-600 dark:hover:bg-blue-600 group transition-colors duration-300">
                                <svg viewBox="0 0 16 16" fill="currentColor" height="1em" width="1em">
                                    <path
                                    fill="currentColor"
                                    d="M6.879 9.934a.81.81 0 01-.575-.238 3.818 3.818 0 010-5.392l3-3C10.024.584 10.982.187 12 .187s1.976.397 2.696 1.117a3.818 3.818 0 010 5.392l-1.371 1.371a.813.813 0 01-1.149-1.149l1.371-1.371A2.19 2.19 0 0012 1.812c-.584 0-1.134.228-1.547.641l-3 3a2.19 2.19 0 000 3.094.813.813 0 01-.575 1.387z"
                                    />
                                    <path
                                    fill="currentColor"
                                    d="M4 15.813a3.789 3.789 0 01-2.696-1.117 3.818 3.818 0 010-5.392l1.371-1.371a.813.813 0 011.149 1.149l-1.371 1.371A2.19 2.19 0 004 14.188c.585 0 1.134-.228 1.547-.641l3-3a2.19 2.19 0 000-3.094.813.813 0 011.149-1.149 3.818 3.818 0 010 5.392l-3 3A3.789 3.789 0 014 15.813z"
                                    />
                                </svg>
                                <span className="ms-3">Create Link</span>
                            </label>
                        </Link>
                    </li>
                    <hr></hr>
                    <li>
                        <label className="cursor-pointer flex items-center p-4 text-white rounded-lg dark:text-white hover:bg-blue-600 dark:hover:bg-blue-600 group transition-colors duration-300">
                            <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
                                <path d="M2 5.27L3.28 4 20 20.72 18.73 22l-4.83-4.83-2.61 2.61a5.003 5.003 0 01-7.07 0 5.003 5.003 0 010-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 000 4.24 2.982 2.982 0 004.24 0l2.62-2.6-1.62-1.61c-.01.24-.11.49-.29.68-.39.39-1.03.39-1.42 0A4.973 4.973 0 017.72 11L2 5.27m10.71-1.05a5.003 5.003 0 017.07 0 5.003 5.003 0 010 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 000-4.24 2.982 2.982 0 00-4.24 0l-3.33 3.33-1.41-1.42 3.33-3.33m.7 4.95c.39-.39 1.03-.39 1.42 0a4.999 4.999 0 011.23 5.06l-1.78-1.77c-.05-.68-.34-1.35-.87-1.87a.973.973 0 010-1.42z" />
                            </svg>
                                <span className="ms-3">Link Management</span>
                        </label>
                    </li>
                    <hr></hr>
                    <li>
                        <label className="cursor-pointer flex items-center p-4 text-white rounded-lg dark:text-white hover:bg-blue-600 dark:hover:bg-blue-600 group transition-colors duration-300">
                            <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
                                <path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z" />
                            </svg>
                                <span className="ms-3">Analysis</span>
                        </label>
                    </li>
                    <hr></hr>
                    <li>
                        <label className="cursor-pointer flex items-center ml-2 absolute inset-x-0 bottom-0 h-12 flex items-center p-4 mb-2 text-white rounded-lg dark:text-white hover:bg-blue-600 dark:hover:bg-blue-600 group transition-colors duration-300">
                            <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
                                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 16h-2v-2h2v2zm.976-4.885c-.196.158-.385.309-.535.459-.408.407-.44.777-.441.793v.133h-2v-.167c0-.118.029-1.177 1.026-2.174.195-.195.437-.393.691-.599.734-.595 1.216-1.029 1.216-1.627a1.934 1.934 0 00-3.867.001h-2C8.066 7.765 9.831 6 12 6s3.934 1.765 3.934 3.934c0 1.597-1.179 2.55-1.958 3.181z" />
                            </svg>
                            <span className="ms-3">Help</span>
                        </label>
                    </li>
                </ul>
            </div>
        </aside>
      </>
    );
  }
  
  
  export default SideBar
  