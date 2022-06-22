import React ,{useState,useEffect} from "react";
import "./Forumquestionlist.css";
import axios from "axios";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";

function Forumquestionlist({questions,name,mylist,user}){
    const [myquestions,setMyquestions] = useState([]);
    const deleteQuestion=async (id , e)=>{
        console.log(id);
        if(window.confirm('Are you sure you want to delete?')){
            await axios.delete(`http://localhost:8070/forums/question/${id}`)
            .then((res)=>{
                console.log(res.data);
                alert(res.data);
                getQuestion(user);
            })
        }
       
    }
    console.log(mylist)
    function getQuestion(user){
        axios.get(`http://localhost:8070/forums/mylist/${user}`)
        .then((res)=>{
            console.log(res);
            
        setMyquestions(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }  
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage=10;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(questions.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(questions.length / itemsPerPage));
    }, [itemOffset, itemsPerPage ,questions]);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % questions.length;
        console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset); 
    }
    
    return(
        <div className="forumsquestions">
            <h3>{name}</h3>
            <div className="dashboardadmin">
                <ul>
                {currentItems.map(question=>{
                    return(
                        <div>
                             
                            <li><Link to="/forum/single" state={{fid : question.fquestionid,name : question.name_, keyimage:question.image}}><p key={question.fquestionid} style={{color:'black',fontSize:'15px'}}>{question.name_}</p></Link></li>
                            <div className="deletereplybox"><Link to="/forum/reply" state={{ fid : question.fquestionid, name : question.name_}}><text className="textbold">Reply</text></Link>
                            {mylist==true ? <i class="fa-solid fa-trash-can" style={{color:'red', marginLeft:'85%'}} onClick={()=>{deleteQuestion(question.fquestionid)}}></i> : <></>}
                            </div>
                            <hr/>
                        </div>
                    )
                })}
                </ul>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                    pageLinkClassName="page-num"
                    previousLinkClassName="page-num"
                    nextLinkClassName="page-num"
                    activeLinkClassName="active"

                />
            </div>
        </div>
    )
}

export default Forumquestionlist;