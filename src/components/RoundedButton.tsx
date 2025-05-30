import React from 'react'
import "../styles/components/rounded_button.scss"

interface RoundedButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  /*Button variant for styling
  default primary
  */
   variant?: 'primary' | 'secondary';
  
   /*Button size for styling
   default medium
   */
    size?: 'small' | 'medium' | 'large';

  //content inside the button
   children?: React.ReactNode;
}

function RoundedButton({
  variant = 'primary',
  size = 'medium',
  children,
  ...rest
}: RoundedButton){
    return(
        <>
          <button  className={`btn btn${variant} btn${size}`} {...rest}>
            {children}
          </button>
        </>
    )
}

export default RoundedButton

