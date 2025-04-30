// Sample blog data (for dynamic blog pages)
const blogData = [
    {
        id: '1',
        title: 'A Mother\'s Love: An Unbreakable Bond',
        date: '2024-03-10',
        author: 'Eleanor Vance',
        categories: ['Motherhood', 'Family'],
        tags: ['Love', 'Bond', ' sacrifice'],
        content: `
            <p>A mother's love is a force of nature, a bond that transcends all others. It is the gentle hand that guides us, the unwavering support that lifts us, and the fierce protection that shields us. From the moment we take our first breath, a mother's love surrounds us, a constant presence in our lives.</p>

            <h2>The Early Years: A Foundation of Love</h2>
            <p>In the early years, a mother's love is a symphony of nurturing acts.  It's the warmth of her embrace, the softness of her lullabies, and the patience of her teachings.  She is the first teacher, the first caregiver, and the first friend.  She sacrifices her sleep, her time, and her own needs to ensure her child's well-being. This selfless devotion forms the bedrock of a child's emotional security and development.</p>

            <h2>Guiding Through Life's Journey</h2>
            <p>As children grow, a mother's love evolves, adapting to the changing needs of her offspring. She becomes a guiding light, offering wisdom and support as they navigate the complexities of life. She celebrates their triumphs, cushions their falls, and encourages them to pursue their dreams.  Her love is a constant source of strength, empowering them to become confident and compassionate individuals.</p>

            <h2>An Unbreakable Bond</h2>
            <p>The bond between a mother and child is unbreakable, a tapestry woven with shared experiences, unconditional acceptance, and unwavering devotion. It is a relationship that withstands the tests of time and circumstance, a testament to the enduring power of love.  Even when distance separates them, or life's challenges intervene, the connection remains, an invisible thread that binds their hearts together.</p>

            <h2>Celebrating Mothers</h2>
            <p>Today, we celebrate mothers everywhere - the biological mothers, the adoptive mothers, the foster mothers, the grandmothers, and all the women who have stepped into the role of a mother. We honor their sacrifices, their strength, and their boundless love.  Their love is a gift, a treasure to be cherished, a force that makes the world a better place.</p>
            <img src="/mothers-day-1.jpg" alt="Mother and child" />
        `,
        imageUrl: '/mothers-day-1.jpg'
    },
    {
        id: '2',
        title: 'The Strength of a Mother',
        date: '2024-03-12',
        author: 'Maria Rodriguez',
        categories: ['Motherhood', 'Inspiration'],
        tags: ['Strength', 'Resilience', 'Perseverance'],
        content: `<p>Mothers are the epitome of strength, resilience, and perseverance. They juggle countless responsibilities, often putting their own needs last. They face challenges head-on, with unwavering determination and a fierce love that fuels their every action.</p>

                <h2>Physical Strength</h2>
                <p>The physical demands of motherhood are immense, from carrying a child to enduring sleepless nights.  Mothers possess an inner strength that allows them to push through exhaustion and overcome physical limitations.  They are the ultimate multi-taskers, capable of handling a multitude of tasks simultaneously, with grace and efficiency.</p>

                <h2>Emotional Strength</h2>
                <p>Mothers are also emotionally strong, providing a safe haven for their children, a place where they can express their feelings without judgment. They offer comfort in times of sorrow, encouragement in times of doubt, and unwavering support through life's ups and downs.  They teach their children about empathy, compassion, and the importance of human connection.</p>

                <h2>Mental Strength</h2>
                <p>Mothers possess incredible mental strength, navigating the complexities of raising children with wisdom and intuition.  They make countless decisions, big and small, always striving to do what is best for their family.  They are problem-solvers, mediators, and strategists, adapting to ever-changing circumstances with resourcefulness and creativity.</p>

                <h2>A Source of Inspiration</h2>
                <p>The strength of a mother is a constant source of inspiration, a reminder that even in the face of adversity, love and determination can prevail.  They are role models for their children, demonstrating the power of resilience and the importance of never giving up. Their strength shapes not only their children but also the world around them.</p>
                <img src="/mothers-day-2.jpg" alt="A strong mother" />`,
        imageUrl: '/mothers-day-2.jpg'
    },
    {
        id: '3',
        title: 'The Wisdom of a Mother\'s Advice',
        date: '2024-03-15',
        author: 'Samuel Kim',
        categories: ['Motherhood', 'Wisdom'],
        tags: ['Advice', 'Guidance', 'Life Lessons'],
        content: `<p>A mother's advice is a treasure trove of wisdom, accumulated through years of experience, love, and observation.  It is the gentle voice that whispers guidance, the steady hand that offers direction, and the unwavering presence that provides comfort and support.</p>

                <h2>Practical Wisdom</h2>
                <p>Mothers excel at providing practical advice, offering solutions to everyday problems and navigating the complexities of daily life. They have a knack for finding lost items, offering remedies for ailments, and managing household affairs with remarkable efficiency. Their practical wisdom is a gift, passed down through generations, a legacy of resourcefulness and common sense.</p>

                <h2>Emotional Intelligence</h2>
                <p>Mothers possess a deep understanding of human emotions, offering advice that nurtures the heart and soul. They teach their children about empathy, compassion, and the importance of building strong relationships.  Their emotional intelligence is a guiding force, helping their children navigate the turbulent waters of adolescence and adulthood.</p>

                <h2>Life Lessons</h2>
                <p>Mothers are the ultimate life coaches, imparting invaluable lessons about perseverance, resilience, and the importance of following one's dreams. They encourage their children to embrace challenges, learn from their mistakes, and never give up on their aspirations.  Their life lessons shape their children's character, preparing them to face the world with courage and integrity.</p>

                <h2>A Lasting Legacy</h2>
                <p>The wisdom of a mother's advice is a lasting legacy, a gift that continues to guide and inspire long after she is gone.  Her words echo in the hearts and minds of her children, a constant reminder of her love, her guidance, and her unwavering belief in their potential.  This wisdom shapes not only individual lives but also the course of generations.</p>
                <img src="/mothers-day-3.jpg" alt="Mother giving advice" />`,
        imageUrl: '/mothers-day-3.jpg'
    },
    {
        id: '4',
        title: 'A Mother\'s Unconditional Love',
        date: '2024-03-18',
        author: 'Olivia Green',
        categories: ['Motherhood', 'Love'],
        tags: ['Unconditional Love', 'Acceptance', 'Devotion'],
        content: `<p>A mother's love is unconditional, a love that knows no bounds and accepts no limitations. It is a love that embraces a child's flaws and celebrates their strengths, a love that remains steadfast through triumphs and tribulations.</p>

                    <h2>Acceptance Without Judgment</h2>
                    <p>Mothers possess a remarkable ability to accept their children without judgment, flaws and all. They create a safe space where children can be themselves, express their feelings openly, and make mistakes without fear of rejection. This unconditional acceptance fosters a sense of self-worth and belonging, allowing children to grow into confident and well-adjusted individuals.</p>

                    <h2>Unwavering Support</h2>
                    <p>A mother's love provides unwavering support, a constant presence that buoys her children through life's storms. She is their cheerleader, their confidante, and their rock, offering encouragement and strength in times of need. This unwavering support empowers children to take risks, pursue their dreams, and overcome obstacles with courage and determination.</p>

                    <h2>Selfless Devotion</h2>
                    <p>Mothers are the epitome of selfless devotion, often putting their children's needs above their own. They sacrifice their time, their energy, and their resources to ensure their children's happiness and well-being. This selfless devotion is a testament to the depth of their love, a love that knows no bounds and asks for nothing in return.</p>

                    <h2>An Enduring Legacy of Love</h2>
                    <p>A mother's unconditional love leaves an enduring legacy, shaping her children's lives in profound and lasting ways. It teaches them how to love, how to forgive, and how to build strong and meaningful relationships.  It is a gift that they carry with them throughout their lives, a constant reminder of the boundless love that shaped them into who they are.</p>
                    <img src="/mothers-day-4.jpg" alt="Mother and children embracing" />`,
        imageUrl: '/mothers-day-4.jpg'
    },
    {
        id: '5',
        title: 'The Many Roles of a Mother',
        date: '2024-03-20',
        author: 'Ethan Miller',
        categories: ['Motherhood', 'Family'],
        tags: ['Roles', 'Caregiver', 'Teacher', 'Friend'],
        content: `<p>Mothers play a multitude of roles in their children's lives, adapting to their evolving needs with grace and versatility. They are caregivers, teachers, confidantes, and cheerleaders, all rolled into one.  This ability to seamlessly transition between different roles is a testament to their incredible adaptability and unwavering love.</p>

                <h2>The Caregiver</h2>
                <p>The role of caregiver is perhaps the most fundamental, encompassing the nurturing and protective aspects of motherhood.  Mothers provide for their children's physical needs, from feeding and clothing them to tending to their health and well-being. They create a safe and nurturing environment where children can thrive and grow.</p>

                <h2>The Teacher</h2>
                <p>Mothers are also their children's first teachers, imparting invaluable lessons about life, values, and the world around them. They teach them how to walk, talk, and interact with others. They instill in them a love of learning, a sense of curiosity, and a thirst for knowledge.  They guide their children's intellectual and emotional development, preparing them for the challenges and opportunities that lie ahead.</p>

                <h2>The Confidante and Friend</h2>
                <p>As children grow, mothers often become their confidantes and friends, a trusted source of support and understanding. They listen without judgment, offer advice without imposing, and provide a shoulder to cry on when needed.  This ability to connect with their children on a deeper level fosters open communication and strengthens the bond between them.</p>

                <h2>The Cheerleader</h2>
                <p>Mothers are their children's biggest cheerleaders, celebrating their achievements, encouraging their efforts, and believing in their potential. They provide a constant source of motivation and support, inspiring their children to pursue their dreams and overcome obstacles.  Their unwavering belief in their children empowers them to reach for the stars and achieve greatness.</p>
                <img src="/mothers-day-5.jpg" alt="A mother supporting her child" />`,
        imageUrl: '/mothers-day-5.jpg'
    }
];

export default blogData;