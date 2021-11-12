import { CodeItem } from './CodeItem';

export const publications: Array<CodeItem> = [
  { code: 'pkon', name: 'Children Songs' },
  { code: 'pk', name: 'Become Jehovah’s Friend' },
  { code: 'pksjj', name: 'Become Jehovah’s Friend—Sing With Us' },
  { code: 'sjjm', name: '"Sing Out Joyfully" to Jehovah — Meetings' },
  { code: 'sjjc', name: '"Sing Out Joyfully" to Jehovah — Vocals' },
  { code: 'sjji', name: '"Sing Out Joyfully" to Jehovah — Instrumental' },
  { code: 'osg', name: 'Original Songs' },
];

export const filetypes: Array<string> = ['MP4', 'MP3'];

export const languages: Array<CodeItem> = [
  { code: 'X', name: 'German' },
  { code: 'E', name: 'English' },
  { code: 'U', name: 'Russian' },
];

export default { publications, filetypes, languages };
