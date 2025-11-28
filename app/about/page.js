import Image from "next/image";

export default function About() {
    return (
        <section className="mt-10">
            <h2
                className="text-4xl font-bold text-center mb-12"
                style={{ color: "#9333EA" }}
            >
                About Me
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* LEFT */}
                <div className="flex justify-center">
                    <Image
                        src="/advaith.png"
                        width={260}
                        height={260}
                        className="rounded-full"
                        alt="Profile"
                    />
                </div>

                {/* RIGHT */}
                <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        A brief introduction to who I am, my background, and my passion for
                        web development. I am driven by creating intuitive and beautiful user
                        experiences.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        I’m Advaith N A, an MCA student and a motivated developer with a strong foundation in web development, problem-solving, and modern software technologies. I enjoy building interactive and user-friendly applications using tools like Django, Next.js, React, and SQL databases.
                        I love learning new technologies, experimenting through real-world projects, and continuously improving my skills to become a full-stack developer.
                    </p>

                    <hr className="my-6 border-gray-300" />

                    <div className="grid grid-cols-2 text-sm gap-y-3">
                        <p className="text-gray-600">Name:</p>
                        <p className="font-medium">Advaith N A</p>

                        <p className="text-gray-600">Education:</p>
                        <p className="font-medium">MCA</p>

                        <p className="text-gray-600">Role:</p>
                        <p className="font-medium">Junior Developer</p>

                        <p className="text-gray-600">Interests:</p>
                        <p className="font-medium">Web Development, Front end development</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
