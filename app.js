// Real-World Data Setup
const mockTickerItems = [
    { type: 'move', text: 'Cynthia Koons takes over as Health Editor at the Wall Street Journal', date: '2026-03-11' },
    { type: 'move', text: 'Anjalee Khemlani is now a Contributor for Forbes', date: '2026-03-11' },
    { type: 'move', text: 'Joyce Famikinwa hired to replace Brock Turner at Modern Healthcare', date: '2026-03-04' },
    { type: 'move', text: 'Gabe Perna retiring at the end of the month', date: '2026-03-05' },
    { type: 'move', text: 'Rebecca Torrence leaves Business Insider for Bloomberg to cover VC and startups', date: '2026-03-01' },
    { type: 'move', text: 'Emma Beavins retires from her role as staff writer at Fierce Healthcare', date: '2026-02-28' },
    { type: 'move', text: 'The Washington Post lays off approx. one-third of staff, impacting over 300 journalists', date: '2026-01-15' }, // Older than 30 days, will be filtered out
    { type: 'story', text: 'Emma Beavins bows out with a story examining the Coalition for Health AI (CHAI) & assurance labs', date: '2026-02-28' },
    { type: 'story', text: 'Rebecca Torrence begins covering AI, health tech, and emerging tech at Bloomberg', date: '2026-03-02' },
    { type: 'move', text: 'Julie Wernau & Melanie Evans join Tradeoffs podcast from WSJ', date: '2026-03-05' },
    { type: 'move', text: 'Teddy Rosenbluth joins NYT Well section as Health Reporter', date: '2026-03-05' },
    { type: 'move', text: 'Trisha Thadani transitions to health beat at The Washington Post', date: '2026-03-05' },
    { type: 'move', text: 'Victoria Knight (Axios Vitals) departs Axios health care policy beat', date: '2025-08-15' }, // Auto-filtered test
    { type: 'move', text: 'Tim Baysinger (Axios Communicators) leaves Axios media beat', date: '2025-03-10' }, // Auto-filtered test
    { type: 'story', text: 'Maia Anderson has returned from personal leave at Healthcare Brew', date: '2026-03-05' },
    { type: 'move', text: 'Stefanie Ilgenfritz departs WSJ after 35-year health journalism career', date: '2025-10-15' } // Auto-filtered test
];

const mockFeedItems = [
    {
        id: 132,
        author: 'Meeri Kim',
        role: 'Freelance Science Writer',
        avatar: 'https://ui-avatars.com/api/?name=MK&background=0D8ABC&color=fff',
        content: 'Meeri Kim is now freelancing for Consumer Reports, and may be picking up new stories for The Washington Post. She is an excellent scientific writer covering breaking news, holding a PhD from the University of Pennsylvania and residing in California.',
        time: 'Recently',
        date: '2026-03-14',
        source: 'Industry News'
    },
    {
        id: 131,
        author: 'Emma Beavins',
        role: 'Former Staff Writer, Fierce Healthcare',
        avatar: 'https://ui-avatars.com/api/?name=EB&background=e53e3e&color=fff',
        content: 'Emma Beavins has retired from her role as staff writer at Fierce Healthcare, bowing out with a story examining the Coalition for Health AI (CHAI) & assurance labs.',
        time: 'Recently',
        date: '2026-02-28',
        source: 'Industry News'
    },
    {
        id: 129,
        author: 'Lauren Berryman',
        role: 'Former Reporter, Modern Healthcare',
        avatar: 'https://ui-avatars.com/api/?name=LB&background=B22222&color=fff',
        content: 'Lauren Berryman officially left the field of journalism in 2025.',
        time: 'Older',
        date: '2025-06-15', // Older than 45 days, should be auto-filtered normally
        source: 'Industry News'
    },
    {
        id: 128,
        author: 'Gabe Perna',
        role: 'Former Managing Editor, Modern Healthcare',
        avatar: 'https://ui-avatars.com/api/?name=GP&background=333&color=fff',
        content: 'Gabe Perna has announced he is retiring at the end of the month, concluding his tenure at Modern Healthcare.',
        time: 'Recently',
        date: '2026-03-05',
        source: 'Industry News'
    },
    {
        id: 127,
        author: 'Trisha Thadani',
        role: 'Former Reporter, The Washington Post',
        avatar: 'https://ui-avatars.com/api/?name=TT&background=000&color=fff',
        content: 'Trisha Thadani was among the 300+ journalists impacted when The Washington Post laid off approximately one-third of its staff.',
        time: 'Recently',
        date: '2026-03-05', // Giving it a recent date so it shows up
        source: 'Industry News'
    },
    {
        id: 130,
        author: 'Brianna Abbott',
        role: 'Former Cancer Reporter, Wall Street Journal',
        avatar: 'https://ui-avatars.com/api/?name=BA&background=8B0000&color=fff',
        content: 'Brianna Abbott is currently freelancing. There is no update on a new full-time role at this time.',
        time: 'Recently',
        date: '2026-03-14',
        source: 'Industry News'
    },
    {
        id: 126,
        author: 'Alex Janin',
        role: 'Personal Health & Wellness Reporter, Wall Street Journal',
        avatar: 'https://ui-avatars.com/api/?name=AJ&background=f6ad55&color=fff',
        content: 'According to her OOO memo, Alex Janin is due back from sabbatical this summer. She most recently covered personal health and wellness.',
        time: 'Recently',
        date: '2026-03-14',
        source: 'Personal News'
    },
    {
        id: 125,
        author: 'Future of Everything',
        role: 'WSJ Event & Editorial',
        avatar: 'https://ui-avatars.com/api/?name=WSJ&background=000&color=fff',
        content: 'The Wall Street Journal has officially relaunched its "Future of Everything" hub, announcing massive programming updates and early speaker confirmations for the upcoming Future of Everything conference.',
        time: 'Recently',
        date: '2026-03-14',
        link: 'https://futureofeverything.wsj.com/event/the-future-of-everything/',
        source: 'Publication'
    },
    {
        id: 124,
        author: 'Tina Reed',
        role: 'Senior Health Care Editor, Axios Vitals',
        avatar: 'https://ui-avatars.com/api/?name=TR&background=68d391&color=fff',
        content: 'Word is that Tina Reed will be returning from maternity leave this spring to resume her co-writing duties on the Axios Vitals newsletter.',
        time: 'Recently',
        date: '2026-03-14',
        source: 'Gossip'
    },
    {
        id: 121,
        author: 'Sarah Kliff',
        role: 'Investigative Reporter, The New York Times',
        avatar: 'https://ui-avatars.com/api/?name=SK&background=000&color=fff',
        content: 'Sarah Kliff is still very actively reporting! She continues to serve as an investigative reporter covering health policy for The New York Times, where she has recently been breaking down massive shifts reshaping American health, including updated food guidelines, developments in GLP-1 drugs, and AI integration in medicine.',
        time: 'Recently',
        date: '2026-03-07',
        source: 'Publication'
    },
    {
        id: 123,
        author: 'Cynthia Koons',
        role: 'Health Editor, Wall Street Journal',
        avatar: 'https://ui-avatars.com/api/?name=CK&background=0D8ABC&color=fff',
        content: 'Cynthia Koons has now taken over as the health editor at the Wall Street Journal.',
        time: 'Recently',
        date: '2026-03-11',
        source: 'Personal News'
    },
    {
        id: 122,
        author: 'Rebecca Robbins',
        role: 'Health & Pharma Reporter, The New York Times',
        avatar: 'https://ui-avatars.com/api/?name=RR&background=000&color=fff',
        content: 'For those tracking Rebecca Robbins\' beat, her most recent and prominent stories have focused heavily on drug pricing and policy. This includes deep-dives into the challenges of reviving domestic generic drug manufacturing and the opaque industry forces influencing prescription drug prices.',
        time: 'Recently',
        date: '2026-03-07',
        source: 'Analysis'
    },
    {
        id: 118,
        author: 'Jaimy Lee',
        role: 'Health Editor, MarketWatch',
        avatar: 'https://ui-avatars.com/api/?name=JL&background=555&color=fff',
        content: '"Personal news: I am thrilled to announce I will be returning to MarketWatch as a Health Editor. Looking forward to jumping back into the fray in 2026!"',
        time: 'Recently',
        date: '2026-03-07',
        source: 'Personal News'
    },
    {
        id: 119,
        author: 'Ben (Nature Health)',
        role: 'Chief Editor',
        avatar: 'https://ui-avatars.com/api/?name=NH&background=0D8ABC&color=fff',
        content: 'The highly anticipated new journal, <em>Nature Health</em>, has officially launched under the leadership of Chief Editor Ben, and is actively recruiting for additional editors to expand their 2026 coverage.',
        time: 'Recently',
        date: '2026-03-07',
        source: 'Industry News'
    },
    {
        id: 120,
        author: 'Carter Sherman',
        role: 'Reproductive Health Reporter',
        avatar: 'https://ui-avatars.com/api/?name=CS&background=f6ad55&color=fff',
        content: 'Some personal news! Carter Sherman, known for her in-depth reproductive health reporting, has shared an update on her next vocational steps for 2026.',
        time: 'Recently',
        date: '2026-03-07',
        source: 'Personal News'
    },
    {
        id: 117,
        author: 'Jessica Hagen',
        role: 'Reporter, mobihealthnews',
        avatar: 'https://ui-avatars.com/api/?name=JH&background=10B981&color=fff',
        content: '💡 <strong>Pitching Tip:</strong> For those looking to place news announcements with mobihealthnews, Jessica Hagen is currently the most appropriate reporter to pitch.',
        time: 'Tips & Tricks',
        date: '2026-03-05',
        source: 'Industry News'
    },
    {
        id: 116,
        author: 'Rachel Cohrs Zhang',
        role: 'Chief Washington Correspondent, STAT News',
        avatar: 'https://ui-avatars.com/api/?name=RC&background=0D8ABC&color=fff',
        content: 'Personal update: Rachel Cohrs Zhang has announced she will be returning from personal leave soon, jumping back into her coverage of health policy and the politics of medicine.',
        time: 'Recently',
        date: '2026-03-05',
        source: 'Personal News'
    },
    {
        id: 115,
        author: 'Nancy Lapid',
        role: 'Health Reporter, Reuters',
        avatar: 'https://ui-avatars.com/api/?name=NL&background=FFA500&color=fff',
        content: 'Reuters reporter Nancy Lapid continues to produce high-impact health journalism into 2026. Her recent reporting prominently features deep-dives into GLP-1 drugs, addiction treatments, and Alzheimer\'s research.',
        time: 'Recently',
        date: '2026-03-05',
        source: 'Publication'
    },
    {
        id: 113,
        author: 'Axios Communicators',
        role: 'Media Trends Briefing',
        avatar: 'https://ui-avatars.com/api/?name=AX&background=333&color=fff',
        content: '<strong>2026 Health Media Outlook:</strong> Comm teams across the healthcare sector are bracing for a turbulent year. Expect major shifts in messaging strategies as health systems face a slowdown in hiring, the growing adoption of AI automation, and pressure from rising costs. Axios anticipates this will be the most significant period of transformation since the ACA.',
        time: 'Recently',
        date: '2026-03-05',
        source: 'Analysis'
    },
    {
        id: 111,
        author: 'Alexa Mikhail',
        role: 'Senior Health and Longevity Writer, SHE Media (Flow Space)',
        avatar: 'https://ui-avatars.com/api/?name=AM&background=555&color=fff',
        content: 'Following her time at Fortune, Alexa Mikhail has transitioned to SHE Media\'s Flow Space as their Senior Health and Longevity Writer. She continues her coverage of longevity science, workplace well-being, and women\'s health.',
        time: 'Recently',
        date: '2026-03-05',
        source: 'Industry News'
    },
    {
        id: 112,
        author: 'Beth Greenfield',
        role: 'Parenting Writer, She Knows',
        avatar: 'https://ui-avatars.com/api/?name=BG&background=f6ad55&color=fff',
        content: 'Beth Greenfield has officially joined She Knows, where she will be focusing heavily on covering parenting news.',
        time: 'Recently',
        date: '2026-03-05',
        source: 'Publication'
    },
    {
        id: 107,
        author: 'Anjalee Khemlani',
        role: 'Contributor, Forbes | Host, Second Opinion',
        avatar: 'https://ui-avatars.com/api/?name=AK&background=0D8ABC&color=fff',
        content: 'Anjalee Khemlani is now a Contributor for Forbes. Following her departure from Yahoo Finance, she is also hosting her own podcast and writing for Second Opinion.',
        time: 'Recently',
        date: '2026-03-11',
        source: 'Personal News'
    },
    {
        id: 108,
        author: 'Bertha Coombs',
        role: 'Former Senior Health Care Reporter, CNBC',
        avatar: 'https://ui-avatars.com/api/?name=BC&background=FFA500&color=fff',
        content: 'Long-time veteran reporter Bertha Coombs has officially retired after more than two decades covering healthcare and financial markets at CNBC. Her last day was in late December 2025.',
        time: 'December 2025',
        date: '2025-12-19', // Older than 30 days, will auto-filter out of recent feed
        source: 'Press Release'
    },
    {
        id: 101,
        author: 'Brianna Abbott',
        role: 'Health and Science Journalist',
        avatar: 'https://ui-avatars.com/api/?name=BA&background=f6ad55&color=fff',
        content: 'Former Wall Street Journal reporter Brianna Abbott is currently freelancing while actively pursuing new full-time opportunities in health and science journalism.',
        time: 'Recently',
        date: '2026-03-05',
        source: 'Industry News'
    },
    {
        id: 102,
        author: 'MED-PR Conference',
        role: 'Networking Event',
        avatar: 'https://ui-avatars.com/api/?name=MP&background=000&color=fff',
        content: 'The MED-PR Networking Conference hosted by Wynne PR is coming to NYC on March 26. Panelists include top editors and reporters from SELF, Business Insider, WSJ, Reuters, ABC News, and Forbes.',
        time: 'Upcoming Event',
        date: '2026-03-05',
        source: 'Press Release'
    },
    {
        id: 103,
        author: 'Lauran Neergaard',
        role: 'Medical Writer, The Associated Press',
        avatar: 'https://ui-avatars.com/api/?name=LN&background=0D8ABC&color=fff',
        content: 'Lauran Neergaard of the AP has recently pivoted her coverage heavily towards infectious disease and cancer developments.',
        time: 'Recently',
        date: '2026-03-05',
        source: 'Personal News'
    },
    {
        id: 104,
        author: 'Reporter\'s Notebook',
        role: 'Special Feature',
        avatar: 'https://ui-avatars.com/api/?name=RN&background=68d391&color=fff',
        content: '<strong>Top 5 Most Active Freelance Health & Science Journalists (Trailing 365 Days):</strong><br>1. Anna Medaris<br>2. Kamala Thiagarajan<br>3. Emily Sohn<br>4. Whitney Bauck<br>5. James Dinneen<br><br><strong>HIMSS 2026 Roster Update:</strong> Additional media professionals confirmed to be attending or speaking include <strong>Craig Keefner</strong> (Editor in Chief, Kiosk Industry), <strong>Karen Hao</strong> (AI reporter and author), and <strong>Lucy Hedges</strong> (technology journalist).',
        time: 'Today',
        date: '2026-03-05',
        source: 'Personal News'
    },
    {
        id: 105,
        author: 'Lauren Brensel',
        role: 'Reporter, Politico Pro',
        avatar: 'https://ui-avatars.com/api/?name=LB&background=B22222&color=fff',
        content: 'Lauren Brensel continues to write consistently for Politico Pro covering health policy, while also serving as a metro reporter and contributing to Florida-based outlets like WUFT News.',
        time: 'Ongoing',
        date: '2026-03-05',
        source: 'Industry News'
    },
    {
        id: 106,
        author: 'Fast Company',
        role: 'Publication',
        avatar: 'https://ui-avatars.com/api/?name=FC&background=333&color=fff',
        content: 'While Fast Company hasn\'t announced a new dedicated healthcare lead recently, Ruth Reader and veteran freelancer Sy Mukherjee continue to emerge as their dominant voices steering health, technology, and science coverage.',
        time: 'Recently',
        date: '2026-03-05',
        source: 'Industry News'
    },
    {
        id: 109,
        author: 'Tips & Tricks',
        role: 'Pitching Guide',
        avatar: 'https://ui-avatars.com/api/?name=TT&background=45f3ff&color=000',
        content: '<strong>Pitching Rebecca Pifer (Senior Reporter, Healthcare Dive):</strong> Keep pitches short and directly tied to the <em>business of healthcare</em>, particularly health insurers, public policy, retail health, and PBMs. Avoid consumer-focused pitches or overly witty subject lines. Phone interviews are preferred over video.',
        time: 'Guide',
        date: '2026-03-05',
        source: 'Analysis'
    },
    {
        id: 110,
        author: 'Tips & Tricks',
        role: 'Pitching Guide',
        avatar: 'https://ui-avatars.com/api/?name=TT&background=45f3ff&color=000',
        content: '<strong>Pitching Emily Olsen (Reporter, Healthcare Dive):</strong> Target her with stories focusing heavily on digital health, healthcare technology, AI implementation, and cybersecurity. She is highly interested in how financial pressures and tech influence broader health systems and provider dynamics.',
        time: 'Guide',
        date: '2026-03-05',
        source: 'Analysis'
    },
    {
        id: 5,
        author: 'Modern Healthcare',
        role: 'Publication',
        avatar: 'https://ui-avatars.com/api/?name=MH&background=0D8ABC&color=fff',
        content: 'We are excited to welcome Joyce Famikinwa to the digital health beat! She will be stepping into the role previously held by Brock Turner.',
        time: '1 day ago',
        date: '2026-03-04',
        source: 'Publication'
    },
    {
        id: 6,
        author: 'Gabe Perna',
        role: 'Digital Health Journalist',
        avatar: 'https://ui-avatars.com/api/?name=Gabe+Perna&background=FFA500&color=fff',
        content: 'Following a four-year tenure with Crain Communications, Gabriel Perna has announced his departure as the digital health editor from Modern Healthcare, aiming to pursue his next endeavors.',
        time: 'Today',
        date: '2026-03-05',
        source: 'Industry News',
        link: 'https://talkingbiznews.com/they-talk-biz-news/perna-departs-modern-healthcare/'
    },
    {
        id: 1,
        author: 'Rebecca Torrence',
        role: 'Reporter, Bloomberg News',
        avatar: 'https://ui-avatars.com/api/?name=Rebecca+Torrence&background=0D8ABC&color=fff',
        content: '"Some personal news: I am thrilled to share that I have joined Bloomberg to cover venture capital firms, startups, AI, and emerging technologies."',
        time: 'Recent',
        date: '2026-03-01',
        source: 'Industry News',
        link: 'https://www.linkedin.com/search/results/all/?keywords=Rebecca%20Torrence%20Bloomberg'
    },
    {
        id: 2,
        author: 'Emma Beavins',
        role: 'Former Staff Writer, Fierce Healthcare',
        avatar: 'https://ui-avatars.com/api/?name=Emma+Beavins&background=FFA500&color=fff',
        content: 'I\'m bowing out of Fierce Healthcare today. My final story examines the Coalition for Health AI (CHAI) and the recent failure of its assurance labs. It\'s been an honor covering health tech regulation.',
        time: 'Recent',
        date: '2026-02-28',
        source: 'LinkedIn',
        link: 'https://www.linkedin.com/search/results/all/?keywords=Emma%20Beavins%20Fierce%20Healthcare'
    },
    {
        id: 3,
        author: 'Media News Digest',
        role: 'Industry Alert',
        avatar: 'https://ui-avatars.com/api/?name=WP&background=222&color=fff',
        content: 'Major restructuring at The Washington Post concludes with roughly one-third of the staff being laid off. The sweeping cuts impact over 300 journalists across numerous departments.',
        time: '2025/2026',
        date: '2026-01-15', // Older than 30 days, will be auto-removed
        source: 'News Reports'
    },
    {
        id: 4,
        author: 'Fierce Healthcare',
        role: 'Publication',
        avatar: 'https://ui-avatars.com/api/?name=FH&background=B22222&color=fff',
        content: 'Read Emma Beavins\' final deep dive on how Congress and the administration are approaching health technology, AI, and virtual care post-pandemic.',
        time: 'Recent',
        date: '2026-02-28',
        source: 'Publication'
    },
    {
        id: 7,
        author: 'Tradeoffs Podcast',
        role: 'Health Policy Show',
        avatar: 'https://ui-avatars.com/api/?name=TR&background=555&color=fff',
        content: 'We are thrilled to have veteran health journalists Julie Wernau and Melanie Evans, both formerly of the Wall Street Journal, as reporters/producers bringing their incredible experience to our show.',
        time: 'Recently',
        date: '2026-03-05',
        source: 'Press Release'
    },
    {
        id: 8,
        author: 'The New York Times',
        role: 'Announcement',
        avatar: 'https://ui-avatars.com/api/?name=NYT&background=000&color=fff',
        content: 'Teddy Rosenbluth has joined our Well section. Moving forward, she will be covering health news with a specific focus on misinformation, AI, and its impacts on patient care.',
        time: 'Recently',
        date: '2026-03-05',
        source: 'Press Release'
    },
    {
        id: 9,
        author: 'Trisha Thadani',
        role: 'Former Health Reporter, The Washington Post',
        avatar: 'https://ui-avatars.com/api/?name=WP&background=111&color=fff',
        content: 'Following her transition to the health beat in late 2025, Trisha Thadani is no longer with The Washington Post. She had previously covered alternative medicine and the institutions shaping health today.',
        time: 'Recently',
        date: '2026-03-07',
        source: 'Industry News'
    },
    {
        id: 10,
        author: 'NPR Press Room',
        role: 'Announcement',
        avatar: 'https://ui-avatars.com/api/?name=NPR&background=333&color=fff',
        content: 'Pien Huang from our Science desk covering public health and disparities has been selected as a 2025 Public Health Reporting Fellow.',
        time: 'Recently',
        date: '2026-03-05',
        source: 'Press Release'
    },
    {
        id: 11,
        author: 'Stefanie Ilgenfritz',
        role: 'Veteran Health Journalist',
        avatar: 'https://ui-avatars.com/api/?name=SI&background=993333&color=fff',
        content: 'After 35 years and multiple Pulitzer nods with The Wall Street Journal, Stefanie Ilgenfritz departed the publication following their recent health & science desk restructuring. She has not yet announced her next landing spot.',
        time: 'October 2025',
        date: '2025-10-15', // Older than 30 days, will auto-filter
        source: 'Industry News'
    },
    {
        id: 12,
        author: 'Maia Anderson',
        role: 'Reporter, Healthcare Brew',
        avatar: 'https://ui-avatars.com/api/?name=MA&background=6B8E23&color=fff',
        content: 'I\'m officially back from personal leave! I will be jumping back into covering the business side of the healthcare industry. Feel free to send your pitches.',
        time: 'Recently',
        date: '2026-03-05',
        source: 'Industry News',
        link: 'https://twitter.com/search?q=from%3AMaiaAnderson'
    },
    {
        id: 13,
        author: 'Axios Vitals',
        role: 'Newsletter',
        avatar: 'https://ui-avatars.com/api/?name=AX&background=333&color=fff',
        content: 'Health care policy reporter Victoria Knight has departed Axios. She had contributed significantly to our Vitals coverage since 2022.',
        time: 'August 2025',
        date: '2025-08-15',
        source: 'Publication'
    }
];

// Utility: Filter out news older than 30 days (or 45 days for retirements)
function getRecentItems(items) {
    const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;
    const FORTY_FIVE_DAYS_MS = 45 * 24 * 60 * 60 * 1000;
    const now = Date.now();
    return items.filter(item => {
        if (!item.date) return true;
        const itemDate = new Date(item.date).getTime();
        
        // If they retired, sunset them after 45 days. Otherwise 30 days.
        const isRetirement = /retir|step down/i.test(item.content);
        const threshold = isRetirement ? FORTY_FIVE_DAYS_MS : THIRTY_DAYS_MS;
        
        return (now - itemDate) <= threshold;
    });
}

// Utility: Check for inactivity > 2 months and return 'departure' records
function getInactivityRecords(items) {
    const SIXTY_DAYS_MS = 60 * 24 * 60 * 60 * 1000;
    const now = Date.now();

    // In a real database, we would group by author and find their most recent article date.
    // Here we simulate checking the mock data for items exactly 2+ months old
    // that don't have a recent counterpart.
    const inactiveItems = [];

    items.forEach(item => {
        if (!item.date || item.role.includes('Tips') || item.role.includes('Feature') || item.role.includes('Publication') || item.role.includes('Former') || item.role.includes('Newsletter') || item.author.includes('Axios Vitals')) return;

        const itemDate = new Date(item.date).getTime();
        const daysSince = (now - itemDate) / (1000 * 60 * 60 * 24);

        // If their last known record in our DB is older than 60 days
        if (daysSince >= 60) {

            // Check if they have a newer record in the same array
            const hasRecentRecord = items.some(otherItem => {
                if (otherItem.id === item.id || otherItem.author !== item.author || !otherItem.date) return false;
                return (now - new Date(otherItem.date).getTime()) < SIXTY_DAYS_MS;
            });

            if (!hasRecentRecord) {
                // Synthesize an inactivity departure alert
                inactiveItems.push({
                    id: `inact-${item.id}`,
                    author: item.author,
                    role: item.role,
                    avatar: item.avatar || `https://ui-avatars.com/api/?name=${item.author}&background=dc3545&color=fff`,
                    content: `👀 <strong>System Alert:</strong> ${item.author} has not published or updated their professional status in over 60 days. Added to watch list to monitor for potential coverage pivots or role transitions.`,
                    time: 'Automated Alert',
                    date: new Date().toISOString().split('T')[0], // Give it today's date
                    source: 'System Tracker'
                });
            }
        }
    });

    return inactiveItems;
}

// Initialize Watch List
function initWatchList() {
    const roster = document.getElementById('watch-list-roster');
    if (!roster) return;

    const inactiveItems = getInactivityRecords(mockFeedItems);
    
    // Hide the entire section if no alerts exist
    if (inactiveItems.length === 0) {
        roster.closest('.special-feature').style.display = 'none';
        return;
    }

    let html = '';
    inactiveItems.forEach(item => {
        html += `
            <div class="roster-card">
                <img src="${item.avatar}" alt="${item.author}" class="avatar" style="width:40px;height:40px">
                <div class="roster-info">
                    <strong>${item.author}</strong>
                    <span>${item.role}</span>
                    <small>Inactive > 60 Days</small>
                </div>
            </div>
        `;
    });

    roster.innerHTML = html;
}

// Initialize Ticker
function initTicker() {
    const content = document.getElementById('ticker-content');
    const clone = document.getElementById('ticker-content-clone');

    const recentTickerItems = getRecentItems(mockTickerItems);

    let html = '';
    recentTickerItems.forEach(item => {
        const tagClass = item.type === 'move' ? 'tag-move' : 'tag-story';
        const tagLabel = item.type === 'move' ? 'Job Move' : 'New Story';

        html += `
            <div class="ticker-item">
                <span class="ticker-tag ${tagClass}">${tagLabel}</span>
                <strong>UPDATE:</strong> ${item.text}
            </div>
        `;
    });

    // Populate actual content and duplicate for seamless scrolling loop
    content.innerHTML = html;
    clone.innerHTML = html;

    // Calculate total width and set animation duration based on length
    // (A rough calculation to ensure consistent speed regardless of content length)
    const totalItems = recentTickerItems.length;
    const duration = Math.max(20, totalItems * 10); // Minimum duration to prevent blazing fast speeds on few items

    content.style.animationDuration = `${duration}s`;
    clone.style.animationDuration = `${duration}s`;
}

// Initialize Feed Grid
function initFeed() {
    // If the old split columns exist, don't run (for backwards compatibility if I missed one file)
    const oldWireGrid = document.getElementById('wire-news-feed');
    if (oldWireGrid) return;

    const mainGrid = document.getElementById('main-feed');
    if (!mainGrid) return;

    // Determine current page to set active pill and filter data
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const pills = document.querySelectorAll('.filter-pills a.badge');
    pills.forEach(pill => {
        if (pill.getAttribute('href') === currentPath) {
            pill.classList.add('active');
        } else {
            pill.classList.remove('active');
        }
    });

    let recentFeedItems = getRecentItems(mockFeedItems);

    // Filter Feed based on category
    if (currentPath === 'jobs.html') {
        recentFeedItems = recentFeedItems.filter(item =>
            /join|hire|new role|new gig|promot/i.test(item.content)
        );
    } else if (currentPath === 'layoffs.html') {
        recentFeedItems = recentFeedItems.filter(item =>
            /layoff|laid off|retir/i.test(item.content)
        );
    } else if (currentPath === 'social.html') {
        recentFeedItems = recentFeedItems.filter(item =>
            ['X / Twitter', 'LinkedIn', 'Personal News'].includes(item.source) || /personal news/i.test(item.content)
        );
    }

    // Sort Chronologically (Newest first)
    recentFeedItems.sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
    });

    let html = '';

    recentFeedItems.forEach((item, index) => {
        // Evaluate categories for the badges
        const isSystemAlert = item.id && item.id.toString().startsWith('inact');
        const isDirectSource = item.author === 'Cynthia Koons' || item.author === 'Anjalee Khemlani' || item.author === 'Meeri Kim' || item.author === 'Brianna Abbott';
        const isWireNews = ['Press Release', 'Publication', 'Internal Memo', 'News Reports', 'Industry News', 'Analysis', 'LinkedIn', 'X / Twitter'].includes(item.source);

        let badgeHtml = '';
        if (isSystemAlert) {
            badgeHtml = `<span class="category-badge watch-badge" title="System Generator">👀 WATCH LIST</span>`;
        } else if (isDirectSource) {
            badgeHtml = `<a href="index.html" class="category-badge direct-badge" title="Go to Direct from the Source">🎯 DIRECT FROM THE SOURCE</a>`;
        } else if (isWireNews) {
            badgeHtml = `<a href="index.html" class="category-badge wire-badge" title="Go to Wire News">🗞️ WIRE</a>`;
        } else {
            badgeHtml = `<a href="index.html" class="category-badge gossip-badge" title="Go to Gossip Mill">☕ GOSSIP</a>`;
        }

        const jumpLink = item.link ? `<a class="jump-link" href="${item.link}" target="_blank" rel="noopener noreferrer" title="View Post">↗</a>` : '';

        html += `
            <article class="feed-card glass-effect" style="animation-delay: ${index * 0.10}s">
                <div class="card-header">
                    <img src="${item.avatar}" alt="${item.author}" class="avatar">
                    <div class="author-info">
                        <h4>${item.author} ${badgeHtml}</h4>
                        <p>${item.role}</p>
                    </div>
                </div>
                <div class="card-body">
                    <p>${item.content}</p>
                </div>
                <div class="card-footer">
                    <span>${item.time}</span>
                    <div class="source-icon">
                        ${item.source} ${jumpLink}
                    </div>
                </div>
            </article>
        `;
    });

    mainGrid.innerHTML = html;
}





// Run Initializations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initTicker();
    initWatchList();
    initFeed();
});
