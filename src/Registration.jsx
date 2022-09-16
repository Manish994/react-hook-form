import React from "react";
import { useForm } from "react-hook-form";
import { validationSchema } from "./schemas";
import { yupResolver } from "@hookform/resolvers/yup";

const Registration = () => {
  const GENDER_OPTIONS = [
    { text: "Male", value: "male" },
    { text: "Female", value: "female" },
    { text: "Other", value: "other" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row text-center mt-5">
          <h3>User Registration Form</h3>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            className="form-control col-sm-6"
            {...register("firstname")}
          ></input>
          {errors.firstname && (
            <p className="text-danger">{errors.firstname?.message}</p>
          )}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            className="form-control"
            {...register("lastname")}
          ></input>
          {errors.lastname && (
            <p className="text-danger">{errors.lastname?.message}</p>
          )}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="gender">Gender</label>
          <select className="form-control" {...register("gender")}>
            <option value="">Select Gender</option>
            {GENDER_OPTIONS.map((item, index) => (
              <option key={index} value={item.value}>
                {item.text}
              </option>
            ))}
          </select>
          {errors.gender && (
            <p className="text-danger">{errors.gender?.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phonenumber">Phone Number</label>
          <input
            type="number"
            className="form-control"
            {...register("phonenumber")}
          ></input>
          {errors.phonenumber && (
            <p className="text-danger">{errors.phonenumber?.message}</p>
          )}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            {...register("email")}
          ></input>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            {...register("password")}
          ></input>
          {errors.password && (
            <p className="text-danger">{errors.password?.message}</p>
          )}
        </div>

        <div className="form-group mb-3">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            {...register("confirmpassword")}
          ></input>
          {errors.confirmpassword && (
            <p className="text-danger">{errors.confirmpassword?.message}</p>
          )}
        </div>
        <div className="form-check form-check-inline">
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
          <input
            className="form-check-input"
            type="radio"
            value="male"
            {...register("linga")}
          ></input>
        </div>
        <div className="form-check form-check-inline">
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
          <input
            className="form-check-input"
            type="radio"
            value="female"
            {...register("linga")}
          ></input>
        </div>
        <div className="form-check form-check-inline">
          <label className="form-check-label" htmlFor="other">
            Other
          </label>
          <input
            className="form-check-input"
            type="radio"
            value="other"
            {...register("linga")}
          ></input>
        </div>
        <br></br>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            // value="agree"
            {...register("terms")}
          />
          <label className="form-check-label" htmlFor="terms">
            I agree all terms and conditions
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            {...register("updateo")}
          />
          <label className="form-check-label" htmlFor="updateo">
            Send me bootstrap latest updates
          </label>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
