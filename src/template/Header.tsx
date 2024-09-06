// app/components/Header.tsx
'use client'

import Logo from '@/components/Logo';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Header: React.FC = () => {
  const pathname = usePathname(); // `pathname` is a string
  const login = pathname === "/feed" || pathname === "/profile" || pathname === "/notification";
  const profileRef = useRef<HTMLDivElement | null>(null);
  const [toogleProfile,setToogleProfile] = useState(false)

    // Handler to close profile section when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
          setToogleProfile(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

  return (
    <nav className="fixed-navbar position-fixed start-0 end-0 bg-white navShadow top-0" style={{ zIndex: 20 }}>
      <div className={`${login ? "login-container" : "logout-container"} p-0 navbar navbar-expand-lg bg-white`}>
        <div className= {`container-fluid flex-row flex-lg-row px-0 justify-content-start justify-content-lg-between`}>
          <div className="navbar-brand">
          <Logo login={login} />
          </div>
        {login && 
        <>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search" style={{width:"26%"}}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            </form>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item me-4 ">
                <Link className="nav-link nav-link p-0 m-0 d-flex flex-column align-items-center" style={{fontSize:"12px"}} href="/feed">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
              </svg>
                Home</Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link nav-link p-0 m-0 d-flex flex-column align-items-center" style={{fontSize:"12px"}} href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                </svg>
                My Network</Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link nav-link p-0 m-0 d-flex flex-column align-items-center" style={{fontSize:"12px"}} href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                  </svg>
                Jobs
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link nav-link p-0 m-0 d-flex flex-column align-items-center" style={{fontSize:"12px"}} href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
              </svg>
                Messaging</Link>
              </li>
              <li className="nav-item me-4 ">
                <Link className="nav-link nav-link p-0 m-0 d-flex flex-column align-items-center" style={{fontSize:"12px"}} href="/notification">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
              </svg>
                Notifications</Link>
              </li>
              <li className="nav-item me-4 d-flex flex-column align-items-center" onClick={()=>setToogleProfile(!toogleProfile)}>
              <Image src="/linkdinProfile.jpg" width={36} height={24} alt='profilePic'/>
              <div  className='d-flex flex-wrap align-items-center  position-relative'>
                <Link className="nav-link nav-link p-0 m-0" style={{fontSize:"12px"}} href="#">Me</Link>
                <svg
                  className="svg-icon"
                  style={{ width: "1rem", height: "1rem", verticalAlign: "middle", fill: "grey", overflow: "hidden" }}
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M735.136 405.28L512 636 288.864 405.28Z" />
                </svg>
              </div>
              </li>
              {toogleProfile && <div ref={profileRef} className='d-flex flex-column pb-3 profile-section rounded position-absolute' onClick={(e) => e.stopPropagation()}>
                  <div className='d-flex'>
                    <div className="circle-div flex-shrink-1">
                      <Image src="/linkdinProfile.jpg" width={100} height={100} alt='profilePic'/>
                    </div>
                    <div className='w-100 mt-3'>
                    <p className='ps-2 pe-3 text-dark'><span className='text-dark fw-semibold' style={{fontSize:"18px"}}>Alina Edward</span><br/>&quot;Passionate Software Developer with a Drive for Growth | Seeking New Opportunities&quot;</p>
                    </div>
                  </div>
                  <div className='d-flex justify-content-around flex-wrap px-2'>
                    <Link className='border rounded-pill px-4 py-1 border-secondary fw-bold bg-white text-secondary text-decoration-none' style={{fontSize:"14px"}} href="/profile">View Profile</Link>
                    <Link className='border rounded-pill px-4 py-1 border-secondary fw-bold bg-white text-secondary text-decoration-none' style={{fontSize:"14px"}} href="/">Sign Out</Link>
                  </div>
                  </div>
                }
            </ul>
          </div>
        </>
          }
        </div>
  
      </div>
    </nav>
  );
}

export default Header;
