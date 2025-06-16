import VideoCard from "./VideoCard"



const VIDEOS = [{
    title: "How to learn coding in 30 days | 30 day plan",
    image: "logo.PNG",
    thumbImage: "Capture.PNG",
    name: "Gagandeep Singh",
    views: "100k",
    timeStamp: "2 days ago"
},
{
    title: "How to learn jumping in 30 days | 30 day plan",
    image: "logo.PNG",
    thumbImage: "Capture.PNG",
    name: "Gagandeep Singh",
    views: "100k",
    timeStamp: "2 days ago"
},
{
    title: "How to learn crying in 30 days | 30 day plan",
    image: "logo.PNG",
    thumbImage: "Capture.PNG",
    name: "Gagandeep Singh",
    views: "100k",
    timeStamp: "2 days ago"
},
{
    title: "How to learn crying in 30 days | 30 day plan",
    image: "logo.PNG",
    thumbImage: "Capture.PNG",
    name: "Gagandeep Singh",
    views: "100k",
    timeStamp: "2 days ago"
},
{
    title: "How to learn crying in 30 days | 30 day plan",
    image: "logo.PNG",
    thumbImage: "Capture.PNG",
    name: "Gagandeep Singh",
    views: "100k",
    timeStamp: "2 days ago"
},
{
    title: "How to learn crying in 30 days | 30 day plan",
    image: "logo.PNG",
    thumbImage: "Capture.PNG",
    name: "Gagandeep Singh",
    views: "100k",
    timeStamp: "2 days ago"
}]



export const VideoGrid= () =>{
    return (
         <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
            {VIDEOS.map((v) => (
                <div>
                    <VideoCard
                            title={v.title} 
                            image={v.image} 
                            thumbImage={v.thumbImage} 
                            name={v.name}
                            views={v.views}
                            timestamp={v.timeStamp}></VideoCard>
                </div>
            ))}
         </div>
    )
}