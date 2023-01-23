import WalcomModule from "../modules/welcomModuleInHomePage/WalcomModule";
import { observer } from "mobx-react"
import { useContext } from "react";
import { Context } from "..";
import ControlUser from "../modules/controlUser/ControlUser";
import ControlAdmin from "../modules/controlAdmin/ControlAdmin";

const HomePage = observer((props) => {
    const { user } = useContext(Context)
    return (
        <main>
            {
                props.isLoaded ?
                    <div className="spinner-border" style={{ width: "10rem", height: "10rem" }} role="status">
                    </div>
                    :
                    user.isAuth ?
                        <>
                            <ControlAdmin></ControlAdmin>
                            <ControlUser></ControlUser>
                        </>
                        :
                        <WalcomModule></WalcomModule>
            }

        </main>
    )
})
export default HomePage