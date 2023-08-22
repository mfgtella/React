import React from 'react'

const studentName= "Tania";

 const Student = ({name, url, isGraduate}) => {
    return (
    <>
    <a href={url} target="_blank">
        <h4>{name}</h4>
    </a>
    <p>Ex-alumno: {isGraduate.toString()}</p>
    </>

    );
}

export default Student;
