import React, { useMemo, useState } from "react";
import { Button, Card, Form, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import doctorImg from "../../assets/images/doctor-3.jpg";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import GlobalTable from "../Table/GlobalTable";
import ColumnFilter from "../Table/ColumnFilter";
const DoctorAppointmentList = () => {
  const [patients, setPatients] = useState([
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
    {
      id: 2,
      name: "Maria Sanchez",
      age: 35,
      doctorName: "Dr. Karen Lee",
      department: "Dermatology",
      date: "20 Aug 2023",
      time: "9:00am-10:00am",
      disease: "Eczema",
      img: doctorImg,
    },
  ]);
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Patient Name",
        accessor: "name",
        Cell: ({ row }) => (
          <div className="d-flex align-items-center">
            <img
              src={row.original.img}
              alt=""
              width="30px"
              height="30px"
              style={{ borderRadius: "50%", marginRight: "10px" }}
            />
            <p
              style={{
                fontWeight: "500",
                fontSize: "14px",
                margin: "0",
              }}
            >
              {row.original.name}
            </p>
          </div>
        ),
      },
      {
        Header: "Age",
        accessor: "age",
      },

      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Time",
        accessor: "time",
      },
      {
        Header: "Disease",
        accessor: "disease",
      },
    ],
    []
  );
  const data = useMemo(() => [...patients], [patients]);
  return (
    <>
      <div
        className="w-100 py-5"
        style={{
          backgroundColor: "#f1f5fc",
          padding: "15px",
        }}
      >
        <Card className="w-100" style={{ overflowX: "auto" }}>
          <div
            className="d-flex align-items-center justify-content-between"
            style={{
              borderBottom: "1px solid rgba(0, 0, 0, .1)",
            }}
          >
            <h4 className="p-3">Appointment List</h4>
            {/* <Form className="d-flex">
              <Form.Control
                className="me-2"
                type="date"
                style={{ width: "200px" }}
              />
              <Button variant="secondary">Get</Button>
            </Form> */}
            <NavLink className="p-3" style={{ textDecoration: "none" }}>
              Add Appointment
            </NavLink>
          </div>
          <GlobalTable data={data} columns={columns} />
        </Card>
      </div>
    </>
  );
};

export default DoctorAppointmentList;

{
  /* <div className="px-lg-3 px-sm-2 py-3">
            <Table
              className="table-padding"
              striped
              style={{ borderRadius: "50px" }}
            >
              <thead style={{ backgroundColor: "#009efb" }}>
                <tr style={{ position: "relative" }}>
                  {Categories.map((e, i) => (
                    <th style={{ fontWeight: "500", color: "#fff" }} key={i}>
                      {e}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Patients.map((e, i) => (
                  <tr className="light" key={i}>
                    <td style={{ fontSize: "14px" }}>{e.id}</td>
                    <td className="">
                      <div className="d-flex align-items-center">
                        <img
                          src={e.img}
                          alt=""
                          width="25px"
                          height="25px"
                          style={{ borderRadius: "50%", marginRight: "10px" }}
                        />
                        <p
                          style={{
                            fontWeight: "500",
                            fontSize: "14px",
                            margin: "0",
                          }}
                        >
                          {e.name}
                        </p>
                      </div>
                    </td>
                    <td style={{ fontSize: "14px" }}>{e.age}</td>
                    <td style={{ fontSize: "14px" }}>{e.doctorName}</td>
                    <td style={{ fontSize: "14px" }}>{e.department}</td>
                    <td style={{ fontSize: "14px" }}>{e.date}</td>
                    <td style={{ fontSize: "14px" }}>{e.time}</td>
                    <td style={{ fontSize: "14px" }}>{e.disease}</td>
                    <td>
                      <div className="d-flex">
                        <FaPencilAlt
                          className="me-lg-3 me-sm-2"
                          style={{
                            cursor: "pointer",
                            fontSize: "20px",
                            color: "#009efb",
                            // marginRight: "15px",
                          }}
                        />
                        <FaRegTrashAlt
                          className="me-lg-3 me-sm-2"
                          style={{
                            cursor: "pointer",
                            fontSize: "20px",
                            color: "#d9534f",
                            // marginRight: "15px",
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div> */
}
