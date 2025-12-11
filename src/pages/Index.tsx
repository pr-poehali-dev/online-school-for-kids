import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const programs = [
    {
      grade: "1-4 класс",
      title: "Английский для самых маленьких",
      subtitle: "Играем, поём, говорим!",
      description: "Погружение в язык через игру, постановка произношения, снятие языкового барьера и любовь к учёбе.",
      methodology: "Oxford Phonics World + Cambridge Primary Path + авторские игровые тренажёры",
      goals: [
        "Английский 'с нуля' или устранение ранних пробелов",
        "Постановка правильного произношения и развитие фонематического слуха",
        "Навык чтения по правилам (phonics)",
        "Базовый разговорный словарь и первые диалоги",
        "Подготовка к ВПР — без стресса"
      ],
      unique: "Я не просто учу словам, а закладываю 'операционную систему' языка, с которой ребёнку будет легко в будущем."
    },
    {
      grade: "5-9 класс",
      title: "Английский для подростков",
      subtitle: "Система вместо хаоса!",
      description: "Систематизация грамматики, развитие уверенной речи, стратегическая подготовка к ОГЭ.",
      methodology: "Family and Friends / Grammar Goals + Navigate + авторские схемы и тренажёры",
      goals: [
        "Ликвидация пробелов (даже если 'всё забыли за лето')",
        "Построение прочной грамматической базы без путаницы во временах",
        "Разговорный английский на актуальные для подростков темы",
        "Обучение стратегиям выполнения типовых заданий ОГЭ уже с 7-8 класса",
        "Повышение успеваемости и уверенности в школе"
      ],
      unique: "Я учу видеть язык как логичную систему, а не набор случайных правил. Это даёт понимание и снимает страх."
    },
    {
      grade: "10-11 класс",
      title: "Английский для ЕГЭ",
      subtitle: "Подготовка как проект",
      description: "Глубокое освоение формата ЕГЭ, совершенствование всех языковых навыков, психологическая готовность.",
      methodology: "Navigate + аутентичные материалы + авторские стратегические чек-листы для каждого задания ЕГЭ",
      goals: [
        "Комплексная проработка ВСЕХ разделов: аудирование, чтение, грамматика, письмо, говорение",
        "Углублённая грамматика и сложная лексика для высокого балла",
        "Написание эссе и письма по чётким, эффективным шаблонам",
        "Развитие беглости и спонтанности речи для устной части",
        "Тайм-менеджмент и снятие экзаменационного стресса"
      ],
      unique: "Моя подготовка — это не натаскивание на тесты, а создание прочного языкового фундамента и 'инструментария' для сдачи экзамена."
    }
  ];

  const pricingPlans = [
    {
      name: "Погружение",
      price: "7 990",
      description: "Базовый пакет моих занятий",
      features: [
        "8 индивидуальных занятий в месяц",
        "Личный чат со мной для вопросов",
        "Все учебные материалы в электронном виде",
        "Домашние задания с моей проверкой"
      ],
    },
    {
      name: "Интенсив",
      price: "11 990",
      description: "Экзаменационная подготовка",
      features: [
        "12 индивидуальных занятий в месяц",
        "Углублённая проверка домашних работ",
        "Пробные тесты и их разбор",
        "Приоритетная связь со мной",
        "Записи всех занятий"
      ],
      popular: true,
    },
    {
      name: "Всё включено",
      price: "17 990",
      description: "Премиум с максимальной поддержкой",
      features: [
        "16 индивидуальных занятий в месяц",
        "Еженедельный отчёт-созвон с родителем",
        "Корректировка плана по необходимости",
        "Дополнительные материалы и тренажёры",
        "Безлимитная консультационная поддержка"
      ],
    },
  ];

  const reviews = [
    { name: 'Мария Смирнова', role: 'Мама ученика 7 класса', text: 'Сын занимается с Вербой Александровной уже полгода. Оценки улучшились с троек на пятерки! Объясняет понятно и терпеливо, всегда на связи.', rating: 5 },
    { name: 'Александр', role: 'Ученик 10 класса', text: 'Готовлюсь к ЕГЭ по английскому. Очень удобный формат, можно заниматься из дома. Александровна — профессионал своего дела, видно огромный опыт.', rating: 5 },
    { name: 'Ольга Васильева', role: 'Мама ученицы 5 класса', text: 'Дочь с удовольствием посещает уроки английского. Интерактивный формат и игровые элементы делают обучение интересным. Спасибо за индивидуальный подход!', rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-slate-900">
                Верба Александровна
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {['home', 'programs', 'about', 'pricing', 'reviews', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                    activeSection === section ? 'text-amber-600' : 'text-slate-600'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'programs' && 'Программы'}
                  {section === 'about' && 'О преподавателе'}
                  {section === 'pricing' && 'Тарифы'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="hidden md:flex bg-amber-600 hover:bg-amber-700">Записаться</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent_50%)] pointer-events-none"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-6 bg-amber-600/20 text-amber-300 border-amber-600/30">Персональная онлайн-школа</Badge>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                    Английский язык с Вербой Александровной
                  </h1>
                  <p className="text-xl text-slate-300 mb-4 leading-relaxed">
                    Авторская методика от филолога с 22-летним опытом
                  </p>
                  <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                    Я, Верба Александровна, основатель и главный преподаватель этой школы. Лично провожу все занятия, чтобы дать каждому ученику максимум внимания и результат. Ваш ребёнок учится не у «кого-то», а у меня — и это делает разницу.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="text-lg bg-amber-600 hover:bg-amber-700 text-white">
                      Бесплатная диагностика
                      <Icon name="ArrowRight" className="ml-2" size={20} />
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg border-slate-600 text-slate-300 hover:bg-slate-800" onClick={() => scrollToSection('programs')}>
                      Моя методика
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-600/20 to-slate-800/50 backdrop-blur-sm border border-amber-600/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Icon name="GraduationCap" size={120} className="mx-auto mb-6 text-amber-500/40" />
                      <p className="text-slate-400 text-lg">Ваше фото</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-slate-100 text-slate-700">Преимущества</Badge>
                <h2 className="text-4xl font-bold mb-4 text-slate-900">Почему стоит учиться у одного эксперта?</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="BookOpen" className="text-amber-600" size={24} />
                    </div>
                    <CardTitle className="text-xl text-slate-900">Авторская система</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">Единая методика от 1-го до 11-го класса. Не будет разрыва между преподавателями.</p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Eye" className="text-amber-600" size={24} />
                    </div>
                    <CardTitle className="text-xl text-slate-900">Полный контроль качества</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">Я сама вижу прогресс каждого от первого до последнего урока. Ничего не упустим.</p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Settings" className="text-amber-600" size={24} />
                    </div>
                    <CardTitle className="text-xl text-slate-900">Гибкость и персональность</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">Программа и расписание шьются под ребёнка, а не под сетку школы.</p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Award" className="text-amber-600" size={24} />
                    </div>
                    <CardTitle className="text-xl text-slate-900">Опыт 22 года</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">Не просто репетитор, а методист, который выстроит весь образовательный путь.</p>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-center">
                <Icon name="Quote" className="text-amber-500/40 mx-auto mb-4" size={48} />
                <p className="text-xl text-white leading-relaxed mb-6">
                  «Я выстраиваю траекторию ученика на годы вперёд. То, что мы заложим в начальной школе, станет основой для грамматики в средней, а затем — для высокого балла на ЕГЭ. Ни один переход между разными репетиторами не будет болезненным, потому что весь путь ваш ребёнок проходит под моим руководством».
                </p>
                <p className="text-amber-400 font-semibold">— Верба Александровна</p>
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-amber-600/10 text-amber-700 border-amber-600/20">Авторские программы</Badge>
              <h2 className="text-4xl font-bold mb-4 text-slate-900">Английский язык: система от 1 до 11 класса</h2>
              <p className="text-slate-600 max-w-3xl mx-auto text-lg">
                Все занятия провожу лично я, Верба Александровна. Это гарантия последовательности и качества на всём пути.
              </p>
            </div>
            <div className="max-w-7xl mx-auto space-y-8">
              {programs.map((program, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-slate-200">
                  <CardHeader className="bg-gradient-to-r from-slate-50 to-white pb-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-3 bg-amber-100 text-amber-800">{program.grade}</Badge>
                        <CardTitle className="text-3xl mb-2 text-slate-900">{program.title}: {program.subtitle}</CardTitle>
                        <p className="text-slate-600 text-lg mb-4">{program.description}</p>
                        <div className="inline-flex items-center gap-2 text-sm text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
                          <Icon name="Book" size={16} />
                          <span className="font-medium">Методика: {program.methodology}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <Icon name="Target" className="text-amber-600" size={20} />
                      Решаем задачи:
                    </h4>
                    <ul className="space-y-3 mb-6">
                      {program.goals.map((goal, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Icon name="CheckCircle2" className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                          <span className="text-slate-700">{goal}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-6">
                      <p className="text-slate-700 font-medium flex items-start gap-2">
                        <Icon name="Sparkles" className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                        <span><strong>Ключевое отличие:</strong> {program.unique}</span>
                      </p>
                    </div>
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                      {index === 0 ? 'Записаться на пробный урок' : index === 1 ? 'Получить консультацию и план' : 'Начать интенсивную подготовку'}
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-amber-600/10 text-amber-700 border-amber-600/20">О преподавателе</Badge>
              <h2 className="text-4xl font-bold mb-4 text-slate-900">Верба Александровна</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">Филолог, основатель школы, эксперт с 22-летним опытом</p>
            </div>
            <div className="max-w-5xl mx-auto">
              <Card className="border-slate-200">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="md:col-span-1">
                      <div className="aspect-square rounded-xl bg-gradient-to-br from-amber-100 to-slate-200 flex items-center justify-center">
                        <Icon name="User" size={120} className="text-amber-600/30" />
                      </div>
                    </div>
                    <div className="md:col-span-2 space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Моя история</h3>
                        <p className="text-slate-700 leading-relaxed mb-4">
                          Филолог с 22-летним опытом преподавания. Специализируюсь на подготовке к ЕГЭ, работе с младшими классами и системном обучении английскому языку на всех этапах школьной программы.
                        </p>
                        <p className="text-slate-700 leading-relaxed">
                          В 2023 году прошла сертификацию в Лондоне, постоянно совершенствую методику и внедряю современные подходы к обучению.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                          <Icon name="Heart" className="text-amber-600" size={24} />
                          Моя философия
                        </h3>
                        <p className="text-slate-700 leading-relaxed italic">
                          Я создала эту школу, потому что верю, что качественное образование начинается с личной ответственности учителя. Когда один преподаватель ведёт ребёнка от первого слова до свободного владения языком — это создаёт уникальную связь и гарантирует результат.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-slate-50 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-amber-600 mb-1">22</div>
                      <div className="text-sm text-slate-600">года опыта</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-amber-600 mb-1">300+</div>
                      <div className="text-sm text-slate-600">учеников</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-amber-600 mb-1">95%</div>
                      <div className="text-sm text-slate-600">сдали ЕГЭ на 80+</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-amber-600 mb-1">2023</div>
                      <div className="text-sm text-slate-600">сертификация в Лондоне</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-amber-600/10 text-amber-700 border-amber-600/20">Тарифы</Badge>
              <h2 className="text-4xl font-bold mb-4 text-slate-900">Забронируйте место в моём расписании</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Пакеты индивидуальных занятий со мной. Все занятия провожу лично.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`relative hover:shadow-2xl transition-all duration-300 ${plan.popular ? 'border-amber-500 shadow-xl scale-105' : 'border-slate-200'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-amber-600 text-white">Популярный</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl mb-2 text-slate-900">{plan.name}</CardTitle>
                    <div className="text-4xl font-bold text-amber-600 mb-2">
                      {plan.price} ₽<span className="text-lg text-slate-500 font-normal">/мес</span>
                    </div>
                    <p className="text-slate-600">{plan.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Icon name="Check" className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full ${plan.popular ? 'bg-amber-600 hover:bg-amber-700' : 'bg-slate-900 hover:bg-slate-800'}`}>
                      Выбрать тариф
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-amber-600/10 text-amber-700 border-amber-600/20">Отзывы</Badge>
              <h2 className="text-4xl font-bold mb-4 text-slate-900">Что говорят ученики и родители</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {reviews.map((review, index) => (
                <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-amber-500 fill-amber-500" size={18} />
                      ))}
                    </div>
                    <CardTitle className="text-lg text-slate-900">{review.name}</CardTitle>
                    <p className="text-sm text-slate-500">{review.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 italic">"{review.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-amber-600/10 text-amber-700 border-amber-600/20">Связь</Badge>
                <h2 className="text-4xl font-bold mb-4 text-slate-900">Обсудим ваш запрос лично</h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                  Я лично проконсультирую вас и проведу диагностику для вашего ребёнка. Давайте познакомимся и построим план обучения вместе.
                </p>
              </div>
              <Card className="border-slate-200">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-slate-700">Ваше имя</label>
                      <Input placeholder="Иван Иванов" className="border-slate-300" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-slate-700">Email</label>
                      <Input type="email" placeholder="example@mail.ru" className="border-slate-300" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-slate-700">Телефон</label>
                      <Input type="tel" placeholder="+7 (999) 123-45-67" className="border-slate-300" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-slate-700">Класс ребёнка</label>
                      <Input placeholder="5 класс" className="border-slate-300" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-slate-700">Сообщение</label>
                      <Textarea placeholder="Расскажите о целях обучения..." rows={4} className="border-slate-300" />
                    </div>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-lg py-6">
                      Обсудить с Вербой Александровной
                      <Icon name="Send" className="ml-2" size={20} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">Верба Александровна</span>
              </div>
              <p className="text-slate-400">
                Персональная онлайн-школа английского языка с 22-летним опытом
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Контакты</h3>
              <div className="space-y-2 text-slate-400">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@english-school.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (999) 123-45-67
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Навигация</h3>
              <div className="space-y-2">
                {['programs', 'about', 'pricing', 'reviews'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block text-slate-400 hover:text-white transition-colors"
                  >
                    {section === 'programs' && 'Программы'}
                    {section === 'about' && 'О преподавателе'}
                    {section === 'pricing' && 'Тарифы'}
                    {section === 'reviews' && 'Отзывы'}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>© 2024 Верба Александровна. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
