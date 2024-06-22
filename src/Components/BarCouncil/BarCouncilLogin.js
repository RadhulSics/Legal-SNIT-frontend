import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../Constants/BaseUrl";
import img from "../../Assets/junioradvocate-loginimg.png";
import "./BarCouncilLogin.css";
import { AdminSchema } from "../Constants/Schema";
import { toast } from "react-toastify";
import { useFormik } from "formik";

function BarCouncilLogin() {
  const [isToastVisible, setToastVisible] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (values) => {
    if (values.email === "BarCouncil" && values.password === "barcouncil123") {
      if (!isToastVisible) {
        setToastVisible(true);
        toast.success("Login Successful", {
          onClose: () => setToastVisible(false),
        });
      }
      localStorage.setItem("adminId", 1);
    } else if (values.email === "Admin") {
      if (!isToastVisible) {
        setToastVisible(true);
        toast.warning("Password Mismatch", {
          onClose: () => setToastVisible(false),
        });
      }
    } else {
      if (!isToastVisible) {
        setToastVisible(true);
        toast.warning("Username Not Found", {
          onClose: () => setToastVisible(false),
        });
      }
    }
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: AdminSchema,
    onSubmit: onSubmit,
  });
  return (
    <div>
      <div className="user_registration">
        <div className="junior-heading-div container-fluid">
          <label className="junior-reg-title">Bar Council Login</label>
        </div>
        <div className="user_registration_container">
          <div className="user_registration_box ">
            <div className="user_registration_input_group">
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
                onReset={resetForm}
              >
                <label className="junior-text-loginhere">Login Here</label>
                <div className="user_registration_input mt-5">
                  <label>Email Id</label>
                  <input
                    type="text"
                    className="form-control border border-dark"
                    placeholder="Enter Username"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <span className="text-danger">{errors.email}</span>
                  )}
                </div>
                <div className="user_registration_input mt-4">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control border border-dark"
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && (
                    <span className="text-danger">{errors.password}</span>
                  )}
                </div>

                <div className="user_registration_button text-center mt-5 d-flex justify-content-evenly">
                  <button type="submit">Submit</button>
                  <button type="reset">Reset</button>
                </div>
              </form>
            </div>
          </div>
          <div className="user_registration_box2 justify-content-center ">
            <img src={img} className="img-fluid w-100" alt="user_reg_img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BarCouncilLogin;
