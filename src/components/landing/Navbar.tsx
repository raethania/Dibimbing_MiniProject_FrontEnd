import { Link } from "react-router"

type MenuType = {
  name: string
  link: string
}

const navMenu: MenuType[] = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Service", link: "#service" },
]

const authMenu: MenuType[] = [
  { name: "Register", link: "/register" },
  { name: "Log In", link: "/login" },
]

export default function Navbar() {
  return (
    <nav className='flex justify-between mb-16'>

      {/* Navigation Menu */}
      <ul className='flex w-1/3 min-w-81.25 list-none p-0 m-0'>
        {navMenu.map((item: MenuType) => (
          <li key={item.name} className='flex-1'>
            <a href={item.link} className='block bg-gray-200 mr-5 rounded-full text-center py-1'>
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Auth Menu */}
      <ul className='flex w-1/5 min-w-50 list-none p-0 m-0'>
        {authMenu.map((item: MenuType) => (
          <li key={item.name} className='flex-1'>
            <Link to={item.link} className='block mr-5 text-center py-1' target="_blank">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

    </nav>
  )
}