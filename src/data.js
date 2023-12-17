import uniqid from 'uniqid'

const data = {
    sections: {
        educations: [
          {
            schoolName: "Hardvard University",
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