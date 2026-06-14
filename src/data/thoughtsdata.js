import Abecedarium from '../pages/Thoughts/Abecedarium.jsx';
import Internship from '../content/thoughts/internship.md?raw';

const thoughtsData = [
  {
    id: 1,
    title: "Abecedarium",
    date: "2025-02-15",
    slug: "abecedarium",
    type: "component",
    component: Abecedarium 
  },
  {
    id: 2,
    title: "How to do well in internships",
    date: "2026-04-01",
    slug: "internship",
    type: "markdown",
    content: Internship
  },
].sort((a, b) => new Date(b.date) - new Date(a.date));

export default thoughtsData;