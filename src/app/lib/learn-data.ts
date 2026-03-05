export interface Resource {
  id: string;
  title: string;
  description: string;
  category: "debate-principles" | "critical-thinking" | "communication";
  content: string;
  readTime: string;
  author: string;
  date: string;
}

export interface Discussion {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  school: string;
  date: string;
  replies: number;
  views: number;
}

export const mockResources: Resource[] = [
  {
    id: "1",
    title: "Students’ perceptions of debating as a learning strategy: A qualitative study",
    description: "Exploring students’ views on debate’s educational value in healthcare education.",
    category: "debate-principles",
    content: "Abstract\nDebate has been shown to develop critical thinking skills, enhance communication, and encourage teamwork in a range of different disciplines, including nursing. The objective of this study was to explore students' perceptions of the educational value of debate. A semi-structured focus group was conducted with 13 undergraduate Operating Department Practice students following a debate on the opt-out system of organ donation. Transcripts were analysed thematically, identifying three main themes that described the students’ perceptions of the debate. These were: (1) openness to diverse viewpoints; (2) developing non-technical skills, and (3) encouraging deep learning. The analysis showed participants perceived debate to be a valuable educational method that enhanced their learning. Engaging in debate encouraged students to critically reflect on their prior beliefs about organ donation—in some cases leading them to reconsider their original position. The findings from this study suggest that debate can be a valuable pedagogical tool to incorporate into healthcare education. Future research should consider the use of debate to develop non-technical skills that have utility in healthcare.\n\nIntroduction\nIn recent years, a number of serious high profile failures have shaken the public's trust in the clinical and ethical competence of those working in healthcare (Chadwick and Gallagher, 2016). One high profile example would be the systemic failings at the Mid Staffordshire NHS Trust as detailed in the public inquiry led by Robert Francis (2013). The failings at the Mid Staffordshire NHS Trust may have contributed to a significant number of unnecessary patient deaths due to neglect, abuse, substandard care, and systemic clinical governance failures (Carter and Jarman, 2013). It is therefore essential that all healthcare students are equipped with the ethical, critical thinking and non-technical skills to help them navigate the complex situations they encounter when interacting with their patients, and the decisions they will have to make in practice. Therefore, pedagogical methods that encourage further development of such skills will have significant utility (Onen, 2016).\n\nThe use of debate for educational purposes goes back thousands of years, and flourished as a pedagogical method under the Greek philosophers Protagoras of Abdera (482–411 BC) and Aristotle (384–322 BC) (Huryn, 1986). Debate allows students to actively participate in their learning and requires the use of skills that are not easily developed in a traditional didactic context (Oros, 2007). It imposes a structured approach to a topic and encourages students to take responsibility for their own learning (Snider and Schnurer, 2006). Debate requires effective teamwork that is ordered towards a shared goal—preparation for and participation in the debate (Koklanaris et al., 2008). Teamwork is an essential component of ensuring effective team performance and for maintaining patient safety (Wacker and Kolbe, 2014), and unique ways of advancing teamwork—as well as other non-technical skills—amongst healthcare students deserve further exploration.",
    readTime: "15 min read",
    author: "Unknown",
    date: "2026-02-15"
  },
  {
    id: "2",
    title: "An Investigation of the Impact of Teaching Critical Thinking on the Iranian EFL Learners’ Speaking Skill",
    description: "Study of critical thinking instruction effects on Iranian EFL learners' speaking abilities.",
    category: "critical-thinking",
    content: "Abstract—This study has attempted to determine the effect of critical thinking on Iranian EFL learners’ speaking ability. There were two equal-sized groups of 20 learners: a control group and an experimental one. The subjects were advanced EFL learners at Shokouh Language Institute in Hamedan, Iran. There were 10 male and 10 female learners in each group. In both groups, similar topics were proposed for group discussion such as air pollution, global warming, friendship, drug addiction, happiness, etc. In the experimental group, in addition to having discussion on the given issues, the teacher devoted some time for teaching critical thinking techniques during the class time. In the very first session, the teacher explicitly elaborated on what critical thinking processes are. Then, during the following sessions the teacher taught critical thinking techniques for about 20 minutes and gave learners time to practice these skills. The findings of the current study revealed that those students who received instruction on critical thinking strategies did better on the oral interview post-test. In addition, it was observed that within the experimental group there was not any significant difference between the performances of male vs. female Iranian EFL learners’ speaking ability after giving the treatment.\n\nIndex Terms—critical thinking, English as a Foreign Language (EFL), speaking skill, problem-solving tasks\n\nI. INTRODUCTION\nCritical thinking is a very hotly debated topic these days. All educators are now aware of the importance of equipping learners’ with critical thinking techniques, and teachers are making efforts to teach these techniques in the most appropriate way. Critical thinking is the intellectually disciplined process of actively and skillfully conceptualizing, applying, analyzing, synthesizing, and/or evaluating information gathered from, or generated by, observation, experience, reflection, reasoning, or communication, as a guide to belief and action (Sezer, 2008).\n\nChildren are not born with critical thinking skills. So how can we make critical thinkers out of children to succeed in their whole life? To start with, education could be the first step for promoting critical thinking among the children. Fisher and Scriven (1997) state critical thinking skills are required to be taught since students' thinking skills are not enough to face the problems students deal with either in education or in daily life. Therefore, educators are required to focus on teaching critical thinking to inform them how to learn instead of just transmitting information that is what to say. Emphasizing on making critical thinking as a part of educational courses, scholars have suggested that critical thinking can be taught in different classroom areas, such as those suggested by Shafersman(1991) including lectures, laboratories, writing activities, term papers, exam questions, home work, and quantitative exercises.\n\nAt each educational level, thinking must be practiced in each content field. This means hard work for the teacher. It's much easier to teach students to memorize facts and then assess them with multiple-choice tests. In a course that emphasizes thinking, objectives must include application and analysis, divergent thinking, and opportunities to organize ideas and support value judgments. When more teachers recognize that the facts they teach today will be replaced by the discoveries of tomorrow, the content-versus-process controversy may be resolved (Schmitt, 2002).\n\nNosich (2001) holds that most scholars believe that skills needed to begin to think about issues and problems do not suddenly appear in our students. Teachers who have attempted to incorporate higher level questioning in their discussions or have administered test items demanding some thought rather than just recall from their students are usually dismayed at the preliminary results. Unless the students have been prepared for the change in expectations, both the students and the teacher are likely to experience frustration.\n\nThus, we can conclude that critical thinking is quite complicated, and it is difficult for a child to develop such a complex ability without receiving aids from outside. Therefore, we understand that the task of teachers as people who play the pivotal role of training critical thinkers is very crucial, particularly in a language classroom in which students should get the opportunity to express themselves and evaluate the arguments of their peers. Up to this date, little is known about the importance of teaching critical thinking skills in language classroom. To eliminate this issue, the present study aims at investigating the effects of teaching these skills in a speaking classroom.",
    readTime: "15 min read",
    author: "Unknown",
    date: "2026-02-10"
  },
  {
    id: "3",
    title: "The Fear Of Public Speaking",
    description: "Overcoming anxiety and learning to share your story with confidence and grace.",
    category: "communication",
    content: "Are you afraid of public speaking? How would you respond if someone asked you to teach the Bible or share your faith in front of others?\n\nMany of us would experience sweaty palms if we were asked to make a simple announcement during church, let alone teach in some capacity. Perhaps it's our general fear of public speaking that stimulates anxiety, or maybe you feel that you're not as biblically literate as you should be.\n\nBut no matter how uncomfortable you are in front of a crowd, or regardless of how little seminary you have completed, God intends for you to be one of his instructors.\n\nIt's true that God sets apart certain people for public teaching in the church. He gives them the gifts and grace necessary to do the thing he's called them to do in this role. But the scheduled proclamation of the Word in the body of Christ is only one aspect of the church's teaching ministry.\n\nThe Apostle Paul instructs us all, in Colossians 3:16, to \"Let the word of Christ dwell in you richly, teaching and admonishing one another in all wisdom.\" In this context, Paul is talking about the myriad of everyday-life ministry opportunities that God gives to each of his children.\n\n(This passage is not addressing seminary students or pastors or elders. At the beginning of the chapter, he starts with, \"If then you have been raised with Christ…\" That's all of us, any Christian, regardless of vocation or location.)\n\nSo what do these everyday-life ministry opportunities look like? David shares one in Psalm 51:13: \"I will teach transgressors your ways, and sinners will return to you.\"\n\nThis type of teaching doesn't require us to lay out a comprehensive theology of grace. Most of us wouldn't be qualified to do that. Instead, this type of teaching requires us to share our stories of rescue and transformation with others.\n\nThis one-on-one, informal ministry is not teaching the person about grace. Rather, I am sharing my experience of grace. People learn, not because I've opened the dictionary and given them a lecture, but because I've shown them the video of grace in operation in my own life.\n\nWhat qualifies us to teach in the personal ministry context of everyday life is the grace that we have received in our own moments of need. By being willing to share my own story, I am being a tool of transforming grace in their lives.\n\nYou may never be a pastor, small group leader, Sunday school teacher, or foreign missionary. But you will always be called to a life of daily gospel transparency. God wants you to be ready, willing, and waiting to share your gratitude for the grace you've received with someone who needs it just as much as you.\n\nWill you be a good steward of your story of grace?\n\nGod bless",
    readTime: "15 min read",
    author: "Paul David Tripp",
    date: "2026-02-08"
  },
  {
    id: "6",
    title: "Critical Thinking: A Literature Review",
    description: "Overview of definitions, development, teaching, and assessment of critical thinking.",
    category: "critical-thinking",
    content: "Abstract\nCritical thinking includes the component skills of analyzing arguments, making inferences using inductive or deductive reasoning, judging or evaluating, and making decisions or solving problems. Background knowledge is a necessary but not a sufficient condition for enabling critical thought within a given subject. Critical thinking involves both cognitive skills and dispositions. These dispositions, which can be seen as attitudes or habits of mind, include open- and fair-mindedness, inquisitiveness, flexibility, a propensity to seek reason, a desire to be well-informed, and a respect for and willingness to entertain diverse viewpoints. There are both general- and domain-specific aspects of critical thinking. Empirical research suggests that people begin developing critical thinking competencies at a very young age. Although adults often exhibit deficient reasoning, in theory all people can be taught to think critically. Instructors are urged to provide explicit instruction in critical thinking, to teach how to transfer to new contexts, and to use cooperative or collaborative learning methods and constructivist approaches that place students at the center of the learning process. In constructing assessments of critical thinking, educators should use open-ended tasks, real-world or “authentic” problem contexts, and ill-structured problems that require students to go beyond recalling or restating previously learned information. Such tasks should have more than one defensible solution and embed adequate collateral materials to support multiple perspectives. Finally, such assessment tasks should make student reasoning visible by requiring students to provide evidence or logical arguments in support of judgments, choices, claims, or assertions.\n\nKeywords: critical thinking, reasoning, problem solving. Educators have long been aware of the importance of critical thinking skills as an outcome of student learning. More recently, the Partnership for 21st Century Skills has identified critical thinking as one of several learning and innovation skills necessary to prepare students for post-secondary education and the workforce. In addition, the newly created Common Core State Standards reflect critical thinking as a cross-disciplinary skill vital for college and employment. Despite widespread recognition of its importance, there is a notable lack of consensus regarding the definition of critical thinking. The purposes of this literature review are to (a) explore the ways in which critical thinking has been defined by researchers, (b) investigate how critical thinking develops (c) learn how teachers can encourage the development of critical thinking skills in their students, and (d) review best practices in assessing critical thinking skills.\n\nDefinition of Critical Thinking\nTheoretical Background\n The literature on critical thinking has roots in two primary academic disciplines: philosophy and psychology (Lewis & Smith, 1993). Sternberg (1986) has also noted a third critical thinking strand within the field of education. These separate academic strands have developed different approaches to defining critical thinking that reflect their respective concerns. Each of these approaches is explored more fully below.",
    readTime: "20 min read",
    author: "Unknown",
    date: "2026-01-28"
  },

  {
    id: "7",
    title: "The Importance of Speaking to Learn the Language",
    description: "Why speaking is vital for language fluency and cultural connection.",
    category: "communication",
    content: "Abstract\nSpeaking a language helps to move your knowledge of grammar, vocabulary, and pronunciation from the back of your mind to the front, or from your 'slow memory' to your 'quick memory.' Given time, this will improve your fluency and memory too.\nKeywords: Speaking, languages, component, practise, vocabulary.\n\nLearning a language involves a lot of effort, commitment and consistency. This is because language learning involves learning the pronunciation, grammar, vocabulary, reading, writing, understanding etc. But still we love to learn a language and become proficient in it. This is because we love to know about different cultures, people, and their lifestyle and of course we like to travel and converse with people in their language. Once we are able to speak the language well with the natives and understand them well, it gives us a great sense of accomplishment, satisfaction and joy.\n\nTo learn a language some focus on mastering the grammar, some like to learn a lot of vocabulary, some focus on reading books in the target language, some learners like to watch a lot of films and episodes in the target language or listen to a variety of podcasts and radio shows etc. All of the mentioned ways are helpful in learning a language but the most important and essential of all which goes hand in hand with all the other tools is “SPEAKING”.\n\nSpeaking is an essential component of language learning, and its importance cannot be understated. Whether you are learning English or any other language, the ability to speak fluently and confidently is crucial. Here are several reasons why speaking is so vital in the process of learning a language.\n1. Practical Application: Speaking is the most direct way to put your language skills to use. It allows you to practice and apply vocabulary, grammar, and pronunciation in real-life situations, thereby reinforcing your learning.\n2. Communication Skills: The primary goal of learning a language is to be able to communicate effectively. Speaking helps you develop the ability to express yourself, understand others, and engage in conversations, thus enhancing your overall communication skills.\n3. Fluency and Confidence: Regular practice in speaking contributes significantly to fluency. It enables you to become more comfortable with the language, leading to increased confidence in your ability to express yourself and understand others.\n4. Cultural Understanding: Speaking a language immerses you in the culture associated with it. Through speaking, you gain insights into the customs, traditions, and mannerisms of the language's speakers, which is essential for a well-rounded understanding of the language.\n468 AMERICAN Journal of Language, Literacy and Learning in STEM Education www. grnjournal.us\n5. Overcoming Challenges: Speaking allows you to confront and overcome challenges, such as using the correct tenses, idiomatic expressions, and colloquialisms. This hands-on approach is an effective way to build proficiency and adapt to real-life language use.\n6. Networking and Socializing: Being able to converse in a language opens up opportunities for social interaction and networking in various contexts, whether social, academic, or professional.\n7. Accurate Pronunciation: Regular speaking practice improves your pronunciation and intonation, making your speech more comprehensible to native speakers.\n\nIn conclusion, speaking is an indispensable part of learning a language. It provides a platform for practical application, communication skill development, cultural understanding, and confidence building. Therefore, it is essential to actively engage in speaking practice when learning a new language, such as English, to achieve proficiency and fluency.\n\nAuthor: Fayzullayeva Nigina.",
    readTime: "15 min read",
    author: "Fayzullayeva Nigina",
    date: "2026-01-25"
  }
];

export const mockDiscussions: Discussion[] = [
  {
    id: "1",
    title: "What Makes a Strong Opening Statement?",
    description: "Exploring the elements of effective debate openings and how to capture audience attention while establishing credibility.",
    category: "Debate Strategy",
    author: "Alexandra Kim",
    school: "Riverside Academy",
    date: "2026-02-20",
    replies: 12,
    views: 245
  },
  {
    id: "2",
    title: "Understanding Different Perspectives on Technology in Education",
    description: "A discussion about various viewpoints regarding educational technology, examining benefits, challenges, and considerations.",
    category: "Educational Topics",
    author: "Marcus Thompson",
    school: "Oakwood Prep",
    date: "2026-02-18",
    replies: 23,
    views: 389
  },
  {
    id: "3",
    title: "How Do You Overcome Speaking Anxiety?",
    description: "Sharing experiences and strategies for managing nervousness when speaking in formal settings.",
    category: "Communication Skills",
    author: "Sophie Martinez",
    school: "Greenfield School",
    date: "2026-02-17",
    replies: 31,
    views: 512
  },
  {
    id: "4",
    title: "Exploring the Ethics of Debate Topics",
    description: "Discussion about how to approach sensitive topics respectfully and thoughtfully in academic settings.",
    category: "Academic Ethics",
    author: "James Patterson",
    school: "Riverside Academy",
    date: "2026-02-15",
    replies: 18,
    views: 301
  },
  {
    id: "5",
    title: "What Are the Best Resources for Research?",
    description: "Students sharing their favorite academic databases, journals, and research tools for debate preparation.",
    category: "Research Methods",
    author: "Emma Wilson",
    school: "Lincoln Heights",
    date: "2026-02-12",
    replies: 27,
    views: 421
  },
  {
    id: "6",
    title: "Understanding Climate Policy from Multiple Angles",
    description: "An exploratory discussion examining different approaches to environmental policy without advocating for specific positions.",
    category: "Environmental Topics",
    author: "Ryan Chen",
    school: "Oakwood Prep",
    date: "2026-02-10",
    replies: 19,
    views: 367
  }
];

export const resourceCategories = [
  { id: "debate-principles", name: "Debate Principles", description: "Fundamental concepts and formats" },
  { id: "critical-thinking", name: "Critical Thinking", description: "Logic, reasoning, and analysis" },
  { id: "communication", name: "Communication Skills", description: "Speaking, listening, and presentation" }
];
