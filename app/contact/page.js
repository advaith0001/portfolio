export default function Contact() {
    return (
        <section className="mt-10 max-w-3xl mx-auto text-center">

            {/* Title */}
            <h2
                className="text-4xl font-bold mb-4"
                style={{ color: "#9333EA" }}
            >
                Contact Me
            </h2>

            <p className="text-gray-600 mb-10">
                Feel free to reach out. I'd love to hear from you and
                discuss how we can collaborate.
            </p>

            {/* CONTACT FORM */}
            <form className="space-y-6 text-left">

                {/* Name */}
                <div>
                    <label className="text-sm mb-1 block text-gray-800">Name</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-3 rounded-md"
                        placeholder="Enter your name"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="text-sm mb-1 block text-gray-800">Email</label>
                    <input
                        type="email"
                        className="w-full border border-gray-300 p-3 rounded-md"
                        placeholder="Enter your email address"
                    />
                </div>

                {/* Message */}
                <div>
                    <label className="text-sm mb-1 block text-gray-800">Message</label>
                    <textarea
                        className="w-full border border-gray-300 p-3 rounded-md h-32"
                        placeholder="Enter your message here"
                    ></textarea>
                </div>

                {/* BUTTON */}
                <button
                    className="w-full py-3 rounded-md font-medium text-white"
                    style={{ backgroundColor: "#9333EA" }}
                >
                    Send Message
                </button>
            </form>

            {/* DIVIDER */}
            <hr className="my-12 border-gray-200" />

            {/* CONTACT DETAILS */}
            <h3 className="font-bold text-lg mb-4 text-gray-900">
                Contact Details
            </h3>

            <div className="flex justify-center gap-10 text-gray-700 text-sm">
                <span>advaith0001@gmail.com</span>
                <a
                    href="https://github.com/advaith0001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/advaith-n-a-761b82264/" className="hover:underline">LinkedIn</a>
            </div>
        </section>
    );
}
