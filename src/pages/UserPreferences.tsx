import "../styles/pages/userPreferences.scss"
import { useRequireAuth } from "../customHooks/useRequireAuth"

export default function UserPreferences(){
    const shouldRender = useRequireAuth();

     if (!shouldRender) return null;
    return(
        <>
        <div className="userPreferencesContaier">
           <h2>Main Page Primary Color</h2>
           <input/>
           <h2>Logo URL</h2>
           <input/>
        </div>
        </>
    )
}