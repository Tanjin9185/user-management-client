import React, { useEffect, useState } from "react";
import JsonData from "../MOCK_DATA.json";
import ReactPaginate from "react-paginate";

const Page = () => {
    const [users, setUsers] = useState(JsonData.slice(0, 50));
    const [pageNumber, setPageNumber] = useState(0);
    const [editUserId, seteditUserId] = useState('');
    const [isEditClicked, setIsEditClicked] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState('');
    const [showPass, setShowPass] = useState('');
    const [userValue, setUserValue] = useState('');

    //update user data
    const editClicked = (id) => {
        seteditUserId(id);

        fetch(`https://warm-dusk-64985.herokuapp.com/user/${id}`)
            .then(res => res.json())
            .then(data => {
                setUserValue(data[0])
            })
        setIsEditClicked(true);
    }
    const handleShowPassword = () => {
        setShowPass(!showPass)

    }

    //submit update data
    const onSubmit = () => {
        const editUserData = {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            email: email,
            showPassword: showPassword
        };

        fetch(`https://warm-dusk-64985.herokuapp.com/update/${editUserId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(editUserData)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    setIsEditClicked(false);
                }
            })

    };

    //User Info Load
    useEffect(() => {
        fetch('https://warm-dusk-64985.herokuapp.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [users])

    const handleDelete = (id) => {
        id && fetch(`https://warm-dusk-64985.herokuapp.com/user/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => console.log(res))
            .then(error => {
                console.log(error)
            })
    }

    const usersPerPage = 4;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = users
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((user, index) => {
            return (
                <tbody className="text-gray-700">


                    {/* Show user Information */}
                    <tr>
                        <td className="w-1/6 text-left py-3 px-1">{index + 1}</td>
                        <td className="w-1/6 text-left py-3 px-1">{user.firstName}</td>
                        <td className="w-1/6 text-left py-3 px-1">{user.lastName}</td>
                        <td className="w-1/6 text-left py-3 px-1">{user.userName}</td>
                        <td className="w-1/6 text-left py-3 px-1"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">{user.email}</a></td>
                        <td onClick={handleShowPassword} className="w-1/6 text-left py-3 px-1">{showPass ? <p>{user.showPassword}</p> : <p>******</p>}
                        </td>
                        <td className="w-1/6 text-left py-3 px-1 flex">
                            <span onClick={() => editClicked(user._id)}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg></span>


                            {/* DELETE User*/}
                            <button type="button" class="" data-toggle="modal" data-target="#exampleModal">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            Are you sure you want to delete?
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" onClick={() => handleDelete(user._id)} data-dismiss="modal" class="btn btn-primary">Ok</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </td>
                    </tr>

                </tbody>

            );
        });

    const pageCount = Math.ceil(users.length / usersPerPage);

    //table heading
    const thead = <><div className="md:px-32 py-8 w-full">
        <div className="shadow overflow-hidden rounded border-b border-gray-200">
            <table className="min-w-full bg-white"> <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="w-1/6 text-left py-3 px-1  font-semibold text-sm">Id</th>
                    <th className="w-1/6 text-left py-3 px-1  font-semibold text-sm">First Name</th>
                    <th className="w-1/6 text-left py-3 px-1  font-semibold text-sm">Last Name</th>
                    <th className="w-1/6 text-left py-3 px-1  font-semibold text-sm">User Name</th>
                    <th className="w-1/6 text-left py-3 px-1  font-semibold text-sm">Email</th>
                    <th className="w-1/6 text-left py-3 px-1  font-semibold text-sm">Password</th>
                    <th className="w-1/6 text-left py-3 px-1  font-semibold text-sm">Action</th>
                </tr>
            </thead>
                {displayUsers}
            </table>
        </div>

    </div>

    </>
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    return (


        // Edit User Data
        <>
            {
                isEditClicked && <div>



                    <div className="h-screen flex justify-center items-center">
                        <div className="p-2 w-3/4 rounded-lg">
                            <form onSubmit={onSubmit} className="p-3 flex flex-col space-y-5">


                                <input type="text" name="firstName" defaultValue={userValue.firstName} onChange={event => setFirstName(event.target.value)} placeholder="First Name" className="p-2  bg-gray-100" />
                                <input type="text" name="lastName" defaultValue={userValue.lastName} onChange={event => setLastName(event.target.value)} placeholder="Last Name" className="p-2  bg-gray-100" />
                                <input type="text" name="userName" defaultValue={userValue.userName} onChange={event => setUserName(event.target.value)} placeholder="Username" className="p-2  bg-gray-100" />

                                <input type="email" name="email" defaultValue={userValue.email} onChange={event => setEmail(event.target.value)} placeholder="email" className="p-2 bg-gray-100" />

                                <input type='password' name="showPassword" defaultValue={userValue.showPassword} onChange={event => setShowPassword(event.target.value)} id="showPassword" onClick={handleShowPassword} placeholder="password" className="p-2 bg-gray-100" />

                                <button type="submit" className="p-2 bg-blue-300  rounded">Update User</button>
                                <p className='text-center text-xl text-red-500'>all field is required as usal create new user. otherways value will't be update</p>

                            </form>
                        </div>
                    </div></div>}
            {thead}
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </>
    );
};

export default Page;