import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields.");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

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
              Technology Blog
            </span>
          </Link>
          <p className='text-sm mt-5 text-gray-500'>
            This is a personal site for tech and environmental blogging. It
            showcases my blog posts and abilities. Feel free to signin and join
            the community! You can signin with your email or with Google.
          </p>
        </div>
        {/* Right Side */}
        <div className='flex flex-1 text-gray-500'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className='text-gray-500'>
              <Label value='Your Email' className='text-gray-500' />
              <TextInput
                type='email'
                placeholder='name@domain.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div className='text-gray-500'>
              <Label value='Your Password' className='text-gray-500' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone='purpleToBlue'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
            <div className='flex gap-2 text-sm mt-5'>
              <span>Dont have an account?</span>
              <Link to='/signup' className='text-blue-500'>
                Sign Up
              </Link>
            </div>
            {errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
