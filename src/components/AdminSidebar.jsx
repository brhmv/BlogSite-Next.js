import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="w-full sm:w-64 bg-gray-900 text-gray-100 p-8  shadow-2xl">
            <h2 className="text-3xl font-extrabold mb-8 text-center text-white tracking-wider border-b border-gray-700 pb-4">
                Admin Panel
            </h2>
            <ul className="space-y-6">
                <li>
                    <Link href="/admin/courses">
                        <span
                            className={`block p-4 text-lg font-bold uppercase tracking-wide rounded-md transition-all duration-300 ${pathname === "/admin/courses"
                                ? "bg-gradient-to-r from-green-400 to-teal-500 text-white shadow-lg hover:shadow-teal-500/50"
                                : "bg-gray-800 hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-600 text-gray-300 hover:text-white hover:shadow-teal-500/50"
                                }`}
                        >
                            Courses
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="/admin/blogs">
                        <span
                            className={`block p-4 text-lg font-bold uppercase tracking-wide rounded-md transition-all duration-300 ${pathname === "/admin/blogs"
                                ? "bg-gradient-to-r from-green-400 to-teal-500 text-white shadow-lg hover:shadow-teal-500/50"
                                : "bg-gray-800 hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-600 text-gray-300 hover:text-white hover:shadow-teal-500/50"
                                }`}
                        >
                            Blogs
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="/admin/profile">
                        <span
                            className={`block p-4 text-lg font-bold uppercase tracking-wide rounded-md transition-all duration-300 ${pathname === "/admin/profile"
                                ? "bg-gradient-to-r from-green-400 to-teal-500 text-white shadow-lg hover:shadow-teal-500/50"
                                : "bg-gray-800 hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-600 text-gray-300 hover:text-white hover:shadow-teal-500/50"
                                }`}
                        >
                            Profile
                        </span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
