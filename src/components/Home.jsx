import React from "react";
import { useState,useEffect } from "react";
import Pagination from "./Pagination";
import axios from "axios";

function Home() {

  const [users, setUser] = useState([]);
  const [search, setSearch] = useState('');
  const [ischecked, setIschecked] = useState([]);
  const [delmsg, setDelmsg]= useState('');

  const searchitem = users.filter((item)=> {
    if(search == '') {
      return item;
    }else if (item.name.toLowerCase().includes(search.toLowerCase())){
      console.log(item.name)
       return item;
       
    }
  })

  const [showPerPage, setShowPerPage] = useState(8);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  console.log("search:" ,searchitem);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
    setUser(result.data);
    console.log(result.data)
  };
  const deleteUser = async (id) => {
    
    // function to remove a todo item from the todo array
 
    // here we are filtering - the idea is remove an item from the todo array on a button click
    const removeItem = users.filter((todo) => {
      // return the rest of the todos that don't match the item we are deleting
      return todo.id !== id;
    });
    // removeItem returns a new array - so now we are setting the todos to the new array
    setUser(removeItem);

  };
  const handlecheckbox = (e)=> {
     const {value, checked} = e.target;
    console.log(value)
    console.log(ischecked)
    setIschecked(value);
    if(value) 
    {
      setIschecked([...ischecked], value);
    }else{
      setIschecked(ischecked.filter((e)=>e!==value));
    }
    
    
  }


  


    return (
      <>
      
            
      
      <div className="container">
      <div className="py-4">
      <div className="py-2">
      <input
              type="text"
              className="form-control form-control-lg "
              placeholder="search by name email role"
              //name="name"
               //value={name}
               onChange={e => setSearch(e.target.value)}
            />
            </div>
        <table class="table border shadow">
          <thead className="thead-dark" >
            <tr>
              <th scope="col">SN</th>
              <th scope="col">Check</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody >
            {searchitem.slice(pagination.start, pagination.end).map((user, index) => (
              <tr>
                <th scope="row">{user.id}</th>
                <td><input type="checkbox" value={user.id} checked={user.ischecked} 
                setIschecked={(e)=> e.target} onChange={(e)=>handlecheckbox(e)}/>
            </td>
               
                <td>{user.name}</td>
                
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  
                  <a    
                    className="btn btn-outline-primary "
                    to={`/users/edit/${user.
                      id}`}
                  >
                    Edit
                  </a>
                
                  <a  className="btn btn-danger " 
                    onClick={() => deleteUser(user.id)}>
                    delete
                  </a>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="py-2">
        <button className="btn btn-danger d-sm-flex" onClick={handlecheckbox}> M-delete</button>
        </div>
        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={searchitem.length}
        />
      </div>
    </div>
    </>
    );
  }
  
  export default Home;
  