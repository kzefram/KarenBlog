import { Label } from "flowbite-react";
import { Link } from "react-router-dom";
import { TextInput } from "flowbite-react";
import { Button } from "flowbite-react";

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20 dark:text-white'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* Left Side */}
        <div className='flex-1'>
          <Link to='/' className=' flex font-bold text-4xl'>
            <span>
              <img
                className='h-12'
                src='./src/assets/DesignNoBack.png'
                alt='Robot Logo'
              />
            </span>
            <span className='justify-center content-center text-gray-500'>
              Karen's Blog
            </span>
          </Link>
          <p className='text-sm mt-5 text-gray-500'>
            This is a personal site for tech and environmental blogging. It
            showcases my blog posts and abilities. Feel free to sign up and join
            the community! You can signup with your email or with Google.
          </p>
        </div>
        {/* Right Side */}
        <div className='flex flex-1 text-gray-500'>
          <form className='flex flex-col gap-4'>
            <div className='text-gray-500'>
              <Label
                value='Your Username'
                class='mb-2 text-sm text-gray-900 dark:text-white'
              />
              <TextInput type='text' placeholder='Username' id='username' />
            </div>
            <div className='text-gray-500'>
              <Label value='Your Email' className='text-gray-500' />
              <TextInput
                type='email'
                placeholder='name@domain.com'
                id='email'
              />
            </div>
            <div className='text-gray-500'>
              <Label value='Your Password' className='text-gray-500' />
              <TextInput type='password' placeholder='Password' id='password' />
            </div>
            <Button gradientDuoTone='purpleToBlue' type='submit'>
              Sign Up
            </Button>
            <div className='flex gap-2 text-sm mt-5'>
              <span>Have an account?</span>
              <Link to='/signin' className='text-blue-500'>
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
