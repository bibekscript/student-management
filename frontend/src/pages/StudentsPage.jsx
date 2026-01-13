import React, { useState } from "react";
import {
  useGetStudentQuery,
  useCreateStudentMutation,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
} from "../slices/studentApiSlice";

const StudentsPage = () => {
  const { data: students, isLoading, isError, error } = useGetStudentQuery();
  const [createStudent] = useCreateStudentMutation();
  const [updateStudent] = useUpdateStudentMutation();
  const [deleteStudent] = useDeleteStudentMutation();

  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  const handleAddStudent = async (studentData) => {
    try {
      await createStudent(studentData).unwrap();
      setShowForm(false);
    } catch (err) {
      console.error("Failed to add student:", err);
    }
  };

  const handleUpdateStudent = async (studentData) => {
    try {
      await updateStudent({
        id: editingStudent._id || editingStudent.id,
        ...studentData,
      }).unwrap();
      setEditingStudent(null);
      setShowForm(false);
    } catch (err) {
      console.error("Failed to update student:", err);
    }
  };

  const handleDeleteStudent = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await deleteStudent(id).unwrap();
      } catch (err) {
        console.error("Failed to delete student:", err);
      }
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return <div>Error: {error?.data?.message || "Something went wrong"}</div>;

  return (
    <div>
      <h1>Students</h1>
      {/* Your UI here */}
    </div>
  );
};

export default StudentsPage;
