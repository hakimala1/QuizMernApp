import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../redux/actions/authActions'
import Carte from './Carte'
import '../../App.css'

function ListeUser() {
    const users = useSelector(state => state.authReducer.liste)

    
    const dispatch = useDispatch()
    // get users
    useEffect(() => {
        dispatch(getAllUsers())

    }, [])
 


    // console.log(users)
    return (<>
        <br /><br />
        <h1>List</h1>
        <div className='container'>
            <div className='carte'>
                <h1>Admin</h1>

                {users && users.map(el => el.role === 'admin' && <Carte key={el._id} el={el}  />)}


            </div>
            <div className='carte'>
                <h1>Formateur</h1>

                {users && users.map(el => el.role === 'formateur' && <Carte key={el._id} el={el} />)}


            </div>
            <div className='carte'>
                <h1>Etudiant</h1>

                {users && users.map(el => el.role === 'user' && <Carte key={el._id} el={el} />)}


            </div>


        </div>




    </>
    );
}

export default ListeUser