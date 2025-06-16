
export default function VideoCard(props: any){
    return (
        <div className="p-3">
            <img src= {props.thumbImage} className="rounded-xl"/>
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1">
                    <img className="rounded-full w-20px h-20px" src={props.image}/>
                </div>
                <div className="col-span-11 pl-2">
                    <div>
                    {props.title}
                    </div>
                    <div className="col-span-11 text-gray-400 text-base">
                    {props.name}
                    </div>
                    <div className="col-span-11 text-gray-400 text-base">
                        {props.views} views *  {props.timestamp}
                    </div>
                </div>
                
            </div>
        </div>
    )
}