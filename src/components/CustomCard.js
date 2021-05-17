function CustomCard({right, title, textInfo, image, link, googleMapsLink, goOutside}) {
    console.log(image)

    function truncate(str) {
        return str.length > 600 ? str.substring(0, 597) + "..." : str;
    }

    return (
        <div className="custom-card">
            {right ?
            <>
                <div className="custom-card-info">
                    <div className="custom-card-text">
                        <h3 className="custom-card-title">{title}</h3>
                        <p>{truncate(textInfo)}</p>
                    </div>
                    <div className="custom-card-button-right">
                        <a role="button" className="btn btn-outline-primary" href={link} target={goOutside && "_blank"} >More</a>
                    </div>
                </div>
                {googleMapsLink ?
                    <div className="custom-card-image google-maps">
                        <img src={image} alt="Card" />
                        <iframe src={googleMapsLink} allowfullscreen="true" loading="lazy"></iframe>
                    </div>
                :
                    <div className="custom-card-image">
                        <img src={image} alt="Card" />
                    </div>
                }
            </>
            :
            <>
                {googleMapsLink ?
                    <div className="custom-card-image google-maps">
                        <img src={image} alt="Card" />
                        <iframe src={googleMapsLink} allowfullscreen="true" loading="lazy"></iframe>
                    </div>
                :
                    <div className="custom-card-image">
                        <img src={image} alt="Card" />
                    </div>
                }
                <div className="custom-card-info">
                    <div className="custom-card-text">
                        <h3 className="custom-card-title">{title}</h3>
                        <p>{truncate(textInfo)}</p>
                    </div>
                    <div className="custom-card-button-left">
                        <a role="button" className="btn btn-outline-primary" href={link} target={goOutside && "_blank"} >More</a>
                    </div>
                </div>
            </>
            }
        </div>
    )
}

export default CustomCard;