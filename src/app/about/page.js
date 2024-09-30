export default function About() {
    const teamMembers = [
        {
            id: 1,
            name: "Alice Johnson",
            role: "CEO",
            bio: "A visionary leader with over a decade of experience, Alice leads the company with a focus on innovative solutions and sustainable growth.",
            email: "alice.johnson@example.com",
            linkedin: "https://linkedin.com/in/alicejohnson",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            name: "Bob Smith",
            role: "CTO",
            bio: "Bob is a tech wizard with a passion for driving the company’s technical vision. He’s constantly seeking out new technologies and methods.",
            email: "bob.smith@example.com",
            linkedin: "https://linkedin.com/in/bobsmith",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: "Charlie Brown",
            role: "Marketing Manager",
            bio: "Charlie’s creative approach to marketing has elevated the brand’s visibility, crafting campaigns that engage and inspire.",
            email: "charlie.brown@example.com",
            linkedin: "https://linkedin.com/in/charliebrown",
            image: "https://via.placeholder.com/150",
        },
    ];

    return (
        <div className="flex flex-col items-center p-8 bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen">
            <h1 className="text-5xl font-bold text-white mb-8">Meet Our Team</h1>
            <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl">
                We are a team of experienced professionals dedicated to innovation and excellence. Get to know the leaders behind our success.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {teamMembers.map((member) => (
                    <div
                        key={member.id}
                        className="p-6 bg-gray-800 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-600"
                        />
                        <h2 className="text-2xl font-bold mb-2 text-center">{member.name}</h2>
                        <h3 className="text-lg text-blue-400 mb-4 text-center">{member.role}</h3>
                        <p className="text-sm text-gray-400 mb-6 text-center">
                            {member.bio}
                        </p>
                        <div className="text-center space-y-2">
                            <p className="text-gray-400">
                                <span className="font-semibold">Email: </span>
                                <a href={`mailto:${member.email}`} className="text-blue-400 underline">{member.email}</a>
                            </p>
                            <p className="text-gray-400">
                                <span className="font-semibold">LinkedIn: </span>
                                <a href={member.linkedin} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">View Profile</a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}