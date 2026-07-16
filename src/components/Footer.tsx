import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer" className='border-gray-800 border-t-2'>
            <div className="mx-auto max-w-7xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="flex md:items-center flex-col md:flex-row justify-between gap-10">
                    <img src="./qrc-logo-white.png" alt="qrc logo" className="h-20 w-fit" />
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
                            <li><Link to="/help" className="text-gray-400 transition hover:text-primary/80">
                                Help Center
                            </Link></li>
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
                                href="https://wa.me/9779744700704?text=I'm%20interested%20in%20your%20service"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:opacity-75"
                            >
                                <span className="sr-only">Whats App</span>
                                <svg width="35px" height="35px" viewBox="0 0 24 24" id="meteor-icon-kit__regular-whatsapp" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M20.5129 3.4866C18.2882 1.24722 15.2597 -0.00837473 12.1032 4.20445e-05C5.54964 4.20445e-05 0.216056 5.33306 0.213776 11.8883C0.210977 13.9746 0.75841 16.0247 1.80085 17.8319L0.114014 23.9932L6.41672 22.34C8.15975 23.2898 10.1131 23.7874 12.0981 23.7874H12.1032C18.6556 23.7874 23.9897 18.4538 23.992 11.8986C24.0022 8.74248 22.7494 5.71347 20.5129 3.4866ZM12.1032 21.7768H12.0992C10.3294 21.7776 8.59195 21.3025 7.06888 20.4012L6.70803 20.1874L2.96836 21.1685L3.96713 17.52L3.73169 17.1461C2.74331 15.5709 2.22039 13.7484 2.22328 11.8889C2.22328 6.44185 6.65615 2.00783 12.1072 2.00783C14.7284 2.00934 17.2417 3.05207 19.0941 4.90662C20.9465 6.76117 21.9863 9.27564 21.9848 11.8969C21.9825 17.3456 17.5496 21.7768 12.1032 21.7768ZM17.5234 14.3755C17.2264 14.2267 15.7659 13.5085 15.4934 13.4064C15.2209 13.3044 15.0231 13.2576 14.8253 13.5552C14.6275 13.8528 14.058 14.5215 13.8847 14.7199C13.7114 14.9182 13.5381 14.9427 13.241 14.794C12.944 14.6452 11.9869 14.3316 10.8519 13.3198C9.96884 12.5319 9.36969 11.5594 9.19867 11.2618C9.02765 10.9642 9.18043 10.8057 9.32922 10.6552C9.46261 10.5224 9.62622 10.3086 9.77444 10.1348C9.92266 9.9609 9.97283 9.83776 10.0714 9.63938C10.1701 9.44099 10.121 9.26769 10.0469 9.1189C9.97283 8.97011 9.37824 7.50788 9.13083 6.9133C8.88969 6.3341 8.64513 6.4122 8.46271 6.40023C8.29169 6.39168 8.09102 6.38997 7.89264 6.38997C7.58822 6.39793 7.30097 6.53267 7.10024 6.76166C6.82831 7.05923 6.061 7.77752 6.061 9.23976C6.061 10.702 7.12532 12.1146 7.27354 12.313C7.42176 12.5114 9.36855 15.5117 12.3472 16.7989C12.9004 17.0375 13.4657 17.2468 14.0409 17.426C14.7523 17.654 15.3999 17.6204 15.9118 17.544C16.4819 17.4585 17.6694 16.8251 17.9173 16.1313C18.1653 15.4376 18.1648 14.8424 18.0884 14.7187C18.012 14.595 17.8204 14.5266 17.5234 14.3778V14.3755Z" fill="#ffffff"></path></g></svg>
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:qrcodes.info@gmail.com"
                                rel="noreferrer"
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