import "./Navbar.css"

export default function Navbar(){
    return (
        <div className="navbar">
            <div className="name">
                Kushagra Srivastava
            </div>
            <div className="navbar-items">
                <a href="#home">Home</a>
                <a href="#home">About</a>
                <a href="#home">Education</a>
                <a href="#home">Experience</a>
                <a href="#home">Projects</a>
            </div>
        </div>
    )
}