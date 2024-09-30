export default function Contact() {
    const contactInfo = [
        {
            id: 1,
            name: "Alex Green",
            email: "alex.green@example.com",
            phone: "(555) 234-7890",
            linkedIn: "https://linkedin.com/in/alexgreen",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            name: "Emily White",
            email: "emily.white@example.com",
            phone: "(555) 678-1234",
            linkedIn: "https://linkedin.com/in/emilywhite",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: "David Black",
            email: "david.black@example.com",
            phone: "(555) 888-9999",
            linkedIn: "https://linkedin.com/in/davidblack",
            image: "https://via.placeholder.com/150",
        },
    ];

    return (
        <div className="flex flex-col items-center p-8 bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen">
            <h1 className="text-5xl font-bold text-white mb-8">Reach Out to Us</h1>
            <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl">
                We are always here to help you! Get in touch with one of our team members and let us know how we can assist you.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {contactInfo.map((contact) => (
                    <div
                        key={contact.id}
                        className="p-6 bg-gray-800 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                    >
                        <img
                            src={contact.image}
                            alt={contact.name}
                            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-600"
                        />
                        <h2 className="text-2xl font-bold mb-2 text-center">{contact.name}</h2>
                        <p className="text-lg text-blue-400 mb-4 text-center">{contact.phone}</p>
                        <p className="text-center mb-6">
                            <a href={`mailto:${contact.email}`} className="text-blue-400 hover:underline block mb-2">
                                {contact.email}
                            </a>
                            <a href={contact.linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                                LinkedIn Profile
                            </a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}