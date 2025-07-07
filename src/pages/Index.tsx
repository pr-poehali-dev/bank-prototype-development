import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const Index = () => {
  // Mock data for currency rates
  const currencyData = [
    { time: "09:00", usd: 93.5, eur: 101.2, cny: 12.8 },
    { time: "12:00", usd: 93.8, eur: 101.5, cny: 12.9 },
    { time: "15:00", usd: 94.2, eur: 102.1, cny: 13.1 },
    { time: "18:00", usd: 94.0, eur: 101.8, cny: 13.0 },
    { time: "21:00", usd: 93.7, eur: 101.3, cny: 12.9 },
  ];

  // Mock data for investment products
  const investmentData = [
    { name: "Акции", return: 12.5, risk: "Высокий", amount: 2500000 },
    { name: "Облигации", return: 8.2, risk: "Средний", amount: 1800000 },
    { name: "Депозиты", return: 6.5, risk: "Низкий", amount: 3200000 },
    { name: "Фонды", return: 10.8, risk: "Средний", amount: 1200000 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">ФинансБанк</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                О банке
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Карты
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Переводы
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Поддержка
              </a>
            </nav>
            <Button>Личный кабинет</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Банк нового поколения
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Управляйте инвестициями и следите за курсами валют в режиме
            реального времени
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-3">
              <Icon name="TrendingUp" className="mr-2 h-5 w-5" />
              Начать инвестировать
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              <Icon name="Calculator" className="mr-2 h-5 w-5" />
              Калькулятор доходности
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="rates" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="rates" className="flex items-center gap-2">
                <Icon name="TrendingUp" className="h-4 w-4" />
                Курсы валют
              </TabsTrigger>
              <TabsTrigger
                value="investments"
                className="flex items-center gap-2"
              >
                <Icon name="PieChart" className="h-4 w-4" />
                Инвестиции
              </TabsTrigger>
            </TabsList>

            <TabsContent value="rates" className="space-y-6">
              {/* Currency Rates */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">USD/RUB</CardTitle>
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800"
                      >
                        <Icon name="TrendingUp" className="h-3 w-3 mr-1" />
                        +0.3%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      93.70
                    </div>
                    <p className="text-sm text-gray-600">Доллар США</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">EUR/RUB</CardTitle>
                      <Badge
                        variant="secondary"
                        className="bg-red-100 text-red-800"
                      >
                        <Icon name="TrendingDown" className="h-3 w-3 mr-1" />
                        -0.2%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      101.30
                    </div>
                    <p className="text-sm text-gray-600">Евро</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">CNY/RUB</CardTitle>
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800"
                      >
                        <Icon name="TrendingUp" className="h-3 w-3 mr-1" />
                        +0.1%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      12.90
                    </div>
                    <p className="text-sm text-gray-600">Китайский юань</p>
                  </CardContent>
                </Card>
              </div>

              {/* Currency Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Динамика курсов валют</CardTitle>
                  <CardDescription>
                    Изменение курсов в течение дня
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={currencyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="usd"
                          stroke="#2563eb"
                          strokeWidth={2}
                          name="USD"
                        />
                        <Line
                          type="monotone"
                          dataKey="eur"
                          stroke="#dc2626"
                          strokeWidth={2}
                          name="EUR"
                        />
                        <Line
                          type="monotone"
                          dataKey="cny"
                          stroke="#16a34a"
                          strokeWidth={2}
                          name="CNY"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="investments" className="space-y-6">
              {/* Investment Products */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {investmentData.map((product, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <Badge
                        variant={
                          product.risk === "Высокий"
                            ? "destructive"
                            : product.risk === "Средний"
                              ? "secondary"
                              : "default"
                        }
                        className="w-fit"
                      >
                        {product.risk} риск
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        {product.return}%
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Годовая доходность
                      </p>
                      <div className="text-sm font-medium text-gray-900">
                        {(product.amount / 1000000).toFixed(1)}М ₽
                      </div>
                      <p className="text-xs text-gray-500">Под управлением</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Investment Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Распределение инвестиций</CardTitle>
                  <CardDescription>
                    Объем средств по инвестиционным продуктам
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={investmentData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip
                          formatter={(value) => [
                            `${(value / 1000000).toFixed(1)}М ₽`,
                            "Объем",
                          ]}
                        />
                        <Bar
                          dataKey="amount"
                          fill="#2563eb"
                          radius={[4, 4, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" className="h-6 w-6" />
                <h3 className="text-xl font-bold">ФинансБанк</h3>
              </div>
              <p className="text-gray-400">Надёжный партнёр в мире финансов</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Карты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Переводы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Инвестиции
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Депозиты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Безопасность
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  <span>8 (800) 555-0123</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  <span>info@finansbank.ru</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ФинансБанк. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
