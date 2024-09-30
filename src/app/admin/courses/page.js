export default function Courses() {
    const courses = [
        { id: 1, title: "Getting Started with Python", description: "Dive into Python programming, covering essential data types, control structures, and functions to kickstart your coding journey.", instructor: "Evelyn Carter" },
        { id: 2, title: "React Web Development Bootcamp", description: "Master the art of building dynamic web applications using React.js and the latest web technologies to enhance user experiences.", instructor: "Liam Wilson" },
        { id: 3, title: "Data Science Fundamentals", description: "Explore the core concepts of data science, including analysis, visualization, and machine learning techniques to uncover insights from data.", instructor: "Sophia Turner" },
        { id: 4, title: "Mobile Development with Flutter", description: "Learn to create beautiful and responsive mobile applications for iOS and Android platforms using Flutter.", instructor: "Lucas Mitchell" },
        { id: 5, title: "Game Development in Unity", description: "Design and develop captivating interactive games with Unity and C#, bringing your ideas to life.", instructor: "Olivia White" },
    ];

    return (
        <div className="max-w-7xl mx-auto p-8 bg-gradient-to-r from-indigo-100 to-pink-100 rounded-lg shadow-lg">
            <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Explore Our Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map(course => (
                    <div key={course.id} className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
                        <h2 className="text-2xl font-bold mb-3 text-gray-800 hover:text-indigo-600 transition duration-200">{course.title}</h2>
                        <p className="text-gray-600 mb-4">{course.description}</p>
                        <p className="text-gray-500 font-medium">Instructor: <span className="text-gray-700">{course.instructor}</span></p>
                    </div>
                ))}
            </div>
        </div>
    );
}