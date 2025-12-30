
import React, { useState, useRef } from 'react';
import { EMPOLISH_CONTENT } from './content';
import { ContentPart } from './types';

const COLORS = {
  navy: '#1a237e',
  red: '#c62828',
  cream: '#f8fafc',
  white: '#ffffff',
  textMain: '#1e293b',
  textSecondary: '#64748b'
};

const App: React.FC = () => {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const activeModule = EMPOLISH_CONTENT[activeModuleIndex];
  const activeLesson = activeModule.lessons[activeLessonIndex];

  const handlePlayAudio = (part: ContentPart) => {
    if (part.audioFile && audioRef.current) {
      audioRef.current.src = `/audio/${part.audioFile}`;
      audioRef.current.play().catch(e => {
        console.warn(`Audio file not found or playback blocked: /audio/${part.audioFile}`, e);
      });
    }
  };

  const handleModuleChange = (index: number) => {
    setActiveModuleIndex(index);
    setActiveLessonIndex(0);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row overflow-hidden bg-slate-50">
      <audio ref={audioRef} />
      
      <aside className="w-full lg:w-80 flex-shrink-0 border-r border-slate-200 shadow-sm flex flex-col h-screen overflow-y-auto bg-white">
        <div className="p-8 flex items-center gap-4 border-b border-slate-100" style={{ backgroundColor: COLORS.navy }}>
            <div className="w-12 h-12 flex-shrink-0 rounded-md flex items-center justify-center relative overflow-hidden bg-white border-2 border-slate-200">
                <span className="text-3xl font-serif font-bold text-slate-800 absolute z-10">eM</span>
                <div className="absolute top-0 right-0 w-6 h-6 bg-red-600 rounded-full blur-xl opacity-20 -mr-2 -mt-2"></div>
            </div>
            <div>
                <h1 className="text-xl font-bold text-white tracking-tight">Empolish</h1>
                <p className="text-xs text-indigo-200 uppercase tracking-widest font-semibold">Polish in Context</p>
            </div>
        </div>

        <nav className="flex-1 p-4">
          {EMPOLISH_CONTENT.map((mod, mIdx) => (
            <div key={mod.id} className="mb-6">
              <h3 
                className={`px-3 py-2 text-sm font-bold uppercase tracking-wider mb-2 cursor-pointer transition-colors ${mIdx === activeModuleIndex ? 'text-indigo-700' : 'text-slate-400'}`}
                onClick={() => handleModuleChange(mIdx)}
              >
                {mod.title}
              </h3>
              <ul className="space-y-1">
                {mod.lessons.map((lesson, lIdx) => (
                  <li key={lIdx}>
                    <button
                      onClick={() => {
                        setActiveModuleIndex(mIdx);
                        setActiveLessonIndex(lIdx);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        activeModuleIndex === mIdx && activeLessonIndex === lIdx
                          ? 'bg-indigo-50 text-indigo-700 border-l-4 border-indigo-700'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      {lesson.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      <main className="flex-1 h-screen overflow-y-auto bg-slate-50 relative">
        <header className="sticky top-0 z-10 w-full px-8 py-6 bg-white/80 backdrop-blur-md border-b border-slate-200 flex justify-between items-center">
            <div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-1">
                    {activeModule.subtitle}
                </span>
                <h2 className="text-2xl font-bold text-slate-900 leading-tight">
                    {activeLesson.title}
                </h2>
            </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-12 lg:px-12">
          {activeLesson.parts.map((part, idx) => (
            <ContentRenderer 
              key={idx} 
              part={part} 
              onPlayAudio={handlePlayAudio}
            />
          ))}
        </div>

        <footer className="max-w-4xl mx-auto px-6 py-12 lg:px-12 border-t border-slate-200">
           <div className="flex justify-between items-center">
                <button 
                  disabled={activeModuleIndex === 0 && activeLessonIndex === 0}
                  onClick={() => {
                      if (activeLessonIndex > 0) setActiveLessonIndex(prev => prev - 1);
                      else if (activeModuleIndex > 0) {
                          const prevModIdx = activeModuleIndex - 1;
                          setActiveModuleIndex(prevModIdx);
                          setActiveLessonIndex(EMPOLISH_CONTENT[prevModIdx].lessons.length - 1);
                      }
                  }}
                  className="px-6 py-2 rounded-full border border-slate-300 text-slate-600 font-medium hover:bg-white hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  Previous
                </button>
                <button 
                  disabled={activeModuleIndex === EMPOLISH_CONTENT.length - 1 && activeLessonIndex === activeModule.lessons.length - 1}
                  onClick={() => {
                      if (activeLessonIndex < activeModule.lessons.length - 1) setActiveLessonIndex(prev => prev + 1);
                      else if (activeModuleIndex < EMPOLISH_CONTENT.length - 1) {
                          setActiveModuleIndex(prev => prev + 1);
                          setActiveLessonIndex(0);
                      }
                  }}
                  className="px-8 py-2 rounded-full bg-indigo-700 text-white font-medium hover:bg-indigo-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-md shadow-indigo-200"
                >
                  Next
                </button>
           </div>
        </footer>
      </main>
    </div>
  );
};

interface ContentRendererProps {
  part: ContentPart;
  onPlayAudio: (part: ContentPart) => void;
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ part, onPlayAudio }) => {
  switch (part.type) {
    case 'heading':
      return <h2 className="text-2xl font-bold mt-12 mb-6 text-slate-800 border-b-2 border-indigo-100 pb-2">{part.content}</h2>;
    case 'subheading':
      return <h3 className="text-xl font-semibold mt-8 mb-4 text-indigo-800">{part.content}</h3>;
    case 'text':
      return <p className="text-lg text-slate-600 leading-relaxed mb-6">{part.content}</p>;
    case 'intro':
      return (
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8 rounded-r-lg">
            <p className="text-lg text-indigo-900 font-medium leading-relaxed italic">{part.content}</p>
        </div>
      );
    case 'list':
      return (
        <ul className="space-y-4 mb-8">
          {part.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0"></span>
              <span className="text-lg text-slate-600 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'audio-item':
      return (
        <div className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-6 hover:border-indigo-300 hover:shadow-md transition-all">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xl font-bold text-slate-900">{part.label}</span>
            <button 
              onClick={() => onPlayAudio(part)}
              className="flex items-center gap-2 px-5 py-2.5 bg-indigo-700 text-white rounded-full font-bold text-sm uppercase tracking-wider hover:bg-indigo-800 active:scale-95 transition-all shadow-lg shadow-indigo-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.983 5.983 0 01-1.414 4.243 1 1 0 11-1.415-1.415A3.983 3.983 0 0013 10a3.983 3.983 0 00-1.414-2.828a1 1 0 010-1.415z" clipRule="evenodd" />
              </svg>
              Listen
            </button>
          </div>
          <div className="text-slate-600 text-lg leading-relaxed whitespace-pre-line border-t border-slate-50 pt-4">
            {part.content}
          </div>
        </div>
      );
    case 'tip':
      return (
        <div className="flex items-start gap-4 p-5 bg-amber-50 rounded-xl border border-amber-200 mb-8">
            <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0 text-amber-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <p className="text-amber-900 font-medium leading-relaxed italic">{part.content}</p>
        </div>
      );
    default:
      return null;
  }
};

export default App;
