import insuranceIcon from '../assets/Vectors/stats/icons8-insurance-100.png';
import crowdIcon from '../assets/Vectors/stats/icons8-crowd-80.png';
import starIcon from '../assets/Vectors/stats/icons8-star-64.png';

export const trustStats = [
  {
    id: "rbi-compliant",
    title: "RBI Compliant",
    subtitle: "Licensed & Secure",
    icon: insuranceIcon,
    isCounter: false
  },
  {
    id: "happy-customers",
    targetNumber: 5000,
    suffix: "+",
    title: "5,000+",
    subtitle: "Happy Customers",
    icon: crowdIcon,
    isCounter: true
  },
  {
    id: "rating-experience",
    targetNumber: 4.8,
    isDecimal: true,
    starIcon: true,
    title: "4.8",
    subtitle: "10+ Years of Service",
    icon: starIcon,
    isCounter: true
  }
];

export default trustStats;
