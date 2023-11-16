import './Navbar.css';
import '../App.css';
import Logo from '../assets/logo.png';
import { useEffect } from 'react';

const Navbar = () => {
    useEffect(() => {
        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 70) {
                document.querySelector("nav").classList.add("blur")
            } else {
                document.querySelector("nav").classList.remove("blur")
            }
        }
    }, []);

    return (<nav className="wrapper-container container-fluid ">
        <div className='container flex'>
            <div className="div__nav__contenido">
                <img src={Logo} width='120' height='100' alt="logo"></img>
                <button className='button-svg'> <svg className='menu-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg></button>
                <div className='d-flex mb-4 pb-1 position-relative top-50 start-0 nav cabecera-nav isActive '>
                    <ul className='navbar gap-5 cabecera-ul '>
                        <li className='nav-item'>
                            <a className='navLink text-decoration-none' href=''>INICIO</a>
                        </li>
                        <li className='nav-item'>
                            <a className='navLink text-decoration-none' href=''>PERROS</a>
                        </li>
                        <li className='nav-item'>
                            <a className='navLink text-decoration-none' href=''>GATOS</a>
                        </li>
                        <li className='nav-item'>
                            <a className='navLink text-decoration-none' href=''>NOSOTROS</a>
                        </li>
                    </ul>

                </div>
                <label>
                    <div className='div__input__busqueda position-relative mt-5 position-relative start-0'>
                        <input type='text' placeholder='Buscar'></input>
                        <span>
                            <button>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </span>
                    </div>
                </label>
                <div>
                    <div className='div__numeromail mt-4'>
                        <span>
                            <i className="fa-solid fa-phone"></i>
                            112030-3985
                        </span>
                        <span>
                            <i className="fa-regular fa-envelope"></i>
                            <a href="mailto:ventas.smartproductos@gmail.com">
                                ventas.smartproductos@gmail.com
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </nav>);
}









export default Navbar;
