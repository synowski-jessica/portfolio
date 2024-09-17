const Contact = ()=>{
    return(
        <>
            <div id="contact" className="mt-16  bg-colorRoseBackground h-auto py-3 flex justify-center">
                    <div className="">
                        <h1 className="text-colorMarronFonce text-3xl md:text-6xl tracking-widest text-center  font-bold">Contactez-moi</h1>
                        <p className="text-colorMarronFonce text-center mt-3">N’hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.</p>
                        <div className="bg-colorRoseNav p-4 m-3 custom-shadow rounded-md w-auto md:w-[800px] grid grid-cols-1  text-center mx-4  gap-2  md:space-x-10">
                        <form
                        action="https://formspree.io/f/xeojwwko"
                        method="POST"
                        >
                        <label className="text-colorMarronFonce text-center mb-2">
                            Votre adresse email*</label>
                        <br></br>
                        <input type="email" name="email" required className="rounded-sm w-80 md:w-[500px] mb-2"/>
                        <br></br>
                        <label className="text-colorMarronFonce mb-2">Votre message*</label>
                        <br></br>
                        <textarea name="message" required className="rounded-sm w-80 h-48 mb-2 md:w-[500px]"></textarea>
                        <br></br>   
                        <p className="text-colorMarronFonce text-sm mb-2">* Champs obligatoire</p>                   
                        <button type="submit" className="text-colorMarronFonce text-xl border border-colorMarronFonce text-center p-1 rounded-md hover:bg-colorRoseBackground">Envoyer</button>
                        </form>
                    </div>
                    </div>
                    
            </div>
            </>
        )
}
export default Contact