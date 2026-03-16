export enum Page {
  SkyMap = 'Sky Map',
  MLLab = 'ML Lab',
  ExoJourney = 'Exo-Journey',
}

export interface Exoplanet {
  name: string;
  discoveryYear: number;
  discoveryMethod: string;
  orbitalPeriod: number; // in days
  radius: number; // in Earth radii
  mass: number; // in Earth masses
  starType: string;
  distance: number; // in light years
  imageUrl: string;
  status: 'Confirmed' | 'Candidate'; // For the game
  habitableZone: boolean;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  planetName: string;
}

export enum QuizDifficulty {
  Beginner = 5,
  Intermediate = 10,
  Advanced = 15,
}

export interface ClassificationResult {
    classification: string;
    confidence: number;
    influentialFeatures?: string[];
}

export interface ModelMetrics {
    confusionMatrix: number[][];
    accuracy: number;
    precision: number;
    recall: number;
}

// New enum for paths
export enum JourneyPath {
    StellarScientist = 'Stellar Scientist',
    CosmicCartographer = 'Cosmic Cartographer',
    GalaxyGuardian = 'Galaxy Guardian',
    RocketRanger = 'Rocket Ranger',
}

// New type for Avatar
export interface Avatar {
    name: JourneyPath;
    url: string;
}

// Types for Exo-Journey
export type LessonType = 'reading' | 'quiz' | 'interactive_transit' | 'interactive_model';

export interface BaseLesson {
  id: string;
  title: string;
  type: LessonType;
  points: number;
}

export interface ReadingLesson extends BaseLesson {
  type: 'reading';
  content: {
    text: string;
    imageUrl: string;
  };
}

export interface QuizContent {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface QuizLesson extends BaseLesson {
  type: 'quiz';
  content: {
    beginner: QuizContent[];
    intermediate: QuizContent[];
    advanced: QuizContent[];
  };
}

export interface InteractiveTransitLesson extends BaseLesson {
  type: 'interactive_transit';
  content: {
    instructions: string;
  };
}

export interface Hotspot {
    x: number; // percentage
    y: number; // percentage
    title: string;
    description: string;
}

export interface InteractiveModelLesson extends BaseLesson {
    type: 'interactive_model';
    content: {
        imageUrl: string;
        hotspots: Hotspot[];
    };
}


export type Lesson = ReadingLesson | QuizLesson | InteractiveTransitLesson | InteractiveModelLesson;

export interface Mission {
  id: string;
  title: string;
  description: string;
  badge: {
    name: string;
    icon: string; // For simplicity, using a string for icon name
  };
  lessons: Lesson[];
}

export interface UserData {
    name: string;
    avatar: string; // url
    path: JourneyPath;
    points: number;
    completedLessons: Set<string>;
    badges: string[];
}

// AI Tutor Types
export interface ChatMessage {
    role: 'user' | 'tutor';
    text: string;
}