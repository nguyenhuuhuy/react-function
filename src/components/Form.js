import React, { useState, useEffect } from 'react'

function Form(props) {

    const [newStudent, setNewStudent] = useState({
        studentId: "",
        studentName: "",
        age: "",
        gender: false,
        birthDate: "",
        birthPlace: "",
        address: "",
        id: "",
    })

    const closeTap = () => {
        props.handleCloseTapProps(false)
    }

    const clearForm = (e) => {
        e.preventDefault();
        props.handleClearFormProps(false, newStudent);
        setNewStudent('');
    }


    const handleChange = (value) => {
        let nameStudent = value.target.name
        let valueStudent = value.target.value
        setNewStudent({
            ...newStudent,
            [nameStudent]: valueStudent
        })
    }
    // sửa
    const handleUpdate = (e) => {
        e.preventDefault();
        let student = newStudent;

        let studentUpdate = {
            studentId: student.studentId,
            studentName: student.studentName,
            age: student.age,
            gender: student.gender,
            birthDate: student.birthDate,
            birthPlace: student.birthPlace,
            address: student.address,
            id: student.id
        }

        props.handleUpdateProps(false, studentUpdate)

    }
    console.log(newStudent);
    const elementStudent = props.updateStudent;
    useEffect(() => {
        if (elementStudent) {
            setNewStudent(elementStudent);
        }

    }, [elementStudent])


    // hiển thị các nút 
    const actionProps = props.action;

    let elementButton = "";
    if (actionProps.actionName == "UpdateStudent") {
        elementButton = <button type="submit" className="btn btn-primary me-2" onClick={handleUpdate}>Sửa</button>
    } else if (actionProps.actionName == "CreateStudent") {
        elementButton = <button type="submit" className="btn btn-primary me-2" onClick={clearForm}>Thêm</button>
    } else if (actionProps.actionName == "reviewStudent"){
        elementButton = ""
    }



    return (
        <>
            <div className="card">
                <i className="fa-solid fa-xmark" id="close_tap" onClick={closeTap}></i>
                <div className="card-body">
                    <h3 className="card-title">Thông tin sinh viên</h3>
                    <form className="form-sample">
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" name="studentId" onChange={(e) => handleChange(e)} value={newStudent.studentId} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" name="studentName" onChange={(e) => handleChange(e)} value={newStudent.studentName} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tuổi</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" name="age" onChange={(e) => handleChange(e)} value={newStudent.age} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Giới tính</label>
                            <div className="col-sm-9">
                                <select className="form-select" name="gender" value={newStudent.gender} onChange={(e) => handleChange(e)}>
                                    <option value=""></option>

                                    <option value={true}>Nam</option>
                                    <option value={false}>Nữ</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Ngày sinh</label>
                            <div className="col-sm-9">
                                <input type={"date"} className="form-control" placeholder="dd/mm/yyyy" name="birthDate" onChange={(e) => handleChange(e)} value={newStudent.birthDate} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Nơi sinh</label>
                            <div className="col-sm-9">
                                <select className="form-control" name="birthPlace" onChange={(e) => handleChange(e)} value={newStudent.birthPlace}>
                                    <option value={''}>Chọn Nơi Sinh</option>
                                    <option value={'HN'}>Hà Nội</option>
                                    <option value={'HCM'}>TP. Hồ Chí Minh</option>
                                    <option value={'ĐN'}>Đà Nẵng</option>
                                    <option value={'QN'}>Quảng Ninh</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Địa chỉ</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" name="address" onChange={(e) => handleChange(e)} value={newStudent.address} />
                            </div>
                        </div>
                        {elementButton}
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form