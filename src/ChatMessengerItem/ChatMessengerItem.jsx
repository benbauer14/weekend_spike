
import DeleteIcon from '@material-ui/icons/Delete';
import FaceIcon from '@material-ui/icons/Face';
import { useDispatch, useSelector } from 'react-redux';

function ChatMessengerItem(){
    const messages = useSelector((store) => store.messages);
    const user = useSelector((store) => store.user.username);

    const fellowGardener = (message) => {
        if(message.toUser === user){
            return message.fromUser
        }else{
            return message.toUser
        }
    }

    return(
    <>
        {messages.map(message => {
            return(
                <div className="chatMessageListItem">
                    <div className="userAvatar">
                        <FaceIcon />
                    </div>
                    <div className="chatMessage">
                        <p>from: {fellowGardener(message)}</p> 
                        <p>date: {message.whenSent}</p>
                        <p>{message.message}</p>
                    </div>
                    <div className="chatTrash">
                        <DeleteIcon fontSize="large"/>

                    </div>
                </div>
            )
        })}

    
        </>
    )
}
export default ChatMessengerItem