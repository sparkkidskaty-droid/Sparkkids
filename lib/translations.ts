export type Lang = "en" | "zh";

export const dictionaries = {
  en: {
    nav: {
      about: "About",
      team: "Team",
      programs: "Programs",
      gallery: "Gallery",
      getInvolved: "Get Involved",
      contact: "Contact",
      donate: "Donate",
    },
    footer: {
      tagline:
        "A nonprofit giving every kid an affordable first shot at sports and learning — no matter their budget or skill level.",
      explore: "Explore",
      getInvolved: "Get Involved",
      donate: "Donate",
      contact: "Contact",
      copyright: "Spark Kids. A registered nonprofit organization.",
    },
    home: {
      metaTitle: "Spark Kids | Sports & Enrichment Camps",
      metaDescription:
        "Spark Kids runs low-cost camps pairing tennis and running with hands-on classes, so every kid gets the chance to try a sport, build real skills, and keep learning.",
      badge: "2 camps hosted and counting",
      titleBefore: "Every kid deserves a shot at ",
      titleSports: "sports",
      titleAnd: " and ",
      titleLearning: "learning",
      titleAfter: ".",
      intro:
        "Spark Kids runs affordable camps that pair tennis and running with hands-on classes, so kids build real skills — on the court and in the classroom — without their family taking on a big cost to find out what they love.",
      signup: "Sign up for a camp",
      support: "Support the mission",
      whyTitle: "Why we started Spark Kids",
      whyIntro:
        "When kids are small, parents want them to try different sports and subjects — but figuring out what a kid loves shouldn't cost a fortune.",
      problems: [
        {
          title: "Classes are expensive",
          body: "Private lessons, club fees, and enrichment programs put sports and learning out of reach for a lot of families.",
        },
        {
          title: "Kids just want to try it",
          body: "Most kids don't know what they'll love — a sport, a subject — until they've tried it. That shouldn't cost full price to find out.",
        },
        {
          title: "Not available everywhere",
          body: "Quality coaching and enrichment classes for every age group aren't offered in every neighborhood.",
        },
        {
          title: "Materials add up",
          body: "Shoes, rackets, and class supplies are one more cost on top of registration — and often the reason a kid sits out.",
        },
      ],
      goalsTitle: "What we're working toward",
      goals: [
        "Run free and low-cost camps so trying a sport or a new subject never costs a family more than they can afford.",
        "Raise funds for equipment and class materials for kids who need them.",
        "Teach real skills that help kids grow into confident young athletes and curious learners.",
        "Give every kid a chance to compete and to learn, no matter their starting skill level.",
      ],
      dayTitle: "A day at camp",
      dayIntro:
        "Our flagship format splits the morning evenly between sports and classroom learning.",
      schedule: [
        {
          time: "8:00 – 9:00 AM",
          title: "Tennis & running",
          body: "Campers warm up with jump ropes, then split into groups for tennis and running — swapping sports each day.",
        },
        {
          time: "9:15 AM – 12:00 PM",
          title: "Classes",
          body: "We drive campers to our classroom, where they rotate through Chinese folktales, book club, and science.",
        },
      ],
      seePrograms: "See full program details",
      ctaTitle: "Help us reach more kids",
      ctaBody:
        "Every donation goes toward camp scholarships, sports gear, and class materials for kids who need them.",
      ctaButton: "Get involved",
    },
    about: {
      metaTitle: "About | Spark Kids",
      metaDescription:
        "Why Spark Kids exists: the cost barrier keeping kids out of sports and enrichment classes, and what we're doing about it.",
      badge: "Our story",
      title: "Trying something new shouldn't cost a fortune.",
      intro:
        "When kids are small, parents want to let them try different sports and subjects — tennis, running, science, storytelling, whatever catches their interest — before deciding what to stick with. But real coaching and enrichment classes are expensive, and most kids haven't even decided what they like before their family has already paid full price to find out. We started Spark Kids to close that gap.",
      problemTitle: "The problem",
      problems: [
        "Classes are expensive — private lessons, club sports, and enrichment programs price a lot of families out.",
        "Kids just want to try it out. Committing to a season or a subject shouldn't be the only way to find out if it clicks.",
        "Coaching and enrichment classes aren't available everywhere, for every age.",
        "Materials — shoes, rackets, class supplies — are one more cost stacked on top of registration.",
      ],
      goalsTitle: "Our goals",
      goals: [
        {
          title: "Free and low-cost camps",
          body: "We're building a program where trying a sport or a new subject doesn't come with a big price tag attached.",
        },
        {
          title: "An equipment & materials fund",
          body: "Every dollar we raise goes toward gear and class supplies for kids whose families can't cover it.",
        },
        {
          title: "Real skill development",
          body: "This isn't just supervised play. Camps are built around actual coaching and classes that help kids grow — athletically and academically.",
        },
        {
          title: "A fair shot to compete and learn",
          body: "Every camper gets the chance to compete, improve, and discover a new interest, regardless of the skill level they walk in with.",
        },
      ],
      banner: "We've already run 2 camps — and we're just getting started.",
      bannerSub:
        "Every camp we run teaches us more about how to reach kids who wouldn't otherwise get the chance.",
    },
    team: {
      metaTitle: "Team | Spark Kids",
      metaDescription: "Meet the co-founders behind Spark Kids.",
      badge: "Our team",
      title: "The people behind Spark Kids.",
      intro: "Five co-founders who coach, teach, and run every camp day together.",
      role: "Co-Founder",
    },
    programs: {
      metaTitle: "Programs | Spark Kids",
      metaDescription:
        "Spark Kids Summer 2026: a week of morning tennis, running, and classes in Katy, Texas.",
      badge: "Summer 2026",
      title: "One week of sports, learning, and fun.",
      intro:
        "Every weekday morning, campers start with tennis and running, then rotate through classes — no prior experience required in anything.",
      dates: "Dates",
      datesValue: "June 29 – July 3",
      time: "Time",
      timeValue: "8:00 AM – 12:00 PM, every weekday",
      fee: "Material fee",
      feeValue: "$50 per camper",
      sportsTitle: "Morning sports · 8:00 – 9:00 AM",
      sportsBody:
        "Campers warm up with jump ropes, then split into two groups — one plays tennis, one runs. The groups swap sports each day, so every camper gets time in both.",
      sportsLocation: "Sports location: Beck Junior High School",
      classesTitle: "Classes · 9:15 AM – 12:00 PM",
      classesBody:
        "After sports, campers rotate through three 45-minute classes, so every camper experiences all three by the end of the morning.",
      classes: [
        { title: "Chinese Folktales & Traditions", sub: "中国民间故事与传统文化" },
        { title: "Book Club", sub: "读书会" },
        { title: "Science", sub: "科学" },
      ],
      classLocation:
        "Class location: 26717 Westheimer Parkway, Suite 403, Katy, Texas 77494",
      joinTitle: "Want your kid to join?",
      joinBody: "$50 covers all class supplies and equipment for the week.",
      joinCta: "Sign up now",
    },
    gallery: {
      metaTitle: "Gallery | Spark Kids",
      metaDescription: "Photos from Spark Kids camps.",
      badge: "Gallery",
      title: "Moments from camp.",
      intro:
        "A few of our favorite moments from camp days — on the court and in the classroom.",
      photoAlt: "Spark Kids camp photo",
    },
    getInvolved: {
      metaTitle: "Get Involved | Spark Kids",
      metaDescription:
        "Donate, sponsor a camper, or volunteer to coach with Spark Kids.",
      badge: "Get involved",
      title: "Help us reach more kids.",
      intro:
        "Spark Kids runs on donations and volunteer coaches and teachers. Every bit of support goes toward lowering the cost of camp and putting real gear and class materials in kids' hands.",
      ways: [
        {
          title: "Donate to the equipment & materials fund",
          body: "Your gift buys shoes, rackets, and class supplies so no kid has to sit out because of gear or materials they don't have.",
          cta: "Donate",
        },
        {
          title: "Sponsor a camper",
          body: "Cover the cost of a camp spot for a kid whose family couldn't otherwise afford it.",
          cta: "Sponsor a spot",
        },
        {
          title: "Volunteer to coach or teach",
          body: "Have tennis, running, or classroom teaching experience? We're always looking for volunteers on camp days — on the court or in the classroom.",
          cta: "Ask about volunteering",
        },
      ],
      note: "Online payment (e.g. a donate button linked to PayPal, Venmo, or a giving platform) isn't wired up yet — for now, donation and sponsorship inquiries route through the contact form below.",
      contactLine: "Prefer to reach out directly?",
      contactCta: "Contact us",
    },
    contact: {
      metaTitle: "Contact | Spark Kids",
      metaDescription: "Sign your kid up for a camp or get in touch with Spark Kids.",
      badge: "Get in touch",
      title: "Sign up or say hello.",
      intro:
        "Fill this out to sign your kid up for a camp, volunteer to coach, or just get in touch. We read every submission and follow up by email.",
      wechatTitle: "Prefer WeChat?",
      wechatBody: "Scan to join our WeChat group — 扫码加入微信群",
    },
    form: {
      yourName: "Your name",
      yourEmail: "Your email",
      phone: "Phone",
      optional: "(optional)",
      camperName: "Camper's name",
      camperAge: "Camper's age",
      notes: "Anything else we should know?",
      submit: "Sign up / get in touch",
      sending: "Sending…",
      successTitle: "Thanks — we've got your info!",
      successBody:
        "We'll follow up by email about next steps and upcoming camp dates.",
      errName: "Please tell us your name.",
      errEmail: "Please enter a valid email.",
      errCamperName: "Please tell us your camper's name.",
      errAge: "Please enter an age between 3 and 18.",
      errGeneric: "Please check the form.",
      errServer:
        "Something went wrong submitting your info — please try again.",
    },
  },

  zh: {
    nav: {
      about: "关于我们",
      team: "团队",
      programs: "课程安排",
      gallery: "活动照片",
      getInvolved: "参与支持",
      contact: "联系我们",
      donate: "捐款",
    },
    footer: {
      tagline:
        "一家非营利组织，让每个孩子都能以可负担的方式第一次接触运动和学习——无论家庭预算或起点如何。",
      explore: "浏览",
      getInvolved: "参与支持",
      donate: "捐款",
      contact: "联系我们",
      copyright: "Spark Kids，一家注册非营利组织。",
    },
    home: {
      metaTitle: "Spark Kids | 运动与成长夏令营",
      metaDescription:
        "Spark Kids 举办低价夏令营，将网球、跑步与动手课堂相结合，让每个孩子都有机会尝试一项运动、掌握真正的技能，并持续学习。",
      badge: "已举办 2 期夏令营，仍在继续",
      titleBefore: "每个孩子都值得有机会尝试",
      titleSports: "运动",
      titleAnd: "和",
      titleLearning: "学习",
      titleAfter: "。",
      intro:
        "Spark Kids 举办价格亲民的夏令营，将网球、跑步与动手课程结合起来，让孩子们在球场和教室里掌握真正的技能——无需家庭为弄清孩子的兴趣而付出高昂代价。",
      signup: "报名夏令营",
      support: "支持我们的使命",
      whyTitle: "我们为什么创办 Spark Kids",
      whyIntro:
        "孩子小的时候，家长希望他们多尝试不同的运动和学科——但找到孩子真正喜欢的东西，不应该花一大笔钱。",
      problems: [
        {
          title: "课程费用高昂",
          body: "私教、俱乐部费用和各种兴趣班，让许多家庭对运动和学习望而却步。",
        },
        {
          title: "孩子们只想先试试",
          body: "大多数孩子要亲自试过才知道自己喜欢什么——一项运动、一门学科。为此付全价并不合理。",
        },
        {
          title: "并非处处可得",
          body: "并非每个社区都能找到适合各年龄段的优质教练和兴趣课程。",
        },
        {
          title: "装备也是一笔开销",
          body: "球鞋、球拍和课程用品是报名费之外的又一项开支——常常是孩子无法参加的原因。",
        },
      ],
      goalsTitle: "我们努力的方向",
      goals: [
        "举办免费和低价的夏令营，让尝试一项运动或新学科的费用不超过家庭能承受的范围。",
        "为有需要的孩子筹集装备和课堂用品资金。",
        "传授真正的技能，帮助孩子成长为自信的小运动员和好奇的学习者。",
        "无论起点如何，让每个孩子都有机会去竞争、去学习。",
      ],
      dayTitle: "夏令营的一天",
      dayIntro: "我们的核心安排，是把上午平均分配给运动与课堂学习。",
      schedule: [
        {
          time: "上午 8:00 – 9:00",
          title: "网球与跑步",
          body: "孩子们先跳绳热身，然后分组进行网球和跑步——每天交换项目。",
        },
        {
          time: "上午 9:15 – 中午 12:00",
          title: "课堂",
          body: "我们送孩子们到教室，轮流转入中国民间故事、读书会和科学课。",
        },
      ],
      seePrograms: "查看完整课程安排",
      ctaTitle: "帮助我们惠及更多孩子",
      ctaBody:
        "每一笔捐款都将用于夏令营奖学金、运动装备，以及有需要的孩子的课堂用品。",
      ctaButton: "参与支持",
    },
    about: {
      metaTitle: "关于我们 | Spark Kids",
      metaDescription:
        "Spark Kids 为何存在：阻挡孩子接触运动和兴趣班的经济门槛，以及我们正在做的努力。",
      badge: "我们的故事",
      title: "尝试新事物，不应该花大价钱。",
      intro:
        "孩子小的时候，家长希望他们能尝试不同的运动和学科——网球、跑步、科学、讲故事，任何他们感兴趣的——再决定坚持什么。但真正的教练指导和兴趣班都很贵，很多孩子还没弄清自己喜欢什么，家里就已经付了全价。我们创办 Spark Kids，就是为了弥补这个差距。",
      problemTitle: "问题所在",
      problems: [
        "课程太贵——私教、俱乐部运动和兴趣班让许多家庭望而却步。",
        "孩子们只是想先试试。报名一整个赛季或一门课，不应该是弄清是否适合的唯一途径。",
        "并非每个年龄段、每个社区都能找到教练和兴趣课程。",
        "装备——球鞋、球拍、课堂用品——是叠加在报名费之上的又一项开支。",
      ],
      goalsTitle: "我们的目标",
      goals: [
        {
          title: "免费和低价的夏令营",
          body: "我们正在打造一个项目，让尝试一项运动或新学科不再伴随高昂的价格标签。",
        },
        {
          title: "装备与用品基金",
          body: "我们筹集的每一分钱，都用于为家庭无力负担的孩子购买装备和课堂用品。",
        },
        {
          title: "真正的技能培养",
          body: "这不是简单的看管玩耍。夏令营围绕真正的教练指导和课程展开，帮助孩子在运动与学业上共同成长。",
        },
        {
          title: "公平的竞争与学习机会",
          body: "无论入营时的水平如何，每个孩子都有机会去竞争、进步并发现新的兴趣。",
        },
      ],
      banner: "我们已经举办了 2 期夏令营——而这只是开始。",
      bannerSub: "每一期夏令营都让我们更懂得，如何帮助那些原本没有机会的孩子。",
    },
    team: {
      metaTitle: "团队 | Spark Kids",
      metaDescription: "认识 Spark Kids 背后的联合创始人。",
      badge: "我们的团队",
      title: "Spark Kids 背后的团队。",
      intro: "五位联合创始人，一起教练、授课，负责每一个夏令营日。",
      role: "联合创始人",
    },
    programs: {
      metaTitle: "课程安排 | Spark Kids",
      metaDescription:
        "Spark Kids 2026 年夏季营：在得克萨斯州凯蒂市，为期一周的晨间网球、跑步和课程。",
      badge: "2026 年夏季",
      title: "一周的运动、学习与快乐。",
      intro:
        "每个工作日上午，孩子们先从网球和跑步开始，然后轮流转入课堂——任何项目都无需经验。",
      dates: "日期",
      datesValue: "6 月 29 日 – 7 月 3 日",
      time: "时间",
      timeValue: "每个工作日上午 8:00 – 中午 12:00",
      fee: "材料费",
      feeValue: "每位营员 $50",
      sportsTitle: "晨间运动 · 上午 8:00 – 9:00",
      sportsBody:
        "孩子们先跳绳热身，然后分成两组——一组打网球，一组跑步。每天两组交换项目，让每个孩子都能体验两种运动。",
      sportsLocation: "运动地点：Beck Junior High School",
      classesTitle: "课堂 · 上午 9:15 – 中午 12:00",
      classesBody:
        "运动结束后，孩子们轮流转入三节各 45 分钟的课程，一个上午下来每个孩子都能体验全部三门课。",
      classes: [
        { title: "中国民间故事与传统文化", sub: "Chinese Folktales & Traditions" },
        { title: "读书会", sub: "Book Club" },
        { title: "科学", sub: "Science" },
      ],
      classLocation:
        "课堂地点：26717 Westheimer Parkway, Suite 403, Katy, Texas 77494",
      joinTitle: "想让您的孩子参加吗？",
      joinBody: "$50 涵盖一周的全部课堂用品和装备。",
      joinCta: "立即报名",
    },
    gallery: {
      metaTitle: "活动照片 | Spark Kids",
      metaDescription: "Spark Kids 夏令营的照片。",
      badge: "活动照片",
      title: "夏令营的精彩瞬间。",
      intro: "夏令营中的一些难忘瞬间——在球场上，也在教室里。",
      photoAlt: "Spark Kids 夏令营照片",
    },
    getInvolved: {
      metaTitle: "参与支持 | Spark Kids",
      metaDescription: "为 Spark Kids 捐款、资助营员，或志愿担任教练。",
      badge: "参与支持",
      title: "帮助我们惠及更多孩子。",
      intro:
        "Spark Kids 依靠捐款和志愿者教练、老师运转。每一份支持都用于降低夏令营费用，把真正的装备和课堂用品送到孩子们手中。",
      ways: [
        {
          title: "为装备与用品基金捐款",
          body: "您的捐赠将用于购买球鞋、球拍和课堂用品，让没有孩子因为缺少装备或材料而缺席。",
          cta: "捐款",
        },
        {
          title: "资助一名营员",
          body: "为家庭无力负担的孩子承担一个夏令营名额的费用。",
          cta: "资助名额",
        },
        {
          title: "志愿担任教练或老师",
          body: "有网球、跑步或课堂教学经验？我们一直在寻找夏令营日的志愿者——无论是在球场还是在教室。",
          cta: "咨询志愿服务",
        },
      ],
      note: "在线支付（例如链接到 PayPal、Venmo 或捐赠平台的捐款按钮）尚未开通——目前捐款和资助咨询请通过下方的联系表单进行。",
      contactLine: "想直接联系我们？",
      contactCta: "联系我们",
    },
    contact: {
      metaTitle: "联系我们 | Spark Kids",
      metaDescription: "为孩子报名夏令营，或与 Spark Kids 取得联系。",
      badge: "联系我们",
      title: "报名或打个招呼。",
      intro:
        "填写此表可为孩子报名夏令营、申请做志愿教练，或只是联系我们。我们会阅读每一条提交，并通过电子邮件跟进。",
      wechatTitle: "更习惯用微信？",
      wechatBody: "扫码加入我们的微信群 — 扫码加入微信群",
    },
    form: {
      yourName: "您的姓名",
      yourEmail: "您的邮箱",
      phone: "电话",
      optional: "（可选）",
      camperName: "孩子的姓名",
      camperAge: "孩子的年龄",
      notes: "还有什么我们需要了解的？",
      submit: "报名 / 联系我们",
      sending: "发送中…",
      successTitle: "谢谢——我们已收到您的信息！",
      successBody: "我们将通过邮件跟进后续步骤和即将到来的夏令营日期。",
      errName: "请填写您的姓名。",
      errEmail: "请输入有效的邮箱地址。",
      errCamperName: "请填写孩子的姓名。",
      errAge: "请输入 3 到 18 岁之间的年龄。",
      errGeneric: "请检查表单。",
      errServer: "提交信息时出现问题——请重试。",
    },
  },
};

export type Dict = (typeof dictionaries)["en"];
