import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      title: "Разработка сайтов",
      description: "Создаём современные и функциональные веб-сайты для любых бизнес-задач",
      price: "от 150 000 ₽",
      icon: "Code"
    },
    {
      title: "Landing Page",
      description: "Эффективные посадочные страницы для увеличения конверсии",
      price: "от 80 000 ₽",
      icon: "Rocket"
    },
    {
      title: "Интернет-магазин",
      description: "Полнофункциональные решения для электронной коммерции",
      price: "от 300 000 ₽",
      icon: "ShoppingCart"
    },
    {
      title: "Мобильные приложения",
      description: "Нативные и кроссплатформенные мобильные приложения",
      price: "от 400 000 ₽",
      icon: "Smartphone"
    }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      company: "ООО «Инновации»",
      text: "Команда создала для нас потрясающий сайт! Клиенты увеличились на 300%, все довольны результатом.",
      rating: 5
    },
    {
      name: "Михаил Сидоров",
      company: "СтройБизнес",
      text: "Профессиональный подход, качество на высоте. Рекомендую для серьёзных проектов!",
      rating: 5
    },
    {
      name: "Екатерина Волкова",
      company: "Beauty Studio",
      text: "Великолепная работа! Сайт работает быстро, выглядит современно. Спасибо за отличный результат.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Code" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-foreground">STEL@COM</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Цены</a>
              <a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">Отзывы</a>
              <Button>Связаться</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground leading-tight">
              Хочешь все?
              <br />
              <span className="text-primary">Иди сюда</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональная разработка веб-сайтов и приложений. 
              Воплощаем ваши идеи в цифровые решения высшего качества.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                Начать проект
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Посмотреть работы
              </Button>
            </div>
          </div>
          <div className="mt-16">
            <img 
              src="/img/1bf9ea1f-7623-4ac1-804f-59914dbb91bb.jpg" 
              alt="Web Development Hero" 
              className="mx-auto rounded-lg shadow-2xl max-w-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для вашего бизнеса от идеи до запуска
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Icon name={service.icon} className="text-primary" size={32} />
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="text-lg font-semibold px-4 py-2">
                    {service.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Прозрачные цены</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Никаких скрытых платежей. Честная стоимость качественной работы.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Стартовый</CardTitle>
                <div className="text-4xl font-bold text-primary">150 000 ₽</div>
                <CardDescription>Для малого бизнеса</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Корпоративный сайт</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Адаптивный дизайн</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>SEO оптимизация</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>3 месяца поддержки</span>
                </div>
                <Button className="w-full mt-6">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-primary scale-105 shadow-lg">
              <CardHeader>
                <Badge className="mx-auto mb-2">Популярный</Badge>
                <CardTitle className="text-2xl">Бизнес</CardTitle>
                <div className="text-4xl font-bold text-primary">300 000 ₽</div>
                <CardDescription>Для растущего бизнеса</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Интернет-магазин</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Система оплаты</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Админ панель</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>6 месяцев поддержки</span>
                </div>
                <Button className="w-full mt-6">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Премиум</CardTitle>
                <div className="text-4xl font-bold text-primary">500 000 ₽</div>
                <CardDescription>Для крупного бизнеса</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Полный цикл разработки</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Мобильное приложение</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Интеграции с CRM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>12 месяцев поддержки</span>
                </div>
                <Button className="w-full mt-6">Выбрать план</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нашей работе довольные клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-current" size={20} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {testimonial.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы начать проект?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Обсудим ваши задачи и предложим оптимальное решение
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Посмотреть портфолио
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-foreground text-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Code" className="text-primary" size={32} />
                <span className="text-2xl font-bold">STEL@COM</span>
              </div>
              <p className="text-muted opacity-80">
                Профессиональная разработка веб-решений для вашего бизнеса
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-muted opacity-80">
                <li>Разработка сайтов</li>
                <li>Landing Page</li>
                <li>Интернет-магазины</li>
                <li>Мобильные приложения</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-muted opacity-80">
                <li>+7 (999) 123-45-67</li>
                <li>info@stelcom.ru</li>
                <li>г. Москва, ул. Примерная, д. 1</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <Icon name="Phone" className="text-primary hover:text-primary/80 cursor-pointer" size={24} />
                <Icon name="Mail" className="text-primary hover:text-primary/80 cursor-pointer" size={24} />
                <Icon name="MessageCircle" className="text-primary hover:text-primary/80 cursor-pointer" size={24} />
              </div>
            </div>
          </div>
          <div className="border-t border-muted/20 mt-8 pt-8 text-center">
            <p className="text-muted opacity-60">
              © 2024 STEL@COM. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}