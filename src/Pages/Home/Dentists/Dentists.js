import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './Dentists.css';



const Dentists = () => {

    // state declaration starts 

    const [dentists, setDentists] = useState([])
    // state declaration ends 


    // data load from dentists.json file starts 

    useEffect(() => {
        fetch('dentists.json')
            .then(res => res.json())
            .then(data => setDentists(data));
    }, [])

    // data load from dentists.json file ends     

    return (

        // dentists section starts 
        <div id="dentists" className="container w-100 m-auto p-5">

            {/* title starts */}
            <h2 className="dentist-title">Our Dentists</h2>
            {/* title ends  */}

            <br />

            <div className="row">


                {/* dentists left side menu starts  */}
                <div className="col-md-4 dentists-menu">
                    <div className="flex-column align-items-sm-center justify-content-sm-center">
                        <br />

                        <h1 className="dentist-title">Our Specialized Dentists</h1>

                        <p style={{ color: 'rgb(19, 113, 150)' }}>
                            Take care of your teeth and consult with our expert dentists today!!
                        </p>

                        <img src="https://image.freepik.com/free-vector/doctor-character-background_1270-84.jpg" alt="" width="200px" />
                        <br /> <br />

                        <Button>Consult Now &#8594;</Button>
                        <br /> <br /> <br />

                        {/* dentists info starts  */}

                        <p className="dentist-info">The legal professionals found through this page can advise regarding dentists, crowns & bridges, dentures, and dental implants. These experts can provide reports regarding cosmetic dentistry, TMJ disorders, oral surgery, and endodontics.</p>

                        <br /> <br /> <br />
                        <small className="dentist-info">A great dentist understands that a patient needs to feel in control of his or her treatment. Honesty and Compassion: A good dentist is also honest and compassionate. Dental problems can affect many areas of a person's life, and dentists need to be sensitive to the problems caused by poor dental health.</small>

                        {/* dentists info ends  */}

                        <br />
                    </div>
                </div>
                {/* dentists left side menu ends  */}



                {/* showing all dentists after data loading starts  */}
                <div className="col-md-8">
                    <div className="row">

                        {dentists.map((dentist) => (
                            <div key={dentist.id} className="col-md-6 col-lg-6 col-sm-12">
                                <div className="cart dentist p-3 m-2 border border">

                                    {/* image showing starts  */}
                                    <div className="dentist img">
                                        <img src={dentist.img} alt="category" />
                                    </div>
                                    {/* image showing ends  */}


                                    {/* dentist info starts  */}
                                    <h4 className="mt-4 dentist-info">{dentist.name}</h4>
                                    <h6 className="mt-2 dentist-info">{dentist.designation}</h6>
                                    {/* dentist info ends  */}


                                    {/* contact icon starts */}
                                    <div className="icons">
                                        <i class="fab fa-facebook"></i> <i class="fab fa-twitter-square"></i> <i class="fas fa-envelope-square"></i> <i class="fab fa-linkedin"></i>
                                    </div>
                                    {/* contact icon ends */}



                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* showing all dentists after data loading ends  */}

            </div>




        </div>

        // dentists section ends 
    );
};

export default Dentists;