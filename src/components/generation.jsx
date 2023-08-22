import Student from "../components/students/student";
import studentsInfo from "./students/student-info";


export default function Generation() {
    return (
        <>
            <h2>Generation</h2>
            <p>
                En <em>Generation</em> aprendí con pasión,
                Java Dev Jr. fue mi canción.
                Bootcamp brillante, conocimientos al alza,
                <strong>Generation MX</strong>, ¡mi ruta en casa!
            </p>
            <h4 id="subtitle">Participantes</h4>
            {studentsInfo.map(studentsInfo => <Student info={studentsInfo}/>)}
        </>
    );

}