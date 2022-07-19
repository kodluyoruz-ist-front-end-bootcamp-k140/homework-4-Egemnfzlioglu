    import React from "react";



    // ### contact sayfası 
    
    const ContactComponent = () => {
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-6 mt-5" >
            <img
                src="https://i.picsum.photos/id/1060/5598/3732.jpg?hmac=31kU0jp5ejnPTdEt-8tAXU5sE-buU-y1W1qk_BsiUC8"
                alt="photo"
                style={{ width: "100%" }}
            />
            </div>

            <div className="col-md-6 mt-5  " style={{textAlign:"center"}}>
            <h2 className="mt-5"> İletişim</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                praesentium!
            </p>

            <h2 className="mt-5">Adres</h2>
            <p>
                At, labore natus quam deleniti hic eos repellat necessitatibus
                voluptate.
            </p>
            </div>
        </div>
        </div>
    );
    };

    export default ContactComponent;
