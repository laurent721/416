import React, { useState } from 'react';

type Language = 'KR' | 'EN' | 'FR';

const CREDITS_TEXT = `2026
영원히 잊을 수 없을 저녁을 떠올려야 하는 괴로움을 이해하기 위하여
Afin de comprendre la souffrance de devoir se remémorer une soirée que l'on n'oubliera jamais

제작·출연 안건우
Production·Apparition AHN GEON WOO
음향영상기술 김재성
Technique audiovisuelle KIM JAE SEONG
기록·드라마투르기 장민영
Archivistrice·Dramaturgie JANG MIN YEONG
운영지원 김도해
Assistance de production KIM DO HAE

2026년 5월 6일 수요일 12시 개장
Ouverture Mercredi, le 6 mai 2026. à midi
상연시간 480분
Séance pendant 480min.
서울대학교 인문소극장
Theatrum Humanitatis, Université nationale de Séoul, Corée su Sud.
자유입퇴장
Entrée et sortie libres`;

const CONTENT = {
  KR: [
    `제작자의 말
어떤 어둠은 빛 앞에서 자신의 존재를 감추지 않기도 합니다. 그런 어둠 한 조각씩 가슴에 품고 사는 사람들이 있습니다. 피멍이 든 생선의 살을 아무리 도려내도 핏자국을 지울 수 없는 것처럼, 그런 어둠을 마음의 일부로 여긴 채 살아가는 사람들 말입니다. 그런 사람들은 어쩌면 그리 어렵지 않게 찾을 수 있습니다. 우리의 극장에서는 저마다 가지고 있을 어둠 속에 관한 이야기가 이루어질 것입니다. 오래 전에 어쩌다 생긴 어둠, 그동안은 모른 체하고 지냈던 어둠에 관한 이야기입니다. 어둠이 제 마음 속에 자리한 뒤로, 저는 어쩌다 스물이 되었고, 대학에 입학하였고, 대학을 졸업하였고, 군 복무를 마쳤고, 대학원에 입학하였고, 이십대의 마지막을 보내고 있습니다. 그동안은 어둠을 피해왔지만 (피하려 애썼지만) 어쩌다 이제는 다시 마주해보는 것은 어떨까, 하는 생각이 떠올랐습니다. 제 어둠을 품은 극장은 저만의 은밀한 방인 동시에 거대한 실험실이 됩니다. 하루 종일, 우리는 극장을 가득 채운 어둠이 우리의 시간과 함께 움직이며 살아가고 있음을 느끼게 될 것입니다. 
이 작업은 사회적 참사를 주제로 진행됩니다. 극장에 오시는 분들에 따라 불편감이나 물리적, 심리적 고통을 느끼실 수 있습니다. 저 역시 뜻하지 아니한 고통으로 퍼포먼스를 중단할 수 있습니다. 그러나 극장은 종일 열려 있을 것입니다. 
극장에는 어둠이 있습니다.`,
    `드라마투르기의 말
우리는 그 침몰의 과정을 실시간으로 ‘관전’해야 했다. ‘전원 구조’라는 희망 고문과도 같았던 오보 속에서 스크린 너머의 풍경은 그 자체로 잔혹한 폭력이었다. 누군가는 교실에서, 누군가는 거실에서, 누군가는 일상의 평범한 순간 속에 그 장면을 새겼다. 당시 우리가 몇 살이었든 어떤 장소에 있었든지 그날의 충격으로부터 자유로운 이는 없었다. 아직도 그날 공기 속에 감돌던 내음과 어머니의 목소리, 오보를 믿으며 내뱉었던 무심한 말들까지도 선명히 기억한다. 시간은 마치 박제된 것처럼 우리 각자의 신경망 속에 장기기억으로 아로새겨졌다.
흔히 참사가 남긴 심리적 흉터를 ‘트라우마’라 부르며 치료와 극복의 대상으로 규정하곤 한다. 하지만 트라우마를 꼭 치료하고 극복해야만 하는 대상으로 봐야 할까? 4월 16일, 학교에서 세월호의 침몰 장면을 지켜봤던 A는 12년이 지난 오늘날까지도 그날의 기억을 무의식적으로 밀어내며 살아왔다고 증언한다. 관련된 기사를 찾아보는 일조차 너무나 고통스럽고 버거웠기 때문이다. A는 그 억눌린 시간조차 결국 지금의 자신을 구성하는 일부라고 말한다. 어쩌면 트라우마는 지워내야 할 얼룩이 아니라 껴안고 살아가야 할 삶의 한 층위일지도 모른다. 사건의 발생, 관전, 충격, 애도, 외면과 같은 감정과 행위들이 뒤엉켜 지금의 ‘나’를 만든다. 밀 크레이프 케이크를 떠올려보자. 겹겹이 쌓인 얇은 층들이 모여 케이크라는 하나의 형태를 이룬다. 그러나 가장 아랫단의 층과 가장 윗단의 층은 서로 다른 질감을 지니기 마련이다. 시간이 흐르면 경계가 뚜렷하던 층들이 점차 옅어지고 서로 뭉개지기도 한다. 축적된 기억을 돌아본다는 것은 이러한 층위를 억지로 드러내서 파헤치는 것이 아니다. 칼로 베어내서 그 단면을 보자는 것도 아니다. 그것이 존재하는 형태 그 자체를 온전히 바라보는 과정. 그 응시의 과정이 바로 이번 시공간의 중심이 될 것이다.`,
    CREDITS_TEXT
  ],
  EN: [
    `The story of author
Some darkness does not hide its presence in the face of light. There are people who live carrying fragments of such darkness in their hearts. Just as one cannot erase the bloodstains from the flesh of a bruised fish, no matter how much one cuts away, these are people who live whilst regarding that darkness as a part of their very being. Such people are, perhaps, not so difficult to find. In our theatre, stories will unfold concerning the darkness that each of us carries within. These are tales of darkness that arose by chance long ago, and of darkness we have lived with whilst pretending not to notice. Since that darkness took root in my heart, I have, "by chance", turned twenty, entered university, graduated, completed my military service, entered postgraduate studies, and am now spending the final years of my twenties. Although I have avoided the darkness all this time (or at least tried to), the thought occurred to me: what if I were to face it again now? The theatre, embracing my darkness, becomes both my own secret room and a vast laboratory. Throughout the day, we will feel the darkness filling the theatre, moving and living alongside our own time. 
This work explores the theme of social disasters. Depending on the individual, those attending the theatre may experience discomfort or physical and psychological suffering. I, too, may be forced to halt the performance due to unforeseen suffering. However, the theatre will remain open all day.
There is darkness in the theatre.`,
    `The story of dramaturgy
We were forced to ‘watch’ the sinking unfold in real time. Amidst the false reports—which felt like a form of torture, offering false hope of a ‘full rescue’ — the scenes unfolding on the screen were, in themselves, a brutal act of violence. Some etched those images into their memories whilst in the classroom, others in their living rooms, and still others during the ordinary moments of their daily lives. Regardless of our age or where we were at the time, no one was spared the shock of that day. I still vividly remember the scent that hung in the air that day, my mother’s voice, and even the thoughtless words I uttered whilst believing the false reports. Time has been etched into the long-term memory of each of our neural networks, as if preserved in amber.
We often refer to the psychological scars left by a disaster as ‘trauma’ and define them as something to be treated and overcome. But must we view trauma solely as something that must be treated and overcome? A, who witnessed the sinking of the Sewol ferry from school on 16 April, testifies that even today, 12 years later, she has lived her life unconsciously pushing away the memories of that day. This is because even the act of searching for related news articles was too painful and overwhelming. A says that even those repressed years ultimately form part of who they are today. Perhaps trauma is not a stain to be erased, but a layer of life that must be embraced and lived with. Emotions and actions—such as the occurrence of the event, witnessing it, the shock, mourning, and turning away—are intertwined to create the ‘me’ of today. Consider a mille-crêpe cake. Thin layers, stacked one upon another, come together to form a single entity: the cake. Yet the layer at the very bottom and the layer at the very top inevitably possess different textures. As time passes, the layers that once had distinct boundaries gradually fade and may even merge into one another. Reflecting on accumulated memories is not about forcibly exposing and dissecting these layers. Nor is it about cutting them open with a knife to examine the cross-section. It is a process of fully observing the very form in which they exist. That process of contemplation will be the very centre of this moment in time and space.`,
    CREDITS_TEXT
  ],
  FR: [
    `Le mot de l'auteur
Certaines ténèbres ne cachent pas leur existence face à la lumière. Il y a des gens qui vivent en gardant un peu de ces ténèbres dans leur cœur. Tout comme on ne peut point effacer les traces de sang sur la chair d’un poisson meurtri, même en la découpant à l’infini, ce sont des gens qui vivent en considérant ces ténèbres comme une partie intégrante de leur cœur. On peut peut-être les trouver assez facilement. Dans notre théâtre, des histoires sur les ténèbres que chacun porte en soi seront racontées. Des histoires sur ces ténèbres apparues par hasard il y a longtemps, sur ces ténèbres que l’on a ignorées jusqu’à présent. Depuis que ces ténèbres ont pris place dans mon cœur, j’ai eu par hasard vingt ans, je suis entré par hasard à l’université, j’ai obtenu par hasard mon diplôme, j’ai terminé par hasard mon service militaire, je suis entré par hasard en master et je passe par hasard les derniers moments de ma vingtaine. Jusqu’à présent, j’ai fui ces ténèbres — j’ai essayé de la fuir — mais l’idée m’est venue par hasard : et si, je l’affrontais à nouveau ? Le théâtre qui abrite mㄷ ténèbres devient à la fois ma chambre secrète et un immense laboratoire. Tout au long de la journée, nous sentirons que l’obscurité qui remplit le théâtre vit et évolue au rythme de notre temps. 
Cette œuvre a pour thème les catastrophes sociales. Selon les spectateurs, certains pourraient ressentir un malaise ou une souffrance physique et psychologique. Il se peut également que je sois moi-même contrainte d’interrompre la performance en raison d’une souffrance inattendue. Cependant, le théâtre restera ouvert toute la journée.
Il y a de l’obscurité dans le théâtre.`,
    `Le mot de la dramaturgie
Nous avons dû « assister » en direct au déroulement du naufrage. Alors que les fausses informations « sauvetage total », comme la vaine espérance, le spectacle qui se déroulait derrière l’écran était en soi une violence cruelle. Certains ont gravé ces images dans leur mémoire depuis leur salle de classe, d’autres depuis leur salon, d’autres encore au cours d’un moment banal de leur quotidien. Quel que soit notre âge ou l’endroit où nous nous trouvions à l’époque, personne n’a échappé au choc de cette journée. Je me souviens encore très clairement de l’odeur qui flottait dans l’air ce jour-là, de la voix de ma mère, et même des paroles irréfléchies que j’ai prononcées en croyant à ces fausses informations. Ce moment s’est gravé dans la mémoire à long terme de chacun d’entre nous, comme s’il avait été empaillé.
On appelle souvent les séquelles psychologiques laissées par une catastrophe un « traumatisme » et on les considère généralement comme un problème à soigner et à surmonter. Mais faut-il vraiment considérer le traumatisme comme quelque chose qu’il faut absolument soigner et surmonter ? A, qui a assisté à la scène du naufrage du Sewol depuis son école le 16 avril, témoigne qu’aujourd’hui encore, 12 ans plus tard, il a vécu en refoulant inconsciemment les souvenirs de cette journée. En effet, le simple fait de rechercher des articles sur le sujet lui était trop douloureux et pénible. A affirme que même ce temps refoulé fait finalement partie de ce qui le constitue aujourd’hui. Peut-être que le traumatisme n’est pas une tache à effacer, mais une dimension de la vie qu’il faut accepter et avec laquelle il faut vivre. Les sentiments et les actes tels que le déclenchement de l’événement, son observation, le choc, le deuil et le déni s’entremêlent pour former le « moi » d’aujourd’hui. Imaginons un gâteau aux crêpes. Des couches fines empilées les unes sur les autres forment ensemble une seule et même structure : le gâteau. Cependant, la couche du bas et celle du haut ont forcément des textures différentes. Au fil du temps, les couches aux contours autrefois nets s’estompent peu à peu et finissent par se confondre. Revenir sur les souvenirs accumulés ne consiste pas à mettre de force ces couches à nu pour les disséquer. Il ne s’agit pas non plus de les trancher au couteau pour en observer la coupe. C’est un processus qui consiste à contempler pleinement la forme dans laquelle ils existent. Ce processus de contemplation sera précisément au cœur de cet espace-temps.`,
    CREDITS_TEXT
  ]
};

/**
 * Section Component
 * Provides a full-viewport height section with given background and text colors.
 */
interface SectionProps {
  bgClass: string;
  textColor: string;
  children: React.ReactNode;
  lang: Language;
  customTextStyles?: string;
}

const Section: React.FC<SectionProps> = ({ bgClass, textColor, children, lang, customTextStyles }) => {
  const isKorean = lang === 'KR';
  const defaultTextStyles = "text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[2.08] tracking-[-0.03em]";
  const textStyles = customTextStyles || defaultTextStyles;

  return (
    <section
      className={`min-h-[100dvh] flex flex-col justify-center px-6 py-24 md:px-12 md:py-32 ${bgClass} ${textColor}`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <p className={`${textStyles} whitespace-pre-wrap ${isKorean ? 'text-justify break-keep' : 'text-left break-words'}`}>
          {children}
        </p>
      </div>
    </section>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('KR');

  const content = CONTENT[lang];

  return (
    <main className="w-full bg-black relative">
      {/* Language Switcher Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 text-white mix-blend-difference pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-center">
          <div className="flex gap-4 sm:gap-8 font-mono text-sm sm:text-base font-bold pointer-events-auto">
            <button 
              onClick={() => setLang('KR')} 
              className={`hover:opacity-100 transition-opacity uppercase tracking-wider ${lang === 'KR' ? 'opacity-100 underline underline-offset-4 decoration-2' : 'opacity-50'}`}
            >
              KR
            </button>
            <button 
              onClick={() => setLang('EN')} 
              className={`hover:opacity-100 transition-opacity uppercase tracking-wider ${lang === 'EN' ? 'opacity-100 underline underline-offset-4 decoration-2' : 'opacity-50'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('FR')} 
              className={`hover:opacity-100 transition-opacity uppercase tracking-wider ${lang === 'FR' ? 'opacity-100 underline underline-offset-4 decoration-2' : 'opacity-50'}`}
            >
              FR
            </button>
          </div>
        </div>
      </nav>

      {/* Section 1: Black background, Neon Yellow text */}
      <Section bgClass="bg-black" textColor="text-[#E5FF00]" lang={lang}>
        {content[0]}
      </Section>

      {/* Section 2: Darker, muted pink gradient background, White text */}
      <Section bgClass="bg-gradient-to-br from-[#692A45] via-[#4F1A30] to-[#360D1E]" textColor="text-white" lang={lang}>
        {content[1]}
      </Section>

      {/* Section 3: Deep Royal Blue background, White text */}
      <Section 
        bgClass="bg-gradient-to-br from-[#10204A] via-[#0B1536] to-[#050A1F]" 
        textColor="text-white" 
        lang={lang}
        customTextStyles="text-base sm:text-[1.2rem] md:text-2xl lg:text-[1.8rem] xl:text-[2.2rem] font-bold leading-[1.5] tracking-[-0.03em]"
      >
        {content[2]}
      </Section>
    </main>
  );
}