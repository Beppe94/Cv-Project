import uniqid from 'uniqid'

const data = {
    sections: {
      personalInfo : {
        name: 'Walter',
        surname: 'Gray',
        phoneNumber: '1234567890',
        email: 'Walter.gray@gmail.com',
        description: 'Hi! I am Jon Snow a skilled and passionate web developer with a knack for turning ideas into dynamic and user-friendly digital experiences. With a strong foundation in front-end and back-end technologies, i am adept at creating responsive and visually appealing websites. '
      },
      educations: [
        {
          schoolName: "Harvard University",
          degree: "Bachelor in Computer Science",
          location: "Massachusetts, US",
          year: "08/2020",
          isClosed: true,
          id: uniqid(),
        },
      ],
      experiences: [
        {
          companyName: 'Google',
          role: "Software Engineer",
          startingDate: "09/2021",
          endingDate: "Current",
          description: "Responsible for designing, developing, testing, and maintaining software systems and applications within the company. I worked on a wide range of projects, including core infrastructure, user interfaces, algorithms, and various product features.",
          isClosed: true,
          id: uniqid(),
        }
      ]
    }
}

export default data