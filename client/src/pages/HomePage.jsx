import WalcomModule from "../modules/welcomModuleInHomePage/WalcomModule";
import { observer } from "mobx-react"
import { useContext } from "react";
import { Context } from "..";
import ControlAdmin from "../modules/controlAdmin/ControlAdmin";
import ControlUserIndex from "../modules/controlUser/";
import LastsRequests from "../components/LastsRequests/LastsRequests";

const HomePage = observer((props) => {
    const { user } = useContext(Context)
    const userObject = Object.assign({}, user.user)
    return (
        <main>
            {
                props.isLoaded ?
                    <div className="spinner-border" style={{ width: "10rem", height: "10rem" }} role="status">
                    </div>
                    :
                    user.isAuth ?
                        userObject.role === "ADMIN" ?
                            <ControlAdmin></ControlAdmin>
                            :
                            <ControlUserIndex></ControlUserIndex>

                        :
                        <WalcomModule></WalcomModule>
            }
            <LastsRequests></LastsRequests>

        </main>
    )
})
export default HomePage