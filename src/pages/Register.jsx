import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Get Form data
        const form = new FormData(e.target);
        const name = form.get('name');
        if (name.length < 5) {
            setError({ ...error, name: 'Must be 5 character long' });
            return;
        }
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')
        console.log({ name, email, photo, password });



        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/');
                    })
                    .catch(err => console.log(err))
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }



    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
                <h2 className="text-2xl font-semibold text-center">Register Your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control font-semibold">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    {
                        error.name && (
                            <label className="label text-sm text-red-600">
                                {error.name}
                            </label>
                        )
                    }
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                    </div>
                    {/* Email Input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    {/* Password input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Register</button>
                    </div>
                </form>
                <p className="text-center font-semibold">Already have an account? <Link to='/auth/login' className="text-red-500">Login!</Link></p>
            </div>
        </div>
    );
};

export default Register;