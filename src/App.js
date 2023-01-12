import './App.css';
import Control from './components/Control';
import Form from './components/Form';
import ListStudents from './components/ListStudents';
import { useState, useEffect } from 'react';

function App() {
  const [statusAndActionName, setStatusAndActionName] = useState('');
  const [listStudents, setListStudents] = useState([]);
  const [studentUpdate, setStudentUpdate] = useState('');
  const [searchStudent, setSearchStudent] = useState('')
  const handleActionAndToggle = (statusAndActionName) => {

    setStatusAndActionName(statusAndActionName)
  }
  // tắt form khi ấn creat thì sẽ có thông tin student
  const handleClearForm = (status, newStudentsProp) => {
    setStatusAndActionName(status)
    setListStudents([...listStudents, { ...newStudentsProp, id: listStudents.length + 1 }])
  }

  // hàm truyền từ student lưu lên app để sửa
  const actionAndToggleUpdate = (studentEditOject) => {
    setStatusAndActionName(studentEditOject);
    setStudentUpdate(studentEditOject.student);
  }

  // tắt 
  const handleCloseTap = (status) => {
    setStatusAndActionName(status)
  }

  // sửa 
  const handleUpdate = (status, studentUpdate) => {
    let newListStudents = listStudents.map(data => {
      if (studentUpdate.id == data.id) {
        return studentUpdate
      } else {
        return data
      }
    })
    // console.log(studentUpdate);
    setListStudents(newListStudents);
    setStatusAndActionName(status);
  }
  // xóa 
  const handleDeleteStudentApp = (id) => {
    const newData = listStudents.filter(element => element.id != id)

    newData.forEach((data, index) => data.id = index + 1);
    setListStudents(newData)
  }

  // hàm truyền từ student lưu lên app để xem

  const handleReviewStudent = (statusAndstudentReview) => {
    setStatusAndActionName(statusAndstudentReview);
    setStudentUpdate(statusAndstudentReview.student)
  }
  // lưu dữ liệu ô input tìm kiếm
  const handleSearcStudents = (value) => {
    setSearchStudent(value);
  }
  // thực hiện tìm kiếm
  // if (searchStudent != '') {
  //   listStudents.forEach((st) => {
  //     if (st.studentName.toLowerCase().includes(searchStudent.toLowerCase())) {
  //       searchList.push(st)
  //     }
  //   })
  // } else {
  //   searchList = [...listStudents]
  // }
  // console.log(searchList);
  // lưu local
  useEffect(() => {
    let localListItem = JSON.parse(localStorage.getItem("lists"))
    if (localListItem == null) {
      localListItem = [];
      localStorage.setItem("lists", JSON.stringify(localListItem))
    } else {

      setListStudents(localListItem)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(listStudents))
  }, [listStudents])


  // hiện form 
  let elementForm;
  if (statusAndActionName.status == true) {

    elementForm = <Form handleClearFormProps={handleClearForm} action={statusAndActionName} updateStudent={studentUpdate} handleUpdateProps={handleUpdate} handleCloseTapProps={handleCloseTap}></Form>
  } else {
    elementForm = ""
  }
  return (
    <div className="App">

      <div>
        <h2 className='h2-header'>Function - React Hook</h2>
      </div>
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            <Control actionAndToggleProp={handleActionAndToggle} handleSearchProp={handleSearcStudents}></Control>
            <ListStudents handleListStudentsProps={listStudents} actionAndTogglePropsApp={actionAndToggleUpdate} handleDeleteStudentProps={handleDeleteStudentApp} handleReviewStudentProps={handleReviewStudent}></ListStudents>
          </div>
        </div>

        <div className="col-5 grid-margin">
          {elementForm}
        </div>
      </div>
    </div>
  );
}

export default App;
