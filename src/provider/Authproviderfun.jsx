import { useContext } from "react";
import { AuthContext } from "./Authprovider";

function Authproviderfun() {
    const all = useContext(AuthContext)
    return all;
}

export default Authproviderfun;