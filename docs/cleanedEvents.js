const events = [
  {
    name: 'Bottomless Brunch',
    business: '5da883ae5495d00017e713de',
    category: '5da883ae5495d00017e713ab',
    description: 'Come in for out bottomless brunch! Only $8.99 per person. Served from 7 - 11 AM.',
    startDate: 1574488800000,
    endDate: 1575093600000,
    image: 'https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/0dining/bottomlessbrunch.jpg',
  },
  {
    name: 'Endless Brunch',
    business: '5da883ae5495d00017e713b2',
    category: '5da883ae5495d00017e713ab',
    description: 'Come in for out bottomless brunch any Sunday! Only $11.99 per person. Served from 8 - 12 AM.',
    startDate: 1574488800000,
    endDate: 1575093600000,
    image: 'https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/0dining/bottomlessbrunch2.png',
  },
  {
    name: 'Happy Hour at the Jungle Bar',
    business: '5da883ae5495d00017e713da',
    category: '5da883ae5495d00017e713ab',
    description: 'The best happy hour deals in the corridor. Bottomless mimosas only $15!',
    startDate: 1561921200000,
    endDate: 1580425200000,
    image: 'https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/0dining/bottomlessmimosas.png',
  },
  {
    name: 'Half Price Appetizers',
    business: '5da883ae5495d00017e713be',
    category: '5da883ae5495d00017e713ab',
    description: 'Come in for half price appetizers. All day every Wednesday.',
    startDate: 1574834400000,
    endDate: 1574920799000,
    image: 'https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/0dining/halfapps.jpg',
  },
  {
    name: '$1 Entrees',
    business: '5da883ae5495d00017e713d4',
    category: '5da883ae5495d00017e713ab',
    description: 'Buy any entree and get the second one for only a $1. All day every Wednesday.',
    startDate: 1574834400000,
    endDate: 1574920799000,
    image: 'https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/0dining/buyonegetone.jpg',
  },
  {
    name: 'Black Friday Happy Hour',
    business: '5da883ae5495d00017e713b6',
    category: '5da883ae5495d00017e713ab',
    description: 'Stop in for lunch and a drink in between your shopping. Half price PBR and $2 off all appetizers.',
    startDate: 1575007200000,
    endDate: 1575093599000,
    image: 'https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/0dining/2012-01-19-citywide-special.jpg',
  },
  {
    name: '30% Off',
    business: '5da883ae5495d00017e713b6',
    category: '5da883ae5495d00017e713ab',
    description: 'Event Grove members get 30% all entrees (up to $50 per table). Offer available for a limited time so stop in soon. ',
    startDate: 1575180000000,
    endDate: 1577858399000,
    image: 'https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/0dining/30percentoff.jpg',
  },
  {
    name: 'Free Cookies',
    business: '5da883ae5495d00017e713dc',
    category: '5da883ae5495d00017e713ad',
    description: 'Offering free cookies for all co-op members during the month of December.',
    startDate: 1575180000000,
    endDate: 1577858399000,
    image: 'https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/0shopping/TheAnnaEdit-0770-Cookie-Recipe-Food.jpg',
  },
  {
    name: 'New Lounge Area',
    business: '5da883ae5495d00017e713ba',
    category: '5da883ae5495d00017e713ad',
    description: 'New lounge area to relax while you wait! Comfortable chairs and game consoles available free of charge.',
    startDate: 1575180000000,
    endDate: 1575180000000,
    image: 'https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/0shopping/shopping-hell7.jpg',
  },
  {
    name: '35% All Clearance Records',
    business: '5da883ae5495d00017e713c4',
    category: '5da883ae5495d00017e713ad',
    description: '35% all our clearance vinyl just in time for the holiday season.',
    startDate: 1575180000000,
    endDate: 1577858399000,
    image: 'https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/0shopping/240_F_63832916_0XJEjf4m3BLDeahtNzgxu1uHoyh55DGv.jpg',
  },
  {
    name: 'Now Partnering w/ Rebox',
    business: '5da883ae5495d00017e713d0',
    category: '5da883ae5495d00017e713ad',
    description: 'Now accepting any quality clothing. Lower quality clothing can be recycled through Rebox in exchange for store credit.',
    startDate: 1575180000000,
    endDate: 1575180000000,
    image: 'https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/0shopping/Dv_bxgFVAAASBRK.jpg',
  },
  {
    name: 'Bar Trivia',
    business: '5da883ae5495d00017e713d8',
    category: '5da883ae5495d00017e713ac',
    description: 'Come in for bar triva every Thursday night starting in December. $1 jello shots and $3 craft brews.',
    startDate: 1575169200000,
    endDate: 1575190800000,
    image: 'https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/0bar/bartrivia.png',
  },
  {
    name: 'Bar Trivia',
    business: '5da883ae5495d00017e713b8',
    category: '5da883ae5495d00017e713ac',
    description: 'Karaoke every Wednesday night 8 to close. Only $5 Cover',
    startDate: 1574834400000,
    endDate: 1574920799000,
    image: 'https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/0bar/KARAOKE%2BDAVE.jpg',
  },
  {
    name: 'Classic Movie Night',
    business: '5da883ae5495d00017e713c2',
    category: '5da883ae5495d00017e713ac',
    description: 'Classic movie night every Thursday at 7pm. 50% normal admission price.',
    startDate: 1575594000000,
    endDate: 1575604800000,
    image: 'https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/0bar/50percent.png',
  },
  {
    name: 'Free Karoke Night',
    business: '5da883ae5495d00017e713c8',
    category: '5da883ae5495d00017e713ac',
    description: 'No cover charge only on Tuesdays. Drink specials also available. Starts at 8.',
    startDate: 1574820000000,
    endDate: 1574841600000,
    image: 'https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/0bar/karaoke.jpg',
  },
  {
    name: 'Pre-Show Happy Hour',
    business: '5da883ae5495d00017e713d6',
    category: '5da883ae5495d00017e713ac',
    description: 'Now offering happy hour specials 2 hours before all our shows. $4 long islands, $3 well drinks and domestics, and more!',
    startDate: 1575180000000,
    endDate: 1575180000000,
    image: 'https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/0bar/happy-hours.jpg',
  },
  {
    name: 'Half Price Apps',
    business: '5da883ae5495d00017e713b0',
    category: '5da883ae5495d00017e713aa',
    description: 'Half price app with and sandwich purchased at menu price. Available anytime now through December.',
    startDate: 1574402400000,
    endDate: 1577858399000,
    image: 'https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/0dining/halfapps.jpg',
  },
  {
    name: '50% Popcorn',
    business: '5da883ae5495d00017e713b4',
    category: '5da883ae5495d00017e713aa',
    description: 'Buy any bag of popcorn and get the 2nd 50% off. No purchase limit.',
    startDate: 1576821600000,
    endDate: 1576907999000,
    image: 'https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/0bar/50percent.png',
  },
  {
    name: 'Free Pitchers',
    business: '5da883ae5495d00017e713c0',
    category: '5da883ae5495d00017e713aa',
    description: 'Now every Sunday, purchase any 2 entrees at menu price and get a free pitcher of beer.',
    startDate: 1574575200000,
    endDate: 1574661599000,
    image: 'https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/0bar/pitcher50percent.jpeg',
  },
  {
    name: '1/2 Off Bistro Wine',
    business: '5da883ae5495d00017e713d2',
    category: '5da883ae5495d00017e713aa',
    description: 'In celebration of our new partnership with Bistro Winery, get half price bottles of wine with purchase of any pizza.',
    startDate: 1574834400000,
    endDate: 1574920799000,
    image: 'https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/0dining/pizzaandhalfpricewine.png',
  },
  {
    name: '20% Off Dougnuts',
    business: '5da883ae5495d00017e713de',
    category: '5da883ae5495d00017e713aa',
    description: 'Come in anytime after noon for 20% off any doughnuts.',
    startDate: 1574359200000,
    endDate: 1574388000000,
    image: 'https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/0bar/51CSzAMBHOL._SX425_.jpg',
  },
  {
    name: '10% Off',
    business: '5da883ae5495d00017e713cc',
    category: '5da883ae5495d00017e713a9',
    description: 'All new customers get 10% any locksmith service',
    startDate: 1574316000000,
    endDate: 1577772000000,
    image: 'https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/0services/coupon_10off.jpg',
  },
  {
    name: '$35 Hair Cut',
    business: '5da883ae5495d00017e713ae',
    category: '5da883ae5495d00017e713a9',
    description: 'Stop in anyday before 2 to get a $35 cut and free wash/blow dry.',
    startDate: 1574431200000,
    endDate: 1574452800000,
    image: 'https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/solhair/35.jpg',
  },
  {
    name: 'Free Seniors Haircut',
    business: '5da883ae5495d00017e713ae',
    category: '5da883ae5495d00017e713a9',
    description: 'Today only, free wash and cut for anyone over 65. Must show valid ID.',
    startDate: 1575093600000,
    endDate: 1575179999000,
    image: 'https://https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/solhair/free-hair-wash-and-cut-service.jpg-grove-assets.s3.us-east-2.amazonaws.com/event-images/solhair/35.jpg',
  },
  {
    name: 'Free Wash and Cut',
    business: '5da883ae5495d00017e713ae',
    category: '5da883ae5495d00017e713a9',
    description: 'This week only, free wash and cut with purchase of any colour service.',
    startDate: 1575180000000,
    endDate: 1575698400000,
    image: 'https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/solhair/washandcut.jpg',
  },
  {
    name: '$57 Cleaning',
    business: '5da883ae5495d00017e713bc',
    category: '5da883ae5495d00017e713a9',
    description: 'Overdue for a cleaning, all new customers can get a free exam and cleaning for only $57. This month only',
    startDate: 1575180000000,
    endDate: 1575698400000,
    image: 'https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/0services/57-New-Patient-1-700x357.jpg',
  },
  {
    name: '$27 Mani-Pedi',
    business: '5da883ae5495d00017e713c6',
    category: '5da883ae5495d00017e713a9',
    description: 'Winter special, only $27 for a manicure and pedicure.',
    startDate: 1574316000000,
    endDate: 1551333600000,
    image: 'https://event-grove-assets.s3.us-east-2.amazonaws.com/event-images/0services/1749.jpg',
  },
]

module.exports = events;