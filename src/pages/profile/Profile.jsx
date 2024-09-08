import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feedbar/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
    <Sidebar/>
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img className = "profileCoverImg"src="assets/profile-background.jpeg"></img>
            <img className = "profileUserImg"src="assets/profile-img.jpeg"></img>
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Namikaze Minato</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
                 </div>
        </div>
        <div className="profileRightBottom">
        <Feed/>
        <Rightbar Profile/>
    </div>
    </div>
    </div>
    </>
  )
}
