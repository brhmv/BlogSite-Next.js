export default function Blogs() {
    const blogs = [
        {
            id: 1,
            title: "Exploring the Future of Web Development",
            content: "As technology rapidly evolves, web development is constantly changing. Discover the key trends shaping the future of the web...",
            author: "Alex Thompson",
        },
        {
            id: 2,
            title: "Mastering JavaScript Closures for Better Coding",
            content: "Understanding closures in JavaScript is essential for any developer. Dive deep into this powerful concept to enhance your coding skills...",
            author: "Emily Davis",
        },
        {
            id: 3,
            title: "Why Tailwind CSS is Revolutionizing Design",
            content: "Tailwind CSS introduces a utility-first approach, allowing developers to build responsive designs efficiently and effectively...",
            author: "Robert Brown",
        },
    ];

    return (
        <div className="p-8 bg-gradient-to-r from-blue-200 to-purple-300 rounded-lg shadow-xl">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Latest Insights</h1>
            <div className="space-y-8">
                {blogs.map((blog) => (
                    <div key={blog.id} className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                        <h2 className="text-3xl font-semibold text-gray-800 hover:text-blue-600 transition duration-200">{blog.title}</h2>
                        <p className="text-gray-600 mt-3">{blog.content}</p>
                        <p className="mt-4 text-sm text-gray-500">
                            Written by: <span className="font-semibold text-gray-700">{blog.author}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}