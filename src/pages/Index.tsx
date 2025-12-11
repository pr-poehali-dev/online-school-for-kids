import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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

  const classes = [
    { grade: '1-4', title: 'Начальная школа', subjects: ['Математика', 'Русский язык', 'Английский'], color: 'bg-blue-100' },
    { grade: '5-9', title: 'Средняя школа', subjects: ['Алгебра', 'Геометрия', 'Физика', 'Химия', 'Биология'], color: 'bg-purple-100' },
    { grade: '10-11', title: 'Старшая школа', subjects: ['Подготовка к ЕГЭ', 'Профильная математика', 'Физика', 'Информатика'], color: 'bg-cyan-100' }
  ];

  const teachers = [
    { name: 'Анна Петрова', subject: 'Математика', experience: '12 лет', rating: 4.9, avatar: 'АП' },
    { name: 'Дмитрий Иванов', subject: 'Физика', experience: '8 лет', rating: 4.8, avatar: 'ДИ' },
    { name: 'Елена Сидорова', subject: 'Английский язык', experience: '15 лет', rating: 5.0, avatar: 'ЕС' },
    { name: 'Михаил Козлов', subject: 'Химия', experience: '10 лет', rating: 4.7, avatar: 'МК' }
  ];

  const schedule = [
    { time: '09:00', day: 'Понедельник', subject: 'Математика', grade: '5 класс', teacher: 'А. Петрова' },
    { time: '10:30', day: 'Понедельник', subject: 'Физика', grade: '9 класс', teacher: 'Д. Иванов' },
    { time: '14:00', day: 'Понедельник', subject: 'Английский', grade: '7 класс', teacher: 'Е. Сидорова' },
    { time: '16:00', day: 'Понедельник', subject: 'Химия', grade: '10 класс', teacher: 'М. Козлов' }
  ];

  const plans = [
    {
      name: 'Базовый',
      price: '3 990',
      period: 'месяц',
      features: ['8 занятий в месяц', '1 предмет на выбор', 'Доступ к записям уроков', 'Домашние задания'],
      popular: false
    },
    {
      name: 'Стандарт',
      price: '6 990',
      period: 'месяц',
      features: ['16 занятий в месяц', 'До 3 предметов', 'Доступ к записям уроков', 'Персональные консультации', 'Тестирование знаний'],
      popular: true
    },
    {
      name: 'Премиум',
      price: '11 990',
      period: 'месяц',
      features: ['Безлимитные занятия', 'Все предметы', 'Доступ к записям', 'Индивидуальный график', 'Персональный куратор', 'Подготовка к экзаменам'],
      popular: false
    }
  ];

  const reviews = [
    { name: 'Мария Смирнова', role: 'Мама ученика 7 класса', text: 'Сын занимается математикой уже полгода. Оценки улучшились с троек на пятерки! Учителя объясняют понятно и терпеливо.', rating: 5 },
    { name: 'Александр', role: 'Ученик 10 класса', text: 'Готовлюсь к ЕГЭ по физике и информатике. Очень удобный формат, можно заниматься из дома. Преподаватели профессионалы своего дела.', rating: 5 },
    { name: 'Ольга Васильева', role: 'Мама ученицы 5 класса', text: 'Дочь с удовольствием посещает уроки английского. Интерактивный формат и игровые элементы делают обучение интересным.', rating: 5 }
  ];

  const blogPosts = [
    { title: 'Как подготовиться к ЕГЭ за 6 месяцев', date: '15 декабря 2024', category: 'ЕГЭ', excerpt: 'Пошаговый план подготовки к экзаменам для учеников 11 класса...' },
    { title: '5 методов эффективного изучения математики', date: '10 декабря 2024', category: 'Методики', excerpt: 'Проверенные способы быстрого усвоения математических концепций...' },
    { title: 'Онлайн vs офлайн обучение: что выбрать?', date: '5 декабря 2024', category: 'Советы', excerpt: 'Разбираем преимущества и недостатки различных форматов обучения...' }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Онлайн Школа
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {['home', 'classes', 'teachers', 'schedule', 'reviews', 'pricing', 'blog', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'classes' && 'Классы'}
                  {section === 'teachers' && 'Учителя'}
                  {section === 'schedule' && 'Расписание'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'pricing' && 'Тарифы'}
                  {section === 'blog' && 'Блог'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="hidden md:flex">Записаться</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">
                Образование будущего
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Онлайн-школа для детей <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  с 1 по 11 класс
                </span>
              </h1>
              <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
                Качественное образование в удобном формате. Индивидуальный подход к каждому ученику, 
                опытные преподаватели и система абонементов для любого бюджета.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection('pricing')}>
                  Выбрать тариф
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('classes')}>
                  Посмотреть программы
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1500+</div>
                  <div className="text-sm text-foreground/60">Учеников</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-foreground/60">Преподавателей</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">4.9</div>
                  <div className="text-sm text-foreground/60">Средний рейтинг</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="classes" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Программы обучения</Badge>
              <h2 className="text-4xl font-bold mb-4">Классы и предметы</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Полный спектр предметов для всех классов с учетом образовательных стандартов
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {classes.map((classGroup, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in">
                  <CardHeader>
                    <div className={`w-16 h-16 ${classGroup.color} rounded-2xl flex items-center justify-center mb-4`}>
                      <span className="text-2xl font-bold text-primary">{classGroup.grade.split('-')[0]}</span>
                    </div>
                    <CardTitle className="text-2xl">{classGroup.title}</CardTitle>
                    <CardDescription>Классы {classGroup.grade}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {classGroup.subjects.map((subject, idx) => (
                        <Badge key={idx} variant="secondary">{subject}</Badge>
                      ))}
                    </div>
                    <Button className="w-full mt-6" variant="outline">
                      Подробнее
                      <Icon name="ChevronRight" className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="teachers" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Наша команда</Badge>
              <h2 className="text-4xl font-bold mb-4">Опытные преподаватели</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Профессионалы с многолетним опытом работы и подтвержденной квалификацией
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {teachers.map((teacher, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-secondary text-white">
                        {teacher.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl">{teacher.name}</CardTitle>
                    <CardDescription>{teacher.subject}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center gap-2 text-foreground/70">
                        <Icon name="Briefcase" size={16} />
                        <span>{teacher.experience} опыта</span>
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold">{teacher.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="schedule" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Планирование</Badge>
              <h2 className="text-4xl font-bold mb-4">Расписание занятий</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Гибкий график с удобными временными слотами
              </p>
            </div>
            <Tabs defaultValue="monday" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="monday">ПН</TabsTrigger>
                <TabsTrigger value="tuesday">ВТ</TabsTrigger>
                <TabsTrigger value="wednesday">СР</TabsTrigger>
                <TabsTrigger value="thursday">ЧТ</TabsTrigger>
                <TabsTrigger value="friday">ПТ</TabsTrigger>
              </TabsList>
              <TabsContent value="monday" className="space-y-4 mt-6">
                {schedule.map((item, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">{item.time}</div>
                          </div>
                          <div>
                            <div className="font-semibold text-lg">{item.subject}</div>
                            <div className="text-sm text-foreground/60">{item.grade} • {item.teacher}</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Записаться
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="tuesday" className="mt-6">
                <Card className="p-12 text-center">
                  <Icon name="Calendar" size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <p className="text-foreground/60">Расписание на вторник в разработке</p>
                </Card>
              </TabsContent>
              <TabsContent value="wednesday" className="mt-6">
                <Card className="p-12 text-center">
                  <Icon name="Calendar" size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <p className="text-foreground/60">Расписание на среду в разработке</p>
                </Card>
              </TabsContent>
              <TabsContent value="thursday" className="mt-6">
                <Card className="p-12 text-center">
                  <Icon name="Calendar" size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <p className="text-foreground/60">Расписание на четверг в разработке</p>
                </Card>
              </TabsContent>
              <TabsContent value="friday" className="mt-6">
                <Card className="p-12 text-center">
                  <Icon name="Calendar" size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <p className="text-foreground/60">Расписание на пятницу в разработке</p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="reviews" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Отзывы</Badge>
              <h2 className="text-4xl font-bold mb-4">Что говорят наши ученики</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Реальные истории успеха от учеников и их родителей
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <CardDescription>{review.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70 italic">"{review.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Тарифы</Badge>
              <h2 className="text-4xl font-bold mb-4">Выберите свой план</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Гибкая система абонементов и подписок для разных потребностей
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                    plan.popular ? 'border-primary border-2 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                        Популярный
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-3xl font-bold text-foreground mt-4">
                      {plan.price} ₽
                      <span className="text-base font-normal text-foreground/60">/{plan.period}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full" 
                      variant={plan.popular ? 'default' : 'outline'}
                      size="lg"
                    >
                      Выбрать план
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Блог</Badge>
              <h2 className="text-4xl font-bold mb-4">Полезные статьи</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Советы, методики и новости из мира образования
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <img 
                    src={index === 0 ? 'https://cdn.poehali.dev/projects/05c010d2-cfc3-4312-ac16-d932e9d51510/files/f7eb30bc-39a3-4e2a-b1e2-7ec0bc0fb7ff.jpg' : 
                         index === 1 ? 'https://cdn.poehali.dev/projects/05c010d2-cfc3-4312-ac16-d932e9d51510/files/a8ee59b7-1eac-4a2c-95e0-d1f52608233d.jpg' :
                         'https://cdn.poehali.dev/projects/05c010d2-cfc3-4312-ac16-d932e9d51510/files/87a3bba2-4357-402f-916d-9cf6aa4790fa.jpg'}
                    alt={post.title}
                    className="h-48 w-full object-cover rounded-t-lg"
                  />
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-xs text-foreground/60">{post.date}</span>
                    </div>
                    <CardTitle className="text-xl hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70 mb-4">{post.excerpt}</p>
                    <Button variant="ghost" size="sm" className="p-0">
                      Читать далее
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4">Связь</Badge>
                <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
                <p className="text-foreground/70 max-w-2xl mx-auto">
                  Ответим на все вопросы и поможем подобрать оптимальную программу обучения
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Отправьте сообщение</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                      <Input placeholder="Иван Иванов" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="ivan@example.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <Input type="tel" placeholder="+7 (999) 123-45-67" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Сообщение</label>
                      <Textarea placeholder="Расскажите о ваших целях..." rows={4} />
                    </div>
                    <Button className="w-full" size="lg">
                      Отправить
                      <Icon name="Send" className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </Card>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="Mail" className="text-primary" size={24} />
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Email</div>
                          <div className="text-foreground/60">info@onlineschool.ru</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="Phone" className="text-secondary" size={24} />
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Телефон</div>
                          <div className="text-foreground/60">+7 (495) 123-45-67</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="MessageCircle" className="text-accent" size={24} />
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Мессенджеры</div>
                          <div className="text-foreground/60">WhatsApp, Telegram</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground/5 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">Онлайн Школа</span>
              </div>
              <p className="text-sm text-foreground/60">
                Качественное образование для детей с 1 по 11 класс
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#classes" className="hover:text-primary transition-colors">Классы</a></li>
                <li><a href="#teachers" className="hover:text-primary transition-colors">Учителя</a></li>
                <li><a href="#schedule" className="hover:text-primary transition-colors">Расписание</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#blog" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
                <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Документы</h3>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">Договор оферты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Лицензия</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-foreground/60">
              © 2024 Онлайн Школа. Все права защищены.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;