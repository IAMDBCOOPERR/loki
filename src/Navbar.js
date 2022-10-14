import './navbar.css'
const Navbar = () => {
    return(
        <nav>
         <ul>
         <li className="logo_list">
            <div id="logo" className="logo_name logo_text_red">
                TIME
            </div>
            <div id="logo" className="logo_name pass">
                PASS
            </div>
           </li> 
           
            <li>
            <div id="logo">
            <i className='fa fa-search' style={{font_size:'24px',color:'white',marginRight:'6px',}}></i>
            </div>
            </li>
            </ul>  
        </nav>
    )
}

export default Navbar