import React from "react";

const Contact = () => {
    return (
        <section className="bg-gray-100 text-gray-800 py-16 px-8">
            <h2 className="text-3xl font-bold text-center">Contact Me</h2>
            <form className="mt-8 max-w-lg mx-auto space-y-6">
                <div>
                    <label className="block text-sm font-medium">Name</label>
                    <input
                        type="text"
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                        placeholder="Your Email"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Message</label>
                    <textarea
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                        rows="5"
                        placeholder="Your Message"
                    ></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;
