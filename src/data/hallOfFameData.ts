
export interface CertifiedStudent {
  id: string;
  batch: number;
  number: string;
  name: string;
  status: 'CERTIFIED STUDENT';
}

export const BATCH_1_STUDENTS: CertifiedStudent[] = [
  { id: 'b1-01', batch: 1, number: '01', name: 'Araxis', status: 'CERTIFIED STUDENT' },
  { id: 'b1-02', batch: 1, number: '02', name: 'Al Haris', status: 'CERTIFIED STUDENT' },
  { id: 'b1-03', batch: 1, number: '03', name: 'Zulqarnain', status: 'CERTIFIED STUDENT' },
  { id: 'b1-04', batch: 1, number: '04', name: 'Orvax', status: 'CERTIFIED STUDENT' },
  { id: 'b1-05', batch: 1, number: '05', name: 'Ibn Adam', status: 'CERTIFIED STUDENT' },
];

export const BATCH_2_STUDENTS: CertifiedStudent[] = [
  { id: 'b2-01', batch: 2, number: '01', name: 'ALHaq', status: 'CERTIFIED STUDENT' },
  { id: 'b2-02', batch: 2, number: '02', name: 'Bani Adam', status: 'CERTIFIED STUDENT' },
  { id: 'b2-03', batch: 2, number: '03', name: 'Baseej', status: 'CERTIFIED STUDENT' },
  { id: 'b2-04', batch: 2, number: '04', name: 'Fly-Nightingale', status: 'CERTIFIED STUDENT' },
  { id: 'b2-05', batch: 2, number: '05', name: 'Jarvis', status: 'CERTIFIED STUDENT' },
  { id: 'b2-06', batch: 2, number: '06', name: 'Khalid', status: 'CERTIFIED STUDENT' },
  { id: 'b2-07', batch: 2, number: '07', name: 'Laisullah', status: 'CERTIFIED STUDENT' },
  { id: 'b2-08', batch: 2, number: '08', name: 'LegallyStalking', status: 'CERTIFIED STUDENT' },
  { id: 'b2-09', batch: 2, number: '09', name: 'RadicalGates', status: 'CERTIFIED STUDENT' },
  { id: 'b2-10', batch: 2, number: '10', name: 'Shaikh Sahab', status: 'CERTIFIED STUDENT' },
  { id: 'b2-11', batch: 2, number: '11', name: 'Spectre', status: 'CERTIFIED STUDENT' },
  { id: 'b2-12', batch: 2, number: '12', name: 'STOIC MURDOCK', status: 'CERTIFIED STUDENT' },
  { id: 'b2-13', batch: 2, number: '13', name: 'Vision', status: 'CERTIFIED STUDENT' },
  { id: 'b2-14', batch: 2, number: '14', name: 'Yamach', status: 'CERTIFIED STUDENT' },
];

export const ALL_CERTIFIED_STUDENTS: CertifiedStudent[] = [
  ...BATCH_1_STUDENTS,
  ...BATCH_2_STUDENTS,
];

export const HALL_OF_FAME_DATA = ALL_CERTIFIED_STUDENTS;

