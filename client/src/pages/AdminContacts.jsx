import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'

const AdminContacts = () => {

  const [contacts , setContacts] = useState([])
  
    const {authorizationToken , API} = useAuth()
    const getAllContacts = async () =>{
  
      try {
        
        const response = await fetch(`${API}/api/admin/contacts` , {
          method:"GET",
          headers:{
            Authorization: authorizationToken
          }
        })
  
        const data = await response.json()
        setContacts(data)
        console.log(data);
        
      } catch (error) {
        console.log("error ");
        
      }
    }
  
    const deleteOneContact = async (id) =>{
      try {
        
        const response = await fetch(`${API}/api/admin/contacts/delete/${id}` , {
          method:"DELETE",
          headers:{
            Authorization: authorizationToken
          }
        })
  
        const data = await response.json()
  
        if(response.ok){
          getAllContacts()
        }
        
        
      } catch (error) {
        console.log("error" , error);
        
      }
    }
  
    useEffect(() =>{
      getAllContacts()
    },[])
  return (
    <>
    <section className="admin-user-section">
      <div className="containers">
        <h1>Admin Contacts Data</h1>
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
                Message
              </th>
              <th>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((currUser , index) =>{
      return (
      
          <tr key={index}>
            <td>{currUser.username}</td>
              <td>{currUser.email}</td>
                <td>{currUser.message}</td>
                  <td><button className='btn' onClick={() => deleteOneContact(currUser._id)}>Delete</button>
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

export default AdminContacts