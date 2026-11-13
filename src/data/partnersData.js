import adityaBirla from '../assets/Partners/aditya-birla.jpg';
import axis from '../assets/Partners/axis.jpg';
import bajaj from '../assets/Partners/bajaj.jpg';
import cholamandalam from '../assets/Partners/cholamandalam.jpg';
import creditSaison from '../assets/Partners/credit-saison.png';
import godrej from '../assets/Partners/godrej.jpg';
import hdfc from '../assets/Partners/hdfc.jpg';
import idfc from '../assets/Partners/idfc.jpg';
import indusind from '../assets/Partners/indusind.jpg';
import kotak from '../assets/Partners/kotak.jpg';
import kvb from '../assets/Partners/kvb.jpg';
import smfg from '../assets/Partners/smfg.jpg';
import southIndianBank from '../assets/Partners/south-indian-bank.jpg';
import stanchart from '../assets/Partners/stanchart.jpg';
import tataCapital from '../assets/Partners/tata-capital.jpg';
import yesBank from '../assets/Partners/yes-bank.jpg';

// Row 1 Partners (8 leading commercial banks & premier NBFCs)
export const partnersRow1 = [
  { id: 'hdfc', name: 'HDFC Bank', logo: hdfc },
  { id: 'axis', name: 'Axis Bank', logo: axis },
  { id: 'bajaj', name: 'Bajaj Finserv', logo: bajaj },
  { id: 'kotak', name: 'Kotak Mahindra Bank', logo: kotak },
  { id: 'idfc', name: 'IDFC FIRST Bank', logo: idfc },
  { id: 'tata', name: 'Tata Capital', logo: tataCapital },
  { id: 'kvb', name: 'Karur Vysya Bank', logo: kvb },
  { id: 'aditya-birla', name: 'Aditya Birla Capital', logo: adityaBirla },
];

// Row 2 Partners (8 leading financial institutions & MSME lenders)
export const partnersRow2 = [
  { id: 'indusind', name: 'IndusInd Bank', logo: indusind },
  { id: 'south-indian', name: 'South Indian Bank', logo: southIndianBank },
  { id: 'smfg', name: 'SMFG India Credit', logo: smfg },
  { id: 'cholamandalam', name: 'Cholamandalam Finance', logo: cholamandalam },
  { id: 'godrej', name: 'Godrej Capital', logo: godrej },
  { id: 'credit-saison', name: 'Credit Saison India', logo: creditSaison },
  { id: 'stanchart', name: 'Standard Chartered', logo: stanchart },
  { id: 'yes-bank', name: 'Yes Bank', logo: yesBank },
];

export const allPartners = [...partnersRow1, ...partnersRow2];

export default allPartners;
