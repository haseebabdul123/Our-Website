import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
const AdminUsers = () => {
  const [users , setUsers] = useState([])

  const {authorizationToken , API} = useAuth()
  const getAllUsers = async () =>{

    try {
      
      const response = await fetch(`${API}/api/admin/users` , {
        method:"GET",
        headers:{
          Authorization: authorizationToken
        }
      })

      const data = await response.json()
      setUsers(data)
      console.log(data);
      
    } catch (error) {
      console.log("error ");
      
    }
  }

  const deleteOneUser = async (id) =>{
    try {
      
      const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}` , {
        method:"DELETE",
        headers:{
          Authorization: authorizationToken
        }
      })

      const data = await response.json()

      if(response.ok){
        getAllUsers()
      }
      
      
    } catch (error) {
      console.log("error" , error);
      
    }
  }

  useEffect(() =>{
    getAllUsers()
  },[])
  return (
    <>
    <section className="admin-user-section">
      <div className="containers">
        <h1>Admin Users Data</h1>
      </div>
      <div className="containers admin-users">

        <table>
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Email
              </th>
              <th>
                Phone
              </th>
              <th>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((currUser , index) =>{
      return (
      
          <tr key={index}>
            <td>{currUser.username}</td>
              <td>{currUser.email}</td>
                <td>{currUser.phone}</td>
                  <td><button className='btn' onClick={() => deleteOneUser(currUser._id)}>Delete</button>
                  </td> 
          </tr>
      )
    })}
          </tbody>
        </table>
    </div>
    </section>
    </>
  )
}

export default AdminUsers