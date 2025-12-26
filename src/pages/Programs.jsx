import bobybuilding from '../assets/images/bodybuilding.png';
import cardio from '../assets/images/cardio.png';
import diet from '../assets/images/diet.png';
import personaltraining from '../assets/images/personaltraining.png';
import strengthtraining from '../assets/images/strengthtraining.png';

function Programs(){
    const programs = [
        {
            id: 1,
            title: "Body Building",
            description: "Prepare your body for intense muscle growth and strength training.",
            image: bobybuilding
        },
        {
            id: 2,
            title: "Strength Training",
            description: "Enhance your endurance and cardiovascular health with our cardio programs.",
            image: strengthtraining
        },
        {
            id: 3,
            title: "Cardio",
            description: "Boost your overall fitness with high-energy cardio workouts designed to burn calories.",
            image: cardio
        },
        {
            id: 4,
            title: "Personal Training",
            description: "Get customized workout plans and one-on-one coaching from our expert trainers.",
            image: personaltraining
        },
        {
            id: 5,
            title: "Diet & Nutrition Planning",
            description: "Achieve your fitness goals faster with personalized diet and nutrition plans.",
            image: diet
        }
    ];

    return (
        <div className="programs-section">
            <h1 className="section-title">Our Programs</h1>
            <div className="programs-container">
                {programs.map((program) => (
                    <div key={program.id} className="program-card">
                        <div className="program-img-container">
                            <img src={program.image} alt={program.title} className="program-img" />
                        </div>
                        <div className="program-info">
                            <h3>{program.title}</h3>
                            <p>{program.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Programs;    