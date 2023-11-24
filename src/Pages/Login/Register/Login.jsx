
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import SocialLogin from './SocialLogin';
const Login = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'


  const {
    register,
    handleSubmit,


  } = useForm()
  const onSubmit = (data) => {
    console.log('click', data);

    login(data.email, data.password)
      .then(result => {
        console.log(result.user);

        navigate(from, { replace: true })

      })
      .catch(err => {
        console.log(err);
        alert(err.message)
      })

  }


  return (
    <div className="card  w-full max-w-3xl mx-auto bg-slate-400 mt-5">
      <h1 className='text-center text-2xl font-semibold pt-5'>Login</h1>
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email")} name='email' placeholder="email" className="input " required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password")} name='password' placeholder="password" className="input " required />



        </div>
        <div className="form-control mt-6">
          <input type="submit" value="LOGIN" className='bg-black cursor-pointer text-white py-3 rounded-md font-semibold' />
        </div>

      </form>
      <p className='text-center text-white'>---------Or----------</p>
      <div className='text-center my-3'>
      <SocialLogin></SocialLogin>
      </div>
      <Link to='/register' className='text-center text-white pb-3'>New here? Create a New Account </Link>
    </div>
  );
};

export default Login;