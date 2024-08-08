import { Navbar, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Header() {
  return (
    <Navbar>
      <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl flex font-semibold dark:white'>
        <span><img className='h-11' src="./src/assets/DesignNoBack.png" alt="Robot Logo" /></span>
        <span className='justify-center content-center'>Karen's Blog</span>
      </Link>
      <form>
        <TextInput 
          placeholder='Search...'
          type='text'
          rightIcon={AiOutlineSearch }
        />
      </form>
    </Navbar>
  )
}
