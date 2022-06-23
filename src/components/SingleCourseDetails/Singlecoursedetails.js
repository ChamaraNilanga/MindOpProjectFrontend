import React , {useEffect,useState} from "react";
import axios from "axios";
import "./Singlecoursedetails.css";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";

function Singlecoursedetails({courses,role,user}){

const reqtoenroll=(modid,sid)=>{
    console.log(sid);
    console.log(modid);
    if(window.confirm('Are you sure you want to request to enroll?')){
    axios
    .post(`http://localhost:8070/coursedetails/studentenroll/${sid}&${modid}`,null)
    .then((res) => {
      console.log('Success')
      
      alert(res.data)
    })
}}
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage=8;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(courses.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(courses.length / itemsPerPage));
    }, [itemOffset, itemsPerPage ,courses]);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % courses.length;
        console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset); 
    }
    
    return(
        <div className="singlecourse">
           {currentItems.map(course=>{
                
                return(
                    <div>
                        <h3 >{course.modname}</h3>
                        <h3 key={course.modid}>{course.modcode}</h3>
                        <p>{course.descrip}</p>
                        <p>Start : {course.sdate}</p>
                        <p>End : {course.enddate}</p>
                        <p>Teacher : {course.teacherid}</p>
                        <text>{role==='s' ? 
                            <div><p>Price: Rs{course.price}</p><button className="btn btn-warning" onClick={()=>{reqtoenroll(course.modid,user)}}>Enroll</button></div> 
                            : 
                            role==='a' ? 
                            <div><Link to="/assignteacher" state={{ id: course.modid , name:course.modname, code:course.modcode}}><p style={{color:'#f5b042'}}>Assign Teacher</p></Link>
                            
                            </div>
                            :<></>}</text>
                        <hr/>
                    </div>
                )
            })}
            <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    containerClassName="paginationcourse"
                    pageLinkClassName="page-number"
                    previousLinkClassName="page-number"
                    nextLinkClassName="page-number"
                    activeLinkClassName="active"

                />
        </div>
        
    )
}

export default Singlecoursedetails;