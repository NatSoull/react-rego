import Course from "./Course";

const CourseGroup = () => {
  const courses = [
    {
      id: 1,
      title: "Web Dev Foundation",
      student: 10,
    },
    {
      id: 2,
      title: "Special Web Design",
      student: 7,
    },
    {
      id: 3,
      title: "Basic UI Design",
      student: 0,
    },
    {
      id: 4,
      title: "Premium UI Design",
      student: 5,
    },
    {
        id: 5,
        title: "Web Application Development",
        student: 0
    }
  ];

  return (
    <div>
      {courses.map(({id , title , student}) => (
        <Course key={id} title={title} student={student}/>
      ))}
    </div>
  );
};

export default CourseGroup;
