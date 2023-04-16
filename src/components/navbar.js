import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark p-3" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand " href="/">
                        <img
                            src="https://files-manywho-com.s3.amazonaws.com/038d12aa-2256-455c-9b4e-8e620970e451/Atom-WordMark-clr.png"
                            alt="Company"
                            width="150"
                            height="60"
                        />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav p-2">
                            <li className="nav-item ">
                                <a className="nav-link active" aria-current="page" href="/"><h3>Home</h3></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/user"><h3>User</h3></a>
                            </li>
                        </ul>
                    </div>
                </div >
            </nav >
        </div >
    )
}

export default Navbar;
