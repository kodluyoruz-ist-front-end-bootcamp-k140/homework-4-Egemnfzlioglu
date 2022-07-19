    import React from "react";

    const AboutComponent = () => {
    return (
        <div class="card mb-3">
        <img
            src="https://i.picsum.photos/id/1057/6016/4016.jpg?hmac=RjPyzbGq_MxSbghhfa1iVykXTskk9IISuzavny11_lI"
            class="card-img-top"
            alt="picsum"
            style={{ width: "100%", height: "50vh" }}
        />

        <div class="card-body" style={{ textAlign: "center" }}>
            <h2 class="card-title" style={{ color: "red" }}>
            {" "}
            <em> Hakkımızda </em>
            </h2>
            <p class="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            voluptatibus maxime fugit dolor minus perspiciatis neque maiores non
            vel reprehenderit? Deleniti libero magnam pariatur, officia culpa
            aliquam nesciunt facere doloremque quos ut reiciendis. Maxime ipsa
            maiores aperiam, ipsum atque impedit ab consectetur praesentium labore
            esse dolorem culpa odit quas et.
            </p>
            <p class="card-text">
            <small class="text-muted">{new Date().toLocaleString()}</small>
            </p>
        </div>
        </div>
    );
    };

    export default AboutComponent;
