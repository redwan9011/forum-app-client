
import { useContext } from 'react';
import { Link,  useNavigate,  } from 'react-router-dom';
import {  updateProfile } from "firebase/auth";
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Provider/AuthProvider';
import SocialLogin from './SocialLogin';




const Register = () => {

const {signUp} = useContext(AuthContext)
const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
       
        signUp(data.email, data.password)
        .then( result => {
                  console.log(result.data);
                  updateProfile(result.user , {
                      displayName: data.name,
                      photoURL: data.photo
                  })
                  .then(()=> {

                 
                   
                   
                  })
                  .catch(()=> {})
                 navigate('/')
              })
              .catch(err => {
                  console.log(err);
                  alert(err.message)
              })
      }
     
 
    return (
        <div className="card  w-full max-w-3xl mx-auto bg-slate-400 mt-5 mb-6">
        <h1 className='text-center text-2xl font-semibold pt-5'>REGISTER</h1>
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
    
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" {...register("name"  , { required: true })} name='name' placeholder="your name" className="input " />
              {errors.name && <span className='text-red-500 mt-1'>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input type="text" {...register("photo"  , { required: true })} name='photo' placeholder="photo url" className="input " />
              {errors.photo && <span className='text-red-500 mt-1'>This field is required</span>}
            </div>
    
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
              <input type="password" {...register("password" , { required: true, minLength:6, maxLength: 20 ,
    
              pattern:/(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/
                 
                 })} name='password' placeholder="password" className="input " required />
              {errors.password?.type === 'minLength' && <span className='text-red-500 mt-1'>Password should be 6-20 letters</span>}
              {errors.password?.type === 'pattern' && <span className='text-red-500 mt-1'>Make password stronger</span>}
    
            </div>
           
            <div className="form-control mt-2">
                <input type="submit" value="REGISTER" className='bg-black cursor-pointer text-white py-3 rounded-md font-semibold' />
            </div>
          </form>
          <p className='text-center text-white'>---------Or----------</p>
         <div className='text-center my-3'>
       <SocialLogin></SocialLogin>
         </div>
          <Link to='/login' className='text-center text-white pb-3'>Already registered? Go to log in </Link>
        </div>
    );
};

export default Register;