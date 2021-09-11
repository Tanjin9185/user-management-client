import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'

const schema = yup.object().shape({
  firstName: yup.string().required("First Name should be required please"),
  lastName: yup.string().required(),
  userName: yup.string().required(),
  email: yup.string().email().required(),
  showPassword: yup.string().min(4).max(15).required(),
});

function UserForm() {

  const [showPass, srtShowPass] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleShowPassword = () => {
    srtShowPass(!showPass);
  }

  const submitForm = (data, e) => {
    console.log(data);
    fetch("https://warm-dusk-64985.herokuapp.com/adduser", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("user added successfully");
          e.preventDefault();
        }
      })
      .catch((err) => {
        console.log(err);
      });

  };
  return (
    <div className="Form d-flex justify-content-center">
      <div className='col-md-6'>
        <div className="title text-center">
          <span className="mx-2"><FontAwesomeIcon className="title" icon={faUserFriends} /></span> User Management</div>
        <div className="form-group">
          <form onSubmit={handleSubmit(submitForm)} >
            <input className='form-control m-2 p-1'
              type="text"
              name="firstName"
              ref={register}
              placeholder="First Name..."
            />
            <p> {errors.firstName?.message} </p>

            <input className='form-control m-2 p-1'
              type="text"
              name="lastName"
              placeholder="Last Name..."
              ref={register}
            />
            <p> {errors.lastName?.message} </p>
            <input className='form-control m-2 p-1'
              type="text"
              name="userName"
              ref={register}
              placeholder="User Name..."
            />
            <p> {errors.UserName?.message} </p>
            <input className='form-control m-2 p-1'
              type="text"
              name="email"
              placeholder="Email..."
              ref={register}
            />
            <p> {errors.email?.message} </p>

            <input className='form-control m-2 p-1'
              type={showPass ? 'text' : 'password'} name="showPassword" id="showPassword" onClick={handleShowPassword}
              placeholder="password..."
              ref={register}
            />
            <p> {errors.showPassword?.message} </p>

            <input className='form-control btn btn-primary m-2 p-1' type="submit" id="submit" value='Create User' />
          </form>

        </div>
      </div>
    </div>
  );
}

export default UserForm;
