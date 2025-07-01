import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState();

    useEffect(() => {
        window.addEventListener("offline", (e) => {
            console.log(e);
            setOnlineStatus(false);
        })

        window.addEventListener("online", (e) => {
            console.log(e);
            setOnlineStatus(true);
        })
    }, [])

    return onlineStatus;
}


export default useOnlineStatus;