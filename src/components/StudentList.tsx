import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Link, useParams } from "react-router-dom";

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

const StudentDetail: React.FC = () => {
  const { id } = useParams();
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      setStudent(res.data);
    });
  }, [id]);

  if (!student) return <p>Đang tải...</p>;

  return (
    <div className="card detail">
      <h3>{student.name}</h3>
      <p>Email: {student.email}</p>
      <p>Điện thoại: {student.phone}</p>
      <p>Website: {student.website}</p>
      <Link to="/students" className="back-btn">
        ← Quay lại danh sách
      </Link>
    </div>
  );
};

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setStudents(res.data));
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="card">
            <h2>👨‍🎓 Danh sách sinh viên</h2>
            <ul className="list">
              {students.map((s) => (
                <li key={s.id}>
                  <Link to={`/students/${s.id}`}>
                    <strong>{s.name}</strong> <br />
                    <span>{s.email}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        }
      />
      <Route path=":id" element={<StudentDetail />} />
    </Routes>
  );
};

export default StudentList;
