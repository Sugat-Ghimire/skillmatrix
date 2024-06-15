import React from "react";

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  instructor: string;
  imgSrc: string;
}

const CoursePage: React.FC = () => {
  const courses: Course[] = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description: "Learn basics of web development.",
      duration: "6 hours",
      level: "Beginner",
      instructor: "John Doe",
      imgSrc:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Advanced React Techniques",
      description: "Dive deep into advanced React concepts.",
      duration: "8 hours",
      level: "Advanced",
      instructor: "Jane Smith",
      imgSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    },
    {
      id: 3,
      title: "Next.js Essentials And Basics",
      description: "Master Next.js for building modern web applications.",
      duration: "5 hours",
      level: "Intermediate",
      instructor: "Sam Johnson",
      imgSrc: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    },
    {
      id: 4,
      title: "TypeScript Crash Course",
      description: "Get started with TypeScript in just a few hours.",
      duration: "4 hours",
      level: "Beginner",
      instructor: "Alice Brown",
      imgSrc: "https://images.unsplash.com/photo-1502764613149-7f1d229e230f",
    },
  ];

  return (
    <div className="min-h-screen bg-cyan-50 py-10">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Courses Offered
        </h1>

        {/* List of courses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-300 transition duration-200"
            >
              <img
                src={course.imgSrc}
                alt="Image of an instructor"
                className="w-full h-32 object-cover rounded-t-lg mb-8"
                width={500}
                height={700}
              />
              <h2 className="text-xl font-semibold text-gray-900">
                {course.title}
              </h2>
              <p className="text-gray-600 mb-1">{course.description}</p>
              <p className="text-gray-600 mb-1">Duration: {course.duration}</p>
              <p className="text-gray-600 mb-1">Level: {course.level}</p>
              <p className="text-gray-600 mb-3">
                Instructor: {course.instructor}
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
                Enroll
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
