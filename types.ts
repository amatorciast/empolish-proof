
export interface ContentPart {
  type: 'text' | 'heading' | 'subheading' | 'list' | 'audio-item' | 'tip' | 'intro';
  content: string;
  items?: string[];
  audioFile?: string;
  label?: string;
}

export interface Lesson {
  title: string;
  parts: ContentPart[];
}

export interface Module {
  id: string;
  title: string;
  subtitle: string;
  lessons: Lesson[];
}
