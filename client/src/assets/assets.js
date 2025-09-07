import blog_icon from './blog_icon.png'
import arrow from './arrow.png'
import background from './background.jpg'
import star from './star.png'
import blog_pic_2 from './blog_pic_2.jpg'
import blog_pic_3 from './blog_pic_3.jpg'
import blog_pic_4 from './blog_pic_4.jpg'
import blog_pic_5 from './blog_pic_5.jpg'
import blog_pic_6 from './blog_pic_6.jpg'
import user from './user.png'
import instagram from './instagram.png'
import facebook from './facebook.png'
import twitter from './twitter.png'
import home_icon from './home_icon.png'
import chat_icon from './chat.png'
import checklist from './checklist.png'
import addicon from './add-icon.png'
import draft from './draft.png'
import cross from './cross.png'
import delete_icon from './delete_icon.png'
import approved from './approved.png'
import upload_area from './upload_area.png'

 
export const blogCategories=['All','Tecnology','Startup','Lifestyle','Finance']

export const assets={
    blog_icon,
    arrow,
    background,
    star,
    user,
    instagram,
    facebook,
    twitter,
    home_icon,
    chat_icon,
    checklist,
    addicon,
    draft,
    cross,
    approved, 
    delete_icon,
    upload_area
    }

export const blog_data = [
  {
    "_id": "1a2b3c4d5e6f7890a1b2c3d4",
    "title": "10 Easy Tips to Boost Your Productivity",
    "description": "<h1>Boost Your Productivity</h1><p>Being productive doesn't mean working harder, it means working smarter. Try these 10 tips to make your days more effective and efficient.</p><h2>1. Plan Ahead</h2><p>Start your day with a plan to avoid wasting time on decisions.</p><h2>2. Eliminate Distractions</h2><p>Turn off notifications and focus on one task at a time.</p>",
    "category": "Tecnology",
    "image": blog_pic_2,
    "createdAt": "2025-04-20T10:15:00.000Z",
    "updatedAt": "2025-04-22T12:30:00.000Z",
    "__v": 0,
    "isPublished": true,
    "subTitle": "Boost your efficiency with these simple strategies"
  },
  {
    "_id": "234abcde567fgh890ijklmno",
    "title": "Healthy Eating Made Simple",
    "description": "<h1>Healthy Eating</h1><p>Eating healthy doesn't have to be complicated. Learn the basics of good nutrition and simple meal planning strategies.</p><h2>1. Whole Foods</h2><p>Focus on whole, unprocessed foods like fruits, vegetables, grains, and lean proteins.</p><h2>2. Hydration</h2><p>Drink plenty of water throughout the day to stay energized.</p>",
    "category": "Startup",
    "image": blog_pic_3,
    "createdAt": "2025-04-10T09:00:00.000Z",
    "updatedAt": "2025-04-11T10:00:00.000Z",
    "__v": 0,
    "isPublished": true,
    "subTitle": "A beginner's guide to nutrition and better eating habits"
  },
  {
    "_id": "abc123def456ghi789jklmno",
    "title": "Creating a Morning Routine That Works",
    "description": "<h1>Morning Routines</h1><p>Your morning sets the tone for the rest of the day. Build a routine that energizes and focuses you.</p><h2>1. Wake Up Early</h2><p>Give yourself time before your obligations begin.</p><h2>2. Exercise</h2><p>Move your body to activate your brain.</p>",
    "category": "Lifestyle",
    "image": blog_pic_4,
    "createdAt": "2025-03-15T06:45:00.000Z",
    "updatedAt": "2025-03-16T08:00:00.000Z",
    "__v": 0,
    "isPublished": true,
    "subTitle": "Design a routine that gives you energy and focus"
  },
  {
    "_id": "xyz789abc456def123ghijkl",
    "title": "Minimalism: How Less Can Be More",
    "description": "<h1>Minimalism</h1><p>Minimalism is about making room for what really matters by getting rid of the rest.</p><h2>1. Declutter</h2><p>Clear out items you no longer use or need.</p><h2>2. Mindful Consumption</h2><p>Be intentional about what you bring into your life.</p>",
    "category": "Lifestyle",
    "image": blog_pic_5,
    "createdAt": "2025-02-28T14:20:00.000Z",
    "updatedAt": "2025-03-01T09:00:00.000Z",
    "__v": 0,
    "isPublished": true,
    "subTitle": "Living intentionally through simplicity"
  },
  {
    "_id": "mno456pqr789stu012vwxyzab",
    "title": "Mastering Time Management",
    "description": "<h1>Time Management Tips</h1><p>Time is our most valuable resource. Learn to manage it wisely with these strategies.</p><h2>1. Prioritize</h2><p>Identify what's most important each day.</p><h2>2. Use a Calendar</h2><p>Block time for tasks and avoid overbooking.</p>",
    "category": "Finance",
    "image": blog_pic_6,
    "createdAt": "2025-01-05T08:30:00.000Z",
    "updatedAt": "2025-01-06T11:00:00.000Z",
    "__v": 0,
    "isPublished": true,
    "subTitle": "Take control of your schedule and get more done"
  },
   {
    "_id": "mno456pqr789stu012vwxyzab",
    "title": "Mastering Time Management",
    "description": "<h1>Time Management Tips</h1><p>Time is our most valuable resource. Learn to manage it wisely with these strategies.</p><h2>1. Prioritize</h2><p>Identify what's most important each day.</p><h2>2. Use a Calendar</h2><p>Block time for tasks and avoid overbooking.</p>",
    "category": "Finance",
    "image": blog_pic_6,
    "createdAt": "2025-01-05T08:30:00.000Z",
    "updatedAt": "2025-01-06T11:00:00.000Z",
    "__v": 0,
    "isPublished": true,
    "subTitle": "Take control of your schedule and get more done"
  }
];

export const footer_data = [
  {
    title: "Quick Links",
    links: ["Home", "Best Sellers", "Offers & Deals", "Contact Us", "FAQs"]
  },
  {
    title: "Need Help?",
    links: [
      "Delivery Information",
      "Return & Refund Policy",
      "Payment Methods",
      "Track your Order",
      "Contact Us"
    ]
  },
  {
    title: "Follow Us",
    links: ["Instagram", "Twitter", "Facebook", "YouTube"]
  }
];

export const dashboard_data={
  "blogs":10,
  "comments":5,
  "drafts":0,
  "recentBlogs":blog_data.slice(0,5)
}
export const comments_data = [
  {
    _id: "6811ed9e7836a82ba747cb25",
    blog: blog_data[0],
    name: "Michael Scott",
    content: "This is my new comment",
    isApproved: false,
    createdAt: "2025-04-30T09:30:06.918Z",
    updatedAt: "2025-04-30T09:30:06.918Z",
    __v: 0
  },
  {
    _id: "6810a752fbb942aa7cbf4adb",
    blog: blog_data[1],
    name: "John Doe",
    content: "This is a nice blog",
    isApproved: false,
    createdAt: "2025-04-29T15:20:10.500Z",
    updatedAt: "2025-04-29T15:20:10.500Z",
    __v: 0
  },
  {
    _id: "6810b8ef2ff3481ac3de2a71",
    blog: blog_data[2],
    name: "Pam Beesly",
    content: "Very informative and well written!",
    isApproved: true,
    createdAt: "2025-04-28T18:45:12.123Z",
    updatedAt: "2025-04-28T18:45:12.123Z",
    __v: 0
  },
  {
    _id: "6810c0d3ac8494fc2f31a7ef",
    blog: blog_data[3],
    name: "Jim Halpert",
    content: "I enjoyed reading this post.",
    isApproved: true,
    createdAt: "2025-04-27T13:10:45.789Z",
    updatedAt: "2025-04-27T13:10:45.789Z",
    __v: 0
  },
   {
    _id: "6811ed9e7836a82ba747cb25",
    blog: blog_data[0],
    name: "Michael Scott",
    content: "This is my new comment",
    isApproved: false,
    createdAt: "2025-04-30T09:30:06.918Z",
    updatedAt: "2025-04-30T09:30:06.918Z",
    __v: 0
  },
  {
    _id: "6810a752fbb942aa7cbf4adb",
    blog: blog_data[1],
    name: "John Doe",
    content: "This is a nice blog",
    isApproved: false,
    createdAt: "2025-04-29T15:20:10.500Z",
    updatedAt: "2025-04-29T15:20:10.500Z",
    __v: 0
  },
  {
    _id: "6810b8ef2ff3481ac3de2a71",
    blog: blog_data[2],
    name: "Pam Beesly",
    content: "Very informative and well written!",
    isApproved: true,
    createdAt: "2025-04-28T18:45:12.123Z",
    updatedAt: "2025-04-28T18:45:12.123Z",
    __v: 0
  },
  {
    _id: "6810c0d3ac8494fc2f31a7ef",
    blog: blog_data[3],
    name: "Jim Halpert",
    content: "I enjoyed reading this post.",
    isApproved: true,
    createdAt: "2025-04-27T13:10:45.789Z",
    updatedAt: "2025-04-27T13:10:45.789Z",
    __v: 0
  }

  
];

 