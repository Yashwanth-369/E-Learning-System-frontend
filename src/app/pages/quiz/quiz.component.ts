import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  courseTitle: string | null = '';
  questions: { question: string; options: string[]; correct: string }[] = [];
  answers: string[] = [];
  score: number = 0;
  showResult: boolean = false;
  passed: boolean = false;

  allQuestions: {
    'Web Development': { question: string; options: string[]; correct: string }[];
    'Data Science': { question: string; options: string[]; correct: string }[];
    'Mobile App Development': { question: string; options: string[]; correct: string }[];
    'Cloud Computing': { question: string; options: string[]; correct: string }[];
    'AI and Machine Learning': { question: string; options: string[]; correct: string }[];
    'Cyber Security': { question: string; options: string[]; correct: string }[];
    'Blockchain Payments': { question: string; options: string[]; correct: string }[];
    'UI / UX Design': { question: string; options: string[]; correct: string }[];
    'DevOps Engineering': { question: string; options: string[]; correct: string }[];
    'Game Development': { question: string; options: string[]; correct: string }[];
    'Figma': { question: string; options: string[]; correct: string }[];
    'Artificial Intelligence and Data Science': { question: string; options: string[]; correct: string }[];
  } = {
    'Web Development': [
  {
    question: 'Which HTML5 element is used to define navigation links?',
    options: ['<nav>', '<section>', '<article>'],
    correct: '<nav>'
  },
  {
    question: 'What is the purpose of the "defer" attribute in a script tag?',
    options: [
      'To delay script execution until the page is fully loaded',
      'To execute the script immediately without delay',
      'To stop the script from executing entirely'
    ],
    correct: 'To delay script execution until the page is fully loaded'
  },
  {
    question: 'What CSS property is used to create space between an element’s border and its content?',
    options: ['margin', 'padding', 'border-spacing'],
    correct: 'padding'
  },
  {
    question: 'Which of the following HTTP methods is used to update data on the server?',
    options: ['GET', 'POST', 'PUT'],
    correct: 'PUT'
  },
  {
    question: 'What is the output of the following CSS: `display: flex; justify-content: space-between;`?',
    options: [
      'Align items in the center of the container',
      'Space items evenly with equal gaps between them',
      'Place items at the start and end with space between them'
    ],
    correct: 'Place items at the start and end with space between them'
  },
  {
    question: 'Which JavaScript method is used to remove the last element of an array?',
    options: ['pop()', 'shift()', 'splice()'],
    correct: 'pop()'
  },
  {
    question: 'In responsive web design, which CSS unit is relative to the viewport size?',
    options: ['em', 'px', 'vh'],
    correct: 'vh'
  },
  {
    question: 'What does the "Content-Security-Policy" HTTP header do?',
    options: [
      'Specifies caching rules for a page',
      'Prevents unauthorized access to server data',
      'Prevents certain types of security vulnerabilities by restricting resources loaded on the page'
    ],
    correct: 'Prevents certain types of security vulnerabilities by restricting resources loaded on the page'
  },
  {
    question: 'What is the purpose of the "z-index" property in CSS?',
    options: [
      'To define the stacking order of elements',
      'To set the zoom level of the element',
      'To change the position of the element in the DOM'
    ],
    correct: 'To define the stacking order of elements'
  },
  {
    question: 'Which JavaScript method is used to make an HTTP request from a client-side application?',
    options: ['fetch()', 'request()', 'ajax()'],
    correct: 'fetch()'
  }
],
'Data Science': [
  {
    question: 'Which Python library is most commonly used for data manipulation and analysis?',
    options: ['NumPy', 'Pandas', 'Matplotlib'],
    correct: 'Pandas'
  },
  {
    question: 'What is the purpose of a confusion matrix in machine learning?',
    options: [
      'To calculate accuracy of predictions',
      'To visualize the performance of a classification model',
      'To display the distribution of features'
    ],
    correct: 'To visualize the performance of a classification model'
  },
  {
    question: 'Which type of plot is used to show the distribution of a dataset?',
    options: ['Scatter plot', 'Histogram', 'Line chart'],
    correct: 'Histogram'
  },
  {
    question: 'What is the output of the K-Means clustering algorithm?',
    options: [
      'Classification labels for each data point',
      'A set of centroids representing cluster centers',
      'A decision boundary'
    ],
    correct: 'A set of centroids representing cluster centers'
  },
  {
    question: 'Which of the following is an unsupervised learning algorithm?',
    options: ['Linear Regression', 'Decision Trees', 'Principal Component Analysis (PCA)'],
    correct: 'Principal Component Analysis (PCA)'
  },
  {
    question: 'What is the primary metric used to evaluate the performance of a regression model?',
    options: ['Accuracy', 'Mean Squared Error (MSE)', 'Confusion Matrix'],
    correct: 'Mean Squared Error (MSE)'
  },
  {
    question: 'Which Python library is commonly used for creating machine learning models?',
    options: ['TensorFlow', 'Flask', 'Django'],
    correct: 'TensorFlow'
  },
  {
    question: 'What does "overfitting" mean in the context of machine learning?',
    options: [
      'The model performs poorly on training data',
      'The model performs well on training data but poorly on test data',
      'The model performs equally well on training and test data'
    ],
    correct: 'The model performs well on training data but poorly on test data'
  },
  {
    question: 'Which data visualization tool is used to display the relationship between two variables?',
    options: ['Box plot', 'Bar chart', 'Scatter plot'],
    correct: 'Scatter plot'
  },
  {
    question: 'What does "one-hot encoding" achieve in data preprocessing?',
    options: [
      'It normalizes continuous features',
      'It converts categorical variables into binary vectors',
      'It reduces dimensionality'
    ],
    correct: 'It converts categorical variables into binary vectors'
  }
],

'Mobile App Development': [
  {
    question: 'Which architecture pattern is widely used in Android development?',
    options: ['MVC', 'MVVM', 'MVP'],
    correct: 'MVVM'
  },
  {
    question: 'Which Android component is used to handle background tasks?',
    options: ['Activity', 'Service', 'Broadcast Receiver'],
    correct: 'Service'
  },
  {
    question: 'What is the role of the AndroidManifest.xml file?',
    options: [
      'To manage database connections',
      'To define the structure and metadata of the Android application',
      'To store UI elements'
    ],
    correct: 'To define the structure and metadata of the Android application'
  },
  {
    question: 'Which programming language is primarily used for iOS development?',
    options: ['Java', 'Kotlin', 'Swift'],
    correct: 'Swift'
  },
  {
    question: 'What is the purpose of the Gradle build tool in Android development?',
    options: [
      'To manage app navigation',
      'To automate building, testing, and deployment',
      'To create UI components'
    ],
    correct: 'To automate building, testing, and deployment'
  },
  {
    question: 'Which layout type in Android arranges its children in a single row or column?',
    options: ['RelativeLayout', 'ConstraintLayout', 'LinearLayout'],
    correct: 'LinearLayout'
  },
  {
    question: 'What is the primary purpose of the ViewModel in MVVM architecture?',
    options: [
      'To manage the app database',
      'To act as a bridge between the UI and the data layer',
      'To handle user authentication'
    ],
    correct: 'To act as a bridge between the UI and the data layer'
  },
  {
    question: 'Which tool is used to debug and inspect iOS applications?',
    options: ['Xcode Instruments', 'Android Debug Bridge (ADB)', 'Firebase'],
    correct: 'Xcode Instruments'
  },
  {
    question: 'What is Flutter, and what is it used for?',
    options: [
      'A database tool for mobile apps',
      'A framework for building cross-platform mobile applications',
      'An analytics tool for app performance'
    ],
    correct: 'A framework for building cross-platform mobile applications'
  },
  {
    question: 'What is the purpose of the `onCreate` method in an Android Activity?',
    options: [
      'To handle user interactions',
      'To initialize the activity and set up its UI',
      'To manage app configurations'
    ],
    correct: 'To initialize the activity and set up its UI'
  }
],
'Cloud Computing': [
  {
    question: 'Which of the following is a key characteristic of cloud computing?',
    options: ['On-demand self-service', 'Manual provisioning', 'Limited scalability'],
    correct: 'On-demand self-service'
  },
  {
    question: 'What does the "IaaS" in cloud computing stand for?',
    options: ['Internet as a Service', 'Infrastructure as a Service', 'Integration as a Service'],
    correct: 'Infrastructure as a Service'
  },
  {
    question: 'Which cloud deployment model provides a mix of public and private cloud features?',
    options: ['Public Cloud', 'Private Cloud', 'Hybrid Cloud'],
    correct: 'Hybrid Cloud'
  },
  {
    question: 'What is the primary purpose of a Content Delivery Network (CDN) in cloud computing?',
    options: [
      'Increase security for cloud services',
      'Improve application performance by caching content closer to the user',
      'Provide backup and disaster recovery solutions'
    ],
    correct: 'Improve application performance by caching content closer to the user'
  },
  {
    question: 'Which service is NOT a common example of cloud storage?',
    options: ['AWS S3', 'Google Drive', 'MySQL Database'],
    correct: 'MySQL Database'
  },
  {
    question: 'What does the term "scalability" refer to in cloud computing?',
    options: [
      'The ability to recover data after a crash',
      'The ability to increase or decrease resources as needed',
      'The ability to secure resources from threats'
    ],
    correct: 'The ability to increase or decrease resources as needed'
  },
  {
    question: 'Which of the following is a cloud-native architecture principle?',
    options: ['Monolithic design', 'Microservices', 'Centralized database'],
    correct: 'Microservices'
  },
  {
    question: 'Which cloud service type focuses on providing tools and frameworks for developers?',
    options: ['IaaS', 'PaaS', 'SaaS'],
    correct: 'PaaS'
  },
  {
    question: 'What is the function of a load balancer in cloud environments?',
    options: [
      'Encrypt data in transit',
      'Distribute incoming traffic across multiple servers',
      'Monitor and log application usage'
    ],
    correct: 'Distribute incoming traffic across multiple servers'
  },
  {
    question: 'Which of the following is an example of a serverless computing platform?',
    options: ['AWS Lambda', 'Microsoft SQL Server', 'Google Kubernetes Engine'],
    correct: 'AWS Lambda'
  }
],
'AI and Machine Learning': [
  {
    question: 'Which algorithm is commonly used for supervised learning in machine learning?',
    options: ['K-Means Clustering', 'Decision Trees', 'DBSCAN'],
    correct: 'Decision Trees'
  },
  {
    question: 'What is the primary purpose of the activation function in a neural network?',
    options: ['To normalize input values', 'To introduce non-linearity into the model', 'To reduce overfitting'],
    correct: 'To introduce non-linearity into the model'
  },
  {
    question: 'What does the term "overfitting" refer to in machine learning?',
    options: [
      'When the model performs well on both training and test data',
      'When the model learns the training data too well and performs poorly on unseen data',
      'When the model is too simple to capture the underlying patterns in data'
    ],
    correct: 'When the model learns the training data too well and performs poorly on unseen data'
  },
  {
    question: 'Which of the following is a type of unsupervised learning?',
    options: ['Support Vector Machines', 'K-Means Clustering', 'Linear Regression'],
    correct: 'K-Means Clustering'
  },
  {
    question: 'In machine learning, which metric is commonly used to evaluate classification models?',
    options: ['Mean Squared Error', 'Accuracy', 'Root Mean Square Error'],
    correct: 'Accuracy'
  },
  {
    question: 'What is the purpose of a convolutional layer in a Convolutional Neural Network (CNN)?',
    options: [
      'To reduce the dimensionality of the input data',
      'To extract features like edges, textures, and shapes from images',
      'To make predictions based on learned features'
    ],
    correct: 'To extract features like edges, textures, and shapes from images'
  },
  {
    question: 'What is the primary difference between a classification and a regression problem?',
    options: [
      'Classification predicts continuous values, while regression predicts discrete categories',
      'Classification predicts discrete categories, while regression predicts continuous values',
      'Classification requires unsupervised learning, while regression requires supervised learning'
    ],
    correct: 'Classification predicts discrete categories, while regression predicts continuous values'
  },
  {
    question: 'Which technique is used to prevent overfitting in decision trees?',
    options: ['Pruning', 'Normalization', 'Dimensionality Reduction'],
    correct: 'Pruning'
  },
  {
    question: 'Which machine learning algorithm is known for being particularly effective in high-dimensional spaces?',
    options: ['Linear Regression', 'K-Nearest Neighbors', 'Support Vector Machines'],
    correct: 'Support Vector Machines'
  },
  {
    question: 'What does "gradient descent" aim to minimize in machine learning?',
    options: ['Training time', 'Loss function', 'Accuracy'],
    correct: 'Loss function'
  }
],
'Cyber Security': [
  {
    question: 'What is the primary purpose of a firewall in network security?',
    options: ['To encrypt data transmitted over the network', 'To monitor and filter incoming and outgoing network traffic', 'To store security logs'],
    correct: 'To monitor and filter incoming and outgoing network traffic'
  },
  {
    question: 'Which of the following is an example of a social engineering attack?',
    options: ['SQL Injection', 'Phishing', 'DDoS Attack'],
    correct: 'Phishing'
  },
  {
    question: 'What does the term "zero-day vulnerability" refer to?',
    options: ['A vulnerability that is patched on the same day it is discovered', 'A vulnerability in a system that is known but has not been patched yet', 'A vulnerability that does not affect any known systems'],
    correct: 'A vulnerability in a system that is known but has not been patched yet'
  },
  {
    question: 'Which of the following encryption algorithms is widely used for securing web traffic?',
    options: ['AES', 'SHA-256', 'RSA'],
    correct: 'AES'
  },
  {
    question: 'What is a DDoS (Distributed Denial of Service) attack?',
    options: [
      'A type of attack that injects malicious code into a website',
      'An attack that aims to overwhelm a server by sending an excessive amount of traffic',
      'An attack that steals sensitive data from a website'
    ],
    correct: 'An attack that aims to overwhelm a server by sending an excessive amount of traffic'
  },
  {
    question: 'What is the function of Multi-Factor Authentication (MFA) in securing user accounts?',
    options: ['It uses a password and a one-time code sent to a user’s phone', 'It encrypts passwords during transmission', 'It checks for unusual login times and locations'],
    correct: 'It uses a password and a one-time code sent to a user’s phone'
  },
  {
    question: 'Which of the following is a form of malware designed to replicate itself and spread to other systems?',
    options: ['Worm', 'Trojan Horse', 'Ransomware'],
    correct: 'Worm'
  },
  {
    question: 'What is the main difference between symmetric and asymmetric encryption?',
    options: [
      'Symmetric encryption uses two keys, while asymmetric encryption uses one key',
      'Symmetric encryption uses one key, while asymmetric encryption uses two keys',
      'Symmetric encryption is less secure than asymmetric encryption'
    ],
    correct: 'Symmetric encryption uses one key, while asymmetric encryption uses two keys'
  },
  {
    question: 'What is the purpose of a VPN (Virtual Private Network)?',
    options: [
      'To improve the speed of your internet connection',
      'To secure your internet traffic and mask your IP address',
      'To bypass firewalls and access restricted websites'
    ],
    correct: 'To secure your internet traffic and mask your IP address'
  },
  {
    question: 'Which of the following best describes the concept of "phishing"?',
    options: [
      'An attempt to trick users into revealing personal information through fraudulent emails or websites',
      'An attack that involves brute-force guessing of passwords',
      'A method of securing a website using an SSL certificate'
    ],
    correct: 'An attempt to trick users into revealing personal information through fraudulent emails or websites'
  }
],
'Blockchain Payments': [
  {
    question: 'What is the primary advantage of using blockchain technology in payments?',
    options: ['Lower transaction fees', 'Higher transaction speed', 'Decentralization and transparency'],
    correct: 'Decentralization and transparency'
  },
  {
    question: 'What does the term "cryptocurrency" refer to in the context of blockchain payments?',
    options: ['A digital asset stored in a physical wallet', 'A form of digital currency that uses encryption for security', 'A government-issued currency in digital form'],
    correct: 'A form of digital currency that uses encryption for security'
  },
  {
    question: 'Which of the following is the most well-known blockchain platform for cryptocurrency payments?',
    options: ['Ethereum', 'Ripple', 'Bitcoin'],
    correct: 'Bitcoin'
  },
  {
    question: 'What is a "smart contract" in blockchain technology?',
    options: [
      'A contract executed by a legal authority on the blockchain',
      'A self-executing contract with terms directly written into code',
      'A contract that is signed digitally using a blockchain wallet'
    ],
    correct: 'A self-executing contract with terms directly written into code'
  },
  {
    question: 'Which blockchain consensus mechanism is commonly used in cryptocurrency payment systems?',
    options: ['Proof of Work', 'Proof of Stake', 'Proof of Authority'],
    correct: 'Proof of Work'
  },
  {
    question: 'What is the purpose of a "public key" in blockchain payment systems?',
    options: ['To encrypt data before it is sent on the blockchain', 'To verify the identity of the sender and allow others to send funds', 'To monitor the blockchain for fraudulent activities'],
    correct: 'To verify the identity of the sender and allow others to send funds'
  },
  {
    question: 'What is the main challenge in adopting blockchain for mainstream payments?',
    options: [
      'Lack of scalability and slow transaction processing speed',
      'High transaction fees for small transactions',
      'Limited support for mobile wallets'
    ],
    correct: 'Lack of scalability and slow transaction processing speed'
  },
  {
    question: 'What is the function of "miners" in blockchain payment systems?',
    options: [
      'To store data on the blockchain',
      'To verify transactions and add them to the blockchain',
      'To create new cryptocurrencies on the blockchain'
    ],
    correct: 'To verify transactions and add them to the blockchain'
  },
  {
    question: 'Which of the following is NOT an example of a cryptocurrency used in blockchain payments?',
    options: ['Bitcoin', 'Ethereum', 'Dollars'],
    correct: 'Dollars'
  },
  {
    question: 'What is the significance of "decentralization" in blockchain payment systems?',
    options: [
      'It allows a single entity to control all transactions',
      'It ensures that no single entity has control over the payment network, making it more secure and transparent',
      'It reduces the need for encryption in the network'
    ],
    correct: 'It ensures that no single entity has control over the payment network, making it more secure and transparent'
  }
],
'UI / UX Design': [
  {
    question: 'What is the primary focus of UI (User Interface) design?',
    options: ['Functionality of the product', 'How the product looks and feels', 'User behavior analysis'],
    correct: 'How the product looks and feels'
  },
  {
    question: 'What is the primary goal of UX (User Experience) design?',
    options: ['To make the user interface visually appealing', 'To ensure the product is easy and enjoyable to use', 'To increase website traffic'],
    correct: 'To ensure the product is easy and enjoyable to use'
  },
  {
    question: 'Which of the following is NOT a key principle of UI design?',
    options: ['Consistency', 'Simplicity', 'Confusion'],
    correct: 'Confusion'
  },
  {
    question: 'What is wireframing in UI/UX design?',
    options: [
      'A visual representation of a product’s layout with basic design elements and content',
      'A high-fidelity design that includes animations and interactions',
      'A form of user testing involving detailed product prototypes'
    ],
    correct: 'A visual representation of a product’s layout with basic design elements and content'
  },
  {
    question: 'What does "responsive design" refer to in UI/UX?',
    options: ['A design that adjusts to different screen sizes and devices', 'A design focused on loading speed', 'A design that uses advanced animation techniques'],
    correct: 'A design that adjusts to different screen sizes and devices'
  },
  {
    question: 'What is "personas" in UX design?',
    options: [
      'A set of realistic characters that represent the ideal user of the product',
      'The identity of the user',
      'The tools used to create the user interface'
    ],
    correct: 'A set of realistic characters that represent the ideal user of the product'
  },
  {
    question: 'Which tool is commonly used for prototyping in UI/UX design?',
    options: ['Photoshop', 'Sketch', 'Word'],
    correct: 'Sketch'
  },
  {
    question: 'What does "affordance" refer to in UI/UX design?',
    options: [
      'The usability of a product', 
      'The visual cues that suggest how an object should be used', 
      'The branding of the product'
    ],
    correct: 'The visual cues that suggest how an object should be used'
  },
  {
    question: 'What is the difference between UI and UX design?',
    options: [
      'UI is about the design of individual features, and UX is about the overall experience of using the product',
      'UI focuses on user testing, and UX focuses on visual design',
      'UI is technical, while UX is aesthetic'
    ],
    correct: 'UI is about the design of individual features, and UX is about the overall experience of using the product'
  },
  {
    question: 'What does "usability testing" involve in UX design?',
    options: [
      'Testing the speed of the website',
      'Testing how easy and intuitive the product is for users',
      'Testing the aesthetic appeal of the interface'
    ],
    correct: 'Testing how easy and intuitive the product is for users'
  }
],
'DevOps Engineering': [
  {
    question: 'What is the primary goal of DevOps?',
    options: ['Faster software development and deployment', 'Maximizing software security', 'Focusing only on the user interface'],
    correct: 'Faster software development and deployment'
  },
  {
    question: 'Which of the following is a key principle of DevOps?',
    options: ['Collaboration between development and operations teams', 'Isolating teams to work independently', 'Minimizing the use of automation'],
    correct: 'Collaboration between development and operations teams'
  },
  {
    question: 'What does CI/CD stand for in DevOps?',
    options: ['Continuous Integration / Continuous Delivery', 'Continuous Infrastructure / Cloud Development', 'Critical Integration / Central Development'],
    correct: 'Continuous Integration / Continuous Delivery'
  },
  {
    question: 'Which tool is commonly used for continuous integration in DevOps?',
    options: ['Jenkins', 'Photoshop', 'Slack'],
    correct: 'Jenkins'
  },
  {
    question: 'What is Infrastructure as Code (IaC) in DevOps?',
    options: [
      'Managing and provisioning IT infrastructure through code rather than manual processes',
      'Writing code for developing applications only',
      'Automating code deployment to cloud environments'
    ],
    correct: 'Managing and provisioning IT infrastructure through code rather than manual processes'
  },
  {
    question: 'What is a "Microservice" architecture?',
    options: [
      'A traditional monolithic software architecture',
      'A software design pattern where applications are broken into smaller, loosely coupled services',
      'A methodology for building and deploying websites'
    ],
    correct: 'A software design pattern where applications are broken into smaller, loosely coupled services'
  },
  {
    question: 'Which of the following is a commonly used containerization tool in DevOps?',
    options: ['Docker', 'Postman', 'Jupyter'],
    correct: 'Docker'
  },
  {
    question: 'What does "automated testing" refer to in the context of DevOps?',
    options: [
      'Manually running test cases',
      'Running automated scripts to test software during integration',
      'Writing code without testing'
    ],
    correct: 'Running automated scripts to test software during integration'
  },
  {
    question: 'What is the purpose of "version control" in DevOps?',
    options: [
      'To manage changes to code and track versions of software',
      'To ensure that the software is bug-free',
      'To deploy software automatically'
    ],
    correct: 'To manage changes to code and track versions of software'
  },
  {
    question: 'Which of the following is a popular cloud service platform for DevOps?',
    options: ['AWS (Amazon Web Services)', 'Microsoft Word', 'Google Docs'],
    correct: 'AWS (Amazon Web Services)'
  }
],
'Game Development': [
  {
    question: 'Which game engine is most commonly used for developing 2D and 3D games?',
    options: ['Unity', 'Photoshop', 'Visual Studio'],
    correct: 'Unity'
  },
  {
    question: 'Which programming language is primarily used in Unreal Engine?',
    options: ['C++', 'Java', 'Python'],
    correct: 'C++'
  },
  {
    question: 'What is the purpose of a game loop in game development?',
    options: [
      'To maintain a constant frame rate and handle user input',
      'To optimize game graphics',
      'To store the game data',
    ],
    correct: 'To maintain a constant frame rate and handle user input'
  },
  {
    question: 'Which of the following is an example of a game development framework?',
    options: ['Cocos2d', 'Microsoft Excel', 'GIMP'],
    correct: 'Cocos2d'
  },
  {
    question: 'What does "game physics" refer to in game development?',
    options: [
      'The simulation of real-world physics like gravity and motion',
      'The texture and lighting of the game environment',
      'The sound effects and music in the game'
    ],
    correct: 'The simulation of real-world physics like gravity and motion'
  },
  {
    question: 'Which programming language is commonly used for scripting in Unity?',
    options: ['C#', 'C++', 'JavaScript'],
    correct: 'C#'
  },
  {
    question: 'What is "ray tracing" in game development?',
    options: [
      'A technique for simulating the behavior of light to create realistic graphics',
      'A method of increasing the frame rate in games',
      'A way to generate random game levels'
    ],
    correct: 'A technique for simulating the behavior of light to create realistic graphics'
  },
  {
    question: 'What does "asset management" involve in game development?',
    options: [
      'Organizing and handling game resources such as textures, models, and audio',
      'Creating the storyline and characters',
      'Optimizing the game for different platforms'
    ],
    correct: 'Organizing and handling game resources such as textures, models, and audio'
  },
  {
    question: 'Which term describes the process of optimizing a game for performance on different platforms?',
    options: ['Game porting', 'Game modding', 'Game streaming'],
    correct: 'Game porting'
  },
  {
    question: 'What does "multiplayer networking" involve in game development?',
    options: [
      'Creating the ability for multiple players to interact within the same game environment',
      'Designing characters for the game',
      'Managing the game’s soundtrack and sound effects'
    ],
    correct: 'Creating the ability for multiple players to interact within the same game environment'
  }
],
'Figma': [
  {
    question: 'What is Figma primarily used for in design?',
    options: ['Graphic Design', 'Web Development', 'UI/UX Design'],
    correct: 'UI/UX Design'
  },
  {
    question: 'Which of the following is a feature of Figma?',
    options: ['Real-time collaboration', 'Offline-only use', 'Only for mobile design'],
    correct: 'Real-time collaboration'
  },
  {
    question: 'In Figma, what is a "frame" used for?',
    options: ['A group of elements with constraints', 'A single image element', 'A button component'],
    correct: 'A group of elements with constraints'
  },
  {
    question: 'Which of the following is a Figma plugin feature?',
    options: ['User interface animations', 'Data visualization from CSV files', 'Code compilation'],
    correct: 'Data visualization from CSV files'
  },
  {
    question: 'What is the purpose of using "components" in Figma?',
    options: [
      'To create reusable UI elements',
      'To style the text in the design',
      'To animate elements in the design'
    ],
    correct: 'To create reusable UI elements'
  },
  {
    question: 'How can Figma users share their designs with others?',
    options: ['By sharing a link to the design file', 'By exporting the design as an image only', 'By emailing the design as an attachment'],
    correct: 'By sharing a link to the design file'
  },
  {
    question: 'What does Figma’s "Auto Layout" feature do?',
    options: [
      'Automatically adjusts the layout of elements based on their content',
      'Rearranges the design elements randomly',
      'Compresses image files for quicker loading'
    ],
    correct: 'Automatically adjusts the layout of elements based on their content'
  },
  {
    question: 'What is the "Prototype" feature in Figma used for?',
    options: [
      'Creating interactive design flows and links between frames',
      'Exporting the design as a codebase',
      'Sculpting 3D objects for the design'
    ],
    correct: 'Creating interactive design flows and links between frames'
  },
  {
    question: 'What is the primary benefit of Figma’s cloud-based design system?',
    options: [
      'It allows for instant collaboration and updates across teams',
      'It only works offline',
      'It limits access to files for security reasons'
    ],
    correct: 'It allows for instant collaboration and updates across teams'
  },
  {
    question: 'Which of the following file formats can be imported into Figma?',
    options: ['SVG', 'PDF', 'JPEG', 'All of the above'],
    correct: 'All of the above'
  }
],
'Artificial Intelligence and Data Science': [
  {
    question: 'What is the primary purpose of supervised learning in machine learning?',
    options: [
      'To learn from labeled data and make predictions',
      'To learn from unlabeled data and find hidden patterns',
      'To generate random predictions'
    ],
    correct: 'To learn from labeled data and make predictions'
  },
  {
    question: 'What is the key difference between AI and Machine Learning?',
    options: [
      'AI is focused on creating intelligent systems, while ML focuses on learning from data',
      'AI only works with images, while ML works with text',
      'AI is about decision making, while ML is about rule-based systems'
    ],
    correct: 'AI is focused on creating intelligent systems, while ML focuses on learning from data'
  },
  {
    question: 'Which algorithm is commonly used for classification tasks in machine learning?',
    options: ['Linear Regression', 'Decision Trees', 'K-means Clustering'],
    correct: 'Decision Trees'
  },
  {
    question: 'What does the term "overfitting" refer to in machine learning?',
    options: [
      'When the model performs well on training data but poorly on unseen data',
      'When the model is too simple and does not capture enough details',
      'When the model runs too slowly due to large data'
    ],
    correct: 'When the model performs well on training data but poorly on unseen data'
  },
  {
    question: 'Which of the following is a key step in the data science workflow?',
    options: [
      'Data cleaning and preprocessing',
      'Deploying machine learning models immediately',
      'Ignoring missing values in data'
    ],
    correct: 'Data cleaning and preprocessing'
  },
  {
    question: 'What is the main advantage of deep learning over traditional machine learning algorithms?',
    options: [
      'It can automatically learn feature representations from raw data',
      'It requires less data for training',
      'It is easier to implement than traditional models'
    ],
    correct: 'It can automatically learn feature representations from raw data'
  },
  {
    question: 'What does NLP (Natural Language Processing) deal with?',
    options: [
      'Machine learning algorithms',
      'Processing and analyzing human language data',
      'Creating decision trees'
    ],
    correct: 'Processing and analyzing human language data'
  },
  {
    question: 'What is a confusion matrix used for in machine learning?',
    options: [
      'To evaluate the performance of classification models',
      'To visualize training data',
      'To optimize hyperparameters of a model'
    ],
    correct: 'To evaluate the performance of classification models'
  },
  {
    question: 'Which type of neural network is primarily used for image recognition?',
    options: ['Convolutional Neural Networks (CNN)', 'Recurrent Neural Networks (RNN)', 'Generative Adversarial Networks (GAN)'],
    correct: 'Convolutional Neural Networks (CNN)'
  },
  {
    question: 'What is the "bias-variance tradeoff" in machine learning?',
    options: [
      'Balancing the error due to bias and variance to optimize model performance',
      'Balancing training and test data',
      'Increasing model complexity to reduce error'
    ],
    correct: 'Balancing the error due to bias and variance to optimize model performance'
  }
],
  };
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    
    this.courseTitle = this.route.snapshot.paramMap.get('courseTitle');

    if (this.courseTitle && this.allQuestions[this.courseTitle as keyof typeof this.allQuestions]) {
      this.questions = this.allQuestions[this.courseTitle as keyof typeof this.allQuestions];
    } else {
      console.error('Course not found');
    }
  }

  submitQuiz(): void {
    this.score = this.questions.reduce((total, question, index) => {
      return this.answers[index] === question.correct ? total + 1 : total;
    }, 0);

    this.passed = this.score >= 6; 
    this.showResult = true;
  }

  retakeQuiz(): void {
    window.location.reload(); 
  }

  downloadCertificate(): void {
    console.log('Certificate download triggered!');
  }
}
