import React from 'react'

function Student(props) {
    const elementNewStudent = props.stInfo;
    const stt = props.stt;

    const handleUpdate = (student) => {
        props.actionAndToggle({ status: true, actionName: "UpdateStudent", student: student });
    }

    const handleDelete = (id) => {
        props.handleDeleteProps(id)
    }

    const handleReview = (student) => {
        props.handleReviewProp({ status: true, actionName: "reviewStudent", student: student })
    }
    return (
        <>
            <tr>
                <td>{stt + 1}</td>
                <td>{elementNewStudent.studentId}</td>
                <td>{elementNewStudent.studentName}</td>
                <td>{elementNewStudent.age}</td>
                <td>{elementNewStudent.gender.toString() == "true" ? "Nam" : "Nữ"}</td>
                <td>{elementNewStudent.address}</td>
                <td>
                    <div className="template-demo">
                        <button type="button" className="btn btn-danger btn-icon-text" onClick={() => handleReview(elementNewStudent)}>Xem</button>
                        <button type="button" className="btn btn-warning btn-icon-text" onClick={() => handleUpdate(elementNewStudent)}>Sửa</button>
                        <button type="button" className="btn btn-success btn-icon-text" onClick={() => handleDelete(elementNewStudent.id)}>Xóa</button>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default Student