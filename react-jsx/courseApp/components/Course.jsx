const Course = ({ title, student }) => {
  // console.log(props);

  const borderBgClass =
    student === 0 ? "border-red-400 bg-red-100" : " bg-gray-100";

  return (
    student > 0 && (
      <div className={`border-s-4 ${borderBgClass} mb-3 flex gap-2 p-3`}>
        <p>{student}</p>
        <p>{title}</p>
      </div>
    )
  );
};

export default Course;
