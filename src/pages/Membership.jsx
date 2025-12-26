function Membership() {

    const plans = [{
        id : 1,
        name: 'Monthly Plan',
        Price: 599,
        
    },
    {
        id : 2,
        name: '3 Month Plan',
        Price: 1799,
    },
    {
        id : 3,
        name: '6 Month Plan',
        Price: 3499,    
    },
    {
        id : 4,
        name: 'Annual Plan',
        Price: 6999,
    }
    ]
    return (
        <div className="membership-section">
            <h1 className="section-title">Membership Plans</h1>
            <div className="plans-container">
                {plans.map((plan) => (
                    <div key={plan.id} className="plan-card">
                        <h2>{plan.name}</h2>
                        <p className="price">₹ {plan.Price}</p>
                        <p className="duration">only</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Membership;