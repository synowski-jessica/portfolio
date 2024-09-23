import dataProjets from "./dataProjet"

const CardProject =()=>{
    
    
    return(
            <>
            {dataProjets.map((data)=>(
            <div key={data.id} className={`${
                data.id===1||data.id===4||data.id===7
                ?'md:col-start-2 md:col-span-3 border border-colorRoseBackground custom-shadow p-4 rounded-lg'
                :data.id===2||data.id===5||data.id===8
                ?'md:col-start-5 md:col-span-3 border border-colorRoseBackground custom-shadow  p-3 rounded-lg'
                :'md:col-start-8 md:col-span-3 border border-colorRoseBackground custom-shadow  p-3 rounded-lg'
            }`}>
                {data.video?
                (<video controls >
                    <source src={data.video} type="video/mp4" className="w-96 h-60 mt-2 rounded-md" />
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
                ):(
                    <img src={data.image} alt={`site ${data.titre}`} className=""/>
                )}
                 
                <h5 className="text-colorMarronFonce mt-2">{data.titre}</h5>
                <div className="mt-2 flex items-center justify-center">
                     <h6 className="text-sm text-colorMarronFonce">Stack utilisées:</h6>
                     <p className="text-colorMarronFonce">{data.stacks}</p>
                </div>
                <div className="mt-2">
                    <h6 className="text-sm text-colorMarronFonce">Objectif:</h6>
                    <p className="text-colorMarronFonce">{data.description} </p>
                </div>
                <div className="mt-2 flex items-center justify-center space-x-10">
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href={data.github} target='_blank'>{data.titregithub}</a></h6>
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href={data.githubv2} target='_blank'>{data.titregithubv2}</a></h6>
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href={data.site} target='_blank'>{data.titreSite}</a></h6>
                </div>
            </div>
            ))}
        </>
    )
}
export default CardProject