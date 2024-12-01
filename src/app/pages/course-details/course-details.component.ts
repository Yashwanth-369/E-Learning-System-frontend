import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { ApiService } from '../../shared/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule], 
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'] 
})
export class CourseDetailsComponent implements OnDestroy {
  
  topics = [
    {
      name: 'Angular',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
    },
    {
      name: 'SpringBoot',
      logo: 'https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png',
    },
    {
      name: 'Java',
      logo: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
    },
    {
      name: 'MySQL',
      logo: 'https://banner2.cleanpng.com/20180411/wre/avf0mauoj.webp',
    },
    {
      name: 'React',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    },
    {
      name: 'Node.js',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    },
    {
      name: 'AWS',
      logo: 'https://saviynt.com/hubfs/aws.png',
    },
    {
      name: 'Azure',
      logo: 'https://www.business-central-app.it/wp-content/uploads/2021/12/logo-azure.png',
    },
    {
      name:'Python',
      logo: 'https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=800%2C800&ssl=1',
    },
    {
      name: 'Flutter',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png',
    },
    {
      name: 'Kubernetes',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg',
    },
    {
      name: 'Docker',
      logo: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png',
    },
    {
      name: 'GitHub',
      logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    },
    {
      name: 'TypeScript',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    }
    
  ];
  searchTerm: string = '';
  
  courseList:any[] = [];
  
  courses = [
    {
      id:1,
      title: 'Web Development',
      image: 'https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg',
      startDate: '2024-01-10',
      endDate: '2024-04-20',
      availability: 'Available',
      duration: '3 months',
      author: 'John Doe',
      pdfPath: '/images/webtech.pdf',
      description: 'Learn how to build websites and web applications using HTML, CSS, and JavaScript.',
      topics: [
        'Introduction to HTML & CSS',
        'JavaScript Fundamentals',
        'Responsive Web Design',
        'Backend Development with Node.js',
        'Web Deployment and Hosting'
      ],
      
      schedule: [
        'Week 1: Introduction to HTML & CSS',
        'Week 2: JavaScript Basics',
        'Week 3: Responsive Design',
        'Week 4: Node.js & Backend Development',
        'Week 5: Final Project'
      ],
      modules: [
        'Module 1: HTML Basics - Learn HTML fundamentals and structure webpages.',
        'Module 2: Advanced CSS Techniques - Master CSS layouts, animations, and responsive design.',
        'Module 3: JavaScript Essentials - Explore programming fundamentals like variables, functions, and events.',
        'Module 4: Building APIs with Node.js - Learn to create RESTful APIs and connect databases.',
        'Module 5: Final Project - Build a functional web app combining frontend and backend skills.',
        'Module 6: Responsive Design - Design adaptable layouts using mobile-first approaches.',
        'Module 7: Forms and Validations - Create interactive forms with data validation.',
        'Module 8: TypeScript Basics - Use TypeScript to write maintainable and scalable JavaScript code.',
        'Module 9: Angular Essentials - Build dynamic SPAs using Angular components and services.',
        'Module 10: Backend Integration - Connect frontend applications to backend APIs for data exchange.',
        'Module 11: Deployment Strategies - Learn efficient deployment methods using hosting and CI/CD.',
        'Module 12: Project Presentation - Present your project by highlighting key features and development.'
    ],
    
      videos: [
        {
          title: 'HTML Crash Course',
          url: 'https://youtu.be/qz0aGYrrlhU?si=N8UfDMqnHrOMpsyf',
          description: 'Learn the fundamentals of HTML, including tags, attributes, and semantic elements. Understand how to structure webpages efficiently and create user-friendly layouts. This video is perfect for beginners starting their web development journey.'
        },
        {
          title: 'CSS Grid & Flexbox',
          url: 'https://youtu.be/OXGznpKZ_sA?si=SXOsQSvu24AA5-Zw',
          description: 'Master CSS Grid and Flexbox to create responsive and modern layouts. This tutorial explains how to align, position, and structure content efficiently. By the end, you’ll be equipped to handle any web design challenge with ease.'
        },
        {
          title: 'JavaScript 101',
          url: 'https://youtu.be/W6NZfCO5SIk',
          description: 'Dive into JavaScript, the programming language of the web. Learn how to use variables, loops, and functions to create dynamic websites. This video offers hands-on examples for interactive and engaging user experiences.'
        },
        {
          title: 'Node.js Basics',
          url: 'https://youtu.be/Oe421EPjeBE',
          description: 'Explore the basics of Node.js, including its runtime environment and key features. Learn how to set up a server, handle requests, and build a simple API. Perfect for those transitioning from frontend to backend development.'
        },
        {
          title: 'Project Overview',
          url: 'https://youtu.be/TlB_eWDSMt4',
          description: 'This video provides a detailed walkthrough of the final project. Learn how to plan, design, and implement each feature effectively. Gain insights into the complete workflow, from ideation to deployment.'
        },
      ],

      showDetails: false,
      showEnroll: false,
      showSuccess: false,
      showOverlay: false
    },
    {
      id:2,
      title: 'Data Science',
      image: 'https://www.naukri.com/campus/career-guidance/wp-content/uploads/2023/11/what-is-data-science.jpg',
      startDate: '2024-02-15',
      endDate: '2024-06-15',
      availability: 'Available',
      duration: '4 months',
      author: 'Jane Smith',
      pdfPath: '/images/Datasci.pdf',
      description: 'Data Science is a multidisciplinary field that uses scientific methods, algorithms, and systems to extract knowledge and insights from structured and unstructured data.',
      topics: [
        'Introduction to Data Science',
        'Data Wrangling and Preprocessing',
        'Statistical Analysis and Probability',
        'Machine Learning Algorithms',
        'Data Visualization Techniques'
      ],

      modules: [
        'Module 1: Introduction to Data Science - Learn basics of data science and key concepts.',
        'Module 2: Data Wrangling and Exploration - Clean and manipulate data with Pandas and NumPy.',
        'Module 3: Data Visualization - Visualize data with Matplotlib, Seaborn, and Plotly.',
        'Module 4: Statistics for Data Science - Learn statistical concepts for data analysis.',
        'Module 5: Machine Learning Basics - Explore regression, classification, and evaluation.',
        'Module 6: Deep Learning Fundamentals - Learn neural networks with TensorFlow or PyTorch.',
        'Module 7: Natural Language Processing (NLP) - Analyze text data with NLP techniques.',
        'Module 8: Time Series Analysis - Forecast time series data using ARIMA and trends.',
        'Module 9: Model Deployment and Optimization - Deploy and optimize machine learning models.',
        'Module 10: Data Ethics and Privacy - Understand ethics, privacy, and bias in data science.',
        'Module 11: Advanced Machine Learning Algorithms - Learn Random Forest, XGBoost, and SVM.',
        'Module 12: Capstone Project - Work on a real-world data science project.'
    ],
    
    videos: [
      {
          title: 'Introduction to Data Science',
          url: 'https://youtu.be/RBSUwFGa6Fk?si=A0nYUPhfCLiUrD3A',
          description: 'Learn about the field of data science, including the role of a data scientist and the skills required. This video provides an overview of the tools and techniques used in data science projects. It’s perfect for beginners to get started in the field.'
      },
      {
          title: 'Data Wrangling in Python with Pandas',
          url: 'https://youtu.be/vSyymtg_BVw?si=E8k9KFtHIAka2GcA',
          description: 'This video covers the essential skills for cleaning and preparing data for analysis. You’ll learn to use the Pandas library to handle missing data, filter, and transform datasets. It’s a must-watch for anyone working with real-world data.'
      },
      {
          title: 'Data Visualization with Matplotlib and Seaborn',
          url: 'https://youtu.be/9GvnrQv138s?si=Ca0m2tdWtsyPir64',
          description: 'Master data visualization techniques using Matplotlib and Seaborn to create informative and insightful charts. This tutorial covers a variety of visualizations including bar charts, histograms, and heatmaps. Learn how to communicate data effectively through visuals.'
      },
      {
          title: 'Introduction to Machine Learning Algorithms',
          url: 'https://youtu.be/7eh4d6sabA0',
          description: 'Explore the basic concepts of machine learning, including key algorithms like linear regression and decision trees. This video explains how these algorithms work and how they are applied to real-world problems. It’s a great introduction to the world of machine learning.'
      },
      {
          title: 'Deep Learning with TensorFlow',
          url: 'https://youtu.be/tPYj3fFJGjk',
          description: 'Learn the fundamentals of deep learning and neural networks with TensorFlow. This video walks you through creating deep learning models for image classification and more. It’s ideal for anyone interested in diving deeper into AI and machine learning.'
      },
      
  ],
  
      showDetails: false,
      showEnroll: false,
      showSuccess: false
    },
    {
      id:3,
      title: 'Mobile App Development',
      image: 'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg',
      startDate: '2024-03-01',
      endDate: '2024-07-01',
      availability: 'Available',
      duration: '4 months',
      author: 'John Doe',
      pdfPath: '/images/MobileApp.pdf',
      description: 'Learn how to build mobile applications for iOS and Android platforms using tools like React Native, Flutter, and native development frameworks.',
      topics: [
        'Introduction to Mobile App Development',
        'Building User Interfaces with React Native',
        'Integrating APIs in Mobile Apps',
        'Database and Storage Solutions',
        'Publishing Apps to App Stores'
      ],
      modules: [
        'Module 1: Introduction to Mobile App Development - Learn the fundamentals of mobile app development.',
        'Module 2: Building Your First App - Create a simple app using either Android Studio or Xcode.',
        'Module 3: User Interface Design - Design intuitive and responsive UIs using XML (Android) or SwiftUI (iOS).',
        'Module 4: Mobile App Architecture - Understand app architecture patterns like MVC, MVVM.',
        'Module 5: Working with APIs - Learn to integrate APIs in your app for fetching data.',
        'Module 6: Data Persistence - Store app data using SQLite, Room Database, or Core Data.',
        'Module 7: Firebase Integration - Integrate Firebase services for authentication, real-time database.',
        'Module 8: Debugging and Testing - Learn techniques for debugging and testing mobile apps to ensure quality.',
        'Module 9: Publishing Your App - Learn how to publish your app to the Google Play Store or Apple App Store.',
        'Module 10: Advanced Mobile Features - Explore advanced features like location services, camera integration.',
        'Module 11: Cross-Platform Development - Introduction to Flutter and React Native for building apps for both iOS and Android.',
        'Module 12: Capstone Project - Apply everything you’ve learned to develop a full-featured mobile app.'
    ],
    videos: [
      {
          title: 'Mobile App Development Introduction',
          url: 'https://youtu.be/yye7rSsiV6k?si=hmvidVJd0mzPqiON',
          description: 'Learn the basics of mobile app development and understand the differences between native and cross-platform development. This video gives an overview of the tools and technologies used for mobile app creation.'
      },
      {
          title: 'Building Your First Android App',
          url: 'https://youtu.be/fis26HvvDII',
          description: 'In this video, you will learn how to build your first Android app using Android Studio. It covers basic concepts such as UI design, layouts, and activity management for Android development.'
      },
      {
          title: 'User Interface Design for iOS with SwiftUI',
          url: 'https://youtu.be/hSSxuO6GdcE?si=LibXcULYtctfKoct',
          description: 'This video introduces you to building beautiful user interfaces for iOS apps using SwiftUI. Learn how to use declarative syntax to build dynamic and responsive layouts.'
      },
      {
          title: 'Firebase Integration in Mobile Apps',
          url: 'https://youtu.be/jbHfJpoOzkI?si=LTfovi74ozNMo_LQ',
          description: 'Learn how to integrate Firebase into your mobile app to enable real-time database, authentication, and notifications. This video walks you through setting up Firebase and using it in your mobile projects.'
      },
      {
          title: 'React Native Introduction',
          url: 'https://youtu.be/0-S5a0eXPoc',
          description: 'This video introduces React Native for cross-platform mobile development. Learn how to build apps for both iOS and Android using a single codebase, and explore the benefits of React Native.'
      }
  ],
    
      showDetails: false,
      showEnroll: false,
      showSuccess: false
    },
    {
      id:4,
      title: 'Cloud Computing',
      image: 'https://theicttrends.com/wp-content/uploads/2023/01/4-Pillars-of-Cloud-Computing-1.jpg',
      startDate: '2024-04-10',
      endDate: '2024-08-10',
      availability: 'Available',
      duration: '5 months',
      author: 'Alice Johnson',
      pdfPath: '/images/cloud.pdf',
      description: 'Cloud Computing enables businesses to use remote servers to store, manage, and process data, rather than using local servers or personal computers.',
      topics: [
        'Introduction to Cloud Computing',
        'Cloud Service Models (IaaS, PaaS, SaaS)',
        'Virtualization and Cloud Infrastructure',
        'Cloud Security',
        'Cloud Migration Strategies'
      ],
      modules: [
        'Module 1: Introduction to Cloud Computing - Learn the basics of cloud computing, its types, and service models.',
        'Module 2: Cloud Infrastructure - Understand the architecture of cloud environments, including virtualization.',
        'Module 3: Cloud Service Providers - Learn about major cloud providers like AWS, Azure, and Google Cloud.',
        'Module 4: Virtualization and Containers - Explore virtualization technologies and containerization using Docker.',
        'Module 5: Cloud Storage Solutions - Understand cloud storage models like object storage, block storage, storage.',
        'Module 6: Cloud Security - Learn the key concepts of securing cloud environments and best practices cloud.',
        'Module 7: DevOps and Cloud Automation - Learn about DevOps practices and automating cloud infrastructure.',
        'Module 8: Cloud Networking - Understand cloud networking concepts such as VPC, load balancing and CDN.',
        'Module 9: Serverless Computing - Learn about serverless architectures and how to use serverless.',
        'Module 10: Cloud Monitoring and Optimization - Learn how to monitor and optimize cloud resources.',
        'Module 11: Cloud Migration Strategies - Understand how to migrate applications and data to the cloud.',
        'Module 12: Capstone Project - Apply your knowledge to a real-world cloud computing project.'
    ],
    videos: [
      {
          title: 'Introduction to Cloud Computing',
          url: 'https://youtu.be/RWgW-CgdIk0?si=mVNKLgDj8mqvnVKe',
          description: 'This video covers the basics of cloud computing, including different service models (IaaS, PaaS, SaaS) and deployment models (public, private, hybrid). A great starting point for beginners in cloud computing.'
      },
      {
          title: 'AWS Cloud Computing for Beginners',
          url: 'https://youtu.be/O61gbmYZJmE?si=R0wTPFuQ29T_ItK4',
          description: 'Learn about Amazon Web Services (AWS), the leading cloud service provider. This video explains key services like EC2, S3, and RDS, and how to get started with AWS for cloud infrastructure and applications.'
      },
      {
          title: 'Virtualization and Containers Explained',
          url: 'https://youtu.be/eyNBf1sqdBQ?si=OPMfCTZ9eNB-y_Kp',
          description: 'This video covers virtualization and containers, two fundamental technologies in cloud computing. Learn how Docker and Kubernetes are used to create scalable and portable cloud applications.'
      },
      {
          title: 'Cloud Security Best Practices',
          url: 'https://youtu.be/MHtg2Au78LI?si=OzdobY3ymGtaysJ3',
          description: 'Learn the best practices for securing your cloud environments, including identity management, encryption, and access control. This video is essential for anyone deploying cloud-based solutions.'
      },
      {
          title: 'Introduction to DevOps and Cloud Automation',
          url: 'https://youtu.be/6GQRb4fGvtk?si=E2eg6MUEI5Fjs0g1',
          description: 'Discover the fundamentals of DevOps practices and cloud automation. This video walks you through using tools like Terraform, Ansible, and Jenkins for continuous integration and infrastructure management in the cloud.'
      }
  ],
  
    
      showDetails: false,
      showEnroll: false,
      showSuccess: false
    },
    {
      id:5,
      title: 'AI & Machine Learning',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSWSdD-C1RFUUoC0nR-3ZAo9HR0xBqOs146g&s',
      startDate: '2024-05-20',
      endDate: '2024-09-20',
      availability: 'Available',
      duration: '4 months',
      author: 'Michael Brown',
      pdfPath: '/images/AIML.pdf',
      description: 'AI & Machine Learning focus on creating intelligent systems that can learn, adapt, and improve from experience without explicit programming.',
      topics: [
        'Introduction to AI and ML',
        'Supervised and Unsupervised Learning',
        'Neural Networks and Deep Learning',
        'Natural Language Processing',
        'Reinforcement Learning'
      ],
      modules: [
        'Module 1: Intro to AI & ML - Basics of AI, ML, and their applications.',
        'Module 2: Supervised Learning - Learn regression, classification, and evaluation.',
        'Module 3: Unsupervised Learning - Explore clustering and dimensionality reduction.',
        'Module 4: Deep Learning - Dive into neural networks and activation functions.',
        'Module 5: NLP - Introduction to text processing and sentiment analysis.',
        'Module 6: Model Evaluation - Learn model metrics and hyperparameter tuning.',
        'Module 7: Reinforcement Learning - Understand reinforcement learning and Q-learning.',
        'Module 8: AI in Computer Vision - Learn about image classification and object detection.',
        'Module 9: AI Ethics - Explore AI fairness, transparency, and biases.',
        'Module 10: Model Deployment - Deploy ML models using platforms like Flask.',
        'Module 11: Advanced AI Topics - Study generative models and transfer learning.',
        'Module 12: Capstone Project - Build and deploy a machine learning solution.'
      ],
      videos: [
        {
            title: 'Introduction to Artificial Intelligence (AI)',
            url: 'https://www.youtube.com/watch?v=2ePf9rue1Ao',
            description: 'This video provides a concise introduction to Artificial Intelligence, explaining its basic concepts, applications, and potential impact on industries.'
        },
        {
            title: 'Supervised Learning Algorithms Explained',
            url: 'https://youtu.be/LKlOH8OLLcw?si=1BP5mAN_UOrheY-K',
            description: 'Learn about supervised learning techniques like linear regression, decision trees, and their use in classification and regression tasks.'
        },
        {
            title: 'Unsupervised Learning: Clustering and Dimensionality Reduction',
            url: 'https://youtu.be/MWijqCCuexU?si=jeoVWfqUKTZm43xP',
            description: 'This video explains unsupervised learning algorithms such as k-means clustering and PCA for analyzing and reducing dimensionality in datasets.'
        },
        {
            title: 'Introduction to Neural Networks and Deep Learning',
            url: 'https://www.youtube.com/watch?v=aircAruvnKk',
            description: 'Understand the core concepts of deep learning and neural networks, and how they are applied in tasks like image recognition and NLP.'
        },
        {
            title: 'Natural Language Processing with Python',
            url: 'https://youtu.be/0MN3jxVCudk?si=UuIvmvmqWen5-hei',
            description: 'Explore how to use Python for processing and analyzing textual data in Natural Language Processing (NLP) tasks like sentiment analysis and chatbots.'
        },
    ],
        
      showDetails: false,
      showEnroll: false,
      showSuccess: false
    },
    {
      id:6,
      title: 'Cybersecurity',
      image: 'https://senlainc.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0-2560%D1%851600.jpg.webp',
      startDate: '2024-06-01',
      endDate: '2024-10-01',
      availability: 'Available',
      duration: '4 months',
      author: 'Emma Wilson',
      pdfPath: '/images/cybersecurity.pdf',
      description: 'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks aimed at accessing, changing, or destroying sensitive information.',
      topics: [
        'Introduction to Cybersecurity',
        'Network Security and Firewalls',
        'Cryptography and Encryption',
        'Cyber Threats and Mitigation Strategies',
        'Incident Response and Risk Management'
      ],

      modules: [
        'Module 1: Cyber Security Basics - Introduction to cyber security and its importance.',
        'Module 2: Network Security - Learn about securing networks and protocols.',
        'Module 3: Cryptography - Basics of encryption and data protection.',
        'Module 4: Ethical Hacking - Introduction to penetration testing and ethical hacking.',
        'Module 5: Security Policies & Risk Management - Learn risk assessment and security policies.',
        'Module 6: Malware & Threats - Explore types of malware and defense strategies.',
        'Module 7: Cloud Security - Understand vulnerabilities and security in cloud systems.',
        'Module 8: Web Application Security - Protect web applications from security threats.',
        'Module 9: Cyber Forensics - Learn digital forensics techniques for cybercrime investigation.',
        'Module 10: Incident Response & Recovery - How to respond to and recover from cyber attacks.',
        'Module 11: Compliance & Legal Issues - Understand legal aspects of cyber security.',
        'Module 12: Capstone Project - Implement security measures in a real-world project.'
    ],
    videos: [
      {
          title: 'Introduction to Cyber Security',
          url: 'https://youtu.be/ULGILG-ZhO0?si=BnxBO5iMBHMPfnuk',
          description: 'A comprehensive introduction to cyber security and why it matters in today’s digital world.'
      },
      {
          title: 'Network Security Fundamentals',
          url: 'https://youtu.be/lYvijnPI1Rg?si=BArWmjvUo0UQReAx',
          description: 'Learn the basics of network security, including common protocols and defense mechanisms.'
      },
      {
          title: 'Cryptography Explained',
          url: 'https://youtu.be/6_Cxj5WKpIw?si=TotqmWxhhnk5lLl1',
          description: 'Understand the principles of cryptography, encryption, and how it secures data communications.'
      },
      {
          title: 'Ethical Hacking for Beginners',
          url: 'https://youtu.be/cKEf8H9cQGM?si=qoYpt15n66N-fRZJ',
          description: 'A beginner’s guide to ethical hacking, demonstrating penetration testing tools and techniques.'
      },
      {
          title: 'How to Prevent Malware Attacks',
          url: 'https://youtu.be/eizn9TC68E8?si=Y8EHjR_lo8gw5Qs0',
          description: 'Learn how to prevent malware infections and protect systems from various cyber threats.'
      },
  ],  
    
      showDetails: false,
      showEnroll: false,
      showSuccess: false
    },
    {
      id:7,
      title: 'Blockchain Payments',
      image: 'https://digitalasset.intuit.com/content/dam/intuit/sbseg/en_us/Blog/Photography/Stock/blockchain-payments-faster-secure-us-en.png',
      startDate: '2024-01-01',
      endDate: '2024-05-01',
      availability: 'Available',
      duration: '4 months',
      author: 'John Doe',
      pdfPath: '/images/Blockchain.pdf',
      description: 'Blockchain Payments focuses on utilizing blockchain technology for faster, more secure, and transparent payment systems, reducing fraud and transaction times.',
      topics: [
        'Introduction to Blockchain Technology',
        'Blockchain Payment Systems and Models',
        'Smart Contracts and Blockchain Integration',
        'Blockchain Security Features',
        'Future of Blockchain in Financial Transactions'
      ],
      modules: [
        'Module 1: Introduction to Blockchain - Learn the basics and how blockchain works.',
        'Module 2: Cryptocurrency Basics - Understand cryptocurrencies and their role in payments.',
        'Module 3: Smart Contracts - Learn how smart contracts enable secure and automated transactions.',
        'Module 4: Blockchain in Payments - Explore blockchain applications in payment systems.',
        'Module 5: Wallets & Transactions - Understand digital wallets and how to process transactions.',
        'Module 6: Security in Blockchain - Learn about blockchain security and preventing fraud.',
        'Module 7: Decentralized Finance (DeFi) - Introduction to DeFi and its role in payments.',
        'Module 8: Regulations & Compliance - Understand legal aspects of blockchain payments.',
        'Module 9: Blockchain Scalability - Learn solutions to scalability challenges in payments.',
        'Module 10: Real-World Applications - Explore real-world use cases of blockchain payments.',
        'Module 11: Blockchain & Banking - How blockchain is transforming traditional banking.',
        'Module 12: Capstone Project - Build a blockchain-based payment solution.'
    ],
    videos: [
      {
          title: 'What is Blockchain?',
          url: 'https://www.youtube.com/watch?v=SSo_EIwHSd4',
          description: 'A beginner-friendly explanation of blockchain technology, its components, and how it works.'
      },
      {
          title: 'How Cryptocurrency Works',
          url: 'https://youtu.be/0B3sccDYwuI?si=15CqruMaHjv-Msxi',
          description: 'An overview of how cryptocurrencies operate, including mining, wallets, and transactions.'
      },
      {
          title: 'Smart Contracts Explained',
          url: 'https://youtu.be/pWGLtjG-F5c?si=fyK73InGQvoLD-YO',
          description: 'Learn how smart contracts work and their role in enabling secure and automated transactions.'
      },
      {
          title: 'Blockchain in Payment Systems',
          url: 'https://youtu.be/3eDGsJDpJJM?si=RInvRayC1rpt5j0W',
          description: 'Explore how blockchain is revolutionizing payment systems and enabling faster, secure transactions.'
      },
      {
          title: 'DeFi: The Future of Finance',
          url: 'https://youtu.be/mg7NTX_3_2o?si=CtHcmeJXi0CYnfVL',
          description: 'Understand Decentralized Finance (DeFi) and its applications in blockchain-based payments.'
      }
  ],
  
    
      showDetails: false,
      showEnroll: false,
      showSuccess: false
    },
    {
      id:8,
      title: 'UI/UX Design',
      image: 'https://img-c.udemycdn.com/course/750x422/531148_b0a2_4.jpg',
      startDate: '2024-02-01',
      endDate: '2024-06-01',
      availability: 'Available',
      duration: '4 months',
      author: 'Jane Smith',
      pdfPath: '/images/UiUx.pdf',
      description: 'UI/UX Design focuses on creating seamless user experiences through the design of interactive interfaces. This course covers wireframing, prototyping, and design principles to help build intuitive digital products.',
      topics: [
        'Introduction to UI/UX Design',
        'User Research and Persona Creation',
        'Wireframing and Prototyping Tools',
        'Design Thinking and User-Centered Design',
        'Usability Testing and Feedback Integration'
      ],
      modules: [
        'Module 1: Introduction to UI/UX - Learn the basics of UI/UX design.',
        'Module 2: User Research - Understand user needs and create personas.',
        'Module 3: Wireframing Basics - Create low-fidelity wireframes for design planning.',
        'Module 4: Prototyping Techniques - Build interactive prototypes for testing.',
        'Module 5: Visual Design Principles - Learn color theory, typography, and layout design.',
        'Module 6: Usability Testing - Test designs for effectiveness and improve usability.',
        'Module 7: Tools for UI/UX - Explore popular design tools like Figma and Adobe XD.',
        'Module 8: Accessibility in Design - Create inclusive designs for all users.',
        'Module 9: Interaction Design - Learn about animations and user interactions.',
        'Module 10: Mobile-First Design - Design for mobile-first experiences.',
        'Module 11: Responsive Design - Make layouts adaptable for various screen sizes.',
        'Module 12: Final Project - Develop a complete UI/UX design workflow.'
    ],
    videos: [
      {
          title: 'What is UI/UX Design?',
          url: 'https://youtu.be/c9Wg6Cb_YlU?si=JtHVwlds4tqeNU5M',
          description: 'Learn the difference between UI and UX design and how they work together. This video provides a beginner-friendly overview of the design process. Understand the importance of creating user-centric designs.'
      },
      {
          title: 'How to Conduct User Research',
          url: 'https://youtu.be/zGCRhd3r4fE?si=GzAwgCrwNNFnq_tM',
          description: 'Discover techniques for conducting effective user research and creating personas. This video explains how to gather user insights for better designs. Learn the foundation of user-centered design practices.'
      },
      {
          title: 'Wireframing for Beginners',
          url: 'https://youtu.be/qpH7-KFWZRI?si=PlXodpf99zPZWuwT',
          description: 'A step-by-step guide to creating wireframes to plan your designs. Understand the difference between low and high-fidelity wireframes. Learn how wireframes simplify the design process.'
      },
      {
          title: 'Prototyping with Figma',
          url: 'https://youtu.be/-sAAa-CCOcg?si=U6-9316h-5fRcBwL',
          description: 'Learn how to create interactive prototypes using Figma. This tutorial covers key features like linking screens and adding transitions. Build prototypes to test design ideas quickly and effectively.'
      },
      {
          title: 'Design Principles Every Designer Should Know',
          url: 'https://youtu.be/9EPTM91TBDU?si=YYmU7a_WV3tMf0at',
          description: 'Master essential design principles like alignment, contrast, and balance. Understand how these principles enhance user experience and visual appeal. Gain insights into creating aesthetically pleasing designs.'
      }
  ],
      showDetails: false,
      showEnroll: false,
      showSuccess: false
    },
    {
      id:9,
      title: 'DevOps Engineering',
      image: 'https://www.skillreactor.io/blog/wp-content/uploads/2024/03/DevOps-Engineer.webp',
      startDate: '2024-03-01',
      endDate: '2024-07-01',
      availability: 'Available',
      duration: '4 months',
      author: 'Alice Johnson',
      pdfPath: '/images/Devops.pdf',
      description: 'DevOps Engineering involves automating and optimizing the processes of software development and IT operations. This course covers continuous integration, continuous delivery, and the tools required to create a DevOps pipeline.',
      topics: [
        'Introduction to DevOps and its Principles',
        'Continuous Integration and Continuous Deployment (CI/CD)',
        'Infrastructure as Code (IaC)',
        'Monitoring and Logging in DevOps',
        'Cloud Platforms and Automation Tools'
      ],
      modules: [
        'Module 1: Introduction to DevOps - Learn the fundamentals of DevOps culture.',
        'Module 2: Version Control Systems - Master Git and repository management.',
        'Module 3: Continuous Integration (CI) - Automate code integration using CI tools.',
        'Module 4: Continuous Deployment (CD) - Deploy applications seamlessly with CD pipelines.',
        'Module 5: Containerization Basics - Learn Docker for packaging applications.',
        'Module 6: Orchestration with Kubernetes - Manage containers at scale with Kubernetes.',
        'Module 7: Infrastructure as Code (IaC) - Automate infrastructure using tools like Terraform.',
        'Module 8: Monitoring & Logging - Track system performance with monitoring tools.',
        'Module 9: Security in DevOps - Implement DevSecOps practices to secure pipelines.',
        'Module 10: Cloud Integration - Use AWS, Azure, or GCP for DevOps workflows.',
        'Module 11: DevOps Tools Overview - Explore tools like Jenkins, Ansible, and GitLab.',
        'Module 12: Final Project - Build a CI/CD pipeline for a complete application.'
    ],
    videos: [
      {
          title: 'What is DevOps?',
          url: 'https://www.youtube.com/watch?v=0yWAtQ6wYNM',
          description: 'An introductory video explaining the core principles of DevOps. Learn how collaboration between development and operations enhances delivery speed. Understand the importance of automating workflows in modern development.'
      },
      {
          title: 'Git for DevOps Engineers',
          url: 'https://www.youtube.com/watch?v=USjZcfj8yxE',
          description: 'Master Git basics, branching, and repository management for DevOps. This video provides a hands-on guide to version control systems. Learn to collaborate effectively using Git in a team environment.'
      },
      {
          title: 'Introduction to Continuous Integration',
          url: 'https://youtu.be/1er2cjUq1UI?si=lfIxiX4yHI0wiG4-',
          description: 'Discover the importance of CI in automating code integration. Learn how tools like Jenkins streamline testing and merging processes. This video is perfect for building efficient development workflows.'
      },
      {
          title: 'Docker Basics for DevOps',
          url: 'https://www.youtube.com/watch?v=fqMOX6JJhGo',
          description: 'Learn the fundamentals of Docker for containerizing applications. This tutorial covers creating, running, and managing containers. Understand how Docker simplifies software delivery across environments.'
      },
      {
          title: 'Kubernetes for Beginners',
          url: 'https://www.youtube.com/watch?v=X48VuDVv0do',
          description: 'A comprehensive guide to Kubernetes for managing containers at scale. Learn about pods, deployments, and services in Kubernetes. This video helps you understand container orchestration basics.'
      }
  ],  
    
      showDetails: false,
      showEnroll: false,
      showSuccess: false
    },
    {
      id:10,
      title: 'Game Development',
      image: 'https://www.appstudio.ca/blog/wp-content/uploads/2021/09/Cost-of-Game-Development.jpeg',
      startDate: '2024-04-01',
      endDate: '2024-08-01',
      availability: 'Available',
      duration: '4 months',
      author: 'David Brown',
      pdfPath: '/images/GameDev.pdf',
      description: 'Game Development focuses on the process of creating video games. This course covers the fundamentals of game mechanics, design, and development using various game engines.',
      topics: [
        'Introduction to Game Development and Game Engines',
        'Game Design Principles and Mechanics',
        '2D and 3D Game Programming',
        'Game Testing and Debugging',
        'Building and Deploying Games'
      ],
      modules: [
        'Module 1: Introduction to Game Development - Learn the basics of game design.',
        'Module 2: Game Engines Overview - Explore tools like Unity and Unreal Engine.',
        'Module 3: 2D Game Development - Build simple 2D games with basic mechanics.',
        'Module 4: 3D Game Development - Create immersive 3D games with realistic graphics.',
        'Module 5: Scripting Basics - Learn programming for game interactions and logic.',
        'Module 6: Game Physics - Implement motion, collisions, and realistic physics.',
        'Module 7: AI in Games - Add intelligent behaviors to game characters.',
        'Module 8: Sound Design - Integrate sound effects and background music.',
        'Module 9: Multiplayer Games - Create games with multiplayer functionality.',
        'Module 10: Game Optimization - Enhance performance for smooth gameplay.',
        'Module 11: Publishing Games - Publish games on platforms like Steam or Play Store.',
        'Module 12: Final Project - Develop a complete game from scratch.'
    ],
    videos: [
      {
          title: 'Getting Started with Game Development',
          url: 'https://youtu.be/z06QR-tz1_o?si=XkZr1cebk4JgMLaT',
          description: 'Learn the fundamentals of game development, including design principles. This video covers the steps to start building your first game. Get insights into the game development workflow.'
      },
      {
          title: 'Introduction to Unity Game Engine',
          url: 'https://youtu.be/XtQMytORBmM?si=roNYUKCyvDeio3oz',
          description: 'A beginner-friendly guide to using Unity for game development. Learn about the Unity interface, creating scenes, and basic game mechanics. Perfect for those new to game engines.'
      },
      {
          title: 'Creating 2D Games in Unity',
          url: 'https://www.youtube.com/watch?v=on9nwbZngyw',
          description: 'Master the basics of 2D game development with Unity. Learn to design levels, add sprites, and script interactions. This video provides hands-on guidance for building engaging 2D games.'
      },
      {
          title: 'Getting Started with Unreal Engine',
          url: 'https://youtu.be/ptCN4cysDig?si=CP-nFb7lwUEjs3YC',
          description: 'Explore Unreal Engine, one of the most powerful game engines. Learn how to create 3D scenes, add assets, and implement game mechanics. This tutorial is ideal for aspiring 3D game developers.'
      },
      {
          title: 'AI in Games: An Introduction',
          url: 'https://youtu.be/i_McNBDP9Qs?si=KK7ioQUQCWD1zCBT',
          description: 'Learn the basics of implementing AI in games for smarter gameplay. This video explains pathfinding, decision-making, and character behaviors. Enhance your games with dynamic and challenging AI.'
      }
  ],
  
      showDetails: false,
      showEnroll: false,
      showSuccess: false
    },
    {
      id:11,
      title: 'Figma',
      image: 'https://media.licdn.com/dms/image/C4D12AQHTWmXtImF2sw/article-cover_image-shrink_720_1280/0/1578556490672?e=2147483647&v=beta&t=GUbMSYJ4ekAJkRsZoFYWOjV7v47x0wUFZsHTFRrg5pM',
      startDate: '2024-05-01',
      endDate: '2024-09-01',
      availability: 'Available',
      duration: '4 months',
      author: 'Dr. Alan Turing',
      pdfPath: '/images/Figma.pdf',
      description: 'Figma is a powerful tool for UI/UX design and prototyping. This course teaches how to create responsive, interactive prototypes, and collaborate with teams in real time.',
      topics: [
        'Introduction to Figma and Interface Design',
        'Creating Prototypes and Wireframes',
        'Collaborative Design and Feedback in Figma',
        'Design Systems and Component Libraries',
        'Responsive Design and Interactive Elements'
      ],
      modules: [
        'Module 1: Introduction to Figma - Learn the basics of the Figma interface.',
        'Module 2: Designing Interfaces - Create layouts and prototypes efficiently.',
        'Module 3: Figma Tools - Explore tools for shapes, text, and alignment.',
        'Module 4: Collaborative Design - Work on projects with real-time collaboration.',
        'Module 5: Prototyping in Figma - Build interactive prototypes and test flows.',
        'Module 6: Design Systems - Create and manage reusable components.',
        'Module 7: Advanced Prototyping - Add animations and advanced interactions.',
        'Module 8: Exporting Designs - Export assets and designs for development.',
        'Module 9: Plugins & Extensions - Enhance productivity with Figma plugins.',
        'Module 10: Final Project - Design a complete UI prototype using Figma.'
    ],
    videos: [
      {
          title: 'Getting Started with Figma',
          url: 'https://youtu.be/1pW_sk-2y40?si=7K9Qw7pAUDAUBvpK',
          description: 'A beginner-friendly introduction to Figma’s interface and features. Learn how to create your first design project in Figma. This video is perfect for those new to design tools.'
      },
      {
          title: 'Mastering Figma Tools',
          url: 'hhttps://youtu.be/keoL0B7NaEs?si=WbnWPWvUHKa_oMqb',
          description: 'Explore essential Figma tools like shapes, frames, and text editing. Learn techniques for creating professional designs and layouts. Gain hands-on experience with detailed examples.'
      },
      {
          title: 'Prototyping in Figma',
          url: 'https://youtu.be/L22lDu3QX2c?si=KVBfz9hyKmEJ87uT',
          description: 'Learn how to create interactive prototypes for user testing. This video covers transitions, animations, and clickable elements. Perfect for simulating real user experiences.'
      },
      {
          title: 'Figma for Team Collaboration',
          url: 'https://youtu.be/KRcoSChdmZE?si=lO3oan43E8sNbUsF',
          description: 'Discover how to collaborate with team members in Figma. This tutorial highlights real-time editing, comments, and sharing designs. Improve teamwork and streamline the design process.'
      },
      {
          title: 'Design Systems in Figma',
          url: 'https://youtu.be/YLo6g58vUm0?si=vtmNsFNhb_DalIWw',
          description: 'Create design systems with reusable components and styles. Learn how to maintain consistency across your projects in Figma. This video is ideal for scaling your design workflow.'
      }
  ],
      showDetails: false,
      showEnroll: false,
      showSuccess: false
    },
    {
      id:12,
      title: 'Artificial Intelligence and Data Science (AIDS)',
      image: 'https://assets.thehansindia.com/h-upload/2022/04/23/1600x960_1288605-artificial-intelligence.webp',
      startDate: '2024-06-01',
      endDate: '2024-10-01',
      availability: 'Available',
      duration: '4 months',
      author: 'Dr. Ada Lovelace',
      pdfPath: '/images/AIDS.pdf',
      description: 'This course provides an in-depth understanding of Artificial Intelligence and Data Science, covering foundational principles, machine learning algorithms, data analysis, and AI applications.',
      topics: [
        'Introduction to Artificial Intelligence and Data Science',
        'Machine Learning Algorithms and Techniques',
        'Data Preprocessing and Visualization',
        'Deep Learning and Neural Networks',
        'AI Applications in Real-World Scenarios'
      ],
      modules: [
        'Module 1: Introduction to AI and Data Science - Learn the fundamentals of AI and data science.',
        'Module 2: Data Preprocessing - Clean and prepare data for analysis.',
        'Module 3: Machine Learning Basics - Understand core ML algorithms and their applications.',
        'Module 4: Deep Learning Introduction - Explore neural networks and advanced techniques.',
        'Module 5: Natural Language Processing - Analyze and process textual data.',
        'Module 6: Data Visualization - Create insightful visualizations with tools like Matplotlib.',
        'Module 7: AI in Real-world Applications - Learn how AI is used in industries.',
        'Module 8: Model Deployment - Deploy AI models for production environments.',
        'Module 9: Ethical AI - Explore challenges and solutions in responsible AI usage.',
        'Module 10: Final Project - Develop and present a complete AI-driven data science solution.'
    ],
    videos: [
      {
          title: 'AI and Data Science: An Overview',
          url: 'https://youtu.be/OmtkvAp2OL0?si=1NP8HyeGekKgnAIV',
          description: 'An introduction to the basics of AI and data science concepts. Learn about the significance of data in driving AI applications. Perfect for beginners starting in the field.'
      },
      {
          title: 'Data Preprocessing Techniques',
          url: 'https://youtu.be/NBm4etNMT5k?si=j6hq_0XwAzkf87it',
          description: 'Learn how to clean and preprocess raw data for analysis. This video explains techniques for handling missing values and feature scaling. Gain practical insights into improving data quality.'
      },
      {
          title: 'Machine Learning for Beginners',
          url: 'https://www.youtube.com/watch?v=Gv9_4yMHFhI',
          description: 'Explore the fundamentals of machine learning algorithms. Learn how to implement regression, classification, and clustering models. This video is ideal for understanding supervised and unsupervised learning.'
      },
      {
          title: 'Introduction to Deep Learning',
          url: 'https://www.youtube.com/watch?v=aircAruvnKk',
          description: 'Dive into neural networks and deep learning architectures. Learn how to build models for image recognition and other tasks. This tutorial covers essential concepts and hands-on coding.'
      },
      {
          title: 'Deploying AI Models',
          url: 'https://www.youtube.com/watch?v=ZOIkOnW640A',
          description: 'Learn how to deploy AI models into production environments. This video explains APIs, cloud deployment, and model monitoring. Perfect for transitioning from development to real-world applications.'
      }
  ],
      showDetails: false,
      showEnroll: false,
      showSuccess: false
      
    }
  ];
  progress: number[] = [0, 0, 0, 0, 0];
  selectedCourse: any = null;
  searchForm: FormGroup;
  searchFormSubscription: Subscription | undefined;
  constructor(private router: Router, private service: ApiService, private fb: FormBuilder) { 
    this.courseList = this.courses;
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  ngOnInit(){
    this.service.getCourses().subscribe((res:any) =>{
      this.courseList = res;
    },err =>{
      console.log("Error while getting course");
    });

    this.searchFormSubscription = this.searchForm.get('search')?.valueChanges.subscribe(searchValue =>{
      console.log(searchValue);
      if(searchValue && searchValue!=''){
        this.courses =this.courseList?.filter(data => 
          data?.title?.toLowerCase()?.includes(searchValue?.toLowerCase())
        );
      } else{
        this.courses = this.courseList;
      }
    })
  }

  updateProgress(videoIndex: number): void {
    this.progress[videoIndex] = 100;
  }

  getWeeks(course: any) {
    const weeks = [];
    let weekCount = 12;

    for (let i = 1; i <= weekCount; i++) {
      weeks.push({
        weekNumber: i,
        module: `Module ${i}`,
        learningHours: 3,
        assignments: `Assignment ${i}`
      });
    }

    return weeks;
  }

  showOverlay(course: any) {
    this.selectedCourse = course;
    this.selectedCourse.showOverlay = true;
  }

  closeOverlay() {
    if (this.selectedCourse) {
      this.selectedCourse.showOverlay = false;
      this.selectedCourse = null;
    }
  }

  showDetails(course: any) {
    course.showDetails = true;
  }

  hideDetails(course: any) {
    course.showDetails = false;
  }

  showEnroll(course: any) {
    course.showEnroll = true;
  }
  showCourseView(course: any): void {
    this.service.updateSelectedCourse(course); // Pass full course data
    // Navigate to the course-view component
  }
  

  enrollCourse(course: any) {
    course.showSuccess = true;
    course.showEnroll = false;
    this.showOverlay(course);  // Show overlay after successful enrollment
    console.log(course)
    this.service.enrolled(course.id,course.email).subscribe(res=>{
      console.log("Enrolled successfully");
    }, err => {
      console.log(" Error occurred while enroll process");
    });
  }  

  goToCourse() {
    this.service.updateSelectedCourse(this.selectedCourse);
    this.router.navigate(['/course-view']);
  }
 
  navigateToFeedback() {
    this.router.navigate(['/course-feedback']);
  }

  ngOnDestroy(){
    if(this.searchFormSubscription){
      console.log("Subscription unsubscribed");
      this.searchFormSubscription.unsubscribe();
    }
    console.log("Subscription unsubscribed");

  }

  }
