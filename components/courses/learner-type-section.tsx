interface LearnerTypeSectionProps {
  selectedLearnerType: string | null;
  onSelectLearnerType: (type: string) => void;
}

const learnerTypes = [
  { title: 'Beginner', desc: 'Starting your yoga journey' },
  { title: 'Intermediate', desc: 'Looking to deepen your practice' },
  { title: 'Advanced', desc: 'Wanting to master advanced poses' }
];

export default function LearnerTypeSection({ selectedLearnerType, onSelectLearnerType }: LearnerTypeSectionProps) {
  return (
    <section className="px-8 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Are you...?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {learnerTypes.map((type) => (
            <button
              key={type.title}
              onClick={() => onSelectLearnerType(type.title)}
              className={`p-6 rounded-xl border-2 transition-all ${
                selectedLearnerType === type.title
                  ? 'border-primary bg-orange-50'
                  : 'border-border bg-white hover:border-primary'
              }`}
            >
              <h3 className="font-bold text-lg mb-2">{type.title}</h3>
              <p className="text-sm text-gray-600">{type.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}