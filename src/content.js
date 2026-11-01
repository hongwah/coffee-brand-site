// 网站上的所有文字都在这里。以下品牌名称、产品和联系方式均为占位内容，替换成真实信息即可。

export const brand = {
  name: '慢焰咖啡',
  nameEn: 'Slow Ember',
  email: 'hello@example.com',
}

export const nav = [
  { href: '#coffees', label: '咖啡系列' },
  { href: '#brew', label: '冲煮指南' },
  { href: '#origins', label: '产地' },
  { href: '#story', label: '故事' },
  { href: '#contact', label: '联系' },
]

export const hero = {
  eyebrow: 'Small-batch coffee roasters',
  titleLines: ['慢一点，', '才烘得出', '好味道。'],
  body: '我们用小批量、低火慢烘的方式，把每一支豆子的产地风味留在杯子里。',
  cta: '看看我们的咖啡',
}

export const roastFilters = [
  { id: 'all', label: '全部' },
  { id: 'light', label: '浅烘' },
  { id: 'medium', label: '中烘' },
  { id: 'dark', label: '深烘' },
]

// roast:1(最浅)到 5(最深)。group 用于筛选。
export const coffees = [
  {
    id: 'mist',
    name: '晨雾',
    nameEn: 'Morning Mist',
    origin: '埃塞俄比亚 · 古吉',
    process: '水洗',
    roast: 1,
    roastLabel: '浅烘',
    group: 'light',
    notes: ['茉莉', '佛手柑', '蜜桃'],
    bag: '#e8c79a',
    bagInk: '#1c1410',
  },
  {
    id: 'mountain',
    name: '山语',
    nameEn: 'Mountain Talk',
    origin: '哥伦比亚 · 慧兰',
    process: '水洗',
    roast: 3,
    roastLabel: '中烘',
    group: 'medium',
    notes: ['红苹果', '焦糖', '牛奶巧克力'],
    bag: '#b3321f',
    bagInk: '#f6eee1',
  },
  {
    id: 'homeward',
    name: '归途',
    nameEn: 'Homeward Blend',
    origin: '哥伦比亚 / 巴西',
    process: '拼配',
    roast: 4,
    roastLabel: '中深烘',
    group: 'dark',
    notes: ['可可', '太妃糖', '干果'],
    bag: '#2f4a3a',
    bagInk: '#f6eee1',
  },
  {
    id: 'ember',
    name: '余烬',
    nameEn: 'Last Ember',
    origin: '巴西 · 喜拉朵',
    process: '日晒',
    roast: 5,
    roastLabel: '深烘',
    group: 'dark',
    notes: ['黑巧克力', '榛果', '红糖'],
    bag: '#2a1d16',
    bagInk: '#e8c79a',
  },
]

// ratio:每克咖啡粉对应的水量(意式为出液量)。dose:每份的咖啡粉克数。
export const brewMethods = [
  {
    id: 'v60',
    name: '手冲',
    dose: 15,
    ratio: 16,
    temp: '93°C',
    grind: '中细研磨',
    time: '约 3 分钟',
    liquidLabel: '水量',
    liquidUnit: 'ml',
    steps: ['润湿滤纸并预热器具。', '倒入约两倍粉量的热水，闷蒸 30 秒。', '分两到三次，以画圈的方式注完剩余热水。'],
  },
  {
    id: 'aeropress',
    name: '爱乐压',
    dose: 15,
    ratio: 14,
    temp: '88°C',
    grind: '中细研磨',
    time: '约 2 分钟',
    liquidLabel: '水量',
    liquidUnit: 'ml',
    steps: ['放入滤纸并润湿，倒入咖啡粉。', '注入全部热水，轻轻搅拌后浸泡 90 秒。', '用约 30 秒缓慢下压，听到气声即停。'],
  },
  {
    id: 'frenchpress',
    name: '法压壶',
    dose: 20,
    ratio: 15,
    temp: '94°C',
    grind: '粗研磨',
    time: '约 4 分钟',
    liquidLabel: '水量',
    liquidUnit: 'ml',
    steps: ['倒入咖啡粉和全部热水，盖上壶盖。', '浸泡 4 分钟后，撇去表面的粉层。', '缓慢压下滤网，立即倒出饮用。'],
  },
  {
    id: 'espresso',
    name: '意式',
    dose: 18,
    ratio: 2,
    temp: '93°C',
    grind: '极细研磨',
    time: '每份约 28 秒',
    liquidLabel: '出液量',
    liquidUnit: 'g',
    steps: ['把粉布平并压实，扣上冲煮手柄。', '立即开始萃取，留意流速是否均匀。', '达到目标出液量后停止，尝味后再微调研磨度。'],
  },
]

export const origins = [
  {
    region: '古吉',
    country: '埃塞俄比亚',
    altitude: '海拔 1,800–2,200 米',
    flavor: '明亮的花香与柑橘调',
  },
  {
    region: '慧兰',
    country: '哥伦比亚',
    altitude: '海拔 1,500–2,000 米',
    flavor: '果酸圆润，尾韵带焦糖甜',
  },
  {
    region: '喜拉朵',
    country: '巴西',
    altitude: '海拔 800–1,300 米',
    flavor: '厚实醇度，坚果与可可香',
  },
]

export const story = {
  title: '火候，是我们最在意的事',
  body: '烘焙像一场缓慢的对话。温度升得太快，香气还没成形就被盖住了。我们宁愿多花几分钟，让每个阶段都走得从容。',
  principles: [
    { title: '小批量烘焙', text: '每一炉都能被仔细照看。' },
    { title: '标注烘焙日期', text: '每一袋都印上日期，新鲜与否一目了然。' },
    { title: '清楚的来源', text: '说明产地和处理法，让你知道杯中风味从何而来。' },
  ],
  curveCaption: '烘焙曲线示意图，仅用于说明各阶段，并非实测数据。',
}

export const contact = {
  title: '想聊聊咖啡？',
  body: '无论是批发合作、活动用豆，还是想问问哪支豆子适合你，都欢迎写信给我们。',
  cta: '写信给我们',
}

export const footerNote = '本站的品牌名称、产品和联系方式均为占位示例内容。'
