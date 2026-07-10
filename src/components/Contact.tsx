const Footer = () => {
    return (
        <section id='#footer' className="py-24 relative">
            <div className=''>
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <h2 className="text-primary text-4xl font-bold leading-normal text-center">
                        Get in Touch
                    </h2>
                    <p className='text-gray-300 text-center'>
                        Have a question or an idea you'd like to discuss? Reach out to us through any of the following channels.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-4 mt-10 gap-5">
                        <div>
                            <h6 className="font-semibold text-primary/80">Office Address</h6>
                            <p className="text-gray-400">Narayanghat, Nepal</p>
                        </div>
                        <div>
                            <h6 className="font-semibold text-primary/80">Phone</h6>
                            <p className="text-gray-400">+977-XXXXXXXXXX</p>
                        </div>
                        <div>
                            <h6 className="font-semibold text-primary/80">Email</h6>
                            <p className="text-gray-400">info@yourcompany.com</p>
                        </div>
                        <div>
                            <h6 className="font-semibold text-primary/80">Business Hours</h6>
                            <p className="text-gray-400">Sun – Fri: 9:00 AM – 6:00 PM</p>
                            <p className="text-gray-400">Saturday: Closed</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer