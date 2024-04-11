import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import axios from "axios";


const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last name is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  password: Yup.string().required("Password is required"),
  groupid: Yup.string().required("Group Id is required"),
});

const Signup = ({ params }) => {
  const { mutate, isLoading, isError, error } = useMutation(
    async (userData) => {
      const formData = new FormData();
      formData.append("firstName", userData.firstName);
      formData.append("lastName", userData.lastName);
      formData.append("phoneNumber", userData.phoneNumber);
      formData.append("password", userData.password);
      formData.append("groupid", userData.groupid);

      const response = await axios.post(
        "http://213.199.59.243:8080/user",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data; // Return the response data
    },
    {
      onSuccess: (data) => {
        // Handle successful registration, e.g., redirect to login page
        console.log("User registered successfully!", data);
        // Perform any necessary actions with the response data
      },
      onError: (error) => {
        console.error("Error registering user:", error);
        console.log("Error response:", error.response); // Log the error response
      },
    }
  );

  return (
    <div className="flex justify-center items-center">
      <Formik
        initialValues={{
          groupid: "4",
          firstName: "",
          lastName: "",
          phoneNumber: "",
          password: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          mutate(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <Field
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  touched.firstName && errors.firstName ? "border-red-500" : ""
                }`}
                id="firstName"
                type="text"
                name="firstName"
                placeholder="Enter your first name"
              />
              {touched.firstName && errors.firstName && (
                <div className="text-red-500 mt-2">{errors.firstName}</div>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <Field
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  touched.lastName && errors.lastName ? "border-red-500" : ""
                }`}
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Enter your last name"
              />
              {touched.lastName && errors.lastName && (
                <div className="text-red-500 mt-2">{errors.lastName}</div>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <Field
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  touched.phoneNumber && errors.phoneNumber
                    ? "border-red-500"
                    : ""
                }`}
                id="phoneNumber"
                type="tel"
                name="phoneNumber"
                placeholder="Enter your phone number"
              />
              {touched.phoneNumber && errors.phoneNumber && (
                <div className="text-red-500 mt-2">{errors.phoneNumber}</div>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <Field
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  touched.password && errors.password ? "border-red-500" : ""
                }`}
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              {touched.password && errors.password && (
                <div className="text-red-500 mt-2">{errors.password}</div>
              )}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Registering..." : "Register"}
              </button>
            </div>
            {isError && (
              <div className="text-red-500 mt-4">
                {error.message || "An error occurred."}
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
