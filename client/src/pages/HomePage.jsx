import WalcomModule from "../modules/welcomModuleInHomePage/WalcomModule";
import { observer } from "mobx-react"
import { useContext } from "react";
import { Context } from "..";
import ControlUser from "../modules/controlUser/ControlUser";
import ControlAdmin from "../modules/controlAdmin/ControlAdmin";

const HomePage = observer(() => {
    const { user } = useContext(Context)
    return (
        <main>
            {
                user.isAuth ?
                <>
                    <ControlUser></ControlUser>
                    <ControlAdmin></ControlAdmin>
                </>
                    :
                    <WalcomModule></WalcomModule>
            }

        </main>
    )
})
export default HomePage