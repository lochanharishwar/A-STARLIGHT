import { Exoplanet, Mission, Avatar, JourneyPath } from './types';

// Representative sample of a much larger dataset.
export const EXOPLANET_DATA: Exoplanet[] = [
  { name: 'Proxima Centauri b', discoveryYear: 2016, discoveryMethod: 'Radial Velocity', orbitalPeriod: 11.2, radius: 1.1, mass: 1.17, starType: 'M', distance: 4.2, imageUrl: 'https://placehold.co/600x400/2c0f2f/f472b6?text=Proxima%0ACentauri%0Ab', status: 'Confirmed', habitableZone: true },
  { name: 'TRAPPIST-1e', discoveryYear: 2017, discoveryMethod: 'Transit', orbitalPeriod: 6.1, radius: 0.92, mass: 0.69, starType: 'M', distance: 39.5, imageUrl: 'https://placehold.co/600x400/4c1d42/e9d5ff?text=TRAPPIST-1e', status: 'Confirmed', habitableZone: true },
  { name: 'Kepler-186f', discoveryYear: 2014, discoveryMethod: 'Transit', orbitalPeriod: 130, radius: 1.17, mass: 1.4, starType: 'M', distance: 500, imageUrl: 'https://placehold.co/600x400/581c87/f472b6?text=Kepler-186f', status: 'Confirmed', habitableZone: true },
  { name: 'Kepler-452b', discoveryYear: 2015, discoveryMethod: 'Transit', orbitalPeriod: 385, radius: 1.63, mass: 5.0, starType: 'G', distance: 1400, imageUrl: 'https://placehold.co/600x400/3b0764/f0abfc?text=Kepler-452b', status: 'Confirmed', habitableZone: true },
  { name: '55 Cancri e', discoveryYear: 2004, discoveryMethod: 'Radial Velocity', orbitalPeriod: 0.7, radius: 1.88, mass: 7.99, starType: 'G', distance: 41, imageUrl: 'https://placehold.co/600x400/1e1b4b/c084fc?text=55%0ACancri%0Ae', status: 'Confirmed', habitableZone: false },
  { name: 'HD 189733b', discoveryYear: 2005, discoveryMethod: 'Transit', orbitalPeriod: 2.2, radius: 13.8, mass: 365.4, starType: 'K', distance: 63, imageUrl: 'https://placehold.co/600x400/0c4a6e/a5b4fc?text=HD%0A189733b', status: 'Confirmed', habitableZone: false },
  { name: 'LHS 1140 b', discoveryYear: 2017, discoveryMethod: 'Transit', orbitalPeriod: 24.7, radius: 1.73, mass: 6.98, starType: 'M', distance: 49, imageUrl: 'https://placehold.co/600x400/4a044e/fbcfe8?text=LHS%0A1140%0Ab', status: 'Confirmed', habitableZone: true },
  { name: 'Gliese 581g', discoveryYear: 2010, discoveryMethod: 'Radial Velocity', orbitalPeriod: 36.6, radius: 1.5, mass: 3.1, starType: 'M', distance: 20.3, imageUrl: 'https://placehold.co/600x400/701a75/f5d0fe?text=Gliese%0A581g', status: 'Candidate', habitableZone: true },
  { name: 'WASP-12b', discoveryYear: 2008, discoveryMethod: 'Transit', orbitalPeriod: 1.1, radius: 21.6, mass: 441.8, starType: 'G', distance: 870, imageUrl: 'https://placehold.co/600x400/270438/ffbb78?text=WASP-12b', status: 'Confirmed', habitableZone: false },
  { name: 'Kepler-22b', discoveryYear: 2011, discoveryMethod: 'Transit', orbitalPeriod: 290, radius: 2.4, mass: 13.0, starType: 'G', distance: 620, imageUrl: 'https://placehold.co/600x400/0b2244/99ddff?text=Kepler-22b', status: 'Confirmed', habitableZone: true },
  { name: 'CoRoT-7b', discoveryYear: 2009, discoveryMethod: 'Transit', orbitalPeriod: 0.85, radius: 1.58, mass: 4.8, starType: 'G', distance: 490, imageUrl: 'https://placehold.co/600x400/3C1800/FF8C00?text=CoRoT-7b', status: 'Confirmed', habitableZone: false },
  { name: 'Kepler-16b', discoveryYear: 2011, discoveryMethod: 'Transit', orbitalPeriod: 229, radius: 8.5, mass: 106.0, starType: 'K & M', distance: 245, imageUrl: 'https://placehold.co/600x400/4A2C00/FFFF00?text=Kepler-16b', status: 'Confirmed', habitableZone: false },
  { name: 'PSR B1257+12 B', discoveryYear: 1994, discoveryMethod: 'Pulsar Timing', orbitalPeriod: 66.5, radius: 1.5, mass: 4.3, starType: 'Pulsar', distance: 2300, imageUrl: 'https://placehold.co/600x400/2A002A/EE82EE?text=PSR%0AB1257%2B12%0AB', status: 'Confirmed', habitableZone: false },
  { name: 'HD 209458 b', discoveryYear: 1999, discoveryMethod: 'Transit', orbitalPeriod: 3.5, radius: 15.3, mass: 220, starType: 'G', distance: 159, imageUrl: 'https://placehold.co/600x400/4A4A2A/F0E68C?text=HD%0A209458%0Ab', status: 'Confirmed', habitableZone: false },
  { name: 'Kepler-1649c', discoveryYear: 2020, discoveryMethod: 'Transit', orbitalPeriod: 19.5, radius: 1.06, mass: 1.2, starType: 'M', distance: 301, imageUrl: 'https://placehold.co/600x400/581c87/f472b6?text=Kepler-1649c', status: 'Confirmed', habitableZone: true },
  { name: 'TOI 700 d', discoveryYear: 2020, discoveryMethod: 'Transit', orbitalPeriod: 37.4, radius: 1.14, mass: 2.1, starType: 'M', distance: 101.4, imageUrl: 'https://placehold.co/600x400/4a044e/fbcfe8?text=TOI%0A700%0Ad', status: 'Confirmed', habitableZone: true },
  { name: 'Gliese 667 Cc', discoveryYear: 2011, discoveryMethod: 'Radial Velocity', orbitalPeriod: 28.1, radius: 1.5, mass: 3.8, starType: 'M', distance: 23.6, imageUrl: 'https://placehold.co/600x400/701a75/f5d0fe?text=Gliese%0A667%0ACc', status: 'Confirmed', habitableZone: true },
  { name: 'HD 40307 g', discoveryYear: 2012, discoveryMethod: 'Radial Velocity', orbitalPeriod: 197.8, radius: 1.8, mass: 7.1, starType: 'K', distance: 42, imageUrl: 'https://placehold.co/600x400/0c4a6e/a5b4fc?text=HD%0A40307%0Ag', status: 'Confirmed', habitableZone: true },
  { name: 'Kepler-62f', discoveryYear: 2013, discoveryMethod: 'Transit', orbitalPeriod: 267.3, radius: 1.41, mass: 2.8, starType: 'K', distance: 990, imageUrl: 'https://placehold.co/600x400/0b2244/99ddff?text=Kepler-62f', status: 'Confirmed', habitableZone: true },
  { name: 'PSO J318.5-22', discoveryYear: 2013, discoveryMethod: 'Direct Imaging', orbitalPeriod: 29200, radius: 13, mass: 2066, starType: 'Rogue', distance: 80, imageUrl: 'https://placehold.co/600x400/1e1b4b/c084fc?text=PSO%0AJ318.5-22', status: 'Confirmed', habitableZone: false },
  { name: 'Fomalhaut b', discoveryYear: 2008, discoveryMethod: 'Direct Imaging', orbitalPeriod: 320000, radius: 12, mass: 318, starType: 'A', distance: 25, imageUrl: 'https://placehold.co/600x400/270438/ffbb78?text=Fomalhaut%0Ab', status: 'Confirmed', habitableZone: false },
  { name: '51 Pegasi b', discoveryYear: 1995, discoveryMethod: 'Radial Velocity', orbitalPeriod: 4.2, radius: 13.6, mass: 150, starType: 'G', distance: 50.9, imageUrl: 'https://placehold.co/600x400/4A4A2A/F0E68C?text=51%0APegasi%0Ab', status: 'Confirmed', habitableZone: false },
  { name: 'TRAPPIST-1d', discoveryYear: 2016, discoveryMethod: 'Transit', orbitalPeriod: 4.05, radius: 0.78, mass: 0.39, starType: 'M', distance: 39.5, imageUrl: 'https://placehold.co/600x400/4c1d42/e9d5ff?text=TRAPPIST-1d', status: 'Confirmed', habitableZone: false },
  { name: 'TRAPPIST-1f', discoveryYear: 2017, discoveryMethod: 'Transit', orbitalPeriod: 9.2, radius: 1.04, mass: 0.93, starType: 'M', distance: 39.5, imageUrl: 'https://placehold.co/600x400/581c87/f472b6?text=TRAPPIST-1f', status: 'Confirmed', habitableZone: true },
  { name: 'TRAPPIST-1g', discoveryYear: 2017, discoveryMethod: 'Transit', orbitalPeriod: 12.35, radius: 1.15, mass: 1.15, starType: 'M', distance: 39.5, imageUrl: 'https://placehold.co/600x400/3b0764/f0abfc?text=TRAPPIST-1g', status: 'Confirmed', habitableZone: true },
  { name: 'Kepler-10b', discoveryYear: 2011, discoveryMethod: 'Transit', orbitalPeriod: 0.84, radius: 1.47, mass: 4.6, starType: 'G', distance: 564, imageUrl: 'https://placehold.co/600x400/3C1800/FF8C00?text=Kepler-10b', status: 'Confirmed', habitableZone: false },
  { name: 'Gliese 876 d', discoveryYear: 2005, discoveryMethod: 'Radial Velocity', orbitalPeriod: 1.94, radius: 1.5, mass: 6.8, starType: 'M', distance: 15, imageUrl: 'https://placehold.co/600x400/701a75/f5d0fe?text=Gliese%0A876%0Ad', status: 'Confirmed', habitableZone: false },
  { name: 'WASP-121b', discoveryYear: 2015, discoveryMethod: 'Transit', orbitalPeriod: 1.27, radius: 21, mass: 381, starType: 'F', distance: 855, imageUrl: 'https://placehold.co/600x400/270438/ffbb78?text=WASP-121b', status: 'Confirmed', habitableZone: false },
  { name: 'GJ 1214 b', discoveryYear: 2009, discoveryMethod: 'Transit', orbitalPeriod: 1.58, radius: 2.85, mass: 8.17, starType: 'M', distance: 48, imageUrl: 'https://placehold.co/600x400/4a044e/fbcfe8?text=GJ%0A1214%0Ab', status: 'Confirmed', habitableZone: false },
  { name: 'Kepler-7b', discoveryYear: 2010, discoveryMethod: 'Transit', orbitalPeriod: 4.89, radius: 18.2, mass: 146, starType: 'G', distance: 3105, imageUrl: 'https://placehold.co/600x400/0b2244/99ddff?text=Kepler-7b', status: 'Confirmed', habitableZone: false },
  { name: 'HD 219134 b', discoveryYear: 2015, discoveryMethod: 'Radial Velocity', orbitalPeriod: 3.09, radius: 1.6, mass: 4.74, starType: 'K', distance: 21.3, imageUrl: 'https://placehold.co/600x400/1e1b4b/c084fc?text=HD%0A219134%0Ab', status: 'Confirmed', habitableZone: false },
  { name: 'K2-18b', discoveryYear: 2015, discoveryMethod: 'Transit', orbitalPeriod: 32.9, radius: 2.71, mass: 8.63, starType: 'M', distance: 124, imageUrl: 'https://placehold.co/600x400/4A2C00/FFFF00?text=K2-18b', status: 'Confirmed', habitableZone: true },
  { name: 'Wolf 1061c', discoveryYear: 2015, discoveryMethod: 'Radial Velocity', orbitalPeriod: 17.9, radius: 1.6, mass: 3.41, starType: 'M', distance: 14, imageUrl: 'https://placehold.co/600x400/2A002A/EE82EE?text=Wolf%0A1061c', status: 'Confirmed', habitableZone: true },
  { name: 'Beta Pictoris b', discoveryYear: 2008, discoveryMethod: 'Direct Imaging', orbitalPeriod: 7890, radius: 18, mass: 2860, starType: 'A', distance: 63, imageUrl: 'https://placehold.co/600x400/4A4A2A/F0E68C?text=Beta%0APictoris%0Ab', status: 'Confirmed', habitableZone: false },
  { name: 'HAT-P-7b', discoveryYear: 2008, discoveryMethod: 'Transit', orbitalPeriod: 2.2, radius: 16.1, mass: 540, starType: 'F', distance: 1110, imageUrl: 'https://placehold.co/600x400/2c0f2f/f472b6?text=HAT-P-7b', status: 'Confirmed', habitableZone: false },
  { name: 'Kepler-11f', discoveryYear: 2011, discoveryMethod: 'Transit', orbitalPeriod: 46.7, radius: 2.6, mass: 2.0, starType: 'G', distance: 2150, imageUrl: 'https://placehold.co/600x400/4c1d42/e9d5ff?text=Kepler-11f', status: 'Confirmed', habitableZone: false },
  { name: 'Gliese 581e', discoveryYear: 2009, discoveryMethod: 'Radial Velocity', orbitalPeriod: 3.15, radius: 1.2, mass: 1.7, starType: 'M', distance: 20.3, imageUrl: 'https://placehold.co/600x400/581c87/f472b6?text=Gliese%0A581e', status: 'Confirmed', habitableZone: false },
  { name: 'Luyten b', discoveryYear: 2017, discoveryMethod: 'Radial Velocity', orbitalPeriod: 18.6, radius: 1.4, mass: 2.89, starType: 'M', distance: 12.3, imageUrl: 'https://placehold.co/600x400/3b0764/f0abfc?text=Luyten%0Ab', status: 'Confirmed', habitableZone: true },
  { name: 'Kepler-20e', discoveryYear: 2011, discoveryMethod: 'Transit', orbitalPeriod: 6.1, radius: 0.86, mass: 0.76, starType: 'G', distance: 929, imageUrl: 'https://placehold.co/600x400/1e1b4b/c084fc?text=Kepler-20e', status: 'Confirmed', habitableZone: false },
  { name: 'Gliese 436 b', discoveryYear: 2004, discoveryMethod: 'Transit', orbitalPeriod: 2.64, radius: 4.33, mass: 22.1, starType: 'M', distance: 33, imageUrl: 'https://placehold.co/600x400/0c4a6e/a5b4fc?text=Gliese%0A436%0Ab', status: 'Confirmed', habitableZone: false },
  { name: 'WASP-19b', discoveryYear: 2009, discoveryMethod: 'Transit', orbitalPeriod: 0.79, radius: 15.6, mass: 365, starType: 'G', distance: 887, imageUrl: 'https://placehold.co/600x400/270438/ffbb78?text=WASP-19b', status: 'Confirmed', habitableZone: false },
  { name: 'Kepler-444 system', discoveryYear: 2015, discoveryMethod: 'Transit', orbitalPeriod: 9.7, radius: 0.74, mass: 0.5, starType: 'K', distance: 119, imageUrl: 'https://placehold.co/600x400/4a044e/fbcfe8?text=Kepler-444', status: 'Confirmed', habitableZone: false },
  { name: 'HD 10180 g', discoveryYear: 2010, discoveryMethod: 'Radial Velocity', orbitalPeriod: 21.7, radius: 2.0, mass: 21.4, starType: 'G', distance: 127, imageUrl: 'https://placehold.co/600x400/701a75/f5d0fe?text=HD%0A10180%0Ag', status: 'Candidate', habitableZone: true },
  { name: 'COROT-9b', discoveryYear: 2010, discoveryMethod: 'Transit', orbitalPeriod: 95.3, radius: 11.8, mass: 267, starType: 'G', distance: 1500, imageUrl: 'https://placehold.co/600x400/0b2244/99ddff?text=COROT-9b', status: 'Confirmed', habitableZone: false },
  { name: 'Kepler-37b', discoveryYear: 2013, discoveryMethod: 'Transit', orbitalPeriod: 13.4, radius: 0.3, mass: 0.01, starType: 'G', distance: 209, imageUrl: 'https://placehold.co/600x400/3C1800/FF8C00?text=Kepler-37b', status: 'Confirmed', habitableZone: false },
  { name: 'Upsilon Andromedae d', discoveryYear: 1999, discoveryMethod: 'Radial Velocity', orbitalPeriod: 1276, radius: 11, mass: 1265, starType: 'F', distance: 44, imageUrl: 'https://placehold.co/600x400/4A2C00/FFFF00?text=Upsilon%0AAndromedae%0Ad', status: 'Confirmed', habitableZone: false },
  { name: 'Kapteyn b', discoveryYear: 2014, discoveryMethod: 'Radial Velocity', orbitalPeriod: 48.6, radius: 1.6, mass: 4.8, starType: 'M', distance: 12.8, imageUrl: 'https://placehold.co/600x400/4A4A2A/F0E68C?text=Kapteyn%0Ab', status: 'Confirmed', habitableZone: true },
  { name: 'Kepler-296e', discoveryYear: 2014, discoveryMethod: 'Transit', orbitalPeriod: 34.1, radius: 1.75, mass: 4.5, starType: 'M', distance: 737, imageUrl: 'https://placehold.co/600x400/2c0f2f/f472b6?text=Kepler-296e', status: 'Confirmed', habitableZone: true }
];

export const ML_MODEL_LABELS = ['Confirmed', 'Candidate', 'False Positive'];

export const GLOSSARY_TERMS = [
    {
        term: 'Absorption Lines',
        definition: 'Dark lines that appear in a star\'s color spectrum (its rainbow). They are like chemical fingerprints, showing which elements are present in the star\'s atmosphere because each element absorbs specific colors of light.'
    },
    {
        term: 'Biosignature',
        definition: 'A sign of life. In space, this is often a gas (like oxygen) in a planet\'s atmosphere that is unlikely to exist without being produced by living things.'
    },
    {
        term: 'Blueshift',
        definition: 'The opposite of Redshift. When a star is moving towards us, its light waves get squished together, making them look slightly bluer. This helps us know the direction a star is moving.'
    },
    {
        term: 'Dashboard',
        definition: 'A visual display of key information and data, like graphs and charts. It\'s used to summarize and show the most important parts of the data.'
    },
    {
        term: 'Direct Imaging',
        definition: 'A method of finding exoplanets by taking a direct picture of them. This is very difficult because planets are extremely dim compared to their bright host stars.'
    },
    {
        term: 'Doppler Shift',
        definition: 'The change in color of light from a star as it wobbles towards us (Blueshift) or away from us (Redshift). This wobble is often caused by the gravitational pull of an orbiting planet.'
    },
    {
        term: 'Exoplanet',
        definition: 'A planet that orbits a star outside our solar system. The "exo" prefix means "outside."'
    },
    {
        term: 'False Positive',
        definition: "In exoplanet hunting, this is a signal that looks like a planet but is actually caused by something else, like two stars orbiting each other. AI helps filter these out."
    },
    {
        term: 'Gravity Assist',
        definition: 'A "slingshot" maneuver where a spacecraft flies close to a planet to use its gravity to gain speed and change direction, saving a lot of fuel.'
    },
    {
        term: 'Habitable Zone',
        definition: 'The "Goldilocks" region around a star where conditions are not too hot and not too cold, making it possible for liquid water to exist on a planet\'s surface.'
    },
    {
        term: 'Hertzsprung-Russell (H-R) Diagram',
        definition: 'A special chart that astronomers use to sort stars based on their brightness and temperature. It helps us understand how stars are born, live, and die.'
    },
    {
        term: 'Hohmann Transfer Orbit',
        definition: 'The most fuel-efficient path for a spacecraft to travel between two planets, like from Earth to Mars. It involves an elliptical orbit that touches the orbits of both planets.'
    },
    {
        term: 'Hyperparameter',
        definition: "A setting used to control how a machine learning model learns. Tweaking these can improve the model's accuracy, like tuning the knobs on a radio."
    },
    {
        term: 'Kinetic Impactor',
        definition: 'A planetary defense method where a spacecraft is intentionally crashed into an asteroid to change its path and prevent it from hitting Earth.'
    },
    {
        term: 'Lagrange Point',
        definition: 'A special spot in space where the gravity of two large objects, like the Sun and Earth, balance each other out. A spacecraft can "park" here using very little fuel.'
    },
    {
        term: 'Light Curve',
        definition: 'A graph that shows the brightness of a star over time. A dip in the line can be a clue that an exoplanet has passed in front of it (a transit).'
    },
    {
        term: 'Luminosity',
        definition: 'The total amount of light and energy a star gives off. It\'s a measure of how truly bright a star is, regardless of how far away it is.'
    },
    {
        term: 'Machine Learning (ML)',
        definition: "A type of AI where computers learn from data without being explicitly programmed. In this app, it's used to find patterns to classify exoplanets."
    },
    {
        term: 'Main Sequence',
        definition: 'The long, stable phase of a star\'s life where it shines by turning hydrogen into helium in its core. Our Sun is a main-sequence star.'
    },
    {
        term: 'Multi-stage rocket',
        definition: 'A rocket made of several parts (stages) that are dropped one by one as they run out of fuel. This makes the rocket lighter and helps it go faster.'
    },
    {
        term: 'Near-Earth Object (NEO)',
        definition: 'An asteroid or comet whose orbit brings it close to Earth. Scientists track these to make sure they won\'t hit our planet.'
    },
    {
        term: 'Orbital Period',
        definition: 'The time it takes for a planet to complete one full orbit around its star. For Earth, this is one year.'
    },
    {
        term: 'Parallax',
        definition: 'The way a nearby star seems to shift its position against distant background stars when we look at it from different points in Earth\'s orbit. It\'s used to measure a star\'s distance.'
    },
    {
        term: 'Parsec',
        definition: 'A unit of distance used by astronomers, equal to about 3.26 light-years. It\'s based on measuring a star\'s parallax.'
    },
    {
        term: 'Pulsar Timing',
        definition: 'A method to find exoplanets by watching the extremely regular pulses of light from a pulsar (a dead star). Tiny changes in the timing of the pulses can mean a planet is orbiting it.'
    },
    {
        term: 'Radial Velocity Method',
        definition: 'A way to find exoplanets by looking for the "wobble" of a star. A planet\'s gravity tugs on its star, causing it to move back and forth, which we can see with the Doppler Shift.'
    },
    {
        term: 'Radioisotope Thermoelectric Generator (RTG)',
        definition: 'A type of "nuclear battery" that powers spacecraft going to the outer solar system where sunlight is too weak for solar panels.'
    },
    {
        term: 'Reaction Wheel',
        definition: 'A spinning wheel inside a spacecraft. By changing its speed, the spacecraft can turn and aim itself without using rocket fuel.'
    },
    {
        term: 'Red Edge',
        definition: 'A potential biosignature where a planet reflects a lot of infrared light. On Earth, this is caused by plants, so seeing it on an exoplanet could be a sign of alien photosynthesis.'
    },
    {
        term: 'Redshift',
        definition: 'The opposite of Blueshift. When a star is moving away from us, its light waves get stretched out, making them look slightly redder.'
    },
    {
        term: 'Specific Impulse (Isp)',
        definition: 'A number that tells you how fuel-efficient a rocket engine is. A higher number means the engine is more efficient.'
    },
    {
        term: 'Spectrum',
        definition: 'The rainbow of colors created when you split light through a prism. For stars, the spectrum can tell us what they are made of and how hot they are.'
    },
    {
        term: 'Thrust',
        definition: 'The powerful force that pushes a rocket forward. It\'s created when the engine shoots hot gas out of its back.'
    },
    {
        term: 'Tidally Locked',
        definition: 'When a planet is so close to its star that it always shows the same face to it, just like our Moon does to Earth. One side is always day, and the other is always night.'
    },
    {
        term: 'Transit Method',
        definition: "The most common way to find exoplanets. It involves watching for a tiny, temporary dip in a star's brightness, which happens when a planet passes in front of it."
    },
    {
        term: 'Transmission Spectroscopy',
        definition: 'A technique to study an exoplanet\'s atmosphere. When the planet transits, scientists study the starlight that filters through its atmosphere to see what gases are there.'
    },
    {
        term: 'White Dwarf',
        definition: 'The hot, super-dense core left over after a star like our Sun runs out of fuel and dies.'
    },
    {
        term: 'Yarkovsky effect',
        definition: 'A tiny push on an asteroid caused by sunlight. The sun heats the asteroid, and as it cools and spins, it gives off heat, which acts like a tiny rocket engine that can change its path over time.'
    },
].sort((a, b) => a.term.localeCompare(b.term));


// EXO-JOURNEY CONSTANTS
export const AVATARS: Avatar[] = [
    { name: JourneyPath.StellarScientist, url: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=200&h=200&auto=format&fit=crop' },
    { name: JourneyPath.CosmicCartographer, url: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=200&h=200&auto=format&fit=crop' },
    { name: JourneyPath.GalaxyGuardian, url: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=200&h=200&auto=format&fit=crop' },
    { name: JourneyPath.RocketRanger, url: 'https://images.unsplash.com/photo-1457364887197-9150188c107b?q=80&w=200&h=200&auto=format&fit=crop' },
];

export const EXO_JOURNEY_PATHS: Record<JourneyPath, Mission[]> = {
    [JourneyPath.StellarScientist]: [
        {
            id: 'ss-mission-1',
            title: 'Stellar Spectra',
            description: 'Learn to read the rainbow fingerprint of a star to understand its composition and temperature.',
            badge: { name: 'Spectrum Analyst', icon: 'Badge' },
            lessons: [
                {
                    id: 'ss-m1-l1', type: 'reading', title: 'A Star\'s Rainbow', points: 10,
                    content: { text: "When starlight passes through a prism, it splits into a spectrum. Dark lines, called absorption lines, appear where elements in the star's atmosphere have absorbed specific colors. These lines are a chemical fingerprint!", imageUrl: 'https://images.unsplash.com/photo-1534294643634-398d15f76b4c?q=80&w=600&h=300&auto=format&fit=crop' }
                },
                {
                    id: 'ss-m1-l2', type: 'quiz', title: 'Knowledge Check', points: 15,
                    content: {
                        beginner: [
                            { question: 'What do the dark lines in a star\'s spectrum tell us?', options: ['Its age', 'Its chemical composition', 'Its distance', 'Its speed'], correctAnswer: 'Its chemical composition', explanation: 'Correct! Each element absorbs light at unique wavelengths, creating a unique pattern of dark lines.' }
                        ],
                        intermediate: [
                            { question: "If a star's spectrum is shifted towards the blue end, what does this 'blueshift' indicate?", options: ["The star is moving away", "The star is cooling down", "The star is moving closer", "The star is expanding"], correctAnswer: 'The star is moving closer', explanation: "Correct! The Doppler effect causes light waves to compress as a source moves towards us, shifting them to higher-frequency (bluer) light." }
                        ],
                        advanced: [
                            { question: 'Which type of star would show the weakest hydrogen absorption lines in its visible spectrum?', options: ['A cool M-type star', 'A Sun-like G-type star', 'A very hot O-type star', 'A white dwarf'], correctAnswer: 'A very hot O-type star', explanation: "Correct! In the hottest stars, hydrogen is ionized (electrons are stripped away), so it can't absorb photons in the same way, leading to weak lines." }
                        ]
                    }
                }
            ]
        },
        {
            id: 'ss-mission-2',
            title: 'Hertzsprung-Russell Diagram',
            description: 'Map stars based on their brightness and temperature to understand their life cycles.',
            badge: { name: 'Star Mapper', icon: 'Badge' },
            lessons: [
                {
                    id: 'ss-m2-l1', type: 'reading', title: 'Plotting the Stars', points: 10,
                    content: { text: "The Hertzsprung-Russell (H-R) diagram is a scatter plot of stars showing the relationship between their absolute magnitudes (luminosity) and their spectral types (temperature). Most stars fall along a line called the 'Main Sequence.'", imageUrl: 'https://images.unsplash.com/photo-1614726353900-914feb71b054?q=80&w=600&h=300&auto=format&fit=crop' }
                },
                {
                    id: 'ss-m2-l2', type: 'quiz', title: 'Main Sequence', points: 15,
                    content: {
                        beginner: [
                             { question: 'Where do most stars, including our Sun, spend the majority of their lives on the H-R diagram?', options: ['Supergiant Branch', 'White Dwarf region', 'Main Sequence', 'Red Giant Branch'], correctAnswer: 'Main Sequence', explanation: "Exactly! The Main Sequence is the stage where stars fuse hydrogen into helium in their cores." }
                        ],
                        intermediate: [
                             { question: 'On the H-R diagram, where would you find a hot but dim star?', options: ["Upper right (Red Giants)", "Lower left (White Dwarfs)", "Upper left (Blue Giants)", "Center (Main Sequence)"], correctAnswer: 'Lower left (White Dwarfs)', explanation: "Correct! White Dwarfs are the hot, dense remnants of stars, so they are very hot but small and therefore dim." }
                        ],
                        advanced: [
                             { question: "What is the primary factor that determines a star's position on the Main Sequence?", options: ["Its chemical composition", "Its distance from Earth", "Its mass", "Its age"], correctAnswer: 'Its mass', explanation: "Correct! A star's mass dictates its temperature and luminosity, which are the two axes of the H-R diagram, thus defining its entire life cycle and position on the main sequence." }
                        ]
                    }
                }
            ]
        },
        {
            id: 'ss-mission-3',
            title: 'Exoplanet Atmospheres',
            description: 'Analyze the thin layer of gas around a distant world to search for clues about its climate and composition.',
            badge: { name: 'Atmosphere Detective', icon: 'Badge' },
            lessons: [
                {
                    id: 'ss-m3-l1', type: 'reading', title: 'A Planet\'s Gaseous Veil', points: 10,
                    content: { text: "During a transit, some starlight passes through the exoplanet's atmosphere. By analyzing the starlight with a technique called transmission spectroscopy, we can identify the chemical elements and molecules present in that atmosphere, like water vapor or methane.", imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d579424c8?q=80&w=600&h=300&auto=format&fit=crop' }
                },
                {
                    id: 'ss-m3-l2', type: 'interactive_model', title: 'Reading the Atmosphere', points: 20,
                    content: { 
                        imageUrl: 'https://placehold.co/600x300/0c4a6e/e0f2fe?text=Exoplanet%0AAtmosphere%0ALayers',
                        hotspots: [
                            { x: 50, y: 20, title: 'Exosphere', description: 'The outermost layer, where the atmosphere thins out and merges with space.' },
                            { x: 50, y: 40, title: 'Thermosphere', description: 'A layer with very high temperatures, but the air is so thin it would feel cold.' },
                            { x: 50, y: 60, title: 'Mesosphere', description: 'This middle layer is where most meteors burn up upon entering an atmosphere.' },
                            { x: 50, y: 80, title: 'Stratosphere/Troposphere', description: 'The lower layers where weather occurs and key gases for spectroscopy are most concentrated.' }
                        ]
                    }
                },
                {
                    id: 'ss-m3-l3', type: 'quiz', title: 'Knowledge Check', points: 15,
                    content: {
                        beginner: [
                            { question: 'What method is used to study the atmosphere of a transiting exoplanet?', options: ['Direct Imaging', 'Transmission Spectroscopy', 'Radial Velocity', 'Astrometry'], correctAnswer: 'Transmission Spectroscopy', explanation: "Correct! We look at how the starlight's spectrum changes as it filters through the planet's atmosphere." }
                        ],
                        intermediate: [
                            { question: "The detection of which molecule in an exoplanet's atmosphere would be a very exciting indicator of potential habitability?", options: ['Carbon Monoxide', 'Nitrogen', 'Water Vapor (H2O)', 'Argon'], correctAnswer: 'Water Vapor (H2O)', explanation: "Correct! Liquid water is a key ingredient for life as we know it, so finding its gaseous form is a major step." }
                        ],
                        advanced: [
                            { question: "What is a 'biosignature' gas?", options: ['A gas that is toxic to life', 'A gas produced by geological activity', 'A gas that is unlikely to exist without life', 'A gas found only in stars'], correctAnswer: 'A gas that is unlikely to exist without life', explanation: "Correct! Gases like oxygen and methane, when found together, can be strong biosignatures because they would normally destroy each other without a constant biological source." }
                        ]
                    }
                }
            ]
        },
        {
            id: 'ss-mission-4',
            title: 'Stellar Evolution',
            description: "Journey through the dramatic life and death of stars, from nebulae to black holes.",
            badge: { name: 'Cosmic Chronicler', icon: 'Badge' },
            lessons: [
                {
                    id: 'ss-m4-l1', type: 'reading', title: 'From Dust to Star', points: 10,
                    content: { text: "Stars are born within vast, cold clouds of gas and dust called nebulae. Gravity pulls clumps of this material together, which heat up as they get denser. When the core becomes hot and dense enough for nuclear fusion to begin, a star is born and enters the 'main sequence' phase of its life.", imageUrl: 'https://images.unsplash.com/photo-1614726353900-914feb71b054?q=80&w=600&h=300&auto=format&fit=crop' }
                },
                {
                    id: 'ss-m4-l2', type: 'quiz', title: 'The End of a Star', points: 15,
                    content: {
                        beginner: [
                            { question: 'What does a star like our Sun become after it runs out of fuel?', options: ['A Black Hole', 'A Supernova', 'A White Dwarf', 'A Neutron Star'], correctAnswer: 'A White Dwarf', explanation: "Correct! Sun-like stars shed their outer layers to form a planetary nebula, leaving behind a hot, dense core called a white dwarf." }
                        ],
                        intermediate: [
                            { question: 'What triggers a supernova, the explosive death of a massive star?', options: ["It collides with another star", "It runs out of hydrogen", "Its iron core collapses", "It spins too fast"], correctAnswer: 'Its iron core collapses', explanation: "Correct! Massive stars create heavier elements through fusion. When the core becomes iron, fusion stops, gravity wins, and the core collapses catastrophically, rebounding in a massive explosion." }
                        ],
                        advanced: [
                            { question: 'What is left behind after a supernova explosion of a very massive star?', options: ['A White Dwarf', 'A Brown Dwarf', 'Nothing', 'A Black Hole'], correctAnswer: 'A Black Hole', explanation: "Correct! If the star's remaining core is massive enough after the supernova, its gravity will be so strong that it collapses into a black hole, a point of infinite density from which not even light can escape." }
                        ]
                    }
                }
            ]
        }
    ],
    [JourneyPath.CosmicCartographer]: [
        {
            id: 'cc-mission-1',
            title: 'The Transit Method',
            description: 'Learn the most common technique for discovering new worlds by observing starlight.',
            badge: { name: 'Light-Bender', icon: 'Badge' },
            lessons: [
                 { id: 'cc-m1-l1', type: 'reading', title: 'Spotting Shadows in Space', points: 10, content: { text: "One of the best ways to find an exoplanet is to watch a star for a long time. If a planet's orbit takes it between its star and Earth, we can see the star's light dim just a little bit. This event is called a 'transit.' It's like a tiny, distant eclipse!", imageUrl: 'https://images.unsplash.com/photo-1635790442379-4a73f278d6a3?q=80&w=600&h=300&auto=format&fit=crop' }},
                 { id: 'cc-m1-l2', type: 'interactive_transit', title: 'Create a Light Curve', points: 25, content: { instructions: "Drag the planet to adjust its path across the star. Observe how the path changes the light curve graph below. A central path creates the deepest dip. Lock in a valid transit to complete the lesson!" }},
                 { id: 'cc-m1-l3', type: 'quiz', title: 'Knowledge Check', points: 15, content: {
                    beginner: [
                        { question: 'If a bigger planet transits a star, what happens to the dip in the light curve?', options: ['The dip is shorter', 'The dip is deeper', 'The dip is shallower', 'There is no change'], correctAnswer: 'The dip is deeper', explanation: 'Correct! A larger planet blocks more starlight, causing a more significant (deeper) dip in the observed brightness.' }
                    ],
                    intermediate: [
                        { question: 'Observing multiple, periodic dips in a star\'s light curve helps astronomers confirm what about a potential planet?', options: ['Its color', 'Its orbital period', 'Its magnetic field', 'Its composition'], correctAnswer: 'Its orbital period', explanation: "Correct! The time between transits tells us exactly how long it takes for the planet to orbit its star."}
                    ],
                    advanced: [
                        { question: "If a transit is 'V-shaped' rather than 'U-shaped', what might it indicate?", options: ['The planet is very large', 'The signal is likely a false positive', 'The planet has rings', 'The star is very hot'], correctAnswer: 'The signal is likely a false positive', explanation: "Correct! A V-shaped dip often indicates a grazing eclipsing binary star system, a common false positive, rather than a planet fully transiting its star's disk." }
                    ]
                 }}
            ]
        },
        {
            id: 'cc-mission-2',
            title: 'Parallax and Distance',
            description: 'Use the apparent shift of nearby stars to measure their distance from Earth.',
            badge: { name: 'Distance Measurer', icon: 'Badge' },
            lessons: [
                {
                    id: 'cc-m2-l1', type: 'reading', title: 'Cosmic Triangulation', points: 10,
                    content: { text: "Stellar parallax is the apparent shift in the position of a nearby star against the background of distant stars. By observing a star from two different points in Earth's orbit (e.g., 6 months apart), we can calculate the angle of this shift and determine its distance.", imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d579424c8?q=80&w=600&h=300&auto=format&fit=crop' }
                },
                {
                    id: 'cc-m2-l2', type: 'quiz', title: 'Knowledge Check', points: 15,
                    content: {
                        beginner: [
                            { question: 'A star with a larger parallax angle is...', options: ['Further away', 'Closer to us', 'Older', 'Hotter'], correctAnswer: 'Closer to us', explanation: "Correct! Just like your thumb seems to jump more than a distant tree when you close one eye, a closer star will have a larger apparent shift (parallax)." }
                        ],
                        intermediate: [
                            { question: 'Why do astronomers measure a star\'s position 6 months apart to determine its parallax?', options: ["To account for star's own movement", "To get the largest possible baseline", "To wait for clear weather", "To check if the star has planets"], correctAnswer: 'To get the largest possible baseline', explanation: 'Correct! In 6 months, the Earth has moved to the opposite side of its orbit, creating the largest possible separation between observation points (a baseline of 2 AU).' }
                        ],
                        advanced: [
                            { question: 'A "parsec" is a unit of distance defined by parallax. It is the distance to a star whose parallax angle is one...', options: ["degree", "minute of arc", "second of arc", "radian"], correctAnswer: 'second of arc', explanation: "Correct! The name 'parsec' literally comes from 'parallax of one second.' It's a fundamental unit of distance in professional astronomy." }
                        ]
                    }
                }
            ]
        },
        {
            id: 'cc-mission-3',
            title: 'The Doppler Shift',
            description: 'Learn how the gravitational tug of an unseen planet makes its star "wobble," changing the color of its light.',
            badge: { name: 'Wobble Watcher', icon: 'Badge' },
            lessons: [
                {
                    id: 'cc-m3-l1', type: 'reading', title: 'The Unseen Dance', points: 10,
                    content: { text: "A planet doesn't just orbit its star; they both orbit a common center of mass. This causes the star to wobble slightly. As the star wobbles toward us, its light is compressed and appears bluer (blueshift). As it wobbles away, its light is stretched and appears redder (redshift). This is the Radial Velocity method.", imageUrl: 'https://images.unsplash.com/photo-1570284613060-766c33850e00?q=80&w=600&h=300&auto=format&fit=crop' }
                },
                {
                    id: 'cc-m3-l2', type: 'interactive_model', title: 'Detecting the Wobble', points: 20,
                    content: {
                        imageUrl: 'https://placehold.co/600x300/1e40af/dbeafe?text=Star+Wobble+Simulation',
                        hotspots: [
                            { x: 30, y: 50, title: 'Planet\'s Tug', description: 'The gravity of the orbiting planet pulls the star, causing the wobble.' },
                            { x: 60, y: 30, title: 'Blueshift', description: 'As the star moves towards the observer, its light waves are compressed, shifting its spectrum towards blue.' },
                            { x: 75, y: 70, title: 'Redshift', description: 'As the star moves away from the observer, its light waves are stretched, shifting its spectrum towards red.' }
                        ]
                    }
                },
                {
                    id: 'cc-m3-l3', type: 'quiz', title: 'Knowledge Check', points: 15,
                    content: {
                        beginner: [
                            { question: 'What does the Radial Velocity method directly measure?', options: ['The planet\'s size', 'The star\'s wobble', 'The planet\'s temperature', 'The star\'s brightness'], correctAnswer: 'The star\'s wobble', explanation: 'Correct! We infer the planet\'s presence by observing the effect it has on its parent star.' }
                        ],
                        intermediate: [
                            { question: 'A larger, more massive planet will cause its star to...', options: ['Wobble less', 'Shine brighter', 'Wobble more', 'Cool down'], correctAnswer: 'Wobble more', explanation: "Correct! A more massive planet exerts a stronger gravitational pull, resulting in a larger, more easily detectable wobble." }
                        ],
                        advanced: [
                            { question: 'Why is the Radial Velocity method biased towards finding large planets close to their stars?', options: ['They are easier to see', 'They cause the largest and fastest wobbles', 'They block more light', 'They are more common'], correctAnswer: 'They cause the largest and fastest wobbles', explanation: 'Correct! A "Hot Jupiter" (a massive planet in a tight orbit) produces a strong, rapid wobble signal that is much easier to detect than that of a small, distant planet.' }
                        ]
                    }
                }
            ]
        },
        {
            id: 'cc-mission-4',
            title: 'Direct Imaging',
            description: "Discover the difficult but rewarding technique of taking a direct photograph of an exoplanet.",
            badge: { name: 'Photon Hunter', icon: 'Badge' },
            lessons: [
                {
                    id: 'cc-m4-l1', type: 'reading', title: "A Planet's Portrait", points: 10,
                    content: { text: "Direct imaging is like trying to take a picture of a firefly next to a giant searchlight from miles away. Planets are incredibly faint compared to their host stars. To see them, astronomers use advanced techniques like a coronagraph to block the star's overwhelming glare, revealing the faint planets nearby.", imageUrl: 'https://images.unsplash.com/photo-1570284613060-766c33850e00?q=80&w=600&h=300&auto=format&fit=crop' }
                },
                {
                    id: 'cc-m4-l2', type: 'quiz', title: 'Knowledge Check', points: 15,
                    content: {
                        beginner: [
                            { question: 'What is the main challenge of Direct Imaging?', options: ['Planets are too cold', "The star's glare is too bright", 'Planets move too fast', 'Telescopes are not big enough'], correctAnswer: "The star's glare is too bright", explanation: "Correct! A star can be a billion times brighter than its orbiting planet, so blocking that light is the primary obstacle." }
                        ],
                        intermediate: [
                            { question: 'What type of planets are easiest to find using Direct Imaging?', options: ['Small, rocky planets close to their star', 'Large, gassy planets far from their star', 'Planets orbiting dim stars', 'Planets that transit their star'], correctAnswer: 'Large, gassy planets far from their star', explanation: "Correct! Large planets reflect more light, and being far from their star makes them easier to separate from the star's glare." }
                        ],
                        advanced: [
                            { question: 'A stellar coronagraph is a key tool for direct imaging. What is its function?', options: ['To magnify the planet', 'To measure the star\'s temperature', "To block the light from the star", 'To analyze the planet\'s atmosphere'], correctAnswer: "To block the light from the star", explanation: 'Correct! A coronagraph is essentially an artificial eclipse machine inside a telescope, using a small mask to cover the image of the star.' }
                        ]
                    }
                }
            ]
        }
    ],
    [JourneyPath.GalaxyGuardian]: [
        {
            id: 'gg-mission-1',
            title: 'The Habitable Zone',
            description: 'Identify the "Goldilocks" region around a star where liquid water could exist.',
            badge: { name: 'Life Finder', icon: 'Badge' },
            lessons: [
                {
                    id: 'gg-m1-l1', type: 'reading', title: 'Not Too Hot, Not Too Cold', points: 10,
                    content: { text: "The habitable zone, or 'Goldilocks zone,' is the orbital region around a star where the temperature is just right for liquid water to exist on a planet's surface. It's a key factor in the search for extraterrestrial life.", imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=600&h=300&auto=format&fit=crop' }
                },
                {
                    id: 'gg-m1-l2', type: 'quiz', title: 'Knowledge Check', points: 15,
                    content: {
                        beginner: [
                            { question: 'Where would the habitable zone be for a hot, blue star compared to a cool, red dwarf?', options: ['Closer to the star', 'The same distance', 'Further from the star', 'It would not have one'], correctAnswer: 'Further from the star', explanation: "Correct! A hotter star puts out more energy, so its habitable zone is much further away." }
                        ],
                        intermediate: [
                             { question: 'Besides liquid water, what is another crucial factor for a planet to be considered potentially habitable?', options: ['A strong magnetic field', 'A large moon', 'The presence of an atmosphere', 'Being a gas giant'], correctAnswer: 'The presence of an atmosphere', explanation: 'Correct! An atmosphere is needed to maintain surface pressure, protect from radiation, and regulate temperature, all of which are vital for liquid water to exist.' }
                        ],
                        advanced: [
                            { question: 'Why is finding an Earth-sized planet in the habitable zone of an M-dwarf star (like Proxima Centauri) both exciting and problematic for habitability?', options: ['It has no atmosphere', 'It is tidally locked', 'It has no water', 'It is too old'], correctAnswer: 'It is tidally locked', explanation: "Correct. A planet this close to its star would likely be tidally locked, with one side in perpetual daylight and the other in darkness, creating extreme temperatures that challenge the notion of habitability." }
                        ]
                    }
                }
            ]
        },
        {
            id: 'gg-mission-2',
            title: 'Planetary Defense',
            description: 'Learn about the dangers of Near-Earth Objects (NEOs) and how we track them.',
            badge: { name: 'Asteroid Watcher', icon: 'Badge' },
            lessons: [
                {
                    id: 'gg-m2-l1', type: 'reading', title: 'Eyes on the Sky', points: 10,
                    content: { text: "Near-Earth Objects are comets and asteroids that have been nudged by gravity into orbits that allow them to enter Earth's neighborhood. Scientists use telescopes to find, track, and monitor these objects to assess any potential impact risk.", imageUrl: 'https://images.unsplash.com/photo-1614313663363-393437162b70?q=80&w=600&h=300&auto=format&fit=crop' }
                },
                {
                    id: 'gg-m2-l2', type: 'quiz', title: 'Knowledge Check', points: 15,
                    content: {
                        beginner: [
                            { question: 'What is the primary goal of planetary defense?', options: ['To mine asteroids for resources', 'To study the composition of comets', 'To find and track potentially hazardous objects', 'To build colonies on other planets'], correctAnswer: 'To find and track potentially hazardous objects', explanation: "Exactly! The first step in protecting Earth is knowing what's out there." }
                        ],
                        intermediate: [
                            { question: "NASA's DART mission was a test of which planetary defense technique?", options: ['Laser ablation', 'Gravity tractor', 'Kinetic impactor', 'Nuclear detonation'], correctAnswer: 'Kinetic impactor', explanation: "Correct! The DART spacecraft successfully slammed into an asteroid to test our ability to alter its trajectory, proving the kinetic impactor method works." }
                        ],
                        advanced: [
                            { question: "The 'Yarkovsky effect' is a subtle, non-gravitational force that can alter an asteroid's orbit over time. What causes it?", options: ['Solar wind pressure', 'Uneven heating and cooling', 'Magnetic field interactions', 'Micrometeorite impacts'], correctAnswer: 'Uneven heating and cooling', explanation: "Correct! Sunlight heats an asteroid, which then re-radiates that heat as it rotates. This thermal radiation creates a tiny but continuous thrust that can significantly change its path over millions of years." }
                        ]
                    }
                }
            ]
        },
        {
            id: 'gg-mission-3',
            title: 'Searching for Biosignatures',
            description: 'Learn how scientists look for chemical signs of life in the atmospheres of distant exoplanets.',
            badge: { name: 'Signature Seeker', icon: 'Badge' },
            lessons: [
                {
                    id: 'gg-m3-l1', type: 'reading', title: 'Life\'s Chemical Fingerprints', points: 10,
                    content: { text: "A biosignature is any substance, element, or pattern that provides scientific evidence of past or present life. On an exoplanet, we search for gases in the atmosphere, like oxygen and methane, that are produced by life and wouldn't likely exist together otherwise. Finding them is not proof of life, but a very strong hint!", imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&h=300&auto=format&fit=crop' }
                },
                {
                    id: 'gg-m3-l2', type: 'interactive_model', title: 'Spectrometer Analysis', points: 20,
                    content: {
                        imageUrl: 'https://placehold.co/600x300/166534/bbf7d0?text=Atmospheric+Spectrum+Data',
                        hotspots: [
                            { x: 25, y: 60, title: 'Oxygen (O2)', description: 'A highly reactive gas. On Earth, it\'s almost entirely maintained by photosynthesis.' },
                            { x: 45, y: 50, title: 'Methane (CH4)', description: 'Can be produced by microbes (like on Earth) or geological activity. Finding it with oxygen is a key biosignature.' },
                            { x: 65, y: 70, title: 'Water Vapor (H2O)', description: 'Essential for life as we know it. Its presence indicates a key ingredient for habitability.' },
                            { x: 80, y: 65, title: 'Carbon Dioxide (CO2)', description: 'A common gas used by plants and produced by respiration and volcanoes. Its levels can indicate a greenhouse effect.' }
                        ]
                    }
                },
                {
                    id: 'gg-m3-l3', type: 'quiz', title: 'Knowledge Check', points: 15,
                    content: {
                        beginner: [
                            { question: 'Which of these would be considered a potential biosignature?', options: ['The color of a planet', 'The presence of oxygen', 'The number of moons', 'The size of its core'], correctAnswer: 'The presence of oxygen', explanation: 'Correct! Oxygen is highly reactive, so its continued presence in an atmosphere suggests it is being constantly replenished, possibly by life.' }
                        ],
                        intermediate: [
                            { question: "Why is finding both oxygen and methane in an atmosphere so compelling?", options: ['They are both green gases', 'They prove there are volcanoes', 'They react and destroy each other', 'They are very heavy gases'], correctAnswer: 'They react and destroy each other', explanation: 'Correct! Finding these two gases together is like finding a fire and a puddle in the same room. Something must be constantly producing both, and life is a great candidate for that "something."' }
                        ],
                        advanced: [
                            { question: "What is the 'Red Edge' biosignature that could be detected on a planet's surface?", options: ['A red-colored ocean', 'A sharp increase in reflected infrared light', 'A planet-wide dust storm', 'An aurora'], correctAnswer: 'A sharp increase in reflected infrared light', explanation: "Correct! Plant life on Earth reflects infrared light very strongly. A similar signal from an exoplanet could be a sign of widespread, chlorophyll-like photosynthesis." }
                        ]
                    }
                }
            ]
        },
        {
            id: 'gg-mission-4',
            title: 'Tidal Locking',
            description: "Explore worlds that are permanently locked facing their star, creating planets of extreme contrasts.",
            // FIX: Ensured badge name is a string literal to prevent reference errors.
            badge: { name: 'Terminator', icon: 'Badge' },
            lessons: [
                {
                    id: 'gg-m4-l1', type: 'reading', title: 'A Planet of Two Faces', points: 10,
                    content: { text: "Tidal locking occurs when a planet is close to its star, and the star's gravity forces it to rotate at the same rate that it orbits. The result is that one side of the planet (the 'dayside') always faces the star, while the other side (the 'nightside') is in permanent darkness. This creates extreme temperatures.", imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&h=300&auto=format&fit=crop' }
                },
                {
                    id: 'gg-m4-l2', type: 'quiz', title: 'Knowledge Check', points: 15,
                    content: {
                        beginner: [
                            { question: 'What is the main consequence of tidal locking for a planet?', options: ['It has no moons', 'It has extreme temperatures', 'It has a very fast orbit', 'It is always daytime'], correctAnswer: 'It has extreme temperatures', explanation: "Correct! The dayside can be scorching hot, while the nightside can be frozen solid." }
                        ],
                        intermediate: [
                            { question: "Where is the most likely place for life to exist on a tidally locked planet?", options: ['The hot dayside', 'The frozen nightside', 'At the north and south poles', "In the 'terminator' zone"], correctAnswer: "In the 'terminator' zone", explanation: "Correct! The 'terminator' is the twilight ring between the day and night sides, where temperatures might be just right for liquid water." }
                        ],
                        advanced: [
                            { question: 'Why are planets orbiting red dwarf stars (M-dwarfs) very likely to be tidally locked?', options: ['Red dwarfs are very large', 'The planets are very old', "The habitable zone is very close to the star", 'Red dwarfs have strong magnetic fields'], correctAnswer: "The habitable zone is very close to the star", explanation: "Correct! Because red dwarfs are cool, their habitable zone is extremely close, and any planet within that zone would experience strong tidal forces, causing it to become locked." }
                        ]
                    }
                }
            ]
        }
    ],
    [JourneyPath.RocketRanger]: [
        {
            id: 'rr-mission-1',
            title: 'Rocket Propulsion 101',
            description: "Understand Newton's Third Law and how rockets generate thrust to escape Earth's gravity.",
            badge: { name: 'Thrust Master', icon: 'Badge' },
            lessons: [
                {
                    id: 'rr-m1-l1', type: 'reading', title: 'Action and Reaction', points: 10,
                    content: { text: "Rockets work on the principle of Newton's Third Law: for every action, there is an equal and opposite reaction. A rocket engine throws mass (hot gas) out its nozzle at high speed (action), which creates a force called thrust that pushes the rocket forward (reaction).", imageUrl: 'https://images.unsplash.com/photo-1630587148265-761578587120?q=80&w=600&h=300&auto=format&fit=crop' }
                },
                {
                    id: 'rr-m1-l2', type: 'quiz', title: 'Knowledge Check', points: 15,
                    content: {
                        beginner: [
                            { question: 'What is the force that pushes a rocket forward called?', options: ['Gravity', 'Drag', 'Thrust', 'Lift'], correctAnswer: 'Thrust', explanation: "Correct! Thrust is the reaction force that propels the rocket into space." }
                        ],
                        intermediate: [
                            { question: "What does 'specific impulse' (Isp) measure in a rocket engine?", options: ['Its total power output', 'Its fuel efficiency', 'Its maximum speed', 'Its physical size'], correctAnswer: 'Its fuel efficiency', explanation: "Correct! Specific impulse is a key metric that tells you how much thrust you get from a certain amount of propellant over time. A higher Isp is more efficient." }
                        ],
                        advanced: [
                             { question: "What is the primary advantage of a multi-stage rocket over a single-stage rocket?", options: ['It is cheaper to build', 'It can carry a larger crew', 'It has better aerodynamics', 'It discards unneeded mass'], correctAnswer: 'It discards unneeded mass', explanation: "Correct! By dropping stages (empty fuel tanks and engines), the rocket becomes lighter, making it much easier for the remaining stages to accelerate the payload to orbital velocity." }
                        ]
                    }
                }
            ]
        },
        {
            id: 'rr-mission-2',
            title: 'Interplanetary Trajectories',
            description: 'Learn about the Hohmann transfer orbit, the most fuel-efficient way to travel between planets.',
            badge: { name: 'Orbital Navigator', icon: 'Badge' },
            lessons: [
                {
                    id: 'rr-m2-l1', type: 'reading', title: 'The Cosmic Superhighway', points: 10,
                    content: { text: "A Hohmann transfer is an orbital maneuver that uses two engine impulses to move a spacecraft between two circular orbits of different radii. It's the most fuel-efficient way to get from a planet like Earth to another like Mars, but it requires precise timing!", imageUrl: 'https://images.unsplash.com/photo-1541185934-01b600ea069c?q=80&w=600&h=300&auto=format&fit=crop' }
                },
                {
                    id: 'rr-m2-l2', type: 'quiz', title: 'Knowledge Check', points: 15,
                    content: {
                        beginner: [
                            { question: 'Why is the Hohmann transfer orbit so widely used for space missions?', options: ['It is the fastest route', 'It is the most fuel-efficient', 'It avoids asteroid belts', 'It uses solar winds'], correctAnswer: 'It is the most fuel-efficient', explanation: "That's right! Saving fuel is critical for long-duration space missions, as it reduces the mass and cost of the spacecraft." }
                        ],
                        intermediate: [
                            { question: "What is a 'gravity assist' or 'slingshot' maneuver?", options: ['Using a planet\'s gravity to save fuel', 'Landing on a planet for refueling', 'Using a laser to push the spacecraft', 'Orbiting a planet multiple times'], correctAnswer: 'Using a planet\'s gravity to save fuel', explanation: "Correct! Spacecraft can fly close to a planet to 'steal' some of its orbital energy, allowing them to change speed and direction without using much fuel." }
                        ],
                        advanced: [
                             { question: 'The Interplanetary Transport Network uses "Lagrange points" to create low-energy pathways through the solar system. What is a Lagrange point?', options: ['A point of high gravity', 'A point of zero temperature', 'A point of gravitational equilibrium', 'A hole in spacetime'], correctAnswer: 'A point of gravitational equilibrium', explanation: "Correct! Lagrange points are locations where the gravitational forces of two large bodies (like the Sun and Earth) balance out, allowing a smaller object to remain stationary relative to them with minimal fuel use." }
                        ]
                    }
                }
            ]
        },
        {
            id: 'rr-mission-3',
            title: 'Spacecraft Design',
            description: 'Explore the key components of a robotic space probe designed for deep space exploration.',
            badge: { name: 'Chief Engineer', icon: 'Badge' },
            lessons: [
                {
                    id: 'rr-m3-l1', type: 'reading', title: 'Building a Vessel for the Void', points: 10,
                    content: { text: "Every interplanetary probe is a marvel of engineering, balancing power, communication, scientific instruments, and propulsion. Each component must be lightweight, durable, and able to withstand the harsh environment of space, from extreme temperatures to radiation.", imageUrl: 'https://images.unsplash.com/photo-1610296669228-602fa82701f3?q=80&w=600&h=300&auto=format&fit=crop' }
                },
                {
                    id: 'rr-m3-l2', type: 'interactive_model', title: 'Anatomy of a Probe', points: 20,
                    content: {
                        imageUrl: 'https://placehold.co/600x300/404040/e5e5e5?text=Robotic+Space+Probe',
                        hotspots: [
                            { x: 50, y: 20, title: 'High-Gain Antenna', description: 'A large, dish-shaped antenna used to send and receive data from Earth over vast distances.' },
                            { x: 30, y: 50, title: 'RTG (Power Source)', description: 'A Radioisotope Thermoelectric Generator uses the heat from radioactive decay to generate electricity for the probe.' },
                            { x: 70, y: 55, title: 'Science Instruments', description: 'A suite of tools like cameras, spectrometers, and magnetometers that gather data about distant objects.' },
                            { x: 50, y: 85, title: 'Propulsion System', description: 'Small thrusters used for course corrections and adjusting the probe\'s orientation in space.' }
                        ]
                    }
                },
                {
                    id: 'rr-m3-l3', type: 'quiz', title: 'Knowledge Check', points: 15,
                    content: {
                        beginner: [
                            { question: 'What is the main purpose of a probe\'s large high-gain antenna?', options: ['To collect solar power', 'To protect from meteors', 'To communicate with Earth', 'To act as a solar sail'], correctAnswer: 'To communicate with Earth', explanation: 'Correct! It focuses a beam of radio waves to send scientific data and receive commands across millions of miles.' }
                        ],
                        intermediate: [
                            { question: "Why do probes traveling to the outer solar system (like Voyager) use RTGs instead of solar panels for power?", options: ['RTGs are cheaper', 'Sunlight is too weak that far out', 'Solar panels are too heavy', 'RTGs provide propulsion'], correctAnswer: 'Sunlight is too weak that far out', explanation: "Correct! Beyond Mars, the Sun's light is too faint to be effectively captured by solar panels, so a long-lasting nuclear power source is needed." }
                        ],
                        advanced: [
                            { question: "What is a 'reaction wheel' used for on a spacecraft?", options: ['To generate electricity', 'To land on a planet', 'To control the craft\'s orientation', 'To collect space dust'], correctAnswer: 'To control the craft\'s orientation', explanation: "Correct! It's a spinning flywheel. By changing its speed, the spacecraft can be precisely pointed in any direction without using thruster fuel, based on the principle of conservation of angular momentum." }
                        ]
                    }
                }
            ]
        },
        {
            id: 'rr-mission-4',
            title: 'Space Telescopes',
            description: "Meet the orbital observatories that act as our eyes in the cosmos, finding worlds we can't see from Earth.",
            badge: { name: 'Observatory Operator', icon: 'Badge' },
            lessons: [
                {
                    id: 'rr-m4-l1', type: 'reading', title: "Eyes Above the Sky", points: 10,
                    content: { text: "Placing telescopes in space gets them above Earth's blurry, light-polluting atmosphere, giving them a crystal-clear view of the universe. Telescopes like Kepler, TESS, and the James Webb Space Telescope have revolutionized exoplanet science by discovering thousands of new worlds.", imageUrl: 'https://images.unsplash.com/photo-1610296669228-602fa82701f3?q=80&w=600&h=300&auto=format&fit=crop' }
                },
                {
                    id: 'rr-m4-l2', type: 'quiz', title: 'Knowledge Check', points: 15,
                    content: {
                        beginner: [
                            { question: 'What is the main advantage of a space telescope over a ground-based one?', options: ['It is cheaper to operate', 'It is closer to the stars', "It is above Earth's atmosphere", 'It can be repaired by astronauts'], correctAnswer: "It is above Earth's atmosphere", explanation: "Correct! The atmosphere blurs light and blocks certain wavelengths (like infrared), so being in space provides a much clearer view." }
                        ],
                        intermediate: [
                            { question: 'The Kepler Space Telescope found thousands of exoplanets using which detection method?', options: ['Radial Velocity', 'Transit Method', 'Direct Imaging', 'Gravitational Microlensing'], correctAnswer: 'Transit Method', explanation: "Correct! Kepler's mission was to stare at one patch of sky for years, watching for the tell-tale dips in starlight caused by transiting planets." }
                        ],
                        advanced: [
                            { question: "The James Webb Space Telescope is especially powerful for studying exoplanet atmospheres. Why?", options: ['It observes in infrared light', 'It is the largest telescope ever built', 'It orbits very close to Earth', 'It uses a liquid mirror'], correctAnswer: 'It observes in infrared light', explanation: "Correct! Molecules in planetary atmospheres, like water and methane, have strong spectral signatures in the infrared. Webb is perfectly designed to see them." }
                        ]
                    }
                }
            ]
        }
    ]
};