import Abecedarium from '../pages/Thoughts/Abecedarium.jsx';
import tbd from '../content/thoughts/tbd.md?raw';

const thoughtsData = [
  {
    id: 1,
    title: "Abecedarium",
    date: "2025-02-15",
    slug: "abecedarium",
    type: "component",
    component: Abecedarium 
  },
  // {
  //   id: 2,
  //   title: "tbd",
  //   date: "2026-03-27",
  //   slug: "tbd",
  //   type: "markdown",
  //   content: tbd
  // },
].sort((a, b) => new Date(b.date) - new Date(a.date));

export default thoughtsData;