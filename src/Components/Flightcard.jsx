const FlightCard = () => {
    const cards = [
      {
        title: 'Flight Management',
        desc: 'Monitor and manage all active and upcoming flights in real time.',
        icon: '🛫',
      },
      {
        title: 'Passenger Services',
        desc: 'Handle check-ins, ticketing, and customer inquiries efficiently.',
        icon: '🧳',
      },
      {
        title: 'Schedule Planner',
        desc: 'Create, update, and optimize flight schedules with ease.',
        icon: '📅',
      },
      {
        title: 'Analytics Dashboard',
        desc: 'Track performance metrics and generate insightful reports.',
        icon: '📊',
      },
    ];
  
    return (
      <>
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Airline Management Features
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default FlightCard;
  