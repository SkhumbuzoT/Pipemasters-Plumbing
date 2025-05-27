// Business Configuration - Change these details for each client
window.businessConfig = {
  // Business Identity
  businessName: "Serenity",
  tagline: "Massage Therapy",
  therapistName: "Sarah Williams",
  therapistCredentials: "Licensed Massage Therapist (LMT)",
  yearsExperience: 8,
  clientsServed: "500+",
  
  // Contact Information
  contact: {
    phone: "(555) 123-4567",
    email: "info@serenitymassage.com",
    address: {
      street: "123 Wellness Lane",
      city: "Peaceful Valley",
      state: "CA",
      zip: "90210"
    }
  },
  
  // Business Hours
  hours: {
    monday: "9:00 AM - 8:00 PM",
    tuesday: "9:00 AM - 8:00 PM", 
    wednesday: "9:00 AM - 8:00 PM",
    thursday: "9:00 AM - 8:00 PM",
    friday: "9:00 AM - 8:00 PM",
    saturday: "9:00 AM - 6:00 PM",
    sunday: "10:00 AM - 4:00 PM"
  },
  
  // Services Offered
  services: [
    {
      title: "Swedish Massage",
      description: "A gentle, relaxing massage that promotes circulation and reduces muscle tension using long, flowing strokes.",
      price: 85,
      duration: 60,
      benefits: ["Stress relief", "Improved circulation", "Mental relaxation"],
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Deep Tissue Massage",
      description: "Targets deeper layers of muscle and connective tissue to release chronic tension and knots.",
      price: 105,
      duration: 60,
      benefits: ["Pain relief", "Muscle recovery", "Increased mobility"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Hot Stone Massage",
      description: "Heated stones placed on key points help muscles relax deeply while promoting healing energy flow.",
      price: 125,
      duration: 75,
      benefits: ["Deep relaxation", "Improved sleep", "Enhanced circulation"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Prenatal Massage",
      description: "Specially designed for expecting mothers to reduce pregnancy discomfort and promote wellness.",
      price: 95,
      duration: 60,
      benefits: ["Reduces swelling", "Relieves back pain", "Improves sleep quality"],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Sports Massage",
      description: "Targeted treatment for athletes to enhance performance, prevent injury, and speed recovery.",
      price: 110,
      duration: 60,
      benefits: ["Injury prevention", "Faster recovery", "Enhanced flexibility"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Aromatherapy Massage",
      description: "Combines therapeutic massage with essential oils to enhance relaxation and emotional well-being.",
      price: 100,
      duration: 60,
      benefits: ["Emotional balance", "Stress reduction", "Mood enhancement"],
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    }
  ],
  
  // About Section Content
  about: {
    bio: "With over 8 years of experience in therapeutic massage, I'm passionate about helping clients achieve optimal wellness through the healing power of touch. My journey began with a deep desire to help others find relief from stress and physical tension.",
    certifications: [
      "Licensed Massage Therapist (LMT)",
      "Certified in Swedish & Deep Tissue Massage", 
      "Specialized in Stress Relief & Pain Management",
      "500+ Happy Clients Served"
    ],
    quote: "Every session is tailored to your unique needs. My goal is to create a safe, nurturing space where healing can naturally occur.",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000"
  },
  
  // Hero Section
  hero: {
    title: "Restore Your Balance",
    subtitle: "Experience the healing power of therapeutic massage in a tranquil, professional environment designed for your complete wellness.",
    backgroundImage: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
  },
  
  // Social Media Links
  social: {
    facebook: "#",
    instagram: "#", 
    yelp: "#",
    google: "#"
  },
  
  // Statistics
  stats: {
    happyClients: "500+",
    yearsExperience: "8",
    massageTypes: "6", 
    satisfactionRate: "98%"
  },
  
  // Testimonials
  testimonials: [
    [
      {
        name: "Maria Johnson",
        initials: "MJ",
        review: "Sarah's Swedish massage was exactly what I needed. Her gentle touch and calming presence helped me release months of built-up stress. I left feeling completely renewed.",
        service: "Swedish Massage Client"
      },
      {
        name: "David Thompson", 
        initials: "DT",
        review: "As an athlete, I've tried many massage therapists, but Sarah's sports massage technique is outstanding. She really understands muscle recovery and injury prevention.",
        service: "Sports Massage Client"
      },
      {
        name: "Lisa Chen",
        initials: "LC", 
        review: "The hot stone massage was pure bliss! Sarah created such a peaceful environment, and the heated stones melted away all my tension. Highly recommend!",
        service: "Hot Stone Massage Client"
      }
    ],
    [
      {
        name: "Rachel Parker",
        initials: "RP",
        review: "During my pregnancy, Sarah's prenatal massage sessions were a godsend. She made me feel so comfortable and helped relieve all my back pain. Professional and caring!",
        service: "Prenatal Massage Client"
      },
      {
        name: "James Miller",
        initials: "JM",
        review: "I was skeptical about deep tissue massage, but Sarah's expertise changed my mind. She worked out knots I didn't even know I had. The relief was incredible!",
        service: "Deep Tissue Massage Client"
      },
      {
        name: "Anna Kim",
        initials: "AK",
        review: "The aromatherapy massage was a sensory journey! Sarah's choice of essential oils perfectly complemented the massage, leaving me feeling balanced and rejuvenated.",
        service: "Aromatherapy Massage Client"
      }
    ]
  ]
};