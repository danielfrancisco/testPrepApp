import React from 'react'
import "../styles/components/roundedButton.scss"
import { useNavigate } from 'react-router-dom'

interface RoundedButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  /*Button variant for styling
  default primary
  */
   variant?: 'primary' | 'secondary'| 'userPage';
  
  /*Button size for styling
  default medium
  */
  size?: 'small' | 'medium' | 'large' | 'custom';

  //Contents of the button
   children?: React.ReactNode;

  //Optional: If provided, navigates on click
  route?: string;
  
  /*Optional: If provided, this function will be called 
  when the button is clicked. */
   action?: (event: React.MouseEvent<HTMLButtonElement>) => void;

}

function RoundedButton({
  variant = 'primary',
  size = 'medium',
  route,
  action,
  children,
  ...rest
}: RoundedButton){

  const navigate = useNavigate()
   
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>)=>{
      if(route){
        navigate(route)
      }
        
      if(action){
        action(event)
      }
  }

    return(
        <>
          <button  className={`btn btn${variant} btn${size}`} {...rest}
          onClick={handleClick}>
            {children}
          </button>
        </>
    )
}

export default RoundedButton

