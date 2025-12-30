
import { Module } from './types';

export const EMPOLISH_CONTENT: Module[] = [
  {
    id: 'module-0',
    title: 'Module 0: Your Adventure Begins',
    subtitle: 'Start Here',
    lessons: [
      {
        title: 'Lesson 1: How to Get the Most Out of This Course',
        parts: [
          { type: 'text', content: "Welcome to the world of Empolish! I'm so glad you're here. Before we begin, let me tell you about the objective behind this course - and the promise I'm making to you." },
          { type: 'heading', content: 'What does "Empolish" mean?' },
          { type: 'text', content: 'The name that combines two words. The first is the English word "empower". My mission is to give you that power - the power to express your thoughts freely and using authentic Polish language. The second part, of course, is "Polish" - the language and culture that we will discover together. And what about "EM"? There are the initials of the founder of the course.' },
          { type: 'text', content: 'I created this course because I believe that learning a language is more than just memorizing rules. It\'s about opening a door to a new culture, a new sense of humor, and a new way of seeing the world. My aim for you is to finish this course speaking like a Pole, not like a textbook. I want you to understand the context, feel the flow of the language, and gain the confidence to chat freely over coffee, at a business meeting, or during a family dinner.' },
          { type: 'text', content: "I don't promise it will always be easy. But I do promise it will be an inspiring adventure." },
          { type: 'heading', content: 'Our Adventure Map' },
          { type: 'text', content: "To help you feel confident at every stage, here's a map of our journey together. You'll see how we'll build your skills logically, step by step:" },
          { type: 'list', content: '', items: [
            "Module 0: Start Here (You are here!) - We'll learn the unique sounds of the Polish language.",
            "Module 1: First Conversations - You'll learn the absolute basics to start speaking and understanding simple dialogues right away.",
            "Module 2: The Heart of the Course - The Four Seasons – You'll explore the texts that will become our foundation for learning grammar and vocabulary in a natural context.",
            "Module 3: The Grammar Decoder - Together, using the texts you already know, we'll decode how Polish grammar works. You'll see that it's actually logical!",
            "Modules 4 & 5: Polish in Practice - We'll use all your new knowledge in real, everyday situations – at a café, at work, or talking about hobbies."
          ]},
          { type: 'heading', content: 'Empolish AI Promptbook' },
          { type: 'text', content: 'The Empolish AI Promptbook represents a new way of embracing technology in language learning. I know that the hardest part is bridging the gap between "understanding it in your head" and "speaking it out loud." Often, we lack a conversation partner, or we are paralyzed by the fear of making a mistake.' },
          { type: 'text', content: 'That is why this course includes the Empolish AI Promptbook.' },
          { type: 'text', content: 'With it, you will turn Artificial Intelligence (AI) into your patient, 24/7 conversation partner.' },
          { type: 'list', content: '', items: [
            "Want to practice ordering coffee before you step into a café? The Promptbook will show you how to role-play this scene with AI.",
            "Struggling with a difficult sound? The Promptbook will teach you how to get instant feedback on your accent."
          ]},
          { type: 'text', content: 'Think of this course as your roadmap, and the Promptbook as a safe space where you can make mistakes before you start speaking freely with Poles. You will find it in a separate file – make sure to check it out!' },
          { type: 'heading', content: 'Your Keys to Success' },
          { type: 'subheading', content: 'Listen with Your Full Attention' },
          { type: 'text', content: "In every lesson, you'll find audio recordings. Always listen to the text or dialogue first, even if you don't understand everything. Getting used to the sound and melody of the language is the first, most important step." },
          { type: 'subheading', content: 'Speak Without Fear' },
          { type: 'text', content: "Hear a new word or sentence? Repeat it after the speaker, loud and clear. You can't learn to speak just by reading. Your mouth needs to practice. Don't worry if it sounds imperfect at first - that's completely normal" },
          { type: 'subheading', content: 'Don\'t Be Afraid of Grammar' },
          { type: 'text', content: 'I will show you grammar in practice, using real-life examples. We won\'t be memorizing complicated charts. Instead, we will discover the rules together by asking the question: "Why does this word look different?".' },
          { type: 'subheading', content: 'Be Your Own Best Friend' },
          { type: 'text', content: 'This is the most important rule. Your job isn\'t to be perfect; it\'s to be curious. Celebrate the small victories: the day you understand a joke before someone translates it for you. The moment you order kawę (not kawa) for the first time. These are the moments we are aiming for!' }
        ]
      },
      {
        title: 'Lesson 2: The Polish Alphabet and Sounds - Your Ticket to an Authentic Accent',
        parts: [
          { type: 'text', content: 'The Polish alphabet is based on Latin letters (just like English) but it is enriched with a few unique sounds that give it its characteristic sharp and susurrus tone.' },
          { type: 'text', content: 'This is the most important technical lesson at the start of your journey. Mastering these sounds will give you immense confidence and make you sound more natural from day one. Below, you\'ll find the key ones, along with audio recordings. Listen and repeat.' },
          { type: 'text', content: 'A simple rule: Unlike English (e.g., the "c" in "cat" and "city"), Polish letters almost always sound identical. Once you learn a sound, you can be 100% certain that it is always spelled the same.' },
          { type: 'heading', content: 'Group 1: The Susurrus Sounds' },
          { type: 'text', content: 'These sounds are a hallmark of the Polish language. Imagine the sound of wind or rustling leaves.' },
          { type: 'audio-item', label: 'SZ', content: 'How it sounds: Exactly like the English "sh" in "shoe". \nExamples: szkoła (school), proszę (please), szafa (wardrobe).', audioFile: 'sz.mp3' },
          { type: 'audio-item', label: 'CZ', content: 'How it sounds: Like the English "ch" in "chair". It\'s a hard, short sound. \nExamples: czapka (cap), czas (time), dlaczego (why).', audioFile: 'cz.mp3' },
          { type: 'audio-item', label: 'RZ / Ż', content: 'How it sounds: They are both the same sound. It sounds like the "s" in the English word "pleasure" or "usual". It\'s a voiced, vibrating "sh". \nExamples: rzeka (river), żaba (frog), marzec (March), dużo (a lot).', audioFile: 'rz-z.mp3' },
          { type: 'tip', content: 'Empolish Tip: Don\'t worry for now about when to write "rz" vs. "ż". The key at this stage is to know they are pronounced identically.' },
          { type: 'audio-item', label: 'DŻ', content: 'How it sounds: Like the English "j" in "jeans" or "jam". \nExamples: dżem (jam), dżungla (jungle).', audioFile: 'dz.mp3' },
          { type: 'heading', content: 'Group 2: The Soft Sounds' },
          { type: 'text', content: 'These sounds are created by flattening your tongue against the roof of your mouth. They are more gentle than their "rustling" counterparts.' },
          { type: 'audio-item', label: 'Ś / SI', content: 'How it sounds: They are both the same sound. It\'s a very soft "sh". Try to start saying the English "sheep" but stop right at the beginning, with your tongue flatter. \nExamples: śnieg (snow), miś (teddy bear), sierpień (August).', audioFile: 's-si.mp3' },
          { type: 'audio-item', label: 'Ć / CI', content: 'How it sounds: They are both the same sound. It\'s a very soft "ch". It sounds a bit like the start of the English "chew", but much shorter and sharper. \nExamples: być (to be), pić (to drink), cień (shadow).', audioFile: 'c-ci.mp3' },
          { type: 'audio-item', label: 'Ź / ZI', content: 'How it sounds: They are both the same sound. It\'s a very soft "ż" or voiced "ś". \nExamples: źle (badly), źródło (source), ziemia (earth).', audioFile: 'z-zi.mp3' },
          { type: 'audio-item', label: 'DŹ / DZI', content: 'How it sounds: They are both the same sound. It\'s a very soft "dż". \nExamples: dźwięk (sound), niedźwiedź (bear), dziecko (child).', audioFile: 'dz-dzi.mp3' },
          { type: 'heading', content: 'Group 3: The Nasal Sounds' },
          { type: 'audio-item', label: 'Ą', content: 'How it sounds: Similar to the "on" in the English "song", but the sound goes more through your nose. \nExamples: są (they are), rączka (little hand), książka (book).', audioFile: 'a_nasal.mp3' },
          { type: 'audio-item', label: 'Ę', content: 'How it sounds: Like a nasal "en" or "em". \nExamples: idę (I go), ręka (hand), pięknie (beautifully).', audioFile: 'e_nasal.mp3' },
          { type: 'tip', content: 'Empolish Tip: When "ę" is at the very end of a word, Poles almost always pronounce it like a regular "e". We don\'t say "idę" (nasally), but "ide". This is an important secret to sounding natural.' },
          { type: 'audio-item', label: 'Ń / NI', content: 'How it sounds: They are both the same sound. Like the "ni" in "onion" or "ny" in "canyon". \nExamples: koń (horse), słoń (elephant), dłoń (hand).', audioFile: 'n-ni.mp3' },
          { type: 'heading', content: 'Group 4: Familiar Letters, New Sounds' },
          { type: 'audio-item', label: 'C', content: 'How it sounds: This is a crucial one. Not like "k" or "s". It sounds exactly like the "ts" at the end of the English word "cats" or "lots". \nExamples: co (what), praca (work), noc (night).', audioFile: 'c_hard.mp3' },
          { type: 'audio-item', label: 'Ł', content: 'How it sounds: Like the English "w" in "water" or "well". It\'s that simple. \nExamples: łóżko (bed), głowa (head), miły (nice).', audioFile: 'l_slash.mp3' },
          { type: 'audio-item', label: 'U / Ó', content: 'How it sounds: They are both the same sound. Like the English "oo" in "food" or "moon". \nExamples: duży (big), uwaga (attention), król (king), góra (mountain).', audioFile: 'u-o.mp3' },
          { type: 'tip', content: 'Empolish Tip: Don\'t worry about the spelling. Just remember that both characters are pronounced identically.' },
          { type: 'audio-item', label: 'H / CH', content: 'How it sounds: They are both the same sound. Like the English "h" in "house". \nExamples: choinka (Christmas tree), herbata (tea), hotel (hotel).', audioFile: 'h-ch.mp3' },
          { type: 'text', content: 'Your Task: Listen to all the recordings from this lesson several times. Try to repeat each sound and each word. Don\'t worry if it\'s difficult at first - that\'s perfectly normal. Your goal is to become familiar with these sounds.' },
          { type: 'text', content: 'Congratulations. You have just built the foundation for all your future learning. From now on, every new Polish word you encounter, you will be able to read and pronounce correctly. The primary Module 0 is now behind you.' }
        ]
      }
    ]
  },
  {
    id: 'module-1',
    title: 'Module 1: First Steps - Your First Conversation in Polish',
    subtitle: 'First Steps',
    lessons: [
      {
        title: 'Lesson 1: How to Greet and Say Goodbye',
        parts: [
          { type: 'intro', content: "Welcome to the module where theory turns into practice. Here, you'll learn the absolute basics that will allow you to start and end a simple conversation right away. After completing this module, you'll be able to greet someone in a shop, chat with a friend, and comment on the weather - in other words, do what Poles do every day. Let's begin." },
          { type: 'text', content: 'In Polish, the way we greet someone depends on the situation. You\'ll say "hello" differently in an office than you would to a good friend at a party. Let\'s learn the most important phrases.' },
          { type: 'heading', content: 'Formal Greetings (for everyone)' },
          { type: 'audio-item', label: 'Dzień dobry', content: 'When to use: This is your reliable, universal greeting. It works anytime, anywhere - from morning till evening. In a shop, at work, when greeting someone older or a stranger. Zero risk, full elegance. \nEquivalent: Good morning / Good afternoon.', audioFile: 'dzien-dobry.mp3' },
          { type: 'audio-item', label: 'Dobry wieczór', content: 'When to use: This is the evening version of "Dzień dobry," typically used after 6 p.m. It\'s equally formal and safe. \nTranslation: Good evening.', audioFile: 'dobry-wieczor.mp3' },
          { type: 'heading', content: 'Informal Greetings (for friends)' },
          { type: 'audio-item', label: 'Cześć', content: 'When to use: For friends, family, and peers. This is your comfortable, casual, everyday greeting. \nEquivalent: Hi / Hello.', audioFile: 'czesc-hello.mp3' },
          { type: 'audio-item', label: 'Hej', content: 'When to use: A very casual form, popular among young people. If you want to sound very natural among close friends, this is a great choice. \nEquivalent: Hey.', audioFile: 'hej.mp3' },
          { type: 'heading', content: 'Saying Goodbye' },
          { type: 'audio-item', label: 'Do widzenia', content: 'When to use: A formal, respectful goodbye. It\'s the perfect partner for "Dzień dobry". Use it when leaving a shop, a bank, or finishing a formal conversation. \nEquivalent: Goodbye.', audioFile: 'do-widzenia.mp3' },
          { type: 'audio-item', label: 'Dobranoc', content: 'When to use: This is the evening farewell, the synonym of "Dobry wieczór". You use it when you\'re wishing someone a good night. \nEquivalent: Goodnight.', audioFile: 'dobranoc.mp3' },
          { type: 'audio-item', label: 'Cześć / Na razie / Pa', content: 'When to use: This is your informal farewell trio. "Cześć" is universal, "Na razie" suggests "see you later," and "Pa" is very friendly. \nEquivalent: Bye / See you / Bye-bye.', audioFile: 'czesc-na-razie-pa.mp3' },
          { type: 'tip', content: 'Empolish Tip: Notice that "Cześć" works both ways - for greeting and for saying goodbye. This is very Polish' }
        ]
      }
    ]
  }
];
