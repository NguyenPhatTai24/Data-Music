import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { API } from "../../Api";
import Layout from "../../components/layout";
import Import from "./Import";
import "./style.scss"
function Home() {
    const [openimport,setOpenImport] = useState(false)
    const [song,setSong] = useState([{id:String,name:String,link:String}])
    const [songCurrent,setSongCurrent] = useState(song[0])
    const [index,setIndex] = useState(0);
    const OpenImport = () => {
        setOpenImport(true)
    }
    const CloseImport = () => {
        setOpenImport(false)
    }
    useEffect(()=>{
        API.get('/song').then(item=>{
            setSong(item.data)
            setSongCurrent(item.data[0])
        })
    },[])
    const AutoNextSong = () =>{
        if(index !== song.length-1)
        {
            setSongCurrent(song[Number(index)+1])
            setIndex(Number(index)+1)
        }
        else
        {
            setSongCurrent(song[0])
            setIndex(0)
        }
    }
    return ( 
        <Layout>
            <Import status = {openimport} close = {CloseImport}/>
            <div className="box-music">
                <div className = "content-music">
                <ReactPlayer url={songCurrent.link} height={'100%'} controls = {true} playing={true} style = {{borderRadius:10}} onEnded = {AutoNextSong}/>
                </div>
            </div>
            <div className="list-music">
                <div className="list-music-title">
                    <p>Danh sách bài hát</p>
                    <button onClick={OpenImport}>Thêm bài</button>
                </div>
                <div className="list-music-content">
                {song.map((music,index) => (
                <div className="list-music-items" onClick={()=>{setSongCurrent({
                    id:music.id,
                    name:music.name,
                    link:music.link
                })
                setIndex(index)
                }}>
                    <img src={`https://img.youtube.com/vi/${music.link !== String && music.link.split("=")[1]}/3.jpg`} alt="preview" style = {{borderTopLeftRadius: 10, borderBottomLeftRadius:10}} height={100} width = {120}/>
                    <div className="list-music-items-title">
                        <p>{music.name}</p>
                    </div>
                </div>
                ))}
                </div>    
            </div>
        </Layout>
     );
}
export default Home