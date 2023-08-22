import React from 'react'

const studentName= "Tania";

 const Student = ({info}) => {
    console.log(info)
    return (
    <>
    <a href={info.url} target="_blank">
        <h4>{info.name}</h4>
    </a>
    <p>Ex-alumno: {info.isGraduate.toString()}</p>
    </>

    );
}

export default Student;
