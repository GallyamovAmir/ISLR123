import React from 'react'
import {
    getAllStudents,
} from "../api/studentApi";


const CRUD = () => {
    const [studentData, setStudentData] = React.useState([])
    React.useEffect(() => {
        getAllStudents().then((data) => {
            setStudentData(data)
        })
    }, [])

    return(
        <table>
            <tbody>
                <tr>
                    <th>№</th>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th>Дата Рождения</th>
                    <th>Номер группы</th>
                </tr>
                {studentData.map((item, index) => (
                    <tr key={index}>
                        <td>{++index}</td>
                        <td>{item.surname}</td>
                        <td>{item.name}</td>
                        <td>{item.lastName}</td>
                        <td>{item.dateOfBirth}</td>
                        <td>{item.groupNumber}</td>
                        <td>
                            <button>
                                Изменить
                            </button>
                        </td>
                        <td>

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CRUD;