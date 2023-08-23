import React from 'react'

const studentName= "Tania";

 const Student = ({info, children}) => {
    return (
    <>
    <a href={info.url} target="_blank">
        <h4>{info.name}</h4>
    </a>
    <p>Ex-alumno: {info.isGraduate ? "si" : "no"}</p>
    <p>{children}</p>
    </>

    );
}

export default Student;
