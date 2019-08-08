/* eslint no-use-before-define: 0 */

export default {
  presentation: {
    cover: {
      style: '0',
      title: 'Speed Deck Up',
      subtitle: 'speedeck: from json to ppt',
      time: 'Aug 7, 2019',
    },
    me: [{
      template: 'content',
      content:
      `# This is Andy
      ![child](https://user-images.githubusercontent.com/7886068/62680348-e1a77c80-b96b-11e9-8cc9-b651ad17034f.jpg)
      - Graphic designer turned Anthropologist turned frontend turned infrastructure engineer
      - studied at 4 universities, including udemy university
      - founded 10 companies
      - live in Mtn view, fremont, Berkeley, Hayward, Daly City and finally made up in SF`,
    },
    {
      template: 'content|image',
      content:
      `
      # I love Wafflejs since July 2015
      
      Used 20 student FREE tickets

      finally be student sponser since April 2019 :)

      My firsy speech here :)

      I also mentor at Nodeschool SF/OAK
      `,
      image: `https://wafflejs.com/images/social-2019-08.jpg`,
    }],
    problem: [
      {
        template: 'centent',
        content: `# I have ideas, build presentation is hard...`,
      },
      {
        template: 'centent',
        content: `# Want to talk something?`,
      },
      {
        template: 'image|image',
        image: [`https://s3-media1.fl.yelpcdn.com/bphoto/oyeNFlQrhIX1vicbIxg5cg/o.jpg`, `https://pbs.twimg.com/media/D-mkX7NU4AEhyug.jpg`],
      },
    ],
    solution: [
      {
        template: 'centent',
        content: `
        # speedeck
        from json to presentation
        5 mins
        `,
      },
      {
        template: 'centent',
        content: `
        # Demo
        `,
      },
    ],
    open_source: [
      {
        template: 'centent',
        content: `
        # It's open source on the hub of git

        https://github.com/amazingandyyy/speedeck
        `,
      },
    ],
  },
  author: {
    name: 'Andy Chen',
    title: 'Indie Hacker',
    location: 'SF City',
    social: {
      website: 'https://amazingandyyy.com',
      email: 'amazingandyyy@gmail.com',
      twitter: 'https://twitter.com/amazingandyyyer',
      github: 'https://github.com/amazingandyyy'
    },
  },
}
