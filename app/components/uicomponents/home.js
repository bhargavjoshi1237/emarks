import AllList from "./home/alllist";
import RecentMarks from "./home/recent";

const HomeX = ({data , time, userdata}) => {
    return (
        <div>
           <RecentMarks  data={userdata} time={time} alldata={data} />
          
           <AllList data={data} time={time}  />

           
        </div>
    )
}
HomeX.displayName = "HomeX"

export default HomeX