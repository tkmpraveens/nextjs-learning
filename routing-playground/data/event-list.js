const EVENTS_LIST = [
  {
    id: "e1",
    title: "Your One-Stop Event Planning Solution",
    description:
      "PlanPerfect is your go-to platform for event management. Whether you're planning a small gathering or a large-scale conference, we've got you covered. Our easy-to-use platform allows you to manage every aspect of your event, from budgeting to scheduling and everything in between.",
    location: "New York, NY",
    date: "June 1-3, 2023",
    image: "images/1.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Streamline Your Event Planning Process",
    description:
      "EventEase is designed to simplify event planning. Our platform is user-friendly, customizable, and feature-packed, enabling you to plan and execute events with ease. Our services include venue selection, vendor management, budget tracking, and more.",
    location: "Los Angeles, CA",
    date: "September 15-17, 2023",
    image: "images/2.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Create Memorable Events",
    description:
      "Celebrate with Style is a full-service event planning website that takes care of everything from start to finish. We offer customized event packages to suit your specific needs, ensuring that your event is a success.",
    location: "Chicago, IL",
    date: "November 10-12, 2023",
    image: "images/3.jpg",
    isFeatured: true,
  },
  {
    id: "e4",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Boston, MA",
    date: "May 12-14, 2023",
    image: "images/4.jpg",
    isFeatured: false,
  },
  {
    id: "e5",
    title: "Networking for introverts",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "Seattle, WA",
    date: "July 7-9, 2023",
    image: "images/5.jpg",
    isFeatured: true,
  },
  {
    id: "e6",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "Atlanta, GA",
    date: "December 1-3, 2023",
    image: "images/6.jpg",
    isFeatured: true,
  },
  {
    id: "e7",
    title: "The Ultimate Event Management Tool",
    description:
      "EventPro is the perfect tool for event professionals who want to streamline their processes and take their events to the next level. Our platform includes features like guest management, ticketing, and real-time analytics to help you make data-driven decisions and deliver exceptional experiences.",
    location: "Miami, FL",
    date: "October 27-29, 2023",
    image: "images/7.jpg",
    isFeatured: false,
  },
  {
    id: "e8",
    title: "Make Your Vision a Reality",
    description:
      "DreamEvents is where your vision becomes reality. Our team of experts will work with you to plan and execute your dream event, no matter how big or small. From concept to cleanup, we'll be with you every step of the way.",
    location: "San Francisco, CA",
    date: "August 5-7, 2023",
    image: "images/8.jpg",
    isFeatured: true,
  },
  {
    id: "e9",
    title: "Your Partner in Planning",
    description:
      "The Event Co. is your partner in planning. We offer a comprehensive suite of event management services, including design, production, and logistics. With our team of seasoned professionals, you can be sure your event will be a success.",
    location: "Austin, TX",
    date: "April 20-22, 2023",
    image: "images/9.jpg",
    isFeatured: true,
  },
];

export const getFeaturedEventList = () => {
  return EVENTS_LIST.filter((event) => event.isFeatured);
};

export const getEventList = () => {
  return EVENTS_LIST;
};

export const getFilteredEventList = (dateFilter) => {
  const { year, month } = dateFilter;

  let filteredEventList = EVENTS_LIST.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEventList;
};

export const getEventById = (id) => {
  return EVENTS_LIST.find((event) => event.id === id);
};
