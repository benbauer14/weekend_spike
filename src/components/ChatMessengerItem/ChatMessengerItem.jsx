
import DeleteIcon from '@material-ui/icons/Delete';
import FaceIcon from '@material-ui/icons/Face';
import { useSelector } from 'react-redux';

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

    const gardenerList = (messageList) => {
        //create a list of all gardeners that the user has messaged in the past
        //list will contain no duplicates
        //list will be used to create a message list for each user


        let gardeners = []
        for( let i = 0; i < messageList.length; i++){
            if(messageList[i].toUser === user){
                gardeners = [...gardeners, messageList[i].fromUser]
            }else{
                gardeners = [...gardeners, messageList[i].toUser]
            }
        }
        
        return([...new Set(gardeners)] )
    }

    const newMessageList = (messageList) => {
        //To show the most recent message, the data returned from SQL will be sorted in descending order
        //by date. This will display the newest message first. This function will loop through the messages
        //until the first instance of a chat is found between the user and fellow gardener. When a chat is found
        //the message will be displayed and the loop will start over with the next gardener on the list. The new 
        //array will contain the newest messages from any gardener that the user has chatted with
        

        messageList = messageList.sort((a,b) => a.whenSent - b.whenSent)
        //list with fellow gardeners with no duplicates
        let fellowGardeners = gardenerList(messageList)
        let newMessageArray = []
        for(let i = 0; i < fellowGardeners.length; i++){
            for(let j = 0; j < messageList.length; j++){
                if(messageList[j].toUser === fellowGardeners[i] || messageList[j].fromUser === fellowGardeners[i]  ){
                    newMessageArray = [...newMessageArray, messageList[j]]
                    break;
                }
            }
        }
        return newMessageArray
    }

    return(
    <> 
        {JSON.stringify(messages.sort((a,b) => a.whenSent - b.whenSent))}
        {newMessageList(messages).map(message => {
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