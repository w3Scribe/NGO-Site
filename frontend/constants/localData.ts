// Team Members
export const teamMembers = [
  {
    id: 1,
    name: 'Mrudula Maske', // मृदुला मस्के
    role: 'Sansthapak', // संस्थापक
    image: '/team/mrudula.jpg',
    bio: 'Pune Vidyapeethatun Computer Vidnyanamadhye Padavidhar. Samajik Karyasathi Samarpit.', // पुणे विद्यापीठातून कंप्युटर विज्ञानामध्ये पदवीधर. सामाजिक कार्यासाठी समर्पित.
    socialLinks: {
      twitter: 'https://twitter.com/mrudula',
      linkedin: 'https://linkedin.com/in/mrudula-maske',
    },
  },
  {
    id: 2,
    name: 'Sudhir Gadpayle', // सुधीर गडपायले
    role: 'Prakalp Vyavasthapak', // प्रकल्प व्यवस्थापक
    image: '/team/sudhir.jpg',
    bio: 'Nagpur Madhil 20 Varshancha Anubhav Aslele Prakalp Vyavasthapak Ani Samajsevak.', // नागपूर मधील २० वर्षांचा अनुभव असलेले प्रकल्प व्यवस्थापक आणि समाजसेवक.
    socialLinks: {
      twitter: 'https://twitter.com/sudhir',
      linkedin: 'https://linkedin.com/in/sudhir-gadpayle',
    },
  },
  {
    id: 3,
    name: 'Priya Wankhede', // प्रिया वानखेडे
    role: 'Sanchar Adhikari', // संचार अधिकारी
    image: '/team/priya.jpg',
    bio: 'Amravati Yethil Sanchar Tadnya, 7 Varshancha Anubhav Aslele.', // अमरावती येथील संचार तज्ञ, ७ वर्षांचा अनुभव असलेले.
    socialLinks: {
      twitter: 'https://twitter.com/priya',
      linkedin: 'https://linkedin.com/in/priya-wankhede',
    },
  },
];

// User Testimonials
export const testimonials = [
  {
    id: 1,
    name: 'Madhuri Patel', // माधुरी पटेल
    location: 'Pune', // पुणे
    image: '/testimonials/madhuri.jpg',
    rating: 5,
    comment:
      'Asgaon Charity Sansthene Majhya Gavatil Mulansathi Shaikshanik Samagri Puravali. Tyanche Karya Atishay Changle Aahe!', // अस्गाव चॅरिटी संस्थेने माझ्या गावातील मुलांसाठी शैक्षणिक सामग्री पुरवली. त्यांचे कार्य अतिशय चांगले आहे!
  },
  {
    id: 2,
    name: 'Rajesh Thakre', // राजेश ठाकरे
    location: 'Nagpur', // नागपूर
    image: '/testimonials/rajesh.jpg',
    rating: 4,
    comment:
      'Gelya Varshi Amhi Ya Sansthesobat Vruksharopan Kele, Tyanchya Sahakaryabaddal Mi Krutadnya Aahe.', // गेल्या वर्षी आम्ही या संस्थेसोबत वृक्षारोपण केले, त्यांच्या सहकार्याबद्दल मी कृतज्ञ आहे.
  },
  {
    id: 3,
    name: 'Kiran Waghmare', // किरण वाघमारे
    location: 'Pauni', // पौनी
    image: '/testimonials/kiran.jpg',
    rating: 5,
    comment:
      'Pauni Madhil Amchya Shalela Milalelya Madatimule Anek Vidyarthyanchi Shikshan Suralit Zhale Aahe. Dhanyavad!', // पौनी मधील आमच्या शाळेला मिळालेल्या मदतीमुळे अनेक विद्यार्थ्यांचे शिक्षण सुरळीत झाले आहे. धन्यवाद!
  },
];

// Office Locations
export const officeLocations = [
  {
    id: 1,
    city: 'Pune', // पुणे
    address: 'Dusra Majla, Lakshmi Road, Shivajinagar, Pune - 411005', // दुसरा मजला, लक्ष्मी रोड, शिवाजीनगर, पुणे - ४११००५
    phone: '+91 98765 43210',
    email: 'pune@charitysmile.org',
    coordinates: { lat: 18.5204, lng: 73.8567 },
  },
  {
    id: 2,
    city: 'Nagpur', // नागपूर
    address: 'Civil Lines, Nagpur - 440001', // सिव्हिल लाईन्स, नागपूर - ४४०००१
    phone: '+91 98765 12345',
    email: 'nagpur@charitysmile.org',
    coordinates: { lat: 21.1458, lng: 79.0882 },
  },
  {
    id: 3,
    city: 'Asgaon', // अस्गाव
    address: 'Mukhya Chauk, Asgaon, Jilha Wardha - 442304', // मुख्य चौक, अस्गाव, जिल्हा वर्धा - ४४२३०४
    phone: '+91 95678 12345',
    email: 'asgaon@charitysmile.org',
    coordinates: { lat: 20.7002, lng: 78.6912 }, // Approximate coordinates
  },
];

// Projects in Maharashtra
export const localProjects = [
  {
    id: 1,
    title: 'Asgaon Shala Punarvikas', // अस्गाव शाळा पुनर्विकास
    location: 'Asgaon, Wardha', // अस्गाव, वर्धा
    description: 'Asgaon Yethil Jilha Parishad Shaleche Nutanikaran Karne.', // अस्गाव येथील जिल्हा परिषद शाळेचे नूतनीकरण करणे.
    image: '/projects/asgaon-school.jpg',
    startDate: '2022-06-15',
    status: 'Purna', // पूर्ण (Completed)
    impact: '350 Vidyarthi Labhanvit', // ३५० विद्यार्थी लाभान्वित
    donation: '₹8,50,000',
  },
  {
    id: 2,
    title: 'Pauni Vruksharopan Mohim', // पौनी वृक्षारोपण मोहीम
    location: 'Pauni, Bhandara', // पौनी, भंडारा
    description: 'Pauni Ani Aaspaschya Gavanmadhye 10,000 Zhade Lavane.', // पौनी आणि आसपासच्या गावांमध्ये १०,००० झाडे लावणे.
    image: '/projects/pauni-trees.jpg',
    startDate: '2023-07-01',
    status: 'Chalu', // चालू (Ongoing)
    impact: '25 Gave, 5000 Zhade Lavli', // २५ गावे, ५००० झाडे लावली
    donation: '₹3,25,000',
  },
  {
    id: 3,
    title: 'Pune Digital Shikshan', // पुणे डिजिटल शिक्षण
    location: 'Pune Gramin', // पुणे ग्रामीण
    description:
      'Pune Jilhyatil Gramin Bhagatil 15 Shalanmadhye Digital Shikshan Sadhane Puravane.', // पुणे जिल्ह्यातील ग्रामीण भागातील १५ शाळांमध्ये डिजिटल शिक्षण साधने पुरवणे.
    image: '/projects/pune-digital.jpg',
    startDate: '2023-01-10',
    status: 'Chalu', // चालू (Ongoing)
    impact: '1500 Vidyarthi Labhanvit', // १५०० विद्यार्थी लाभान्वित
    donation: '₹12,00,000',
  },
];

// Common Marathi phrases for the website (Latin script)
export const marathiPhrases = {
  welcome: 'Swagat Aahe', // स्वागत आहे
  donateNow: 'Daan Kara', // दान करा
  joinUs: 'Amchyasobat Jula', // आमच्यासोबत जुळा
  contactUs: 'Sampark Kara', // संपर्क करा
  ourMission: 'Amche Dhyeya', // आमचे ध्येय
  signIn: 'Pravesh Kara', // प्रवेश करा
  signUp: 'Nondani Kara', // नोंदणी करा
  readMore: 'Adhik Vacha', // अधिक वाचा
};

// NGOs based in Maharashtra
export const maharashtraNGOs = [
  {
    id: 1,
    name: 'Wardha Seva Sanstha', // वर्धा सेवा संस्था
    location: 'Wardha', // वर्धा
    focus: 'Shikshan Ani Arogya', // शिक्षण आणि आरोग्य
    since: 1998,
    contact: 'info@wardhaseva.org',
    website: 'https://wardhaseva.org',
  },
  {
    id: 2,
    name: 'Pune Vikas Pratishthan', // पुणे विकास प्रतिष्ठान
    location: 'Pune', // पुणे
    focus: 'Mahila Sakshamikaran', // महिला सक्षमीकरण
    since: 2005,
    contact: 'contact@punevikas.org',
    website: 'https://punevikas.org',
  },
  {
    id: 3,
    name: 'Nagpur Paryavaran Mitra', // नागपूर पर्यावरण मित्र
    location: 'Nagpur', // नागपूर
    focus: 'Paryavaran Sanrakshan', // पर्यावरण संरक्षण
    since: 2010,
    contact: 'green@nagpurenvirofriends.org',
    website: 'https://nagpurenvirofriends.org',
  },
];
