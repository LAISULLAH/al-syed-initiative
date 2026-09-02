import { Course } from '../types';

export interface LiveClassTrack {
  id: string;
  month: string;
  trackName: string;
  batch: string;
  schedule: string;
  duration: string;
  access: string;
  enrolledCount: number;
  status: 'Live' | 'Coming Soon' | 'Previous Batch';
}

export const LIVE_CLASSES_TRACKS: LiveClassTrack[] = [
  {
    id: 'live-class-batch-iv',
    month: 'Month 1 Live',
    trackName: 'Foundation & Digital Footprint Reconnaissance',
    batch: 'OSINT LIVE CLASSES - BATCH IV (ADVANCED INVESTIGATION)',
    schedule: 'Friday, Saturday, Sunday',
    duration: '60 min per session',
    access: 'Included with OSINT Professional Training Program (Batch IV)',
    enrolledCount: 0,
    status: 'Coming Soon'
  },
  {
    id: 'live-class-batch-iii',
    month: 'Month 3 Live',
    trackName: 'SOCMINT, Persona Tracing & Evidence Synthesis',
    batch: 'OSINT LIVE CLASSES - BATCH III (ADVANCED)',
    schedule: 'Friday, Saturday, Sunday',
    duration: '60 min per session',
    access: 'Included with OSINT Professional Training Program (Batch III)',
    enrolledCount: 52,
    status: 'Previous Batch'
  },
  {
    id: 'live-class-batch-ii',
    month: 'Month 3 Live',
    trackName: 'Target Profiling & Lawful Digital Forensics',
    batch: 'OSINT LIVE CLASSES - BATCH II (ADVANCED)',
    schedule: 'Friday, Saturday, Sunday',
    duration: '60 min per session',
    access: 'Included with OSINT Professional Training Program (Batch II)',
    enrolledCount: 142,
    status: 'Previous Batch'
  }
];

export const COURSES_DATA: Course[] = [
  {
    id: 'osint-batch-iv',
    slug: 'osint-professional-training-program-batch-iv',
    title: 'OSINT PROFESSIONAL TRAINING PROGRAM (BATCH IV)',
    tagline: 'Comprehensive 12-week open-source intelligence training: unmask digital footprints, correlate personas, and build lawful investigation dossiers.',
    description: 'A structured OSINT training program designed to teach practical open-source intelligence investigation techniques. Participants learn how to analyze digital footprints, investigate anonymous online identities, map target infrastructure, and conduct real-world intelligence research using professional investigation workflows under the ADL Front methodology.',
    category: 'OSINT Masterclass',
    difficulty: 'All Levels',
    duration: '12 Weeks (3 Months)',
    hoursTotal: 72,
    totalLessons: 36,
    totalModules: 6,
    instructor: {
      id: 'inst-al-syed',
      name: 'Al Syed & ADL Front Core Team',
      role: 'Cyber Activist & Lead Intelligence Director',
      affiliation: 'Al Syed Initiative / ADL Front',
      bio: 'Cyber activist and investigative director leading the ADL Front digital lawforce in public interest open-source intelligence, digital footprint mapping, and evidence synthesis.',
      verified: true
    },
    rating: 4.98,
    reviewCount: 312,
    enrolledCount: 1000,
    tags: ['OSINT', 'Digital Footprints', 'SOCMINT', 'Target Profiling', 'Investigation Dossiers', 'Live Sessions'],
    featured: true,
    batchSchedule: 'Batch IV — Coming Soon — Enrollments Open',
    priceType: 'Direct Admission',
    learningOutcomes: [
      'Analyze digital footprints and map cross-platform online identities across Telegram, X, Discord, and public forums.',
      'Conduct real-world intelligence investigations using ethical, lawful open-source research workflows.',
      'Deploy target profiling, attack surface mapping, and passive metadata extraction without unauthorized access.',
      'Correlate anonymous phone numbers, email metadata, usernames, and profile artifacts into structured dossiers.',
      'Apply legal documentation standards to prepare evidence ready for formal law enforcement and public accountability.',
      'Access live weekend instructor cohorts, exclusive doubt-clearing sessions, and the authorized Certificate of Excellence.'
    ],
    prerequisites: [
      'No prior coding experience required; structured from fundamentals to advanced operational workflows.',
      'A personal computer or laptop with reliable internet connectivity.',
      'Commitment to ethical responsibility, discipline, and lawful investigative thinking.'
    ],
    targetAudience: [
      'Aspiring OSINT investigators, intelligence analysts, and cybersecurity researchers.',
      'Journalists, human rights advocates, and legal professionals documenting digital hate and harassment.',
      'Security enthusiasts seeking a repeatable investigative methodology rather than just a list of tools.'
    ],
    modules: [
      {
        id: 'b4-mod-01',
        moduleNumber: '01',
        title: 'OSINT Foundations & Operational Security (OPSEC)',
        description: 'Establish foundational principles of open-source intelligence, safe investigative environments, and OPSEC isolation.',
        duration: '12 Hours • 6 Lessons',
        lessons: [
          {
            id: 'b4-les-01',
            title: '01.01 - Intelligence Lifecycle & Compartmentalized OPSEC',
            duration: '25:00',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            summary: 'Understanding the 5 stages of OSINT and establishing isolated browser environments with strict operational security.',
            isFreePreview: true
          },
          {
            id: 'b4-les-02',
            title: '01.02 - Digital Footprint Discovery & Data Trails',
            duration: '28:00',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            summary: 'How digital traces are generated, cached, and correlated across public databases and social ecosystems.'
          }
        ]
      },
      {
        id: 'b4-mod-02',
        moduleNumber: '02',
        title: 'Search Operators, Dorking & Index Dissection',
        description: 'Master advanced search engine index extraction, cache recovery, and public archives.',
        duration: '12 Hours • 6 Lessons',
        lessons: [
          {
            id: 'b4-les-03',
            title: '02.01 - Advanced Google Dorking & Index Syntax',
            duration: '30:00',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            summary: 'Mastering Boolean syntax, filetype operators, directory indexing, and historic web archive correlation.'
          }
        ]
      },
      {
        id: 'b4-mod-03',
        moduleNumber: '03',
        title: 'SOCMINT: Social Media Intelligence & Identity Tracing',
        description: 'Trace personas across Telegram, X, Discord, Instagram, and Reddit to identify anonymous actors.',
        duration: '12 Hours • 6 Lessons',
        lessons: [
          {
            id: 'b4-les-04',
            title: '03.01 - Username Permutations & Cross-Platform Entity Correlation',
            duration: '32:00',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
            summary: 'Identifying anonymous actors through username behavioral heuristics and cross-referencing public platform artifacts.'
          }
        ]
      },
      {
        id: 'b4-mod-04',
        moduleNumber: '04',
        title: 'Phone, Email & Metadata Forensics',
        description: 'Passive intelligence extraction from email headers, carrier records, EXIF metadata, and leaked breach indices.',
        duration: '12 Hours • 6 Lessons',
        lessons: [
          {
            id: 'b4-les-05',
            title: '04.01 - Email Footprint & Phone Carrier Identification',
            duration: '35:00',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
            summary: 'Passive reconnaissance on phone numbers and email addresses without triggering account alerts.'
          }
        ]
      },
      {
        id: 'b4-mod-05',
        moduleNumber: '05',
        title: 'Target Profiling & Attack Surface Mapping',
        description: 'Synthesizing target infrastructure, domain DNS histories, and organizational digital assets.',
        duration: '12 Hours • 6 Lessons',
        lessons: [
          {
            id: 'b4-les-06',
            title: '05.01 - Passive DNS & Infrastructure Profiling',
            duration: '34:00',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            summary: 'Mapping external digital boundaries using passive DNS, SSL certificate logs, and public telemetry.'
          }
        ]
      },
      {
        id: 'b4-mod-06',
        moduleNumber: '06',
        title: 'Evidence Synthesis & Lawful Reporting Dossiers',
        description: 'Standardizing intelligence findings into auditable, court-admissible documentation for legal accountability.',
        duration: '12 Hours • 6 Lessons',
        lessons: [
          {
            id: 'b4-les-07',
            title: '06.01 - Structuring Formal Legal & Investigative Reports',
            duration: '40:00',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            summary: 'Documenting chain of custody, timestamp verification, and evidence archiving following ADL Front protocols.'
          }
        ]
      }
    ]
  },
  {
    id: 'osint-batch-iii',
    slug: 'osint-professional-training-program-batch-iii',
    title: 'OSINT PROFESSIONAL TRAINING PROGRAM (BATCH III)',
    tagline: 'Previous cohort archive: 12 weeks of open-source intelligence training and recorded investigation sessions.',
    description: 'A structured OSINT training program designed to teach practical open-source intelligence investigation techniques. Participants learned how to analyze digital footprints, investigate online identities, and conduct real-world intelligence research using professional investigation workflows under the ADL Front methodology.',
    category: 'Cohort Archive',
    difficulty: 'Intermediate',
    duration: '12 Weeks (3 Months)',
    hoursTotal: 72,
    totalLessons: 36,
    totalModules: 6,
    instructor: {
      id: 'inst-al-syed',
      name: 'Al Syed Team',
      role: 'Lead Intelligence Instructors',
      affiliation: 'Al Syed Initiative / ADL Front',
      bio: 'ADL Front operational analysts specializing in hate speech documentation and cyber intelligence.',
      verified: true
    },
    rating: 4.96,
    reviewCount: 52,
    enrolledCount: 52,
    tags: ['OSINT', 'Live Sessions', 'Lifetime Access', 'Previous Batch'],
    featured: false,
    batchSchedule: 'Batch III — Previous Batch (Archived)',
    priceType: 'Direct Admission',
    learningOutcomes: [
      'Live interactive classes with real-time expert guidance.',
      'Live broadcast chat room for instant doubt clearing.',
      'Lifetime recorded access to all sessions and materials.',
      'Exclusive live Q&A sessions with the Al Syed team.'
    ],
    prerequisites: ['Basic internet familiarity'],
    targetAudience: ['Batch III Alumni & Enrolled Students'],
    modules: []
  },
  {
    id: 'osint-batch-ii',
    slug: 'osint-professional-training-program-batch-ii',
    title: 'OSINT PROFESSIONAL TRAINING PROGRAM (BATCH II)',
    tagline: 'Foundational cohort archive: target profiling, social media investigation, and legal evidence protocols.',
    description: 'A structured OSINT training program designed to teach practical open-source intelligence investigation techniques. Participants learned how to analyze digital footprints, investigate online identities, and conduct real-world intelligence research using professional investigation workflows under the ADL Front methodology.',
    category: 'Cohort Archive',
    difficulty: 'Intermediate',
    duration: '12 Weeks (3 Months)',
    hoursTotal: 72,
    totalLessons: 36,
    totalModules: 6,
    instructor: {
      id: 'inst-al-syed',
      name: 'Al Syed Team',
      role: 'Lead Intelligence Instructors',
      affiliation: 'Al Syed Initiative / ADL Front',
      bio: 'ADL Front operational analysts specializing in hate speech documentation and cyber intelligence.',
      verified: true
    },
    rating: 4.97,
    reviewCount: 142,
    enrolledCount: 142,
    tags: ['OSINT', 'Live Sessions', 'Lifetime Access', 'Previous Batch'],
    featured: false,
    batchSchedule: 'Batch II — Previous Batch (Archived)',
    priceType: 'Direct Admission',
    learningOutcomes: [
      'Live interactive classes with real-time expert guidance.',
      'Live broadcast chat room for instant doubt clearing.',
      'Lifetime recorded access to all sessions and materials.',
      'Exclusive live Q&A sessions with the Al Syed team.'
    ],
    prerequisites: ['Basic internet familiarity'],
    targetAudience: ['Batch II Alumni & Enrolled Students'],
    modules: []
  }
];
