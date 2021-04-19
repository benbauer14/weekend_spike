
import DeleteIcon from '@material-ui/icons/Delete';
import FaceIcon from '@material-ui/icons/Face';
import './Chat.css'

function Chat () {
    return (
        <>
        <div className="chatMain">
            <div className="chatMessageListItem">
                <div className="userAvatar">
                    <FaceIcon />
                </div>
                <div className="chatMessage">
                    <p>from: username</p> 
                    <p>date: 1/1/2021</p>
                    <p>This was the last chat line</p>
                </div>
                <div className="chatTrash">
                    <DeleteIcon fontSize="large"/>
                </div>
            </div>

        </div>
        </>
    )
}
export default Chat