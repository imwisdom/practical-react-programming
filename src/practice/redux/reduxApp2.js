import FriendMain from "./friend/FriendMain";
import TimelineMain from "./timeline/TimelineMain";
import { Provider } from 'react-redux';
import store from './common/store';

export default function ReduxApp2(){
    return (
        <Provider store={store}>
            <div>
                <FriendMain />
                <TimelineMain />
            </div>
        </Provider>
    )
}