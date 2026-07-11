import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer" className='border-gray-800 border-t-2'>
            <div className="mx-auto max-w-7xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="flex md:items-center flex-col md:flex-row justify-between gap-10">
                    <img src="./qrc-logo-white.png" alt="qrc logo" className="h-20" />
                    <div>
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Company
                        </h2>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li><a className="text-gray-400 transition hover:text-primary/80" href="#about">About Us</a></li>
                            <li><a className="text-gray-400 transition hover:text-primary/80" href="#services">Services</a></li>
                            <li><a className="text-gray-400 transition hover:text-primary/80" href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Support
                        </h2>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li><a className="text-gray-400 transition hover:text-primary/80" href="/help">Help Center</a></li>
                            <li><Link
                                    to="/privacy"
                                    className="text-gray-400 transition hover:text-primary/80">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="text-gray-400 transition hover:text-primary/80">
                                Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
                        <li>
                            <a
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:opacity-75"
                            >
                                <span className="sr-only">LinkedIn</span>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="#ffffff"></path> <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="#ffffff"></path> <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#ffffff"></path> </g></svg>                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:opacity-75"
                            >
                                <span className="sr-only">Email</span>
                                <svg
                                    height="35px"
                                    width="35px"
                                    version="1.1"
                                    id="_x32_"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 512 512"
                                    xmlSpace="preserve"
                                    fill="#000000"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <style
                                            type="text/css"
                                            dangerouslySetInnerHTML={{ __html: " .st0{fill:#ffffff;} " }}
                                        />{" "}
                                        <g>
                                            {" "}
                                            <path
                                                className="st0"
                                                d="M66.734,401.582c-5.902,0-11.421-1.551-16.135-4.277l139.049-121.182l12.979,11.294 c10.863,9.44,24.46,14.22,37.93,14.22c13.536,0,27.133-4.78,37.996-14.22l12.973-11.294l47.074,41.038 c5.324-8.971,11.939-17.054,19.613-24.038l-43.093-37.547L446.977,140.54v127.084c12.26,2.236,23.756,6.62,34.136,12.75V124.834 c0-4.404-0.43-8.762-1.236-12.979c-2.175-10.925-7.016-20.922-13.778-29.181c-1.43-1.8-2.921-3.411-4.54-5.022 c-11.978-12.046-28.804-19.56-47.182-19.56H66.734c-18.377,0-35.136,7.514-47.182,19.56c-1.612,1.611-3.102,3.222-4.532,5.022 c-6.768,8.259-11.609,18.256-13.717,29.181C0.43,116.072,0,120.43,0,124.834v244.162c0,9.367,1.987,18.371,5.526,26.502 c3.283,7.762,8.131,14.785,14.026,20.673c1.491,1.491,2.981,2.86,4.593,4.224c11.549,9.561,26.454,15.336,42.589,15.336h280.481 c-8.118-10.032-14.436-21.567-18.412-34.15H66.734z M43.697,101.797c5.962-5.956,13.973-9.561,23.037-9.561h347.645 c9.065,0,17.142,3.606,23.037,9.561c1.047,1.061,2.042,2.243,2.921,3.418L258.128,264.017c-5.029,4.405-11.24,6.581-17.571,6.581 c-6.271,0-12.476-2.176-17.572-6.581L40.85,105.148C41.656,103.973,42.65,102.858,43.697,101.797z M34.136,368.997V140.479 L166,255.51L34.203,370.42C34.136,369.984,34.136,369.494,34.136,368.997z"
                                            />{" "}
                                            <path
                                                className="st0"
                                                d="M428.285,286.484c-46.235,0-83.702,37.48-83.702,83.715c0,46.228,37.467,83.708,83.702,83.708 c46.242,0,83.715-37.48,83.715-83.708C512,323.963,474.527,286.484,428.285,286.484z M441.23,410.236h-20.331v-56.421h-0.242 l-14.744,6.963l-3.076-17.82l20.654-9.441h17.74V410.236z"
                                            />{" "}
                                        </g>{" "}
                                    </g>
                                </svg>

                            </a>
                        </li>
                    </ul>
                </div>

                <p className="text-xs text-gray-500">
                    © 2026. QR Coders. All rights reserved.
                </p>
            </div>
        </footer>

    )
}

export default Footer