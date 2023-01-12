import React from 'react'
import Student from './Student'

function ListStudents(props) {
    const actionAndToggleProps = (studentEditOject) =>{
        props.actionAndTogglePropsApp(studentEditOject);
    }

    const handleDeleteStudent = (id) =>{
       props.handleDeleteStudentProps(id)
    }

    const handleReviewStudent = (statusAndstudentReview) =>{
        props.handleReviewStudentProps(statusAndstudentReview)
    }
    const elemenstListStudent = props.handleListStudentsProps.map((student, index) => {
        return (
            <Student stInfo={student} stt={index} key={student.id} actionAndToggle={actionAndToggleProps} handleDeleteProps={handleDeleteStudent} handleReviewProp={handleReviewStudent}> </Student>
        )
    })


    return (
        <>
            <div className="card-body">
                <h3 className="card-title">Danh sách sinh viên</h3>
                <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Mã sinh viên</th>
                                <th>Tên sinh viên</th>
                                <th>Tuổi</th>
                                <th>Giới tính</th>
                                <th>Địa Chỉ</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {elemenstListStudent}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ListStudents