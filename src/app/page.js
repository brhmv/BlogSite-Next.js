export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 p-10 flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-white mb-6 text-center">
        Elevate Your Productivity
      </h1>
      <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl">
        Discover powerful tools designed to help you manage tasks, collaborate seamlessly, and analyze your progress. Achieve your goals faster and smarter with our app.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mb-10">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-110">
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Organize Tasks</h2>
          <p className="text-gray-400 text-lg">
            Stay on top of your workload by managing tasks effectively and prioritizing what matters most.
          </p>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-110">
          <h2 className="text-3xl font-bold mb-4 text-green-400">Seamless Teamwork</h2>
          <p className="text-gray-400 text-lg">
            Collaborate in real-time, share ideas, and keep your team aligned with minimal effort.
          </p>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-110">
          <h2 className="text-3xl font-bold mb-4 text-purple-400">Analyze Performance</h2>
          <p className="text-gray-400 text-lg">
            Dive into detailed analytics and track your progress to continuously improve efficiency.
          </p>
        </div>
      </div>

    </div>
  );
}
