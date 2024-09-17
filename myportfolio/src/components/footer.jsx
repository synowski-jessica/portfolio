const FooterWeb = () => {
    return (
        <>
            <footer className="relative h-32 md:h-52 bg-cover bg-center bg-[url('/src/assets/footerMobile.png')] sm:bg-[url('/src/assets/footer.png')]">
                <div className="flex justify-center items-center h-full">
                    <div className="absolute bottom-0 text-center">
                        <h1 className="text-colorMarronFonce text-xs md:text-base">
                            © Copyright 2024 - Jessica Synowski. Tous droits réservés.
                        </h1>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterWeb;
