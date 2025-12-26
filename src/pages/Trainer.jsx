import kamesh from '../assets/images/kamesh.png';
import balavenket from '../assets/images/balavenket.png';

function Trainer() {

const trainers = [
    { 
        id : 1, 
        name: 'Bala Venket', 
        specialty: 'Bodybuilding', 
        experience: 12,
        image: balavenket
    },
    { 
        id : 2, 
        name: 'Kamesh Karan', 
        specialty: 'Strength Training & Weight Loss', 
        experience: 5,
        image: kamesh
    }
]
    return (
        <div className="trainer-section">
            <h1 className="section-title">Our Expert Trainers</h1>

            <div className="trainers-container">
                {trainers.map((trainer) => (
                    <div key={trainer.id} className="trainer-card">
                        <div className="trainer-img-container">
                            <img src={trainer.image} alt={trainer.name} className="trainer-img" />
                        </div>
                        <div className="trainer-info">
                            <h2>{trainer.name}</h2>
                            <p className="specialty"><span style={{color: 'white', fontSize: '0.9rem', fontWeight: 'normal'}}>Specialist in </span>{trainer.specialty}</p>
                            <p className="experience">{trainer.experience} Years Experience</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Trainer;