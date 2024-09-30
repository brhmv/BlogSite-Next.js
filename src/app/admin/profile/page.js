export default function Profile() {
    const user = {
        name: "Allahverdi Ibrahimov",
        email: "allahverdi.ibrahimov04@gmail.com",
        bio: "Software develeoper and It Project Manager",
        skills: ["Sofware Development", "Startup Managing", "Project Managing", "Robots"],
        location: "Baku, Azerbaijan",
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-100 to-indigo-100 shadow-lg rounded-lg transition-all duration-300 ease-in-out hover:shadow-2xl">
            <div className="text-center mb-8">
                <h1 className="text-5xl font-extrabold text-gray-800 hover:text-green-600 transition duration-200">{user.name}</h1>
                <p className="text-gray-600 text-xl mt-2">{user.location}</p>
            </div>
            <div className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 border-b-4 border-green-500 pb-2">Email</h2>
                <p className="text-gray-700 text-lg">{user.email}</p>
            </div>
            <div className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 border-b-4 border-green-500 pb-2">Bio</h2>
                <p className="text-gray-700 text-lg">{user.bio}</p>
            </div>
            <div className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 border-b-4 border-green-500 pb-2">Skills</h2>
                <ul className="grid grid-cols-2 gap-4 mt-2">
                    {user.skills.map((skill, index) => (
                        <li key={index} className="bg-green-300 text-green-900 p-4 rounded-md shadow-lg hover:bg-green-400 transition duration-200">
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
