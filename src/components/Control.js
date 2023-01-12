import React, { useState } from 'react'

function Control(props) {
    const [searchValue,setSearchValue] = useState('')
    const handleNewStudent = () =>{
        props.actionAndToggleProp({ status: true, actionName: "CreateStudent" });
    }

    // tìm kiềm 
    const handleSearch = (e)=>{
        let value = e.target.value
        setSearchValue({searchValue:value})
    }
    const handleSearchStudents = (e)=>{
        e.preventDefault();
        props.handleSearchProp(searchValue)
    }
    
    return (
        <>
            <div className="card-header">
                <div className="row">
                    <div className="col-3">
                        <button type="button" className="btn btn-primary btn-icon-text" onClick={handleNewStudent}>Thêm mới sinh viên</button>
                    </div>
                    <div className="col-6">
                        <form className="search-form" action="#">
                            <i className="icon-search" />
                            <input type="search" className="form-control" placeholder="Search Here" title="Search here" name="search" onChange={(e)=>handleSearch(e)}/>
                            <button className="btn btn-primary btn-icon-text" onClick={handleSearchStudents}>Tìm kiếm</button>
                        </form>
                    </div>
                    <div className="col-3 d-flex align-items-center">
                        <select className="form-control">
                            <option value=""></option>
                            <option value="studentName-ASC">Tên Tăng Dần</option>
                            <option value="studentName-DESC">Tên Giảm Dần</option>
                            <option value="age-ASC">Tuổi Tăng Dần</option>
                            <option value="age-DESC">Tuổi Giảm Dần</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Control