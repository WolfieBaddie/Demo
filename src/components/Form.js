import {db} from './Service';
import { useState, useEffect } from 'react';
import './FormAdmin.css';
function FormAdmin(){
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        db.student.toArray().then(items => setStudents(items));
    }, []);

    const clearForm = () => {
        setId(0);
        setName("");
        setAge(0);
    }

    const editData = (id) =>{
        db.student.get(id).then(item => {
            setId(item.id);
            setName(item.name);
            setAge(item.age);
        })
    }

    const deleteData = (id) => {
        db.student.delete(id);
        db.student.toArray().then(items => setStudents(items));
    }

    const save = (id, name, age) => {
        if(id === 0 ){
            db.student.add({ name: name, age: age })
            .then(() => {
                db.student.toArray().then(items => setStudents(items));
            });
        }
        else{
            db.student.update(id, {name: name, age: age})
        }
        db.student.update(id, { name: name, age: age })
        .then(() => {
            db.student.toArray().then(items => setStudents(items));
        });
        clearForm();
    }


    return (
        <>
        <input type="hidden" value={id}></input>


        <div>
            <label>Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)}></input>


        </div>

    <div>
            <label>Age</label>
            <input type="text" value={age} onChange={e => setAge(e.target.value)}></input>


        </div>

        <button onClick={() => save(id, name, age)}>Save</button>

        <table style={{width: 500, marginLeft: 500, marginTop: 25}}>
            <thead>
                <tr>
                <th>STT</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
    {students.map((item, index) => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>
                <button onClick={() => editData(item.id)}>Edit</button>
                <button onClick={() =>deleteData(item.id)}>Delete</button>
            </td>
        </tr>
    ))}
        </tbody>
        </table>

        </>
    );
}

export default FormAdmin;