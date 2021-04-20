
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatMessengerItem from '../../ChatMessengerItem/ChatMessengerItem';
import userSaga from '../../redux/sagas/user.saga';
import './ChatMessenger.css'

function ChatMessenger () {
    const dispatch = useDispatch()
    const messages = useSelector((store) => store.chat);
    const user = useSelector((store) => store.user);

    useEffect(() => {
        getMessages();
      }, []);

    const getMessages = () =>{
        dispatch({type:'FETCH_MESSAGES', payload: user.username})
    }

    return (
        <>
        <div className="chatMain">
            <ChatMessengerItem messages={messages} />
        </div>
        </>
    )
}
export default ChatMessenger