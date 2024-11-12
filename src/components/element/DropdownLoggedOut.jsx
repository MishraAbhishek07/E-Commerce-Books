import { Link } from "react-router-dom"
import { useEffect ,useState} from "react"
import { useLocation } from "react-router-dom"
export const DropdownLoggedOut = ({setdrop}) => {
    const location = useLocation();
     const { pathname } = location;
      const [prevPathname, setPrevPathname] = useState(pathname); 
      useEffect(() => { if (pathname !== prevPathname) { setdrop(false); setPrevPathname(pathname); } }, [pathname, prevPathname, setdrop]);

    return (
      <div id="dropdownAvatar" className="select-none	absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
              <li>
                  <Link onClick={()=>setdrop(false)} to="/products" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
              </li>
              <li>
                  <Link to="login" onClick={()=>setdrop(false)} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Login</Link>
              </li>
              <li>
                  <Link to="register"  onClick={()=>setdrop(false)} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Register</Link>
              </li>
          </ul>
      </div>
    )
  }