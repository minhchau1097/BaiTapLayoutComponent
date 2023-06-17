import React from "react";

function Item() {
    return (
        <div className="col-lg-3 col-xxl-4 mb-5">
            <div className="card text-black  text-center">
                <div className="card-header">
                    <img className="card-img-top" src="https://ro-camper.ro/imgs/inchiriat-camper-romania-rulota.jpg.png" alt="hinh" />
                </div>
                <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
                        molestias ipsam aspernatur numquam incidunt animi veniam assumenda modi minus ipsa quos
                        consectetur laborum quo aperiam voluptatibus fuga, a obcaecati voluptatem.</p>
                </div>
                <div className="card-footer text-muted">
                    <button className="btn btn-primary">Find out more</button>
                </div>
            </div>
        </div>

    )
}

export default Item;