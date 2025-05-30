import '../styles/components/nav.scss'

export default function Nav(){
    return(
        <>
           <nav className='nav'>
             <div className='logo'>Logo</div>

             <div className='nav-links'>
                <div>Plaform</div>
                <div>About</div>
                <div>Services</div>
                <div>Pricing</div>
             </div>

             <div className='login-btns'>
                <div>I'm Student</div>
                <div>I'm Teacher</div>
             </div>
           </nav>
        </>
    )
}