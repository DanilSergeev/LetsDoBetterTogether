import { useContext } from 'react';
import { observer } from "mobx-react"
import { Context } from '../..';

const CreateControl = observer(() => {
    const { user } = useContext(Context)
    const userObject = Object.assign({}, user.user)

    return (
        <section className='wrapper center'>
            
        </section>
    )
})
export default CreateControl