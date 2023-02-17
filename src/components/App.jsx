

import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { GlobalStyle } from "./GlobalStyle";
import user from "../user.json";
import stats from "../data.json";



export const App = () => {
  return (
    <div>
      <Profile username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
        stats={user.stats} />
      
      <Statistics title={"Upload stats"} stats={stats} />
      
<GlobalStyle/>
    </div>
  );
};
