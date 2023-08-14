import { useEffect, useState } from "react";


//CUSTOM HOOK FOR CHECKING STATUS:
const useStatus = () => {

    const[onlineStatus, setonlineStatus] = useState(true);

//It will checking at once - useEffect will use

  useEffect(() => {

    window.addEventListener("offline", () => {
        setonlineStatus(false);
    });

    window.addEventListener("online", () => {
        setonlineStatus(true);
    });

  }, []);

    //Bool
    return onlineStatus;
}

export default useStatus;