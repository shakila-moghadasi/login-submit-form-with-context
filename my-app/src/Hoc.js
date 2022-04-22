import React, {useContext, useCallback} from 'react';
import { Logincontext } from './Logincontext'; 
import Tabs from './Tabs';


const Hoc = Component => {
    return function HocComponent({...props}) {
        const {loggedInUser ,setLoggedInUser} = useContext(Logincontext)
        const handleLogOut = useCallback(() => setLoggedInUser(null))

        return (
            <>
                {loggedInUser === null ? <Tabs /> : 
                    <Component 
                        name={loggedInUser.firstname}
                        handleLogOut={handleLogOut}
                        {...props}/>}
            </>
        ) 
    }
}

export default Hoc;