import React from "react";

const studentData = [
  {
    id: 1,
    name: "Nitin",
    marks: 78,
  },
  {
    id: 2,
    name: "Mehak",
    marks: 95,
  },
  {
    id: 3,
    name: "Mehul",
    marks: 65,
  },
  {
    id: 4,
    name: "Nina",
    marks: 56,
  },
];
const MeanMarks = () => {
  return (
    <div className=" text-center">
      <h1 className=" font-bold text-3xl mb-7 p-4">MeanMarks App</h1>
      {studentData.map((student) => (
        <div
          key={student.id}
          className=" p-4 w-[320px] bg-slate-400 mx-auto my-3 rounded-md"
        >
          <h1 className=" font-semibold">Name :- {student.name} </h1>
          <h1 className=" font-semibold">Marks :- {student.marks}</h1>
          <h1 className=" font-bold">
            Certificcate Status :-
            <span>
              {student.marks >= 80 ? (
                <span className=" text-green-900 ml-3">Approved</span>
              ) : (
                <span className=" text-red-600 ml-3">Not Approved</span>
              )}
            </span>
          </h1>
        </div>
      ))}
    </div>
  );
};

export default MeanMarks;
