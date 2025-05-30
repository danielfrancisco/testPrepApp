import Nav from '../components/Nav'
import RoundedButton from '../components/RoundedButton'

export default function HomePage(){
    return(
        <>
          <Nav/>
          <p>Home Page</p>
          <RoundedButton children='hello world' />
        </>
    )
}