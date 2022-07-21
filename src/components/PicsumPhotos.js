    import React, { useEffect, useState } from "react";
    import { NavLink } from "react-router-dom";

    const PicsumPhotos = () => {
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        loadPic();
    }, []);

    const APİ = "https://picsum.photos/v2/list";
    const DEGER = 15;

    // ### dataların çekilmesi
    const loadPic = () => {
        setLoading(true);
        fetch(APİ)
        .then((x) => x.json())
        .then((response) => {
            setPhotos(response);
            setLoading(false);
        })
        .catch((e) => {
            console.log(e);
            setLoading(false);
        });
    };

    // console.log(photos);

    // ### photo ların yazılması
    const renderPicsum = () => {
        return (
        <>
            <h1 style={{ textAlign: "center" }}>Lorem Picsum Api</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {photos.splice(0, DEGER).map((photo) => {
                return (
                <div className="col" key={photo.id}>
                    <div className="card h-100">
                    <img
                        src={photo.download_url}
                        className="card-img-top"
                        alt={photo.download_url}
                        style={{ width: "100%", height: "35vh" }}
                    />
                    <div className="card-body" style={{ textAlign: "center" }}>
                        <h5 className="card-title">{photo.author}</h5>

                        <p className="text" style={{ padding: "1rem 0 0 0" }}>
                        <NavLink to={photo.download_url}>Download </NavLink>
                        <span> or </span>
                        <a href={photo.url} target="_blank">
                            {" "}
                            View
                        </a>
                        </p>
                    </div>

                    <div className="card-footer">
                        <p className="card-text">{photo.height}</p>
                    </div>
                    </div>
                </div>
                );
            })}
            </div>
        </>
        );
    };

    return <div>{loading ? "Yükleniyor" : renderPicsum()}</div>;
    };

    export default PicsumPhotos;
