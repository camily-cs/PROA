import "../../components/Status/style.css"

export const Status = () => {
    return(
        <div className="containerStatus">
            <div className="divStatus">
                <div>
                    <img src="/assets/image/user1.jfif" alt="user1" className="userStatus"/>
                    <p>zayn</p>
                </div>
                <div>
                    <img src="/assets/image/user2.jpg" alt="user2" className="userStatus"/>
                    <p>Tamii</p>
                </div>
                <div>
                    <img src="/assets/image/user3.jpg" alt="user3" className="userStatus"/>
                    <p>Chico</p>
                </div>
                <div>
                    <img src="/assets/image/user4.webp" alt="user4" className="userStatus"/>
                    <p>Kleber</p>
                </div>
                <div>
                    <img src="/assets/image/user5.jpg" alt="user5" className="userStatus"/>
                    <p>Nome</p>
                </div>
                <div>
                    <img src="/assets/image/user6.webp" alt="user6" className="userStatus" />
                    <p>Nome</p>
                </div>
            </div>
        </div>
    )
}